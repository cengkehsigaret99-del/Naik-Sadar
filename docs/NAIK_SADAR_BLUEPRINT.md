# Naik-Sadar — Blueprint Konsep, Alur, dan Menu

Status: VALID AWAL / PETA KONSEP KERJA

## 1. Identitas Aplikasi

Naik-Sadar adalah aplikasi pendamping jeda sadar. Aplikasi membantu pengguna berhenti sejenak, mengenali keadaan diri, menenangkan tubuh, menjernihkan pikiran, lalu memilih satu langkah kecil yang lebih sadar.

Tagline:

> Sadar dulu, baru melangkah.

Aplikasi ini bukan aplikasi diagnosis klinis, bukan penentu benar-salah ibadah, dan bukan pengganti bantuan profesional. Naik-Sadar adalah alat refleksi, jeda, pengamatan pola, dan pendamping tindakan kecil.

## 2. Prinsip Produk

Aplikasi tidak boleh terasa seperti kumpulan menu yang membingungkan. Beranda harus berfungsi sebagai kompas.

Prinsip utama:

1. Praktik dulu, pemahaman kemudian.
2. Satu langkah kecil lebih baik daripada banyak teori.
3. Pengguna diarahkan berdasarkan kondisi, bukan dipaksa memilih dari menu panjang.
4. Setiap halaman harus punya tombol lanjut yang jelas.
5. Musik dan suasana boleh mendukung, tetapi tidak boleh mengganggu alur utama.
6. Data awal tetap lokal di perangkat melalui localStorage.

## 3. Alur Utama Aplikasi

Alur paling sederhana:

> Buka aplikasi → pilih kondisi → ikuti arahan → simpan → ambil satu langkah → selesai.

Aplikasi harus menjawab kebingungan pengguna:

> Saya mulai dari mana?
> Setelah ini ke mana?

Karena itu beranda perlu memiliki bagian **Mulai dari Sini**.

## 4. Empat Jalur Utama

### Jalur 1 — Saya sedang tidak tenang

Untuk kondisi marah, panik, tersinggung, overthinking, impulsif, atau bingung.

Alur:

> Cek Diri 10 Detik → Mode Jeda Cepat → Cermin Reaksi → Satu Langkah

### Jalur 2 — Saya ingin membalas pesan

Untuk WA/chat, tekanan, klarifikasi, permintaan data, konflik, atau respons yang rawan panas.

Alur:

> Cek Diri 10 Detik → Template Respons Tenang → Salin Respons → Satu Langkah

### Jalur 3 — Saya ingin latihan harian

Untuk pengguna yang sedang relatif tenang tetapi ingin menjaga arah hari.

Alur:

> Satu Langkah Hari Ini → Tandai Selesai → Riwayat Pola

### Jalur 4 — Saya ingin ibadah lebih hadir

Untuk menu Sholat Sadar.

Alur:

> Cek Diri → Wudhu Sadar → Niat Hadir → Sholat → Setelah Salam → Satu Langkah Sadar

## 5. Mode Dipandu dan Mode Bebas

### Mode Dipandu

Untuk pengguna baru atau sedang bingung.

Alur:

> Pilih kondisi → rekomendasi fitur → latihan → simpan → langkah berikutnya.

### Mode Bebas

Untuk pengguna yang sudah tahu mau membuka apa.

Menu bebas:

- Cek Diri 10 Detik
- Mode Jeda Cepat
- Template Respons Tenang
- Satu Langkah Hari Ini
- Riwayat Pola
- Sholat Sadar
- Perluas Sudut Pandang
- Kerapian Area
- Mode 5S

## 6. Perluas Sudut Pandang

Menu ini bukan menu utama paling depan. Ini adalah ruang pendalaman untuk pengguna yang ingin memahami mengapa latihan di aplikasi penting.

Sub-menu:

1. Tubuh
2. Pikiran
3. Emosi
4. Relasi
5. Ibadah
6. Kebiasaan

Format setiap kartu:

1. Inti 30 detik
2. Hubungan dengan aplikasi
3. Latihan kecil
4. Rujukan ringkas

Fungsi menu ini:

- memperkuat kepercayaan pengguna
- memberi kedalaman tanpa mengganggu praktik
- menjelaskan hubungan latihan dengan buku, riset, dan referensi batin/spiritual
- menjadi ruang belajar opsional

## 7. Sholat Sadar

Sholat Sadar adalah menu pendamping untuk membantu pengguna lebih hadir dalam wudhu dan sholat yang sudah ia lakukan.

Posisi aman:

- bukan fiqih detail
- bukan fatwa
- bukan penentu sah/tidak sah sholat
- bukan pengganti guru/ustadz

Fungsi:

> membantu pengguna masuk wudhu dan sholat dengan lebih hadir, melepas keadaan reaktif, merasakan tubuh, mengingat Allah, lalu keluar dari sholat dengan satu tindakan yang lebih sadar.

Alur:

> Cek Diri Sebelum Wudhu → Wudhu Sadar → Niat Hadir → Setelah Salam → Langkah Sadar

## 8. Peta Alur

Aplikasi perlu halaman Peta Alur agar pengguna tidak bingung.

Isi peta:

- Saat emosi naik: Cek Diri → Mode Jeda → Cermin Reaksi → Satu Langkah
- Saat mau balas pesan: Cek Diri → Respons Tenang → Salin → Kirim setelah tenang
- Saat ingin latihan: Satu Langkah → Tandai Selesai → Riwayat Pola
- Saat ingin sholat sadar: Cek Diri → Wudhu Sadar → Setelah Salam → Langkah Sadar
- Saat ingin memahami dasar: Perluas Sudut Pandang

## 9. Prioritas Update Bertahap

Urutan aman:

1. Kunci blueprint konsep dan alur.
2. Rapikan beranda sebagai Mulai dari Sini.
3. Tambah Peta Alur.
4. Tambah Perluas Sudut Pandang.
5. Tambah Sholat Sadar versi awal.
6. Tambah tombol lanjut di setiap halaman.
7. Uji alur dari app-shell agar musik tetap hidup.
8. Finalisasi desain dan bahasa.

## 10. Keputusan Kerja

Untuk pengembangan berikutnya, setiap perubahan UI harus kembali ke konsep utama:

> pengguna tidak perlu bingung memilih menu; aplikasi harus menuntun berdasarkan kondisi pengguna saat itu.
