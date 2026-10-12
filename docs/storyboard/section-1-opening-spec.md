# Section 1 Opening Spec

## Goal

Membuat pembuka website yang terasa intimate, playful, dan romantis.
Flow emosi yang diinginkan:

1. Karakter lucu memancing rasa penasaran.
2. User memasukkan password berupa tanggal ulang tahun.
3. Setelah password benar, layar mekar menjadi bunga matahari.
4. Pesan pembuka muncul: `Di hari spesialmu, ada sesuatu yang ingin aku tunjukkan.`

Section ini harus terasa halus, manis, cute, dan romantis. Hindari animasi heboh atau terlalu ramai.

## Shared Guardrails Reference

Sebelum mengerjakan section ini, wajib baca:

- `docs/storyboard/global-guardrails.md`

Section 1 harus mengikuti seluruh guardrails global tersebut.

## Section 1 Specific Guardrails

### Goal Guardrails

- Section ini adalah pembuka emosional, bukan halaman login biasa.
- Tujuan utamanya adalah membangun rasa penasaran, rasa aman, dan rasa spesial.
- User harus langsung merasa ini personal, manis, dan dibuat khusus untuk dia.
- Password hanyalah elemen interaktif pembuka, bukan fokus utama pengalaman.
- Momen paling penting adalah transisi dari password yang benar ke reveal bunga dan pesan pembuka.
- Setelah section selesai, user harus terdorong untuk menekan tombol `Mulai` dan lanjut ke cerita berikutnya.

### Visual Guardrails

- Layout harus clean, fokus, dan tidak penuh elemen yang tidak perlu.
- Selalu prioritaskan satu fokus visual utama per state:
  - state awal: karakter
  - state password: keypad dan dots
  - state transisi: bloom bunga
  - state akhir: pesan pembuka
- Gunakan whitespace yang cukup agar tampilan terasa rapi dan premium.
- Semua ilustrasi, card, tombol, dan elemen motion harus terasa lembut dan rounded.
- Hindari tampilan yang terlalu formal, terlalu gelap, terlalu mewah, atau terlalu generik seperti landing page SaaS.
- Hindari visual yang terasa ramai, noisy, atau penuh ornamen kecil yang mengganggu fokus.

### Theme Guardrails

- Tema utama wajib `pink dan lucu`.
- Gunakan pink lembut sebagai identitas utama pada background, UI card, button, glow, dan detail dekoratif.
- Sunflower hanya berfungsi sebagai aksen kejutan pada transisi, bukan mengambil alih seluruh identitas visual.
- Nuansa akhir harus terasa `cute, sweet, soft, romantic`.
- Hindari warna neon, warna terlalu saturated, atau kombinasi warna yang terasa childish berlebihan.
- Hindari tone dark romantic, black-heavy, atau luxury glam.
- Semua elemen harus konsisten dengan estetika manis, ringan, dan intimate.

### Motion Guardrails

- Semua animasi harus smooth, soft, dan readable.
- Animasi harus memperjelas alur, bukan sekadar hiasan.
- Hindari motion yang terlalu cepat, terlalu banyak bounce, atau terlalu banyak elemen bergerak bersamaan.
- Gunakan easing yang halus dan premium.
- Idle animation harus nyaris terasa, bukan mencolok.
- Transition bloom harus menjadi highlight utama, tetapi tetap elegan.

### Responsive Guardrails

- Section wajib responsive untuk mobile, tablet, dan desktop.
- Desain mobile harus diprioritaskan karena kemungkinan besar dibuka dari handphone.
- Semua elemen penting harus tetap terlihat tanpa terasa sempit di layar kecil.
- Keypad harus nyaman disentuh di mobile dengan ukuran tap target yang aman.
- Teks tidak boleh terlalu kecil di mobile.
- Komposisi karakter, dots, keypad, dan tombol harus tetap seimbang pada semua ukuran layar.
- Animasi tidak boleh merusak layout saat viewport mengecil.
- Bloom bunga harus tetap terasa penuh dan immersive di portrait mobile maupun desktop landscape.
- Hindari penggunaan ukuran fixed yang membuat UI pecah di layar kecil.
- Gunakan spacing, typography, dan ukuran elemen yang adaptif.

