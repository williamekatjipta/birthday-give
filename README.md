# Birthday Opening

Opening website ulang tahun bertema pink dan sunflower, dibuat dengan React + Vite dan siap di-deploy ke Vercel.

## Menjalankan lokal

```bash
npm install
npm run dev
```

Untuk mode staging dengan password yang diketik dan dikonfirmasi otomatis:

```bash
npm run dev:staging
```

Mode ini membaca `VITE_AUTO_UNLOCK=true` dari `.env.staging`. Build production biasa tidak mengaktifkan auto-unlock.

## Deploy ke Vercel

Import repository ini di Vercel. Framework, build command, dan output directory sudah dikonfigurasi melalui `vercel.json`.

Password default adalah `211001` (`DDMMYY`). Agar tidak mengubah source code, tambahkan environment variable berikut di Vercel:

```text
VITE_BIRTHDAY_PASSWORD=211001
```

> Password ini hanya merupakan interaction gate di browser, bukan mekanisme keamanan untuk data sensitif.

## Design Source Of Truth

Sebelum mengubah UI, animasi, atau interaction flow untuk section mana pun, baca file berikut:

- `AGENTS.md`
- `docs/storyboard/global-guardrails.md`
- `docs/storyboard/section-1-opening-spec.md`

File tersebut adalah acuan utama untuk:

- goal dan guardrails
- visual direction
- theme pink dan lucu
- motion dan transisi
- responsive behavior untuk mobile, tablet, dan desktop
