/* global require, module */

'use strict';

const OpenAI = require('openai');

const generatePrompt = (question) => {
  const harfler = ['A', 'B', 'C', 'D', 'E'];
  let soru = question['soru'] + "\n";
  const secenekler = question['secenekler'];
  for (let j = 0; j < secenekler.length; j++) {
    soru += harfler[j] + ": " + secenekler[j] + "\n";
  }
  return "Sana soru ve seçenekleri veriyorum. sadece hangi seçeneğin sorunun doğru cevabı olduğunu yaz. Örneğin 'A' veya 'B' gibi. Lütfen herhangi bir açıklama yapma!\nSoru: " + soru;
}



const isAnswerCorrect = (answer, correctAnswerIndex) => {
  const letters = ['A', 'B', 'C', 'D', 'E'];
  const correctLetter = letters[correctAnswerIndex];

  let givenAnswer = (answer || '').toUpperCase();

  // Verilen cevabın başındaki ve sonundaki boşlukları temizliyoruz
  givenAnswer = givenAnswer.trim();
  // remove \n and \r
  givenAnswer = givenAnswer.replace(/\n/g, '').replace(/\r/g, '');

  // Eğer verilen cevap doğrudan doğru harfe eşitse doğru kabul ediyoruz
  if (correctLetter === givenAnswer) {
    return true;
  }
  // Eğer cevap birden fazla karakter içeriyor ve 2. karakter boşluk, noktalama gibi özel karakterse,
  // sadece ilk harfi kontrol ediyoruz
  else if (
    givenAnswer.length > 1 &&
    [" ", ":", ")", "=", "-", "."].includes(givenAnswer[1])
  ) {
    return correctLetter === givenAnswer[0];
  }
  return false;
}

const apiKey = ""

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: "sk-or-v1-" + apiKey, // OpenRouter API key
  defaultHeaders: {
    "HTTP-Referer": "https://magibu.web.app", // Optional. Site URL for rankings on openrouter.ai.
    "X-Title": "magibu", // Optional. Site title for rankings on openrouter.ai.
  },
});

const askQuestionToAI = async (prompt, openrouterModelId) => {
  try {
    const completion = await openai.chat.completions.create({
      model: openrouterModelId,
      seed: 42,
      reasoning: {
        effort: 'low',
      },
      max_tokens: 42,
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
    });

    if (completion.error || !completion.choices[0].message.content) {
      return {
        error: completion.error || 'Answer is empty',
        result: null,
      };
    }

    const answer = completion.choices[0].message.content;

    // check if answer is empty
    if (answer.trim() === '') {
      return {
        error: 'Answer is empty',
        result: null,
      };
    }

    return answer;
  } catch (error) {
    console.log(error);
    return {
      error: error,
      result: null,
    };
  }
};

module.exports = {
  generatePrompt,
  isAnswerCorrect,
  askQuestionToAI,
};
