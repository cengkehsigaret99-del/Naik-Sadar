# Audio Naik Sadar

Folder ini dipakai untuk audio aplikasi Naik Sadar.

## 1. Musik latar global

File musik latar global dibaca dari:

```text
assets/audio/naik-sadar-bg.mp3
```

Nama file wajib:

```text
naik-sadar-bg.mp3
```

Catatan:

- Gunakan file audio yang memang boleh dipakai.
- Format paling aman: MP3.
- Setelah upload, buka ulang aplikasi dengan cache versi terbaru.

---

## 2. Rekaman napas untuk Ruang Napas

Halaman `ruang-napas.html` sekarang bisa memakai rekaman napas asli jika file tersedia.

Agar otomatis terbaca oleh aplikasi, gunakan nama file berikut:

```text
assets/audio/napas-tarik.mp3
assets/audio/napas-hembus.mp3
```

Jika dua file ini belum tersedia, Ruang Napas otomatis memakai suara simulasi napas dari Web Audio API.

## File `napas-tarik.mp3`

Dipakai saat fase **Tarik napas**.

Rekomendasi:

- durasi 3 sampai 5 detik
- suara tarikan halus
- tidak ada suara bicara
- tidak ada musik latar
- tidak terlalu keras di awal
- fade in pendek dan fade out pendek

## File `napas-hembus.mp3`

Dipakai saat fase **Hembuskan**.

Rekomendasi:

- durasi 5 sampai 8 detik
- suara hembusan lebih panjang
- halus, hangat, dan menenangkan
- tidak ada suara bicara
- tidak ada musik latar
- fade in pendek dan fade out panjang

## Standar teknis rekaman napas

Format yang disarankan:

- MP3
- 44.1 kHz atau 48 kHz
- mono lebih baik daripada stereo berat
- volume cukup jelas tetapi tidak pecah
- ukuran file ringan, idealnya di bawah 500 KB per file

## Cara cek di aplikasi

Buka:

```text
ruang-napas.html?v=1
```

Lalu cek:

1. Pilih **Sumber suara → Otomatis**.
2. Klik **Tes Tarik**.
3. Klik **Tes Hembus**.
4. Jika kedua file tersedia, status harus berubah menjadi **Rekaman otomatis**.
5. Jika file belum tersedia, aplikasi otomatis memakai **Simulasi otomatis**.

## Catatan penting

Jangan mengganti nama file rekaman napas. Jika nama file berbeda, aplikasi tidak akan membaca rekaman dan akan kembali memakai simulasi napas.