### UX Guardrails

- User harus langsung paham apa yang perlu dilakukan tanpa banyak instruksi.
- Flow interaksi harus sederhana: lihat karakter -> masukkan password -> lihat kejutan -> tekan `Mulai`.
- Error state harus terasa lucu dan lembut, bukan seperti validasi aplikasi formal.
- State sukses harus terasa rewarding.
- Jangan buat user menunggu terlalu lama di setiap transisi.
- Jangan pakai autoplay audio pada section ini kecuali memang diminta khusus.

## Visual Direction

- Background utama: soft pink / blush pink / off-white pink.
- Mood: dreamy, cute, soft, romantic.
- Ilustrasi karakter: hand-drawn, lucu, sederhana, memegang hati merah.
- Bunga: sunflower sebagai elemen kejutan utama, tetapi dibungkus dengan nuansa pink yang manis.
- Layout: minimal, fokus ke 1 elemen utama per tahap.

## Theme Notes

- Gunakan palet warna pink lembut sebagai identitas utama section.
- Sunflower tetap dipakai sebagai surprise transition agar punya kontras visual yang memorable.
- Kombinasi warna yang disarankan:
  - blush pink
  - baby pink
  - cream
  - soft red untuk heart
  - sunflower yellow sebagai accent
- Tone keseluruhan harus cute dan sweet, bukan glam atau dark romantic.

## Full Interaction Flow

### Scene 1: Character Intro

#### Layout

- Karakter berada di tengah layar.
- Background bersih dengan hint pink gradient yang sangat lembut.
- Ada shadow lembut di bawah karakter.

#### Entrance Animation

- Character fade in dari opacity `0` ke `1`.
- Character bergerak naik tipis sekitar `12px` sampai `16px`.
- Durasi entrance: `1.2s` sampai `1.8s`.
- Easing: smooth, premium, misalnya `ease-in-out` atau cubic-bezier lembut.

#### Idle Animation

- Body sway sangat kecil: rotasi `-2deg` ke `2deg`.
- Vertical bobbing: `translateY(0px)` ke `translateY(-4px)`.
- Heart pulse lembut: `scale(1)` ke `scale(1.04)` setiap `2s` sampai `3s`.
- Shadow ikut berubah sangat tipis agar karakter terasa hidup.

#### Mood Note

- Gerak harus kalem, seperti karakter sedang menunggu dengan ekspresi manis.
- Jangan gunakan bounce berlebihan.

### Scene 2: Password Gate

#### Trigger

- Setelah scene 1 berjalan sebentar, masuk ke state password.
- Delay yang disarankan: `1.5s` sampai `2.5s` setelah karakter muncul.

#### Transition from Scene 1

- Karakter mengecil sedikit.
- Karakter pindah ke atas tengah layar.
- Transisi halus, jangan mendadak.

#### Password Screen Layout

- Di atas: karakter versi kecil.
- Di bawah karakter: teks kecil `You know what to do :)`.
- Lalu 4 bulatan password.
- Di bawahnya keypad putih rounded dengan shadow tipis.

#### Keypad Style

- Card putih pinkish / off-white.
- Sudut rounded besar.
- Shadow sangat lembut.
- Angka bersih dan minimal.
- Spacing lega.

#### Cute UI Notes

- Password dots bisa berwarna pink lembut saat terisi.
- Keypad boleh punya glow tipis bernuansa blush pink.
- Teks caption sebaiknya kecil, manis, dan ringan.

#### Keypad Interaction

- Saat angka ditekan:
  - tombol scale down sedikit lalu kembali normal.
  - satu bulatan password terisi.
  - bulatan terisi dengan pop animation kecil.
- Timing respons per tekan: `120ms` sampai `180ms`.

#### Wrong Password State

