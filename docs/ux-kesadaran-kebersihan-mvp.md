# UX MVP Kesadaran Kebersihan

## Posisi Modul

Kesadaran Kebersihan adalah modul Naik Sadar untuk membantu pengguna mengevaluasi kondisi area, melakukan jeda singkat, memilih tindakan perapian sederhana, dan mencatat hasilnya.

Modul ini tidak dirancang untuk menilai pengguna. Modul berfungsi sebagai alat bantu observasi, pembentukan kebiasaan, dan pemeliharaan standar area.

## Inspirasi Desain

- Hawkins: membaca kecenderungan reaktif dan mengarahkannya ke pilihan yang lebih terukur.
- Tolle: memberi jeda sebelum pengguna mengambil tindakan.
- Atomic Habits: menggunakan tindakan kecil yang mudah diulang.
- 5S dan Kaizen: pilah, tata, bersihkan, standarkan, pelihara.

## Alur Layar

### 1. Dashboard

Konten utama:
- Skor kondisi area hari ini.
- Area yang disarankan untuk dievaluasi.
- Tombol Mulai Satu Area.
- Ringkasan sesi terakhir.

Microcopy:
Mulai dari satu area kecil.

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
Bagaimana kondisi area ini saat ini?

Pilihan:
- Terkendali
- Cukup rapi
- Perlu dirapikan
- Mengganggu fokus
- Sering dihindari

Skor:
1 = sangat perlu ditata
2 = perlu perapian
3 = cukup terkendali
4 = rapi dan nyaman
5 = rapi dan terpelihara

### 4. Jeda Napas

Instruksi:
Tarik napas 4 hitungan.
Tahan 2 hitungan.
Buang perlahan 6 hitungan.
Ulangi 3 kali.

Microcopy:
Ambil jeda singkat sebelum memulai.

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

### 6. Evaluasi Setelah

Pertanyaan:
Apa hasil setelah tindakan singkat ini?

Pilihan hasil:
- Area lebih rapi
- Area lebih mudah digunakan
- Masih perlu dilanjutkan
- Cukup untuk hari ini
- Siap dievaluasi lagi nanti

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
- Hasil setelah

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
- result_after
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
- Pengguna melihat panduan jeda napas.
- Pengguna bisa memilih tindakan kecil.
- Pengguna bisa memberi skor sesudah.
- Pengguna bisa melihat riwayat sesi.
- Dashboard menampilkan jumlah sesi dan perubahan skor rata-rata.

## Karakter UI

- Tombol besar.
- Kalimat pendek.
- Warna lembut.
- Banyak ruang kosong.
- Bahasa netral dan tidak menilai pengguna.
- Cocok untuk penggunaan harian yang cepat.
