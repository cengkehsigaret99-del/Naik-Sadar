# UX MVP Kesadaran Kebersihan

## Posisi Modul

Kesadaran Kebersihan adalah modul Naik Sadar untuk mengubah aktivitas merapikan ruang menjadi latihan hadir.

Modul tidak memaksa pengguna menjadi sempurna. Modul membantu pengguna melihat kondisi, menenangkan tubuh, mengambil satu tindakan kecil, lalu mencatat perubahan rasa.

## Inspirasi Desain

- Hawkins: bergerak dari malu, panik, marah, dan kontrol menuju menerima, sadar, dan bertanggung jawab.
- Tolle: hadir di saat ini sebelum bereaksi.
- Atomic Habits: tindakan kecil yang bisa diulang.
- 5S dan Kaizen: pilah, tata, bersihkan, standarkan, rawat.

## Alur Layar

### 1. Dashboard

Konten utama:
- Skor kesadaran kebersihan hari ini.
- Area yang disarankan untuk disentuh.
- Tombol Mulai Satu Area.
- Ringkasan sesi terakhir.

Microcopy:
Mulai dari satu bagian kecil.

### 2. Pilih Area

Kategori:
- Rumah
- Diri
- Kerja
- Pikiran

Area awal:
- Kamar
- Dapur
- Teras
- Meja kerja
- Gudang
- Area admin
- Area produksi

### 3. Cek Kondisi

Pertanyaan:
Saat melihat area ini, tubuh dan pikiran terasa bagaimana?

Pilihan:
- Ringan
- Biasa saja
- Agak berat
- Tegang
- Menghindar

Skor:
1 = kacau dan dihindari
2 = berantakan dan berat
3 = cukup terkendali
4 = bersih dan nyaman
5 = bersih dan dijaga

### 4. Jeda Napas

Instruksi:
Tarik napas 4 hitungan.
Tahan 2 hitungan.
Buang perlahan 6 hitungan.
Ulangi 3 kali.

Microcopy:
Jangan mulai dari panik. Mulai dari hadir.

### 5. Tindakan Kecil

Aplikasi menampilkan tiga pilihan tindakan sesuai area.

Contoh dapur:
- Cuci 3 piring.
- Lap 1 meja.
- Buang sampah yang terlihat.

Contoh gudang:
- Labeli 1 karton.
- Pisahkan barang rusak.
- Bersihkan 1 jalur jalan.

### 6. Refleksi Setelah

Pertanyaan:
Setelah tindakan kecil ini, apa yang berubah?

Pilihan rasa:
- Lebih ringan
- Lebih tenang
- Masih berat
- Capek tapi lega
- Lebih siap lanjut

Input:
- Skor sesudah
- Catatan singkat

### 7. Riwayat

Tampilkan:
- Tanggal
- Area
- Skor sebelum
- Skor sesudah
- Tindakan
- Rasa setelah

## Data Model

cleanliness_sessions:
- id
- area_type
- area_name
- condition_before
- score_before
- breath_completed
- selected_action
- score_after
- feeling_after
- note
- created_at

cleanliness_standards:
- id
- area_type
- standard_name
- checklist_items
- is_active

## Acceptance Criteria

- Pengguna bisa memilih area.
- Pengguna bisa memberi skor sebelum.
- Pengguna melihat panduan napas.
- Pengguna bisa memilih tindakan kecil.
- Pengguna bisa memberi skor sesudah.
- Pengguna bisa melihat riwayat sesi.
- Dashboard menampilkan jumlah sesi dan perubahan skor rata-rata.

## Karakter UI

- Tombol besar.
- Kalimat pendek.
- Warna lembut.
- Banyak ruang kosong.
- Tidak ada bahasa menyalahkan.
- Cocok untuk pengguna yang sedang capek atau overwhelm.
