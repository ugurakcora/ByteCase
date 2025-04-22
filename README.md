# ByteCase Projesi

## Proje Hakkında

ByteCase, Shopify teması olarak Dawn teması üzerine inşa edilmiş, modern ve hızlı bir e-ticaret çözümüdür. Tailwind CSS ile stil verilerek performans ve güzellik bir araya getirilmiştir.

### Özellikler

- Ürün renk varyantları arasında geçiş yapabilme (Renk butonlarına tıklayınca ilgili varyantın görseli ve fiyatı görüntülenir)
- Ürün görsellerine hover yapıldığında büyüme efekti (Görsellerin üzerine gelindiğinde görsel %5 oranında büyüyerek kullanıcı deneyimini iyileştirir)
- Responsive tasarım ve Swiper.js ile kayar ürün galerileri

## Kullanılan Teknolojiler

- [Shopify Dawn](https://github.com/Shopify/dawn) (Ana tema olarak)
- [Tailwind CSS](https://tailwindcss.com/) (Stil kütüphanesi)
- [PostCSS](https://postcss.org/) (CSS işlemcisi)
- [Swiper](https://swiperjs.com/) (Slider/Carousel bileşeni)

## Kurulum

1. Projeyi klonlayın:

   ```bash
   git clone https://github.com/ugurakcora/ByteCase.git
   cd byteCase
   ```

2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

## Geliştirme

Geliştirme sırasında Tailwind CSS'i izlemek için aşağıdaki komutu çalıştırın:

```bash
npm run dev
```

veya direkt olarak:

```bash
npx tailwindcss -i ./assets/input.css -o ./assets/output.css --watch
```

## Derleme

Üretime hazır CSS dosyalarını derlemek için:

```bash
npm run build
```

## Shopify CLI ile Çalışma

Shopify mağazasında temayı geliştirmek için:

```bash
shopify theme dev
```

Temayı yayınlamak için:

```bash
shopify theme push
```

## Dosya Yapısı

- `/assets`: CSS, JS ve görsel dosyaları
  - `input.css`: Tailwind CSS girdi dosyası
  - `output.css`: Derlenmiş CSS dosyası
- `/templates`: Shopify tema şablonları
- `/sections`: Tema bölümleri
- `/layout`: Ana düzen şablonları
- `/locales`: Çeviriler

## Lisans

Bu proje [MIT Lisansı](LICENSE.md) altında lisanslanmıştır.
