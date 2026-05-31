# Rilis RS1 — Ruang Sadar Nusantara

## Status
Rilis RS1 menambahkan layer pengalaman baru untuk aplikasi Naik Sadar tanpa menghapus file lama.

Konsep utama: **Ruang Sadar Nusantara** — pendopo digital untuk kembali hadir.

Karakter visual:
- Nusantara contemplative interface
- Hangat
- Spiritual-modern
- Budaya Indonesia halus
- Tidak ramai
- Tidak seperti aplikasi bisnis/pabrik
- Tidak seperti game

## File baru

### 1. `ruang-sadar.html`
Gerbang utama baru.

Menu ruang:
- Cermin Diri
- Ruang Napas
- Tangga Kesadaran
- Ruang Rapi
- Pusat Lontar Sadar
- Peta Laku Harian

### 2. `assets/ruang-sadar.css`
Design system budaya untuk layer baru.

Berisi:
- token warna Nusantara
- cultural shell
- gapura hero
- lontar card
- kawung divider
- mendung mist
- breath orb
- visual icon
- animasi halus
- reduced motion guard

### 3. `ruang-napas.html`
Ruang latihan napas mandiri.

Fitur:
- orb membesar saat tarik napas
- orb diam saat tahan
- orb mengecil saat hembus
- preset Tenang 4-2-6
- preset Fokus 5-3-5
- preset Tidur 4-7-8
- mulai / jeda / reset
- durasi 1, 3, 5 menit
- volume
- mute/unmute
- suara lembut Web Audio API

LocalStorage baru:
- `nsRuangNapasVolume`
- `nsRuangNapasMute`

### 4. `cermin-diri.html`
Ruang refleksi diri baru.

Fitur:
- pilih rasa dominan
- pilih sinyal tubuh
- pilih kecenderungan respons
- baca hasil cermin
- score ring
- simpan catatan

LocalStorage lama tetap dipakai:
- `naikSadarJournalV4`

### 5. `peta-laku-harian.html`
Peta kondisi harian.

Jalur:
- Tubuh tegang -> Ruang Napas
- Pikiran ramai -> Cermin Diri
- Hati berat -> Tangga Kesadaran
- Rumah berantakan -> Ruang Rapi
- Bingung arah -> Pusat Lontar Sadar

### 6. `pusat-lontar-sadar.html`
Katalog materi baru.

Kategori:
- Materi Utama
- Praktik Terarah
- Alur, Pola, dan Kehadiran
- Area dan Versi Lengkap

Katalog lama tetap tersedia melalui link `materi.html`.

### 7. `ruang-rapi.html`
Ruang kebersihan sadar.

Fitur:
- pilih area kecil
- checklist 10 benda
- progress bar
- catatan rasa tubuh
- satu kalimat sadar

LocalStorage baru:
- `nsRuangRapiJournal`

### 8. `sholat-tangga-kesadaran.html`
Modul Sholat Sadar sebagai tangga kesadaran.

Isi:
- 5 sudut pandang: Power of Now, Letting Go, Power vs Force, Tubuh/Hormon, Hawkins
- peta gerakan sholat
- latihan 7 hari
- refleksi setelah sholat

LocalStorage baru:
- `nsSholatTanggaJournal`

### 9. `cek-ruang-sadar.html`
Checklist test manual untuk HP dan desktop.

## File lama yang tetap aman
Tidak dihapus:
- `index.html`
- `app-shell.html`
- `app-pro.html`
- `materi.html`
- `panduan-harian.html`
- `kebersihan-sadar.html`
- `kebersihan-5s.html`
- `latihan-pro.html`
- `latihan-sadar.html`
- `materi-sholat-sadar.html`
- `assets/nusantara-theme.css`
- `assets/nusantara-theme-toggle.js`
- `assets/nusantara-audio.js`

## Entry point
Root aplikasi tetap melalui:

```text
index.html -> app-shell.html -> ruang-sadar.html
```

`app-shell.html` sekarang mengarahkan iframe utama ke:

```text
ruang-sadar.html?v=1
```

## Checklist test

### Gerbang
- Buka `app-shell.html?v=28`
- Pastikan iframe membuka `ruang-sadar.html?v=1`
- Pastikan semua kartu ruang bisa dibuka

### Cermin Diri
- Buka `cermin-diri.html?v=1`
- Pilih rasa, tubuh, respons
- Klik Baca Cermin
- Simpan catatan
- Pastikan masuk ke `naikSadarJournalV4`

### Ruang Napas
- Buka `ruang-napas.html?v=1`
- Cek preset Tenang, Fokus, Tidur
- Cek Mulai, Jeda, Reset
- Cek durasi sesi
- Cek volume
- Cek mute/unmute

### Peta Laku
- Buka `peta-laku-harian.html?v=1`
- Pastikan jalur pikiran ramai masuk ke `cermin-diri.html`
- Pastikan jalur rumah berantakan masuk ke `ruang-rapi.html`

### Pusat Lontar
- Buka `pusat-lontar-sadar.html?v=1`
- Pastikan link ke materi lama tetap ada
- Pastikan Ruang Napas dan Tangga Kesadaran ada

### Ruang Rapi
- Buka `ruang-rapi.html?v=1`
- Pilih area
- Centang checklist
- Simpan catatan
- Pastikan masuk ke `nsRuangRapiJournal`

### Tangga Kesadaran
- Buka `sholat-tangga-kesadaran.html?v=rs1`
- Cek peta gerakan
- Cek latihan 7 hari
- Simpan refleksi
- Pastikan masuk ke `nsSholatTanggaJournal`

### Global
- Cek dark mode
- Cek theme toggle
- Cek audio toggle
- Cek HP kecil
- Cek desktop
- Cek `prefers-reduced-motion`

## Catatan pengembangan lanjut
Tahap berikutnya yang disarankan:
1. Membuat bottom navigation ringan untuk semua halaman RS1.
2. Menambahkan SVG budaya asli yang lebih halus.
3. Mengganti simbol teks di menu menjadi SVG kecil.
4. Menambahkan export JSON untuk Cermin Diri, Ruang Rapi, dan Sholat Tangga.
5. Menghubungkan halaman lama ke halaman baru secara bertahap tanpa menghapus materi lama.
