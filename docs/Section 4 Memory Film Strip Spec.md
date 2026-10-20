# Section 4 Memory Film Strip Spec

## Goal

Section ini menampilkan foto-foto kamu dan dia dalam bentuk `memory film strip` yang sangat panjang, bergerak otomatis, lembut, dan romantis.

Tujuan emosional section ini:
- menjadi puncak personal setelah section video wishes
- menunjukkan banyak momen kalian berdua secara hangat dan intimate
- terasa seperti kenangan yang terus berjalan
- memberi rasa `our story` tanpa menjadi galeri foto biasa

## Required References

Sebelum mengerjakan section ini, wajib baca:
- `docs/storyboard/global-guardrails.md`
- `docs/storyboard/section-3-envelope-wishes-spec.md`

Section 4 harus mengikuti guardrails global dan tetap terasa menyambung dari section 3.

## Core Concept

Section ini menggunakan `2 film strips`:

1. `Main strip`
- strip utama
- jadi fokus visual utama
- menampilkan foto-foto kalian
- memicu caption / highlight moments

2. `Secondary strip`
- strip pendukung di background
- lebih kecil
- lebih blur / lebih redup
- bergerak lebih pelan
- tidak memunculkan caption
- hanya untuk depth dan ambience

Kesan yang ingin dicapai:
- banyak kenangan yang terus berjalan
- lembut, romantis, hidup
- tidak terasa seperti carousel produk atau ticker berita

## Emotional Role

Urutan emosinya:
- section 2: masa kecil dan pertumbuhan
- section 3: pesan dari orang-orang terdekat
- section 4: bagian paling personal, yaitu kalian berdua
- section 5: pesan penutup dari kamu

Karena itu section 4 harus terasa:
- lebih intimate daripada section 3
- lebih tenang
- lebih hangat
- lebih romantis

## Transition From Section 3

Transisi dari section 3 ke section 4 harus terasa halus.

Arah transisi yang disarankan:
- setelah user selesai menonton video wish atau menekan lanjut
- greeting card video frame mengecil perlahan
- card memudar atau dissolve lembut
- muncul teks jembatan singkat
- lalu film strip mulai bergerak masuk dari kanan

Copy bridge yang bisa dipakai:
- `Dan di antara semua cerita itu...`
- `aku juga punya banyak kenangan tentang kita.`
- `Sedikit demi sedikit, semuanya jadi berarti karena ada kamu.`

Yang harus dihindari:
- hard cut dari envelope/video ke galeri foto
- langsung muncul banyak foto tanpa transisi emosional
- feel seperti slideshow biasa

Transisi ini harus terasa seperti:
`setelah pesan-pesan dari orang lain, sekarang masuk ke cerita kita`

## Visual Direction

### Overall Scene
- palette: blush pink, cream, soft rose, peach
- mood: dreamy, soft, romantic, intimate
- composition: elegant, airy, tidak terlalu ramai
- atmosphere: glowing memory lane, bukan film noir atau bioskop gelap

### Film Strip Style
Film strip tetap terasa seperti analog memory strip, tetapi dibungkus dengan bahasa visual pink cute.

Karakter visual:
- strip base warna soft rose / muted pink / cream-brown
- sprocket holes tetap ada, tetapi soft dan halus
- edges sedikit rounded atau softened
- paper-film hybrid feel
- shadow lembut
- glow halus
- jangan gunakan film strip hitam pekat klasik

### Main Strip
- ukuran lebih besar
- berada di area tengah
- paling jelas dan paling tajam
- bergerak otomatis
- beberapa foto mendapat `highlight moment`

### Secondary Strip
- ukuran lebih kecil
- berada di belakang, atas atau bawah
- opacity lebih rendah
- sedikit blur
- hanya untuk depth
- tetap satu style dengan main strip

## Section 4 Specific Guardrails

### Goal Guardrails
- Section ini bukan galeri grid biasa
- Fokus utama adalah rasa `our memories keep going`
- Main strip harus menjadi pusat emosi
- Highlight moments harus memberi jeda emosional, bukan hanya foto lewat terus
- Caption harus singkat dan personal

### Visual Guardrails
- Main strip harus dominan
- Secondary strip hanya sebagai support
- Jangan membuat section terlalu penuh elemen dekoratif
- Foto harus tetap jadi pusat perhatian
- Hindari visual terlalu gelap atau terlalu vintage keras

### Motion Guardrails
- Gerak utama adalah auto-moving horizontal film strip
- Motion harus lambat, halus, dan dreamy
- Hindari feel seperti marquee / news ticker
- Tambahkan slow-down atau spotlight pada beberapa foto penting
- Jangan terlalu banyak animasi tambahan yang mengganggu strip

### Responsive Guardrails
- Harus nyaman di mobile, tablet, dan desktop
- Mobile diprioritaskan
- Di mobile, secondary strip boleh disederhanakan atau dikurangi intensitasnya
- Foto di strip tidak boleh terlalu kecil
- Caption harus tetap terbaca tanpa menutupi foto secara berlebihan

## Section States

### State 1: Intro Bridge
Tampilan awal section 4.

