---
sidebar_position: 3
---

# Panduan Nomor Surat

Nomor surat adalah komponen krusial dalam tata kelola administrasi RT untuk memastikan legalitas dan keteraturan arsip. Aplikasi Tata Warga dirancang untuk secara otomatis membuatkan (meng-*generate*) nomor surat yang baku dan profesional setiap kali Anda membuat surat.

## Struktur Nomor Surat Otomatis
Sistem Tata Warga menggunakan standar format penomoran:
**[Nomor Urut] / [Kode Template] / RT[Nomor RT]-RW[Nomor RW] / [Bulan Romawi] / [Tahun]**

Sebagai contoh, jika hasilnya adalah **`015/SKTM/RT001-RW009/VIII/2026`**, berikut adalah bedah strukturnya:

1. **`015` (Nomor Urut):** Ini adalah *Nomor Surat*. Sistem akan secara otomatis menghitung berapa banyak surat yang telah RT Anda terbitkan pada bulan berjalan, lalu menambahkan angka 1. (Penomoran akan *reset* atau kembali ke `001` setiap awal bulan baru).
2. **`SKTM` (Kode Template):** Ini diambil dari Kode Surat yang Anda buat saat mendesain template (Misal: SKTM untuk Surat Keterangan Tidak Mampu, atau SP untuk Surat Pengantar).
3. **`RT001-RW009` (Identitas Wilayah):** Data ini diambil secara otomatis dari Profil Kepengurusan RT yang telah Anda lengkapi di pengaturan.
4. **`VIII` (Bulan):** Bulan diterbitkannya surat dalam angka Romawi (Januari = I, Agustus = VIII, dsb).
5. **`2026` (Tahun):** Tahun penerbitan surat.

*(Bagian 2 sampai 5 secara kolektif sering disebut sebagai **Format Kode Surat** di dalam formulir aplikasi).*

## Cara Kustomisasi / Ubah Manual
Meskipun sistem telah mengotomatisasi semuanya, kami memahami bahwa setiap RT mungkin memiliki tradisi atau format penomoran yang berbeda (misalnya melanjutkan buku nomor surat manual yang lama). Oleh karena itu, kami memberikan fleksibilitas:

### 1. Kustomisasi di Dashboard
Saat Anda berada di Tahap 3 (Konfirmasi Data Surat) pada halaman **Buat Surat Baru**:
*   **Mengubah Nomor Urut:** Anda bisa mengubah isian *Nomor Surat (Manual)* (misal yang tadinya `015` menjadi `123`).
*   **Mengubah Kode:** Anda bisa mengedit form *Format Kode Surat* sebebas mungkin sesuai standar kelurahan/desa Anda.
*   **Menulis Tangan:** Jika Anda ingin menulis nomor surat menggunakan pulpen (manual) setelah surat dicetak, Anda cukup **Mengosongkan** (menghapus isi) pada kolom *Nomor Surat (Manual)*.

### 2. Kustomisasi di WhatsApp
Jika Anda membuat surat via Bot WhatsApp:
1. Bot akan mengirimkan konfirmasi:
   `Nomor Surat:`
   `015/SKTM/RT001-RW009/VIII/2026`
2. Salin (*Copy*) pesan tersebut.
3. Ubah secara langsung di kotak pesan Anda (misalnya menjadi `Nomor Surat: 123/PENGANTAR/2026`).
4. Kirim (*Send*). Bot akan membaca format baru tersebut dan mencetaknya di PDF.

Dengan fitur ini, buku register surat Anda akan senantiasa rapi baik di dunia nyata maupun di arsip digital!
