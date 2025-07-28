/* eslint-env node */
/* global require, exports */
'use strict';

/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {setGlobalOptions} = require('firebase-functions');
const {onValueCreated} = require('firebase-functions/v2/database');
const {onSchedule} = require('firebase-functions/v2/scheduler');
const {onRequest} = require('firebase-functions/v2/https');
const {askQuestionToAI, isAnswerCorrect, generatePrompt} = require('./ask_ai');


// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.database();

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 200, timeoutSeconds: 540 });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


let bolumSonuclari = {};
let dogruCevapSayisi = 0;
let index = 0;

const processQuestion = async (prompt, answerIndex, id, bolum, modelId, openrouterModelId) => {
   const answer = await askQuestionToAI(prompt, openrouterModelId);

   if (answer.error) return;

   const isCorrect = isAnswerCorrect(answer, answerIndex);

   await db.ref(`models/${modelId}/mmlu_cevaplar/${id}`)
    .set({cevap: answer, sonuc: isCorrect});

    if (isCorrect) {
      dogruCevapSayisi++;
      bolumSonuclari[bolum] = (bolumSonuclari[bolum] || 0) + 1;
      await db.ref(`models/${modelId}/model_bolum_sonuclar/${bolum}`).set(bolumSonuclari[bolum]);

      const basari = ((dogruCevapSayisi / index) * 100).toFixed(2);

      await db.ref(`models/${modelId}/model_detayli_sonuclar`)
      .update({basari: Number(basari), dogru_cevap_sayisi: dogruCevapSayisi});
    }
}

exports.onModelSubmission = onValueCreated(
  'models/{modelId}/openrouterDetails', async (event) => {
  const openrouterDetails = event.data.val();
  console.log(openrouterDetails);
  console.log(event.params.modelId);

  const openrouterModelId = openrouterDetails.id;

  const mmluQuestions = db.ref(`benchmarks/mmlu`);
  const snapshot = await mmluQuestions.once('value');
  const questions = snapshot.val();

  let bolum = '';
  index = 0;
  dogruCevapSayisi = 0;
  bolumSonuclari = {};
  
  const questionData = Object.entries(questions);

  let promises = [];

  const batchSize = 250;
  const batches = [];

for (let i = 0; i < questionData.length; i += batchSize) {
    batches.push(questionData.slice(i, i + batchSize));
  }

  for (const batch of batches) {
    for (const qd of batch) {
      const [id, question] = qd;
      if (bolum !== question['bolum']) {
        bolum = question['bolum'];
      }
      index++;

      const prompt = generatePrompt(question);
      promises.push(processQuestion(prompt, question['cevap'], id, bolum, event.params.modelId, openrouterModelId));
    }
    await Promise.all(promises);
    promises = [];
  }
});

const ask20QuestionsToFreeModel = async (model) => {
  if (model.currentIndex === undefined) {
    model.currentIndex = 0;
  }

  while (model.currentIndex < 6200) {
    const currentIndex = `${model.currentIndex}`.padStart(6, '0');
    const questionVal = await db.ref(`benchmarks/mmlu/${currentIndex}`).once('value');
    const question = questionVal.val();
    const prompt = generatePrompt(question);
    const result = await askQuestionToAI(prompt, model.openrouterModelId);
    if (result.error) {
      console.log(result.error);
      return;
    }
    const isCorrect = isAnswerCorrect(result, question['cevap']);
    await db.ref(`models/${model.id}/mmlu_cevaplar/${currentIndex}`)
    .set({cevap: result, sonuc: isCorrect});

    if (isCorrect) {
      const bolumDetay = await db.ref(`models/${model.id}/model_bolum_sonuclar/${question['bolum']}`).once('value');
      const bolumSonuc = bolumDetay.val() || 0;
      await db.ref(`models/${model.id}/model_bolum_sonuclar/${question['bolum']}`).set(bolumSonuc + 1);

      const modelDetay = await db.ref(`models/${model.id}/model_detayli_sonuclar`).once('value');
      const modelSonuc = modelDetay.val() || {basari: 0, dogru_cevap_sayisi: 0};

      const basari = ((modelSonuc.dogru_cevap_sayisi + 1) / (model.currentIndex + 1) * 100).toFixed(2);

      await db.ref(`models/${model.id}/model_detayli_sonuclar`)
      .update({basari: Number(basari), dogru_cevap_sayisi: modelSonuc.dogru_cevap_sayisi + 1});
    }

    model.currentIndex++;
    await db.ref(`freeModels/${model.id}/currentIndex`).set(model.currentIndex);
    if (model.currentIndex === 6200) {
      // delete the model from `freeModels/{modelId}`
      await db.ref(`freeModels/${model.id}`).remove();
      break;
    }
  }
}

exports.processFreeModelsPeriodically = onSchedule('every 5 minutes',
  async () => {
  // since free models are limited to 20 requests per minute, we need to process them
  // we will ask 20 questions to each free model
  // get models from `freeModels/{modelId}/currentStatus`
  // we will store the current status of the model in `freeModels/{modelId}/currentStatus`
  // when currentStatus is 0, we will ask 20 questions to the model until currentStatus is 6200
  // when currentStatus is 6200, we will stop asking questions to the model and delete the model from `freeModels/{modelId}`
  
  const freeModels = db.ref('freeModels');
  const snapshot = await freeModels.once('value');
  const models = snapshot.val();

  if (!models) {
    return;
  }

  const modelIds = Object.keys(models);

  for (let i = 0; i < modelIds.length; i++) {
    await ask20QuestionsToFreeModel(models[modelIds[i]]);
  }
});

exports.ask20QuestionsToFreeModel = onRequest(async (req, res) => {
  const freeModels = db.ref('freeModels');
  const snapshot = await freeModels.once('value');
  const models = snapshot.val();

  if (!models) {
    res.json({
      message: 'No free models found'
    });
    return;
  }

  const modelIds = Object.keys(models);

  for (let i = 0; i < modelIds.length; i++) {
    await ask20QuestionsToFreeModel(models[modelIds[i]]);
  }

  res.json({
    message: 'Questions asked to free model ' + (modelIds.length || 0),
    models: models
  });
});