Isi:
- bridge text singkat
- background lembut
- belum semua strip terlihat penuh

Goal:
- memberi jeda emosional dari section 3

### State 2: Strip Reveal
- main strip masuk dan mulai bergerak
- secondary strip mulai terlihat di background
- movement masih lembut
- mood langsung terasa romantis

Goal:
- memperkenalkan visual utama section

### State 3: Continuous Motion
- main strip bergerak otomatis perlahan
- secondary strip bergerak lebih pelan
- banyak foto kalian mulai lewat
- section terasa panjang dan hidup

Goal:
- menciptakan rasa bahwa kenangan terus berjalan

### State 4: Highlight Moment
Saat foto tertentu masuk area fokus:
- strip melambat sedikit
- foto itu sedikit lebih terang atau sedikit membesar
- caption pendek muncul
- lalu strip lanjut bergerak lagi

Goal:
- memberi titik emosional di antara gerakan strip yang panjang

### State 5: Outro Transition
- strip tetap berjalan
- caption terakhir muncul
- visual mulai menenangkan diri
- section siap berpindah ke closing message

Goal:
- menyiapkan transisi ke section penutup

## Motion Direction

### Base Motion
- main strip bergerak otomatis horizontal
- arah yang disarankan: kanan ke kiri
- gerak konstan, lembut, tidak cepat

### Secondary Motion
- secondary strip bergerak dengan speed lebih lambat
- arah bisa sama dengan main strip
- rekomendasi terbaik: arah sama, speed berbeda

### Highlight Motion
Ketika foto penting masuk ke zona fokus:
- strip melambat sedikit
- foto aktif scale up tipis
- opacity / brightness naik sedikit
- caption fade in
- setelah itu kembali ke speed normal

### Interaction Motion
- hover atau tap pada foto bisa pause sementara
- di mobile, swipe manual boleh
- autoplay tetap menjadi behavior utama

## Timing Suggestions

### Strip motion
- gerak utama harus lambat dan terasa continuous
- jangan ada lompatan mendadak

### Highlight moment
- slow down: `300ms` sampai `500ms`
- photo emphasis: `250ms` sampai `400ms`
- caption reveal: `250ms` sampai `450ms`
- return to normal speed: `400ms` sampai `700ms`

### Section intro
- bridge text reveal: `500ms` sampai `800ms`
- strip reveal: `700ms` sampai `1200ms`

## Layout Guidance

### Desktop
- main strip berada di tengah dan dominan
- secondary strip berada di belakang atas atau belakang bawah
- caption muncul di area bawah tengah atau samping bawah
- pastikan spotlight area terasa jelas

### Tablet
- pertahankan 2 strip jika masih nyaman
- secondary strip boleh dibuat lebih kecil dan lebih redup

### Mobile
- main strip tetap dipertahankan
- secondary strip boleh:
  - tetap ada tetapi sangat subtle
  - atau disederhanakan
- foto di strip harus cukup besar untuk dilihat jelas
- caption muncul di bawah strip atau overlay ringan

## Content Structure

Data per foto idealnya mencakup:
- `id`
- `image`
- `caption`
- `highlight`
- `alt`

Optional:
- `accentTone`
- `rotation`
- `sizeVariant`

Secondary strip bisa:
- menggunakan subset foto
- atau menggunakan urutan berbeda
- tetapi tetap terasa natural

## Caption Direction

Caption harus:
- singkat
- hangat
- personal
- terdengar seperti suara kamu

Hindari:
- paragraf panjang
- bahasa terlalu formal
- kalimat yang terlalu generik

Contoh caption:
- `aku suka momen ini`
- `versi kita yang ini lucu banget`
- `hal kecil yang selalu aku simpan`
- `dan semuanya terasa hangat kalau ada kamu`
- `mungkin ini sederhana, tapi buat aku berarti`
- `aku suka semua versi kita`

## Suggested Copy

Section bridge text:
- `Dan di antara semua cerita itu...`
- `aku juga punya banyak kenangan tentang kita.`

Section title optional:
- `our little film`
- `a little film of us`
- `the story of us`

Caption examples:
- `aku suka semua versi kita`
- `selalu ada hal kecil yang bikin aku senyum kalau lihat ini`
- `kalau ada kamu, momen biasa pun terasa beda`

## Interaction Rules

- Autoplay motion harus aktif secara default
- User boleh pause melalui hover/tap jika diperlukan
- User boleh swipe atau drag secara manual jika ingin
- Manual interaction tidak boleh merusak flow visual
- Jangan jadikan section ini carousel biasa dengan snap keras
- Strip harus tetap terasa continuous

## Quality Checklist

- Transisi dari section 3 terasa halus
- Main strip langsung jadi fokus utama
- Secondary strip menambah depth tanpa mengganggu
- Strip bergerak lambat dan romantis, bukan seperti ticker
- Highlight moments terasa meaningful
- Caption singkat dan personal
- Visual tetap pink cute dan warm
- Mobile tetap nyaman dilihat
- Section terasa intimate dan spesial, bukan galeri foto biasa
