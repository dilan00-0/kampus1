# Yapay Zeka (Copilot) Destekli Gelistirme Notlari

## 1. Copilot'a Verilen Istekler ve Amaclari
- **Arama ve Sayac Entegrasyonu:** Etkinlik listesinde dynamic filtreleme yapabilmek amaciyla bir arama alani ve bulunan sonuc sayisini gosteren dinamik bir sayac bileşeni eklenmesini talep ettim.
- **Konsol Hatasi ve Baglantı Sorunu:** Arama kutusuna girdi yapildiginda kartlarin gizlenmemesi ve geliştirici konsolunda `TypeError: Cannot read properties of null` hatasinin alinmasi uzerine Copilot'a hatali DOM seçimlerini analiz ettirdim.

## 2. Yapay Zeka Önerilerinin Değerlendirilmesi
- Copilot yaptığı incelemede, `script.js` dosyasindaki `document.querySelector` çağrısının HTML tarafındaki `id` etiketiyle uyuşmadığını tespit etti. Yapay zekanın önerdiği ID düzeltmesini projeye entegre ederek arama mekanizmasını işlevsel hale getirdim.

## 3. Kod Yapısı ve Çalışma Mantığı
- **Olay Dinleyici (`addEventListener`):** `input` olayı kullanılarak kullanıcının klavye girdileri anlık olarak dinlenir. Her karakter değişiminde tetiklenen fonksiyon filtreleme sürecini başlatır.
- **Filtreleme Mantığı (`if/else`):** Kullanıcının girdiği arama terimi, etkinlik kartlarının `h3` (başlık) ve `p` (içerik) metin alanlarıyla karşılaştırılır. Eşleşme sağlanan kartlar `display: block` ile gösterilirken, eşleşmeyen kartlara `display: none` stili uygulanarak sayfadan gizlenir.