- Keypad card shake horizontal lembut.
- Password dots berubah warna ke pink tua / soft red sesaat.
- Setelah itu dots reset ke kosong.
- Durasi error state: `400ms` sampai `600ms`.

#### Correct Password State

- Keempat dots terisi penuh.
- Heart pada karakter glow lembut.
- Karakter bounce kecil sekali sebagai reaksi senang.
- Lalu ada jeda `0.7s` sampai `1s` sebelum transisi ke scene bunga.

#### Password Logic

- Password adalah tanggal ulang tahun.
- Rekomendasi format: `DDMM`.
- Jika perlu hint, gunakan teks kecil seperti `tanggal yang paling spesial`.

### Scene 3: Sunflower Bloom Transition

Ini adalah wow moment dari section 1.

#### Transition Trigger

- Dimulai segera setelah password benar.
- Awali dengan jeda sangat pendek `0.3s` sampai `0.5s`.

#### Sequence

1. Background sedikit menghangat.
2. Glow lembut muncul dari area tengah atau dari hati karakter.
3. Petal dan bunga matahari mulai tumbuh keluar berlapis.
4. Bunga memenuhi layar secara organik.
5. Setelah layar penuh, bagian tengah dibersihkan pelan untuk ruang teks.

#### Animation Style

- Gunakan organic bloom, bukan ledakan kasar.
- Bunga bisa muncul dengan:
  - scale kecil ke besar.
  - sedikit rotasi.
  - fade in bertahap.
  - layering depth dengan parallax tipis.
- Petal boleh bergerak melayang sedikit, tetapi tetap halus.

#### Timing

- Mulai bloom: `0.4s` setelah success state.
- Full bloom: `1.8s` sampai `2.5s`.
- Jangan terlalu cepat, biarkan terasa magical.

#### Visual Notes

- Dominan warna pink lembut, cream, dan kuning sunflower sebagai aksen.
- Hindari warna terlalu neon.
- Kedalaman layer penting agar bunga terasa hidup dan immersive.

### Scene 4: Message Reveal

#### Final State Layout

- Background tetap dipenuhi bunga matahari dengan overlay pink lembut atau tekstur bunga bernuansa blush.
- Area tengah cukup bersih untuk fokus ke teks.
- Komposisi tetap elegan dan tidak terlalu padat.

#### Main Text

`Di hari spesialmu, ada sesuatu yang ingin aku tunjukkan.`

#### Text Animation

- Fade in dari opacity `0` ke `1`.
- Sedikit upward drift sekitar `8px` sampai `12px`.
- Boleh dimunculkan per baris agar terasa cinematic.
- Tambahkan blur halus di awal lalu sharpen saat settle jika ingin hasil lebih dreamy.

#### CTA Button

- Setelah teks selesai muncul, tampilkan tombol `Mulai`.
- Delay tombol: `400ms` sampai `600ms` setelah teks.
- Hover state:
  - naik sedikit.
  - shadow bertambah lembut.
  - transisi cepat dan halus.

#### Button Style

- Tombol `Mulai` sebaiknya berwarna pink lembut.
- Bisa menggunakan fill blush pink dengan text putih atau cream.
- Hover state harus tetap cute, bukan terlalu formal.

## Motion Rules

- Semua animasi harus lembut, emosional, smooth, dan cute.
- Hindari flashy effect.
- Hindari bounce berlebihan.
- Fokus pada fade, drift, pulse, bloom, glow, dan parallax halus.
- Mobile dan desktop harus sama-sama nyaman dilihat.

## State Summary

### Initial

- Fullscreen soft pink background.
- Character centered.

### Password Active

- Character kecil di atas.
- Caption kecil.
- 4 password dots.
- Numeric keypad card.

### Error

- Card shake.
- Dots flash lembut.
- Reset.

### Success

- Heart glow.
- Character reacts.
- Transition ke bunga.

### Final Intro

- Sunflower background with soft pink atmosphere.
- Intro text.
- `Mulai` button.

## Recommended Technical Approach

