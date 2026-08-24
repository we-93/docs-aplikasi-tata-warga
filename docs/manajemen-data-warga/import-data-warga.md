---
sidebar_position: 2
---

# Import Data Warga

Memasukkan data warga satu per satu tentu akan sangat melelahkan jika Anda memiliki ratusan hingga ribuan warga. Oleh karena itu, aplikasi Tata Warga menyediakan fitur **Import** menggunakan file Excel (.xlsx).

Fitur ini juga dirancang cerdas: **Jika Anda mengunggah NIK yang sudah ada di sistem, maka data lama akan diperbarui (*update*) otomatis.**

## Langkah-Langkah Import Data
Ikuti panduan berikut untuk mengimpor data warga secara massal:

### 1. Unduh Template Excel

![Import warga](./warga/wargaunduh.webp)

Sangat penting untuk menggunakan template resmi agar sistem dapat membaca kolom data Anda dengan benar.
1. Masuk ke menu **Warga**.
2. Klik tombol **"Import"** di bagian atas tabel.
3. Pada *pop-up* (dialog) yang muncul, klik tombol **"Download Template Excel"**.
4. Buka file bernama `Template_Import_Warga.xlsx` yang baru saja Anda unduh.

### 2. Mengisi Data pada Excel

![Import excel warga](./warga/wargaexcel.webp)

Buka template tersebut menggunakan Microsoft Excel atau Google Sheets. Anda akan melihat beberapa kolom wajib dan opsional (ikuti format contoh data warga di kolom paling atas):
*   **NIK (Wajib):** 16 digit angka KTP.
*   **No KK (Wajib):** Nomor Kartu Keluarga.
*   **Nama Lengkap (Wajib):** Nama warga.
*   **Hubungan Keluarga (Wajib):** Isi: Kepala Keluarga / Suami / Istri / Anak / Cucu / Orang Tua / Lainnya...
*   **Jenis Kelamin:** Cukup ketik "L" atau "Laki-laki" untuk Pria, dan "P" atau "Perempuan" untuk Wanita.
*   **Tempat Lahir:**
*   **Tanggal Lahir:** (Format tanggal disarankan: YYYY-MM-DD), contoh: 1993-08-10 untuk kelahiran 10 Agustus 1993
*   **Agama**
*   **Pendidikan terakhir**
*   **Pekerjaan**
*   **Status Perkawinan**
*   **Golongan Darah"** Isi A / B / AB / O / Lainnya
*   **No HP**
*   **Status Warga:** (TETAP / KONTRAK_KOST / PINDAH / MENINGGAL). Jika dikosongkan, defaultnya adalah TETAP.
*   **Alamat**

> [!WARNING]
> Jangan mengubah nama *Header* (baris pertama) pada file Excel, karena sistem membacanya secara otomatis berdasarkan judul kolom tersebut. Jika sebuah sel tidak ada isinya, biarkan kosong. Jangan menghapus kolom.

### 3. Mengunggah File (Import)

![Unggah warga](./warga/wargaimport.webp)

Setelah Anda selesai mengisi data dan menyimpan file Excel tersebut:
1. Kembali ke menu **Warga**
2. Klik tombol **"Import"** kembali.
3. Klik tombol **"Pilih File & Import"**.
4. Pilih file Excel yang sudah Anda isi.
5. Tunggu prosesnya selesai. Sistem akan memberi tahu berapa banyak data yang berhasil dimasukkan atau diperbarui.

