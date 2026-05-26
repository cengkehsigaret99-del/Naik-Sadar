# Arsitektur Modul Kesadaran Kebersihan

## Basis Repo

Repo Naik Sadar saat ini memakai static HTML.

File utama:
- index.html mengarah ke gerbang-10.html.
- gerbang-10.html menjadi gerbang utama.
- app-pro.html berisi aplikasi inti.

## Strategi Integrasi

Modul Kesadaran Kebersihan dibuat sebagai halaman HTML mandiri:

- kebersihan-sadar.html
- kebersihan-5s.html

Setelah stabil, link modul dapat ditambahkan ke:

- gerbang-10.html
- app-pro.html bagian Home
- navigasi tambahan jika diperlukan

## Prinsip Programmer-Designer

Modul harus mempertahankan karakter aplikasi:

- static ringan
- mobile first
- localStorage untuk data awal
- tidak perlu backend pada MVP
- visual bersih dan sederhana
- alur singkat
- tidak banyak input dalam satu layar

## Kerangka Desain

Desain modul memakai beberapa lensa:

- observasi kondisi sebelum tindakan
- jeda singkat sebelum pengguna memulai
- tindakan kecil yang dapat diulang
- standar area dengan pendekatan 5S dan Kaizen

## Struktur Layar Modul

1. Home Kebersihan
2. Pilih Area
3. Cek Kondisi Awal
4. Jeda Napas
5. Pilih Tindakan Kecil
6. Evaluasi Setelah
7. Riwayat Sesi

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
- resultAfter
- note

## Integrasi Dashboard

Dashboard awal menampilkan:

- total sesi
- area terakhir
- skor sebelum rata-rata
- skor sesudah rata-rata
- perubahan rata-rata

## File Implementasi Awal

- kebersihan-sadar.html
- kebersihan-5s.html
- docs/konsep-kesadaran-kebersihan.md
- docs/ux-kesadaran-kebersihan-mvp.md
- docs/ui-kesadaran-kebersihan.md
- docs/arsitektur-kesadaran-kebersihan.md
