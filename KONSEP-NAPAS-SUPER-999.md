# Konsep Napas Super 9-9-9

## Tujuan

Mode ini dibuat sebagai latihan napas berbasis panduan audio. Pengguna cukup mendengarkan arahan dan hitungan, sehingga layar tidak harus terus diperhatikan.

Inti pengalaman:

> Dengarkan. Ikuti hitungan. Sinkronkan napas.

## Pola utama

- Tarik: 9 hitungan
- Jeda lembut: 9 hitungan
- Hembus: 9 hitungan

Satu siklus berisi 27 hitungan.

## Alur audio

Setiap siklus memakai tiga bagian:

1. Arahan fase:
   - Tarik
   - Jeda
   - Hembus

2. Hitungan:
   - satu sampai sembilan

3. Suara napas:
   - fase tarik memakai suara napas masuk
   - fase hembus memakai suara napas keluar
   - fase jeda dibuat hening atau sangat lembut

## Tombol utama

```text
Mulai Super 9-9-9
```

Saat tombol ditekan:

- preset otomatis menjadi Super 9-9-9
- karakter suara napas menjadi Dalam
- panduan audio aktif
- sesi awal disarankan 3 menit

## Kontrol tambahan

```text
Panduan audio: Aktif / Mati
Kecepatan panduan: Pelan / Normal / Tegas
Tes Panduan
```

## Catatan pemakaian

Gunakan pelan. Tidak perlu mengejar sempurna. Jika tubuh terasa tidak nyaman, kembali ke napas biasa.

## Integrasi teknis

LocalStorage yang disarankan:

```text
nsRuangNapasVoiceGuide
nsRuangNapasVoiceRate
```

## Tahap implementasi

1. Tambah preset `super: ['Super 9-9-9', [9,9,9]]`.
2. Tambah tombol `Mulai Super 9-9-9`.
3. Tambah panduan audio fase.
4. Tambah hitungan satu sampai sembilan.
5. Sinkronkan suara napas masuk dan keluar.
