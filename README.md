# DevQuoteLoader

DevQuoteLoader, web sayfalarınız için şık ve motive edici bir yükleme ekranı sunan hafif bir JavaScript kütüphanesidir. Sayfa yüklenirken, kullanıcılara programlama ve yazılım geliştirme ile ilgili ilham verici alıntılar gösterir.

## Demo

[![CodePen Logo](https://codepen.io/favicon.ico)](https://codepen.io/negsyz/pen/eYqzEEN) Demoyu CodePen.io' da incelemek için tıkla.

## Özellikler

- Sayfa yüklenirken görünen animasyonlu yükleme çubuğu
- Rastgele seçilen programlama alıntıları
- Yükleme yüzdesini gösteren sayaç
- Tamamen özelleştirilebilir tasarım
- Hafif ve bağımsız (herhangi bir harici kütüphane gerektirmez)

## Kurulum

1. Bu depoyu klonlayın veya ZIP olarak indirin.
2. index.html, style.css ve script.js dosyalarını projenize ekleyin.

## Kullanım

1. HTML dosyanızın `<head>` bölümüne CSS dosyasını ekleyin:

   ```html
   <link rel="stylesheet" href="style.css">
   ```

2. HTML dosyanızın `<body>` etiketinin hemen altına loader div'ini ekleyin:

   ```html
   <div id="loader">
       <div id="quote"></div>
       <div id="progress-bar">
           <div id="progress"></div>
       </div>
       <div id="percentage">0%</div>
   </div>
   ```

3. HTML dosyanızın sonuna, `</body>` etiketinden hemen önce JavaScript dosyasını ekleyin:

   ```html
   <script src="script.js"></script>
   ```

4. Sayfanızın ana içeriğini `<div id="content">` içine yerleştirin:

   ```html
   <div id="content" style="display: none;">
       <!-- Sayfa içeriğiniz buraya gelecek -->
   </div>
   ```

## Özelleştirme

- Alıntıları değiştirmek veya eklemek için script.js dosyasındaki quotes dizisini düzenleyin.
- Yükleme ekranının görünümünü değiştirmek için style.css dosyasını düzenleyin.
- Yükleme hızını ve davranışını ayarlamak için script.js dosyasındaki interval fonksiyonunu düzenleyin.

## Katkıda Bulunma

1. Bu depoyu fork edin.
2. Yeni bir özellik dalı oluşturun (`git checkout -b yeni-ozellik`).
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik: Açıklama'`).
4. Dalınıza push yapın (`git push origin yeni-ozellik`).
5. Yeni bir Pull Request oluşturun.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına bakın.

## İletişim

Sorularınız veya geri bildirimleriniz için lütfen bir issue açın veya instagram adresinden bana ulaşın.
