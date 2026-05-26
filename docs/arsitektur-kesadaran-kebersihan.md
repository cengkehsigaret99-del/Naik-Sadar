# Arsitektur Modul Kesadaran Kebersihan

## Basis Repo

Repo Naik Sadar saat ini memakai static HTML.

File utama:
- index.html mengarah ke gerbang-10.html.
- gerbang-10.html menjadi gerbang utama.
- app-pro.html berisi aplikasi inti pro dengan screen Home, Rasa, Cermin, Napas, Kompas, dan Jejak.

## Strategi Integrasi

Modul Kesadaran Kebersihan sebaiknya dibuat sebagai halaman HTML baru terlebih dahulu:

- kebersihan-sadar.html

Setelah stabil, link modul ditambahkan ke:

- gerbang-10.html
- app-pro.html bagian Home
- nav jika diperlukan

## Prinsip Programmer-Designer

Modul harus mempertahankan karakter Naik Sadar:

- static ringan
- mobile first
- localStorage untuk data awal
- tidak perlu backend pada MVP
- visual lembut
- alur singkat
- tidak banyak input dalam satu layar

## Kolaborasi Pemikiran

Desain modul memakai inspirasi dari:

- Hawkins: dari reaktif menuju sadar dan bertanggung jawab.
- Tolle: hadir sebelum bertindak.
- Atomic Habits: tindakan kecil yang diulang.
- 5S dan Kaizen: tata ruang menjadi sistem.

## Struktur Layar Modul

1. Home Kebersihan
2. Pilih Area
3. Cek Kondisi Awal
4. Napas Sebelum Bergerak
5. Pilih Tindakan Kecil
6. Refleksi Setelah
7. Riwayat Jejak Kebersihan

## Penyimpanan Data

Gunakan localStorage key:

naikSadarCleanlinessV1

Struktur item:

- date
- area
- conditionBefore
- scoreBefore
- action
- scoreAfter
- feelingAfter
- note

## Integrasi Dashboard

Dashboard awal menampilkan:

- total sesi
- area terakhir
- skor sebelum rata-rata
- skor sesudah rata-rata
- perubahan rata-rata

## File Implementasi Awal

Rencana file:

- kebersihan-sadar.html
- docs/konsep-kesadaran-kebersihan.md
- docs/ux-kesadaran-kebersihan-mvp.md
- docs/ui-kesadaran-kebersihan.md
- docs/arsitektur-kesadaran-kebersihan.md