Jika dibuat dengan React:

- Gunakan `Framer Motion` untuk sequence dasar, state transition, dan microinteraction.
- Gunakan layered absolute elements untuk bunga.
- Gunakan controlled input state untuk password.
- Gunakan full-screen section dengan transition berbasis state.

Jika dibuat dengan HTML/CSS/JS biasa:

- Gunakan CSS animations untuk idle motion.
- Gunakan JS untuk password logic dan scene switching.
- Gunakan CSS transforms dan opacity untuk performa yang halus.

Jika perlu animasi yang lebih sinematik:

- `GSAP` cocok untuk mengatur urutan transition character -> keypad -> bloom -> text reveal.

## Implementation Prompt for Coding Agent

```text
Build a fullscreen romantic opening section for a birthday website.

Visual style:
- soft pink / blush pink background with cream support tones
- dreamy, cute, soft, romantic mood
- hand-drawn cute character centered on screen, holding a red heart
- minimal layout with lots of breathing room
- premium smooth animation, not flashy
- sunflower elements used as a surprise accent, while the overall theme stays pink and adorable

Interaction sequence:
1. Start with the character centered on screen.
2. Animate the character with a soft fade-in and slight upward motion.
3. Add subtle idle motion:
   - tiny body sway
   - gentle vertical bobbing
   - soft heart pulse
   - soft shadow movement
4. After a short delay, transition to a password screen:
   - move the character upward and make it slightly smaller
   - show the caption: "You know what to do :)"
   - show 4 password dots
   - show a rounded numeric keypad card below
5. Password is a 4-digit birthday date in DDMM format.
6. On each keypad press:
   - animate the button press slightly
   - fill one dot with a soft pop effect
7. If password is wrong:
   - shake the keypad card gently horizontally
   - flash the dots softly
   - reset the dots
8. If password is correct:
   - make the heart glow softly
   - add a very small happy bounce to the character
   - wait briefly, then begin a sunflower bloom transition
9. Sunflower bloom transition:
   - warm light expands from the center
   - layered sunflower petals and flowers bloom outward organically
   - keep the surrounding color atmosphere pink and sweet
   - use depth with opacity, scale, slight rotation, and subtle parallax
   - flowers fill the whole screen elegantly
10. Once the bloom fills the screen, reveal centered text:
   - "Di hari spesialmu, ada sesuatu yang ingin aku tunjukkan."
   - text should fade in with a slight upward drift
11. After the text appears, reveal a "Mulai" button below it.

Motion direction:
- soft, cute, emotional, cinematic
- no harsh transitions
- no exaggerated bounce
- avoid neon or overly bright effects
- optimized for both mobile and desktop

Technical preference:
- use animation libraries only if needed
- prioritize smoothness and clear state-based transitions
```

## Copy Alternatives

Jika ingin variasi teks pembuka, gunakan salah satu berikut:

1. `Di hari spesialmu, ada sesuatu yang ingin aku tunjukkan.`
2. `Hari ini, aku ingin mengajakmu melihat sesuatu yang spesial.`
3. `Sebelum hari ini berakhir, ada satu hal yang ingin aku berikan untukmu.`

## Pink Theme Prompt Add-on

Tambahkan arahan ini jika agent perlu hasil yang lebih konsisten dengan tema pink:

```text
Use a pink cute visual language for the whole section.

- Main palette: blush pink, baby pink, cream, soft red
- Accent palette: sunflower yellow only as a surprise transition accent
- Rounded UI, soft shadows, gentle glow
- Everything should feel adorable, sweet, and romantic
- Avoid dark tones, sharp contrast, or overly serious luxury aesthetics
```

## Quality Checklist

- Karakter langsung jadi fokus utama di awal.
- Password flow mudah dipahami.
- Salah input terasa lucu, bukan mengganggu.
- Bloom bunga terasa jadi puncak transisi.
- Teks pembuka muncul setelah visual cukup settle.
- Hasil akhir terasa romantis, personal, dan rapi.
