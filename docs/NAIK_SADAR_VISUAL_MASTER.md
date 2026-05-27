# Naik-Sadar — Master Konsep Visual

Status: VALID AWAL / ACUAN DESAIN

## 1. Arah Besar Visual

Naik-Sadar diarahkan menjadi aplikasi kontemplatif modern: tenang, dalam, hangat, mudah dibaca, dan tidak terasa seperti kumpulan menu biasa.

Arah estetika:

> Nusantara kontemplatif modern.

Karakter visual:

- hening
- hangat
- elegan
- membumi
- modern
- tidak ramai
- tidak menggurui
- spiritual-universal
- nyaman untuk pemakaian malam

Aplikasi harus terasa seperti ruang jeda, bukan seperti dashboard kerja yang padat.

## 2. Prinsip Desain

1. Keterbacaan lebih penting daripada ornamen.
2. Animasi harus menenangkan, bukan menarik perhatian berlebihan.
3. Gambar harus simbolik, bukan literal berlebihan.
4. Warna gelap harus hangat, bukan hitam keras.
5. Setiap halaman boleh punya nuansa khas, tetapi tetap satu keluarga visual.
6. Pengguna harus merasa dituntun, bukan diuji.
7. Visual harus mendukung alur: Cek Diri → Jeda → Respons → Langkah → Pola.

## 3. Mode Warna

### Mode Terang

Nuansa: parchment, pasir, gading, krem hangat.

Tujuan:

- nyaman untuk siang
- terasa ringan
- ramah bagi pengguna baru
- tetap lembut dan tidak silau

Palet kerja awal:

- Background: #F6EFE4
- Surface/card: rgba(255,250,242,.78)
- Text utama: #24170F
- Text sekunder: rgba(36,23,15,.72)
- Accent merah tanah: #9B2F20
- Accent emas lembut: #D8A84F
- Border halus: rgba(92,53,25,.18)

### Mode Gelap

Nuansa: arang hangat, kopi tua, tembaga, emas redup.

Tujuan:

- nyaman untuk malam
- lebih meditatif
- terasa premium
- tidak menyilaukan mata

Palet kerja awal:

- Background: #130F0B
- Background gradient: #130F0B → #24170F → #332016
- Surface/card: rgba(44,31,22,.78)
- Surface elevated: rgba(64,43,29,.82)
- Text utama: #FFF6E8
- Text sekunder: rgba(255,246,232,.74)
- Text muted: rgba(255,246,232,.58)
- Accent emas: #D8A84F
- Accent tembaga: #B7643A
- Accent merah tanah: #B84532
- Border: rgba(216,168,79,.18)
- Shadow: rgba(0,0,0,.28)

## 4. Tipografi

Tujuan tipografi: mudah dibaca, hangat, tidak kaku.

Rekomendasi:

- Judul: serif elegan, tetap pakai Georgia dulu agar aman dan ringan.
- Isi: system-ui / sans-serif agar cepat dan terbaca jelas.

Ukuran minimum mobile:

- H1: 36–44px
- H2: 16px, uppercase kecil untuk label bagian
- Body: 16px
- Small text: minimal 13px
- Line height body: 1.5–1.65

Aturan:

- Jangan gunakan teks abu-abu terlalu redup di dark mode.
- Tombol harus terbaca jelas.
- Small text tetap harus nyaman dibaca di HP.

## 5. Bentuk Komponen

Komponen utama:

- card besar dengan radius 24–30px
- tombol besar radius 16–18px
- chip/pill radius 999px
- border kiri emas untuk bagian refleksi penting
- dashboard box ringkas

Rasa visual:

- lembut
- sedikit glassmorphism
- tidak terlalu transparan
- shadow halus
- ruang napas cukup

## 6. Sistem Animasi

Animasi harus terasa seperti napas: pelan, halus, dan tidak melelahkan.

Animasi dasar:

- fade in lembut
- slide naik 8–14px
- pulse halus pada elemen utama
- glow lembut pada tombol utama
- ripple halus pada Mode Jeda
- ambient background sangat pelan

Durasi:

- cepat: 160–220ms untuk tap/hover
- normal: 360–520ms untuk masuk halaman/card
- ambient: 8–18 detik untuk gerakan latar

Larangan:

- bounce berlebihan
- zoom agresif
- animasi ramai seperti game
- partikel terlalu banyak
- efek yang membuat teks sulit dibaca

## 7. Sistem Ilustrasi

Gaya ilustrasi:

- abstrak simbolik
- organik
- hangat
- tidak literal berlebihan
- tidak banyak detail wajah/manusia
- cocok untuk spiritual-universal

