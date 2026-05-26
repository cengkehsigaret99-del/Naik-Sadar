# Decision Log Cleanliness Module

## Decision 001

Modul dibuat sebagai halaman mandiri:
- kebersihan-sadar.html
- kebersihan-5s.html

Alasan:
- repo memakai static HTML
- risiko lebih kecil dibanding mengubah app-pro.html langsung
- fitur lama tetap aman

## Decision 002

Data MVP disimpan dengan localStorage.

Key:
- naikSadarCleanlinessV1
- naikSadar5SV1

Alasan:
- ringan
- tidak butuh backend
- cocok untuk MVP personal

## Decision 003

Integrasi utama sementara melalui gerbang-10.html.

Alasan:
- gerbang utama lebih aman diubah
- app-pro.html adalah file inti yang perlu dijaga

## Decision 004

Mode 5S dibuat terpisah dari sesi evaluasi area.

Alasan:
- sesi evaluasi area fokus pada kondisi, tindakan singkat, dan hasil
- mode 5S fokus pada standar, checklist, dan pemeliharaan area
