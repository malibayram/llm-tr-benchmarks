import time

import ollama
import openai
import pandas as pd
from datasets import Dataset
from ollama import Options
from sentence_transformers import SentenceTransformer


def progress_bar(current, total, bar_length=40):
    progress = current / total
    block = int(bar_length * progress)
    bar = "#" * block + "-" * (bar_length - block)
    return f"[{bar}] {progress * 100:.2f}%"

semantic_similarity_checker = SentenceTransformer("paraphrase-multilingual-mpnet-base-v2")

model_ismi = "gpt-4o"
openai.api_key = "API_KEY"

def cevap_dogru_mu(dogru_cevap_index, cevap, secenekler):
  harfler = ['A', 'B', 'C', 'D', 'E']
  harf = harfler[dogru_cevap_index]
  cevap = cevap.upper()
  # trim the whitespace
  cevap = cevap.strip()

  if harf == cevap:
    return True
  elif len(cevap) > 1 and cevap[1] in [" ", ":", ")", "=", "-", "."]:
    return harf == cevap[0]
  else:
    encoded_cevap = semantic_similarity_checker.encode([cevap])
    encoded_secenekler = semantic_similarity_checker.encode(secenekler)
    similarities_list = semantic_similarity_checker.similarity(encoded_cevap, encoded_secenekler).tolist()[0]
    highest_similarity = max(similarities_list)
    index_of_highest_similarity = similarities_list.index(highest_similarity)
    return index_of_highest_similarity == dogru_cevap_index
  
model_detayli_sonuclar = []

def model_test(model_ismi):
    mmlu_df = pd.read_parquet("hf://datasets/alibayram/yapay_zeka_turkce_mmlu_model_cevaplari/data/train-00000-of-00001.parquet")
    model_detayli_sonuclar_df = pd.read_parquet("hf://datasets/alibayram/yapay_zeka_turkce_mmlu_liderlik_tablosu/data/train-00000-of-00001.parquet")
    model_detayli_sonuclar = model_detayli_sonuclar_df.to_dict('records')
    model = model_ismi
    model_detayli_sonuc = {
        'model': model_ismi,
        'format': "API-Accessed",
        'family': "GPT",
        'parameter_size': "Unkown",
        'quantization_level': "No Quantization",
    }

    baslama_zamani = time.time()
    dogru_cevap_sayisi = 0
    for i in range(len(mmlu_df)):
        soru = mmlu_df.iloc[i]['soru']
        soru += "\n"
        harfler = ['A', 'B', 'C', 'D', 'E']
        for j in range(len(mmlu_df.iloc[i]['secenekler'])):
            secenek = mmlu_df.iloc[i]['secenekler'][j]
            soru += harfler[j] + ": " + secenek + "\n"

        prompt = "Sana soru ve seçenekleri veriyorum. sadece hangi seçeneğin sorunun doğru cevabı olduğunu yaz. Örneğin 'A' veya 'B' gibi. Lütfen herhangi bir açıklama yapma!\nSoru: " + soru

        yanit = openai.chat.completions.create(
          model="gpt-4o",
          messages=[
            {"role": "system", "content": "Bir test sınavındasın."},
            {"role": "user", "content": prompt}
          ]
        )
        cevap = yanit.choices[0].message.content
        # add cevap to mmlu_df in index of i by creating a new column named model['model']_cevap
        mmlu_df.loc[i, model_ismi + '_cevap'] = cevap
        sonuc = cevap_dogru_mu(mmlu_df.iloc[i]['cevap'], cevap, mmlu_df.iloc[i]['secenekler'])
        if sonuc:
            dogru_cevap_sayisi += 1
        soru_index = i + 1
        simdi = time.time()
        bar = progress_bar(soru_index, len(mmlu_df))

        print(f"\r{soru_index} soru çözüldü. Geçen süre: {round(simdi - baslama_zamani, 3)} saniye. {round(dogru_cevap_sayisi / soru_index, 2)} Doğru cevap sayısı: {dogru_cevap_sayisi} {bar}", end="")


    bitis_zamani = time.time()
    model_detayli_sonuc['dogru_cevap_sayisi'] = dogru_cevap_sayisi
    model_detayli_sonuc['basari'] = round(dogru_cevap_sayisi / len(mmlu_df), 2)
    model_detayli_sonuc['toplam_sure'] = round(bitis_zamani - baslama_zamani, 3)
    # add model_detayli_sonuc to model_detayli_sonuclar

    model_detayli_sonuclar.append(model_detayli_sonuc)
    #print(model_detayli_sonuc)

    sonuc_ds = Dataset.from_list(model_detayli_sonuclar)
    sonuc_ds.save_to_disk("sonuc_ds")
    try:
      sonuc_ds.push_to_hub("alibayram/yapay_zeka_turkce_mmlu_liderlik_tablosu")
    except Exception as e:
      print("push_to_hub hatası: ", e)

    mmlu_df_ds = Dataset.from_pandas(mmlu_df)
    mmlu_df_ds.save_to_disk("mmlu_df_ds")
    try:
       mmlu_df_ds.push_to_hub("alibayram/yapay_zeka_turkce_mmlu_model_cevaplari")
    except Exception as e:
      print("push_to_hub hatası: ", e)

    print(f"{soru_index} soru çözüldü. Geçen süre: {round(simdi - baslama_zamani, 3)} saniye. {round(dogru_cevap_sayisi / soru_index, 2)} Doğru cevap sayısı: {dogru_cevap_sayisi}")

    return model_detayli_sonuc

""" test_sonucu = model_test(model_ismi_input)
print(test_sonucu) """

test_sonucu = model_test(model_ismi)
print(test_sonucu)