Referensi simbol:

### Napas

- lingkaran mengembang-mengecil
- garis gelombang
- kabut lembut
- spiral halus

### Hadir

- titik cahaya di tengah gelap
- gerbang cahaya
- jalan kecil menuju terang
- lingkaran pusat

### Kesadaran

- kompas
- mata abstrak lembut
- spiral naik
- riak air
- fase bulan

### Wudhu dan Sholat Sadar

- tetes air
- aliran air
- cahaya fajar
- lengkung gerakan
- pola karpet minimal
- garis sujud abstrak tanpa detail berlebihan

### Satu Langkah

- jejak kecil
- batu pijakan
- garis jalan
- tangga rendah

### Riwayat Pola

- titik-titik perjalanan
- garis waktu
- peta kontur
- pola lingkaran berulang

## 8. Identitas Visual per Halaman

### Beranda / Gerbang

Rasa: masuk ke ruang tenang.

Visual:

- background gelap hangat / terang parchment
- titik cahaya lembut
- kompas atau gerbang abstrak
- dashboard kecil yang mudah dibaca

### Cek Diri

Rasa: melihat ke dalam.

Visual:

- lingkaran pusat
- kartu pilihan rasa
- pulse lembut saat memilih

### Mode Jeda

Rasa: menurunkan intensitas.

Visual:

- animasi napas
- ripple lembut
- skala sebelum-sesudah jelas
- warna intensitas tidak terlalu agresif

### Respons Tenang

Rasa: merapikan kata.

Visual:

- kartu template elegan
- garis emas kiri
- tombol salin yang jelas
- ruang baca lega

### Satu Langkah

Rasa: kecil tapi bergerak.

Visual:

- jejak langkah
- checklist lembut
- badge hari ini

### Sholat Sadar

Rasa: suci, lembut, khidmat.

Visual:

- air dan cahaya
- lengkung halus
- tidak terlalu ramai
- tidak menggurui
- tetap terbaca sebagai pendamping hadir, bukan fatwa

### Perluas Sudut Pandang

Rasa: ruang pemahaman.

Visual:

- enam kartu tema
- ikon simbolik per tema
- ringkas, tidak seperti artikel panjang

### Riwayat Pola

Rasa: membaca jejak tanpa menghakimi.

Visual:

- grafik halus
- bar progress lembut
- timeline catatan
- arah praktis jelas

## 9. Prioritas Implementasi Visual

### Tahap Visual 1 — Fondasi Dark Mode

- perbaiki `assets/nusantara-theme.css`
- buat variabel warna light/dark
- pastikan semua teks terbaca
- pastikan card, tombol, dan dashboard konsisten
- jangan ubah struktur fitur dulu

### Tahap Visual 2 — Motion Dasar

- tambah animasi fade/slide masuk
- tambah efek tap/hover tombol
- tambah ambient gradient halus
- tetap ringan untuk HP

### Tahap Visual 3 — Ilustrasi Simbolik

- tambah ornament SVG/CSS ringan
- mulai dari Beranda dan Mode Jeda
- hindari file gambar berat di awal

### Tahap Visual 4 — Identitas Per Halaman

- halaman Sholat Sadar punya air/cahaya
- Mode Jeda punya napas/ripple
- Riwayat Pola punya garis waktu
- Perluas Sudut Pandang punya ikon tema

## 10. Keputusan Teknis Awal

Untuk menjaga aplikasi tetap ringan:

1. Mulai dari CSS dulu, bukan gambar besar.
2. Ilustrasi awal sebaiknya memakai CSS/SVG sederhana.
3. Dark mode jangan mengubah HTML banyak dulu.
4. Gunakan satu file theme utama: `assets/nusantara-theme.css`.
5. Semua halaman tetap pakai script theme toggle yang sudah ada.
6. Setelah fondasi visual aman, baru tambah animasi halaman per halaman.

## 11. Standar Evaluasi

Sebuah halaman dianggap layak secara visual jika:

- teks mudah dibaca di HP
- tombol utama langsung jelas
- warna tidak menyilaukan
- dark mode nyaman
- animasi tidak mengganggu
- pengguna tetap tahu harus klik apa
- visual mendukung ketenangan, bukan sekadar hiasan

## 12. Arah Implementasi Berikutnya

Langkah coding berikutnya:

> Update `assets/nusantara-theme.css` untuk fondasi dark mode, readability, warna, card, tombol, dan animasi dasar ringan.

Belum masuk tahap gambar besar sampai fondasi visual stabil.
