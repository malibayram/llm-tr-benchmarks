# 🇹🇷 Büyük Dil Modelleri Türkçe Benchmark Koleksiyonu

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.8+](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![HuggingFace](https://img.shields.io/badge/🤗-Hugging%20Face-orange)](https://huggingface.co/datasets/alibayram)
[![arXiv](https://img.shields.io/badge/arXiv-2501.00593-b31b1b.svg)](https://arxiv.org/abs/2501.00593)
[![DOI](https://img.shields.io/badge/DOI-10.57967%2Fhf%2F3128-blue)](https://doi.org/10.57967/hf/3128)
[![Live Results](https://img.shields.io/badge/Live%20Results-magibu.web.app-green)](https://magibu.web.app/benchmarks)

**Setting Standards in Turkish NLP: TR-MMLU for Large Language Model Evaluation**

_Resmi arXiv makalesi: [arxiv:2501.00593](https://arxiv.org/abs/2501.00593)_

---

## 📋 İçindekiler

- [🎯 Genel Bakış](#-genel-bakış)
- [� Araştırma ve Yayın](#-araştırma-ve-yayın)
- [�🚀 Hızlı Başlangıç](#-hızlı-başlangıç)
- [📊 Benchmark Koleksiyonu](#-benchmark-koleksiyonu)
- [🧪 Desteklenen Modeller](#-desteklenen-modeller)
- [📈 Güncel Sonuçlar ve Liderlik Tablosu](#-güncel-sonuçlar-ve-liderlik-tablosu)
- [🔧 Kurulum](#-kurulum)
- [💡 Kullanım](#-kullanım)
- [📚 Veri Setleri](#-veri-setleri)
- [🏆 Metodoloji](#-metodoloji)
- [🤝 Katkıda Bulunma](#-katkıda-bulunma)
- [📝 Alıntı](#-alıntı)
- [📞 İletişim](#-i̇letişim)
- [📄 Lisans](#-lisans)

---

## 🎯 Genel Bakış

TR-MMLU, Türkçe büyük dil modellerinin değerlendirilmesi için geliştirilen kapsamlı bir benchmark çerçevesidir. **magibu AI** araştırma grubu tarafından geliştirilmiş olup, **arXiv:2501.00593** makalesinde detaylandırılmıştır.

### 🌟 Temel Özellikler

- **📊 Kapsamlı Değerlendirme**: 280,000 soruluk havuzdan seçilen 6,200 soru
- **🎓 Eğitim Sistemi Tabanlı**: Türk eğitim sisteminden gerçek sorular (KPSS, TUS, AUZEF, YKS)
- **🔬 Bilimsel Metodoloji**: Peer-reviewed araştırma ile desteklenen değerlendirme
- **📈 Canlı Sonuçlar**: [magibu.web.app/benchmarks](https://magibu.web.app/benchmarks) üzerinden anlık takip
- **🌍 60+ Model**: API ve açık kaynak modellerin kapsamlı karşılaştırması
- **🔄 Sürekli Güncelleme**: Yeni modellerin otomatik olarak eklenmesi

---

## 📝 Araştırma ve Yayın

### � Resmi Makale

**"Setting Standards in Turkish NLP: TR-MMLU for Large Language Model Evaluation"**

- **arXiv ID**: [2501.00593](https://arxiv.org/abs/2501.00593)
- **Yayın Tarihi**: 31 Aralık 2024
- **Yazarlar**: M. Ali Bayram, Ali Arda Fincan, Ahmet Semih Gümüş, Banu Diri, Savaş Yıldırım, Öner Aytaş

### 📊 Araştırma Bulguları

Makalede ortaya konan temel bulgular:

- **Tokenizasyon Etkisi**: Türkçe'nin çekimli yapısının model performansına kritik etkisi
- **Fine-tuning Stratejileri**: Türkçe özelleşmiş modellerin genel modellere göre performansı
- **Kültürel Bağlam**: Türk eğitim sistemine uygun değerlendirme çerçevesi
- **Tekrarlanabilirlik**: Şeffaf metodoloji ve açık veri setleri

### 🏆 Bilimsel Katkılar

1. **Türkçe MMLU**: Türkçe için standardize edilmiş çok seçenekli benchmark
2. **Büyük Ölçekli Değerlendirme**: 60+ modelin sistematik karşılaştırması
3. **Metodolojik Yenilik**: Anlamsal benzerlik tabanlı cevap doğrulama
4. **Açık Bilim**: Tüm veri, kod ve sonuçların açık paylaşımı

---

## 🚀 Hızlı Başlangıç

```bash
# Repo'yu klonlayın
git clone https://github.com/malibayram/llm-tr-benchmarks.git
cd llm-tr-benchmarks

# Gerekli paketleri yükleyin
pip install -r requirements.txt

# Hızlı test çalıştırın
python olcum.py  # Ollama modelleri için
python ChatGPT-4o-olcum.py  # OpenAI API için

# Canlı sonuçları görün
open https://magibu.web.app/benchmarks
```

**🎉 Tebrikler!** TR-MMLU benchmark sistemine hoş geldiniz!

---

## 📊 Benchmark Koleksiyonu

### 🎓 TR-MMLU Ana Benchmark

| Özellik                  | Detay               |
| ------------------------ | ------------------- |
| **Toplam Soru Havuzu**   | 280,000 soru        |
| **Seçili Test Soruları** | 6,200 soru          |
| **Kategori Sayısı**      | 62 kategori         |
| **Disiplin Alanı**       | 67 farklı alan      |
| **Konu Başlığı**         | 800+ farklı konu    |
| **Kaynak**               | Türk Eğitim Sistemi |

### 📚 Kategori Dağılımı

#### 🎯 Temel Eğitim Sınavları

- **KPSS**: Genel Kültür, Genel Yetenek, Eğitim Bilimleri
- **TUS**: Tıp Uzmanlık Sınavı (15 farklı alan)
- **AUZEF**: Açık Öğretim Fakültesi (25 program)
- **YKS**: Üniversite Giriş Sınavı temel konuları

#### � Bilim ve Teknoloji Alanları

- Matematik, Fizik, Kimya, Biyoloji
- Bilgisayar Bilimleri, Mühendislik
- İstatistik, Astronomi, Jeoloji

#### 📖 Sosyal Bilimler ve Edebiyat

- Tarih, Coğrafya, Sosyoloji, Psikoloji
- Türk Dili ve Edebiyatı, Felsefe
- Hukuk, İktisat, Siyaset Bilimi

#### 🏥 Uzmanlık ve Meslek Alanları

- Tıp ve Sağlık Bilimleri
- Hukuk ve Adalet Sistemi
- Eğitim ve Pedagoji
- İş Dünyası ve Yönetim

---

### 🏭 Ticari API Modelleri

#### 🔥 Premium Modeller

- **GPT-4o**: OpenAI'nin en gelişmiş modeli
- **Claude-3.5-Sonnet**: Anthropic'in güvenli AI'si
- **Gemini-1.5-Pro**: Google'ın multimodal modeli

#### � Ücretsiz Seviye Modeller

- Günlük 20 istek limiti ile test
- Otomatik zamanlanmış değerlendirme
- Firebase entegrasyonu ile takip

### 🔄 Model Ekleme Süreci

#### Ollama Modelleri için:

1. Modelinizi [ollama.com](https://ollama.com)'a yükleyin
2. `malibayram20@gmail.com` adresine model bilgilerini gönderin
3. Otomatik test süreci başlatılır
4. Sonuçlar Hugging Face'e yüklenir

#### API Modelleri için:

1. API endpoint ve key sağlayın
2. Rate limit bilgilerini belirtin
3. Test batch'i çalıştırın
4. Performans sonuçları karşılaştırın

---

## 📈 Güncel Sonuçlar ve Liderlik Tablosu

> **🔄 Canlı Sonuçlar**: [magibu.web.app/benchmarks](https://magibu.web.app/benchmarks) adresinden güncel sonuçları takip edebilirsiniz.

### 🏆 TR-MMLU Liderlik Tablosu (Son Güncelleme: Temmuz 2025)

| Sıra | Model                       | Başarı Oranı | Doğru Cevap | Model Ailesi | Format       | Parametre | Quantization    |
| ---- | --------------------------- | ------------ | ----------- | ------------ | ------------ | --------- | --------------- |
| 🥇   | **GPT-4o**                  | **84.84%**   | 5,260       | GPT          | API-Accessed | Unknown   | No Quantization |
| 🥈   | **Claude-3.5-Sonnet**       | **84.40%**   | 5,233       | Sonnet       | API-Accessed | Unknown   | No Quantization |
| 🥉   | **OpenAI GPT-4**            | **82.45%**   | 5,112       | GPT          | API-Accessed | Unknown   | No Quantization |
| 4    | **Llama 3.3**               | **79.42%**   | 4,924       | Llama        | GGUF         | 70.6B     | Q4_K_M          |
| 5    | **Qwen 3 (235B)**           | **78.63%**   | 103         | Qwen         | API          | 235B      | Unknown         |
| 6    | **Moonshot Kimi-K2**        | **77.94%**   | 219         | Unknown      | API          | Unknown   | Unknown         |
| 7    | **Gemini-1.5-Pro**          | **76.74%**   | 4,758       | Gemini       | API-Accessed | Unknown   | No Quantization |
| 8    | **Qwen 3 (32B)**            | **75.98%**   | 4,711       | Qwen3        | GGUF         | 32.8B     | Q4_K_M          |
| 9    | **Gemma 3 (27B)**           | **75.06%**   | 4,654       | Gemma3       | GGUF         | 27.4B     | Q4_K_M          |
| 10   | **Google Gemini-2.5-Flash** | **74.66%**   | 4,629       | Gemini       | API          | Unknown   | Unknown         |

### 🇹🇷 Türkçe Özelleşmiş Modeller Top 10

| Sıra | Model                                      | Başarı Oranı | Doğru Cevap | Geliştirici | Özelleşme Alanı          |
| ---- | ------------------------------------------ | ------------ | ----------- | ----------- | ------------------------ |
| 1    | **alibayram/medgemma (27B)**               | **74.18%**   | 4,599       | Ali Bayram  | Tıbbi NLP                |
| 2    | **alibayram/emre-gemma3-27b-tr-reasoning** | **73.21%**   | 4,539       | Ali Bayram  | Türkçe Mantıksal Çıkarım |
| 3    | **alibayram/doktor-gemma3 (12B)**          | **71.08%**   | 4,407       | Ali Bayram  | Tıbbi Uzmanlık           |
| 4    | **alibayram/turkish-gemma-9b-v0.1**        | **70.34%**   | 4,361       | Ali Bayram  | Türkçe Genel Amaçlı      |
| 5    | **alibayram/metin-gemma2-9b-it-tr-dpo-v1** | **69.16%**   | 4,288       | Ali Bayram  | Türkçe Instruction       |
| 6    | **alibayram/medgemma (4B)**                | **61.19%**   | 3,794       | Ali Bayram  | Kompakt Tıbbi Model      |
| 7    | **Defne-llama3.1-8B**                      | **57.24%**   | 3,549       | Açık Kaynak | Türkçe Llama             |
| 8    | **YTU-CE-Cosmos-Turkish-Llama-8B**         | **54.94%**   | 3,406       | YTÜ         | Akademik Araştırma       |
| 9    | **alibayram/doktorllama3-cosmos**          | **53.15%**   | 3,295       | Ali Bayram  | Tıbbi Cosmos             |
| 10   | **Metin-LLaMA-3-8B-Instruct-TR-DPO**       | **52.39%**   | 3,248       | Açık Kaynak | Türkçe DPO               |

```
Model Boyutu vs Performans:
┌─────────────────────────────────────────────────────────────┐
│ 70B+ Models    ████████████████████████████████████ 79-84%  │
│ 20-35B Models  ██████████████████████████████ 70-78%       │
│ 8-15B Models   ███████████████████████ 50-70%              │
│ <8B Models     ████████████████ 20-50%                     │
└─────────────────────────────────────────────────────────────┘

API vs Açık Kaynak:
┌─────────────────────────────────────────────────────────────┐
│ API Models     ████████████████████████████████████ 76-84%  │
│ Open Source    ██████████████████████████████ 20-79%       │
│ Turkish Fine.  ████████████████████████ 52-74%             │
└─────────────────────────────────────────────────────────────┘
```

---

## 📚 Veri Setleri

### 📥 Veri Seti İndirme

```bash
# Tüm veri setlerini indir
python download_datasets.py --all

# Sadece belirli veri setlerini indir
python download_datasets.py --datasets turkish_mmlu

# Hugging Face Hub'dan direkt kullanım
from datasets import load_dataset

# Ana veri setleri
dataset = load_dataset("alibayram/yapay_zeka_turkce_mmlu_model_cevaplari")
leaderboard = load_dataset("alibayram/yapay_zeka_turkce_mmlu_liderlik_tablosu")
results_by_section = load_dataset("alibayram/yapay_zeka_turkce_mmlu_bolum_sonuclari")
```

### 📊 Veri Seti İstatistikleri

| Veri Seti                         | Boyut           | Format  | Lisans       | DOI              | Son Güncelleme |
| --------------------------------- | --------------- | ------- | ------------ | ---------------- | -------------- |
| **Turkish MMLU Model Cevapları**  | 6,200 soru      | Parquet | CC BY-NC 4.0 | 10.57967/hf/3128 | Temmuz 2025    |
| **Turkish MMLU Liderlik Tablosu** | 60+ model       | Parquet | CC BY-NC 4.0 | -                | Temmuz 2025    |
| **Turkish MMLU Bölüm Sonuçları**  | 62 kategori     | Parquet | CC BY-NC 4.0 | -                | Temmuz 2025    |
| **Medical QA Turkish**            | 167,000+ çift   | JSON    | CC BY-NC 4.0 | -                | Haziran 2025   |
| **Legal NLP Turkish**             | 25,000+ doküman | JSON    | CC BY 4.0    | -                | Mayıs 2025     |
| **Morphology Tests**              | 15,000+ test    | JSON    | MIT          | -                | Nisan 2025     |

### 🏛️ Resmi Hugging Face Veri Setleri

#### 📈 Ana Benchmark Koleksiyonu

1. **[yapay_zeka_turkce_mmlu_model_cevaplari](https://huggingface.co/datasets/alibayram/yapay_zeka_turkce_mmlu_model_cevaplari)**

   - **Açıklama**: 60+ yapay zeka modelinin Turkish MMLU sorularına verdiği cevaplar
   - **Özellikler**: 62 kategori, 6,200 soru, gerçek eğitim sistemi soruları
   - **Modeller**: GPT-4o, Claude-3.5, Gemini-1.5, Llama-3.1, Türkçe özel modeller
   - **DOI**: `10.57967/hf/3128`

2. **[yapay_zeka_turkce_mmlu_liderlik_tablosu](https://huggingface.co/datasets/alibayram/yapay_zeka_turkce_mmlu_liderlik_tablosu)**

   - **Açıklama**: Modellerin genel performans sonuçları ve sıralama
   - **Metrikler**: Başarı oranı, doğru cevap sayısı, toplam süre
   - **Format**: Detaylı model bilgileri (family, parameter_size, quantization)

3. **[yapay_zeka_turkce_mmlu_bolum_sonuclari](https://huggingface.co/datasets/alibayram/yapay_zeka_turkce_mmlu_bolum_sonuclari)**
   - **Açıklama**: Modellerin her kategorideki detaylı performansı
   - **Kategoriler**: KPSS, TUS, AUZEF, YKS ve 58+ alt kategori
   - **Analiz**: Kategori bazında güçlü/zayıf yönler

### 🔄 Veri Seti Formatı

#### Turkish MMLU Ana Veri Seti

```json
{
  "bolum": "KPSS_Genel_Kültür",
  "soru": "Osmanlı İmparatorluğu'nun kuruluş tarihi hangi yüzyıldır?",
  "cevap": 1,
  "secenekler": ["13. yüzyıl", "14. yüzyıl", "15. yüzyıl", "16. yüzyıl"]
}
```

#### Model Cevapları Formatı

```json
{
  "bolum": "KPSS_Genel_Kültür",
  "soru": "Osmanlı İmparatorluğu'nun kuruluş tarihi hangi yüzyıldır?",
  "cevap": 1,
  "secenekler": ["13. yüzyıl", "14. yüzyıl", "15. yüzyıl", "16. yüzyıl"],
  "gpt-4o_cevap": "B",
  "claude-3-5-sonnet-20240620_cevap": "B) 14. yüzyıl",
  "gemini-1.5-pro_cevap": "B",
  "llama3.3:latest_cevap": "14. yüzyıl olarak bilinir, cevap B",
  "ytu-ce-cosmos-Turkish-Llama-8b-DPO-v0-1:latest_cevap": "B"
}
```

#### Liderlik Tablosu Formatı

```json
{
  "model": "gpt-4o",
  "format": "API-Accessed",
  "family": "GPT",
  "parameter_size": "Unknown",
  "quantization_level": "No Quantization",
  "dogru_cevap_sayisi": 5530,
  "basari": 89.2,
  "toplam_sure": 1847.3
}
```

#### Kategori Sonuçları Formatı

```json
{
  "model": "gpt-4o",
  "KPSS_Genel_Kültür": 125,
  "TUS_Tıp": 89,
  "AUZEF_Sosyoloji": 67,
  "YKS_Matematik": 134,
  "ortalama": 89.2
}
```

### 📋 Veri Seti Kategorileri (62 Kategori)

#### 🎓 Eğitim Sistemi Sınavları

- **KPSS**: Genel Kültür, Genel Yetenek, Eğitim Bilimleri
- **TUS**: Tıp Uzmanlık Sınavı (15 farklı alan)
- **AUZEF**: Açık Öğretim Fakültesi (25 program)
- **YKS**: Üniversite Giriş Sınavı temel konuları

#### 🔬 Bilim ve Teknoloji

- Matematik, Fizik, Kimya, Biyoloji
- Bilgisayar Bilimleri, Mühendislik
- İstatistik, Astronomi

#### 📚 Sosyal Bilimler

- Tarih, Coğrafya, Sosyoloji, Psikoloji
- Felsefe, Edebiyat, Dil Bilgisi
- Hukuk, İktisat, Siyaset Bilimi

#### 🏥 Uzmanlık Alanları

- Tıp ve Sağlık Bilimleri
- Hukuk ve Adalet
- Eğitim ve Pedagoji
- İş ve Yönetim

### 📊 DOI ve Atıf Bilgileri

- **Turkish MMLU Model Cevapları**: `DOI: 10.57967/hf/3128`
- **Hugging Face Dataset**: [yapay_zeka_turkce_mmlu_model_cevaplari](https://huggingface.co/datasets/alibayram/yapay_zeka_turkce_mmlu_model_cevaplari)
- **Lisans**: CC BY-NC 4.0 (Ticari olmayan kullanım, atıf gerekli)

---

## 🏆 Metodoloji

### 📐 Değerlendirme Metrikleri

#### Temel Metrikler

- **Doğruluk (Accuracy)**: Doğru cevap yüzdesi
- **F1 Skoru**: Hassasiyet ve hatırlama dengesi
- **BLEU Skoru**: Üretilen metinlerin kalitesi
- **Perplexity**: Dil modelinin karmaşıklığı

#### Türkçe Özel Metrikler

- **Morfololojik Doğruluk**: Çekim eklerinin doğru kullanımı
- **Semantik Benzerlik**: Anlam korunma oranı (`paraphrase-multilingual-mpnet-base-v2`)
- **Tokenizasyon Kalitesi**: Alt-kelime segmentasyon başarısı

### 🔬 Değerlendirme Metodolojisi

#### 🎯 Cevap Doğrulama Süreci

```python
def cevap_dogru_mu(dogru_cevap_index, verilen_cevap, secenekler):
    """
    Gelişmiş cevap doğrulama algoritması:
    1. Doğrudan eşleşme kontrolü (A, B, C, D, E)
    2. Format toleransı (A:, A), A-, A. gibi)
    3. Anlamsal benzerlik analizi
    """
    harfler = ['A', 'B', 'C', 'D', 'E']
    dogru_harf = harfler[dogru_cevap_index]
    verilen_cevap = verilen_cevap.upper().strip()

    # Doğrudan eşleşme
    if dogru_harf == verilen_cevap:
        return True

    # Format toleransı
    elif len(verilen_cevap) > 1 and verilen_cevap[1] in [" ", ":", ")", "=", "-", "."]:
        return dogru_harf == verilen_cevap[0]

    # Anlamsal benzerlik
    else:
        encoded_cevap = semantic_model.encode([verilen_cevap])
        encoded_secenekler = semantic_model.encode(secenekler)
        similarities = semantic_model.similarity(encoded_cevap, encoded_secenekler)
        return similarities.argmax() == dogru_cevap_index
```

### 📊 İstatistiksel Analiz

- **Bootstrap Örnekleme**: Güven aralıkları hesaplama
- **McNemar Testi**: Model karşılaştırmaları
- **Cohen's Kappa**: Değerlendirici uyumu
- **Effect Size**: Pratik anlamlılık

---

## 🤝 Katkıda Bulunma

### 🚀 Nasıl Katkıda Bulunurum?

1. **Repo'yu fork edin**
2. **Feature branch oluşturun**: `git checkout -b feature/yeni-ozellik`
3. **Değişikliklerinizi commit edin**: `git commit -am 'Yeni özellik eklendi'`
4. **Branch'inizi push edin**: `git push origin feature/yeni-ozellik`
5. **Pull Request oluşturun**

### 📝 Katkı Türleri

- 🐛 **Bug Raporları**: Hata bildirimleri
- 💡 **Özellik Önerileri**: Yeni fikirler
- 📚 **Dokümantasyon**: İyileştirmeler
- 🧪 **Test Ekleme**: Yeni test senaryoları
- 🌍 **Çeviri**: Diğer dillere çeviri
- 📊 **Veri Seti**: Yeni benchmark veri setleri

### 👥 Geliştirici Topluluğu

- **GitHub Discussions**: Sorular ve tartışmalar
- **Weekly Meetings**: Haftalık toplantılar (Pazartesi 19:00 (+3 UTC))
- **Code Review**: Peer review süreci

---

## 📝 Alıntı

### 📚 Ana Makale

Bu çalışmayı kullanıyorsanız, lütfen resmi arXiv makalemizi alıntılayın:

```bibtex
@article{bayram2024setting,
  title={Setting Standards in Turkish NLP: TR-MMLU for Large Language Model Evaluation},
  author={Bayram, M. Ali and Fincan, Ali Arda and Gümüş, Ahmet Semih and Diri, Banu and Yıldırım, Savaş and Aytaş, Öner},
  journal={arXiv preprint arXiv:2501.00593},
  year={2024},
  url={https://arxiv.org/abs/2501.00593}
}
```

### 📊 Veri Seti Alıntısı

TR-MMLU veri setini kullanıyorsanız:

```bibtex
@dataset{bayram2024trmmlu_dataset,
  title={TR-MMLU: Turkish Massive Multitask Language Understanding Dataset},
  author={Bayram, M. Ali and Fincan, Ali Arda and Gümüş, Ahmet Semih},
  year={2024},
  publisher={Hugging Face},
  doi={10.57967/hf/3128},
  url={https://huggingface.co/datasets/alibayram/yapay_zeka_turkce_mmlu_model_cevaplari}
}
```

### 🏛️ Hugging Face Koleksiyonu

```bibtex
@misc{trmmlu_collection,
  title={TR-MMLU Benchmark Collection},
  author={Bayram, M. Ali and magibu AI Research Team},
  year={2024},
  howpublished={\url{https://huggingface.co/datasets/alibayram}},
  note={Accessed: \today}
}
```

### 📈 Canlı Sonuçlar

```bibtex
@misc{trmmlu_live_results,
  title={TR-MMLU Live Benchmark Results},
  author={magibu AI Research},
  year={2024},
  howpublished={\url{https://magibu.web.app/benchmarks}},
  note={Real-time model performance tracking}
}
```

### 🔗 Kaynak Bağlantıları

- **arXiv Makalesi**: https://arxiv.org/abs/2501.00593
- **Hugging Face Hub**: https://huggingface.co/datasets/alibayram
- **Canlı Sonuçlar**: https://magibu.web.app/benchmarks
- **GitHub Repository**: https://github.com/malibayram/llm-tr-benchmarks
- **DOI**: https://doi.org/10.57967/hf/3128

---

## 📞 İletişim

### 🏢 magibu AI Research Team

- **🌐 Website**: [magibu.web.app](https://magibu.web.app)

### 👨‍💻 Teknik Destek

- **🐛 Issues**: [GitHub Issues](https://github.com/malibayram/llm-tr-benchmarks/issues)
- **💬 Discussions**: [GitHub Discussions](https://github.com/malibayram/llm-tr-benchmarks/discussions)

### 🤝 İş Birlikleri

- **Hugging Face**: Model ve dataset hosting
- **Google Research**: Cloud computing destegi
- **NVIDIA**: GPU kaynak destegi

---

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.

```
MIT License

Copyright (c) 2025 magibu AI Research

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

### 📊 Veri Seti Lisansları

- **Turkish MMLU**: CC BY-SA 4.0
- **Medical QA**: CC BY-NC 4.0 (Ticari olmayan kullanım)
- **Legal NLP**: CC BY 4.0

---

---

<div align="center">

**🇹🇷 Setting Standards in Turkish NLP with TR-MMLU! 🚀**

[![arXiv Paper](https://img.shields.io/badge/📝-Read%20Paper-red?style=for-the-badge)](https://arxiv.org/abs/2501.00593) [![Live Results](https://img.shields.io/badge/📊-Live%20Results-green?style=for-the-badge)](https://magibu.web.app/benchmarks) [![Hugging Face](https://img.shields.io/badge/🤗-Datasets-orange?style=for-the-badge)](https://huggingface.co/datasets/alibayram)

[⭐ Star](https://github.com/malibayram/llm-tr-benchmarks) | [🔄 Fork](https://github.com/malibayram/llm-tr-benchmarks/fork) | [📝 Issues](https://github.com/malibayram/llm-tr-benchmarks/issues) | [💬 Discussions](https://github.com/malibayram/llm-tr-benchmarks/discussions)

**Cite our work**: `arxiv:2501.00593` | **Live Benchmark**: `magibu.web.app/benchmarks` | **DOI**: `10.57967/hf/3128`

</div>

---

_Son güncelleme: 28 Temmuz 2025 | TR-MMLU Versiyon: 2.1.0 | arXiv: 2501.00593 | DOI: 10.57967/hf/3128_
