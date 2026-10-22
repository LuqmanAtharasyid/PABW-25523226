# PABW - Luqman Atharasyid Aryaputra

Repo ini berisi tugas-tugas mata kuliah Pengembangan Aplikasi Berbasis Web (PABW). Setiap pertemuan disimpan dalam folder yang berbeda supaya lebih mudah dicari.

## Pertemuan 3 - Halaman Profil Saya

Topik halaman saya adalah Tempat Top Up Diamond Game.

Halaman ini berisi daftar game yang bisa dipilih untuk top up diamond. Saya membuat beberapa bagian, yaitu Game Populer, Top Up Diamond, dan Tentang Saya.

Bagian yang ada di halaman:

- Judul halaman: Tempat Top Up Diamond Game
- Navigasi: Game Populer, Top Up Diamond, dan Tentang Saya
- Daftar game beserta jumlah diamond dan harganya
- Form untuk memasukkan data top up
- Gambar pilihan game

## Pertemuan 4 - Design Token

Pada pertemuan ini saya belajar menggunakan design token supaya pengaturan tampilan lebih mudah dan konsisten.

Beberapa token yang saya gunakan:

| Token             | Nilai     | Kegunaan                |
| ----------------- | --------- | ----------------------- |
| `--color-primary` | `#B1D402` | Warna tombol dan tautan |
| `--color-fg`      | `#FFFFFF` | Warna teks              |
| `--color-bg`      | `#827D7D` | Warna latar halaman     |
| `--radius-md`     | `0.5rem`  | Sudut kartu dan tombol  |
| `--space-4`       | `1rem`    | Jarak antarelemen       |

File CSS dipisah menjadi beberapa bagian, seperti `tokens.css`, `base.css`, `layout.css`, `komponen.css`, dan `tema.css`.

## Pertemuan 5 - Pengembangan CSS

Pada pertemuan ini saya melanjutkan pengembangan halaman sebelumnya. CSS dipisah berdasarkan fungsinya agar lebih mudah diatur.

Beberapa file yang digunakan:

- `tokens.css` untuk menyimpan nilai desain
- `base.css` untuk pengaturan dasar
- `layout.css` untuk tata letak
- `komponen.css` untuk kartu, tombol, dan komponen lainnya
- `tema.css` untuk pengaturan tema
- `responsif.css` untuk menyesuaikan tampilan pada ukuran layar berbeda

## Pertemuan 6

Dokumentasi pertemuan ini belum saya lengkapi.

## Pertemuan 7

Dokumentasi pertemuan ini belum saya lengkapi.

## Pertemuan 8 - Dasar JavaScript

Pada pertemuan ini saya belajar menggunakan JavaScript untuk menyimpan dan mengolah data.

Saya membuat objek profil yang berisi nama, peran, dan keahlian. Saya juga membuat array `daftarProyek` yang berisi beberapa proyek beserta tahun dan status pengerjaannya.

Beberapa hal yang saya pelajari:

- Menampilkan data menggunakan `console.log()` dan `console.table()`
- Mengambil data dengan `find()`
- Memilih data menggunakan `filter()`
- Mengubah data menggunakan `map()`
- Mengurutkan data menggunakan `sort()`

Data proyek ini kemudian digunakan lagi pada pertemuan 9.

## Pertemuan 9 - DOM, Event, dan Interaktivitas

Pada pertemuan ini saya belajar menghubungkan JavaScript dengan elemen HTML agar halaman bisa menampilkan data dan merespons tindakan pengguna.

### Memilih elemen DOM

Saya menggunakan `document.querySelector()` untuk mengambil elemen yang dibutuhkan, seperti wadah daftar proyek, tombol filter, dan form.

### Menampilkan daftar proyek

Daftar proyek ditampilkan berdasarkan array `daftarProyek`. Saya menggunakan `createElement()` untuk membuat elemen baru, `textContent` untuk mengisi teks, dan `append()` untuk menambahkannya ke halaman.

Sebelum menampilkan daftar baru, wadah dikosongkan terlebih dahulu supaya kartu tidak bertambah terus setiap kali filter digunakan.

### Filter proyek

Saya membuat tiga tombol filter:

- Semua
- Selesai
- Dalam Proses

Filter menggunakan event delegation, yaitu memasang satu pendengar event pada elemen induk untuk menangani klik tombol-tombol di dalamnya.

Tombol yang dipilih juga diberi kelas `aktif` supaya pengguna bisa mengetahui filter yang sedang digunakan.

### Validasi form

Saya menambahkan validasi pada form top up untuk memeriksa nama, email, dan jumlah diamond.

Jika data belum sesuai, browser akan menampilkan pesan validasi. Jika semua data sudah valid, akan muncul pesan konfirmasi.

Form ini masih berupa latihan di browser dan belum terhubung ke database.

### Pengujian dan debugging

Selama mengerjakan latihan, saya menggunakan Console dan Elements pada Developer Tools untuk memeriksa elemen, mencoba kode, dan mencari penyebab error.

Saya juga belajar bahwa nama ID dan kelas pada JavaScript harus sesuai dengan yang ada di HTML.

## Catatan Penggunaan AI

Selama mengerjakan tugas, saya menggunakan AI untuk membantu memahami materi, mencari penyebab error, dan mendapatkan contoh kode.

Bagian yang dibantu AI antara lain penjelasan JavaScript, pemilihan elemen DOM, pembuatan daftar proyek, filter, dan validasi form.

Saya juga menjalankan dan mencoba kode di browser, memeriksa hasilnya melalui Console, serta memperbaiki bagian yang bermasalah. Saya menggunakan bantuan tersebut sambil mempelajari fungsi kode yang digunakan.

## Teknologi yang Digunakan

- HTML
- CSS
- JavaScript
- Visual Studio Code
- Browser Developer Tools
- Git dan GitHub

## Penutup

Proyek ini saya gunakan untuk belajar membuat halaman web secara bertahap, mulai dari HTML dan CSS sampai menggunakan JavaScript untuk menampilkan data dan membuat halaman lebih interaktif.

# PABW - Luqman Atharasyid Aryaputra

Repo ini berisi tugas-tugas mata kuliah Pengembangan Aplikasi Berbasis Web (PABW). Setiap pertemuan disimpan dalam folder yang berbeda supaya lebih mudah dicari.

## Pertemuan 3 - Halaman Profil Saya

Topik halaman saya adalah Tempat Top Up Diamond Game.

Halaman ini berisi daftar game yang bisa dipilih untuk top up diamond. Saya membuat beberapa bagian, yaitu Game Populer, Top Up Diamond, dan Tentang Saya.

Bagian yang ada di halaman:

- Judul halaman: Tempat Top Up Diamond Game
- Navigasi: Game Populer, Top Up Diamond, dan Tentang Saya
- Daftar game beserta jumlah diamond dan harganya
- Form untuk memasukkan data top up
- Gambar pilihan game

## Pertemuan 4 - Design Token

Pada pertemuan ini saya belajar menggunakan design token supaya pengaturan tampilan lebih mudah dan konsisten.

Beberapa token yang saya gunakan:

| Token             | Nilai     | Kegunaan                |
| ----------------- | --------- | ----------------------- |
| `--color-primary` | `#B1D402` | Warna tombol dan tautan |
| `--color-fg`      | `#FFFFFF` | Warna teks              |
| `--color-bg`      | `#827D7D` | Warna latar halaman     |
| `--radius-md`     | `0.5rem`  | Sudut kartu dan tombol  |
| `--space-4`       | `1rem`    | Jarak antarelemen       |

File CSS dipisah menjadi beberapa bagian, seperti `tokens.css`, `base.css`, `layout.css`, `komponen.css`, dan `tema.css`.

## Pertemuan 5 - Pengembangan CSS

Pada pertemuan ini saya melanjutkan pengembangan halaman sebelumnya. CSS dipisah berdasarkan fungsinya agar lebih mudah diatur.

Beberapa file yang digunakan:

- `tokens.css` untuk menyimpan nilai desain
- `base.css` untuk pengaturan dasar
- `layout.css` untuk tata letak
- `komponen.css` untuk kartu, tombol, dan komponen lainnya
- `tema.css` untuk pengaturan tema
- `responsif.css` untuk menyesuaikan tampilan pada ukuran layar berbeda

## Pertemuan 6

Dokumentasi pertemuan ini belum saya lengkapi.

## Pertemuan 7

Dokumentasi pertemuan ini belum saya lengkapi.

## Pertemuan 8 - Dasar JavaScript

Pada pertemuan ini saya belajar menggunakan JavaScript untuk menyimpan dan mengolah data.

Saya membuat objek profil yang berisi nama, peran, dan keahlian. Saya juga membuat array `daftarProyek` yang berisi beberapa proyek beserta tahun dan status pengerjaannya.

Beberapa hal yang saya pelajari:

- Menampilkan data menggunakan `console.log()` dan `console.table()`
- Mengambil data dengan `find()`
- Memilih data menggunakan `filter()`
- Mengubah data menggunakan `map()`
- Mengurutkan data menggunakan `sort()`

Data proyek ini kemudian digunakan lagi pada pertemuan 9.

## Pertemuan 9 - DOM, Event, dan Interaktivitas

Pada pertemuan ini saya belajar menghubungkan JavaScript dengan elemen HTML agar halaman bisa menampilkan data dan merespons tindakan pengguna.

### Memilih elemen DOM

Saya menggunakan `document.querySelector()` untuk mengambil elemen yang dibutuhkan, seperti wadah daftar proyek, tombol filter, dan form.

### Menampilkan daftar proyek

Daftar proyek ditampilkan berdasarkan array `daftarProyek`. Saya menggunakan `createElement()` untuk membuat elemen baru, `textContent` untuk mengisi teks, dan `append()` untuk menambahkannya ke halaman.

Sebelum menampilkan daftar baru, wadah dikosongkan terlebih dahulu supaya kartu tidak bertambah terus setiap kali filter digunakan.

### Filter proyek

Saya membuat tiga tombol filter:

- Semua
- Selesai
- Dalam Proses

Filter menggunakan event delegation, yaitu memasang satu pendengar event pada elemen induk untuk menangani klik tombol-tombol di dalamnya.

Tombol yang dipilih juga diberi kelas `aktif` supaya pengguna bisa mengetahui filter yang sedang digunakan.

### Validasi form

Saya menambahkan validasi pada form top up untuk memeriksa nama, email, dan jumlah diamond.

Jika data belum sesuai, browser akan menampilkan pesan validasi. Jika semua data sudah valid, akan muncul pesan konfirmasi.

Form ini masih berupa latihan di browser dan belum terhubung ke database.

### Pengujian dan debugging

Selama mengerjakan latihan, saya menggunakan Console dan Elements pada Developer Tools untuk memeriksa elemen, mencoba kode, dan mencari penyebab error.

Saya juga belajar bahwa nama ID dan kelas pada JavaScript harus sesuai dengan yang ada di HTML.

## Catatan Penggunaan AI

Selama mengerjakan tugas, saya menggunakan AI untuk membantu memahami materi, mencari penyebab error, dan mendapatkan contoh kode.

Bagian yang dibantu AI antara lain penjelasan JavaScript, pemilihan elemen DOM, pembuatan daftar proyek, filter, dan validasi form.

Saya juga menjalankan dan mencoba kode di browser, memeriksa hasilnya melalui Console, serta memperbaiki bagian yang bermasalah. Saya menggunakan bantuan tersebut sambil mempelajari fungsi kode yang digunakan.

## Teknologi yang Digunakan

- HTML
- CSS
- JavaScript
- Visual Studio Code
- Browser Developer Tools
- Git dan GitHub

## Penutup

Proyek ini saya gunakan untuk belajar membuat halaman web secara bertahap, mulai dari HTML dan CSS sampai menggunakan JavaScript untuk menampilkan data dan membuat halaman lebih interaktif.

## Pertemuan 11 — Modul, State, dan Penyimpanan Klien

Pada pertemuan ini saya belajar memisahkan kode JavaScript menjadi beberapa modul, mengelola state aplikasi, dan menyimpan data di browser menggunakan `localStorage`.

### Pembagian Modul JavaScript

Saya membagi kode JavaScript berdasarkan tanggung jawab masing-masing file:

- `api.js` untuk mengambil data proyek dari API.
- `data.js` untuk menyimpan data profil dan fungsi pengolahan data proyek.
- `state.js` untuk mengelola state proyek, kategori aktif, dan favorit.
- `dom.js` untuk menampilkan data dan mengatur tampilan halaman.
- `events.js` untuk mengatur event tombol filter, reset favorit, dan formulir.
- `app.js` untuk menghubungkan modul dan menjalankan aplikasi.

### Pengelolaan State

Saya menggunakan state untuk menyimpan daftar proyek, kategori filter yang aktif, dan daftar proyek favorit. Ketika state berubah, tampilan halaman diperbarui agar sesuai dengan data terbaru.

### Penyimpanan dengan localStorage

Saya menggunakan `localStorage` untuk menyimpan daftar ID proyek favorit agar tetap tersedia setelah halaman dimuat ulang. Data disimpan menggunakan `JSON.stringify()` dan dibaca kembali menggunakan `JSON.parse()`.

Saya juga menambahkan penanganan kesalahan menggunakan `try...catch`. Jika data penyimpanan rusak atau formatnya tidak sesuai, aplikasi menggunakan daftar favorit kosong agar tetap dapat berjalan.

### Pengujian

Saya mencoba beberapa fitur melalui browser dan Developer Tools:

- Menampilkan daftar proyek dari API.
- Memfilter proyek berdasarkan status.
- Menambahkan dan menghapus favorit.
- Memastikan favorit tetap tersimpan setelah halaman dimuat ulang.
- Menguji penanganan data `localStorage` yang rusak.
- Menggunakan tombol reset untuk mengosongkan semua favorit.

### Catatan Penggunaan AI

Saya menggunakan AI untuk membantu memahami pembagian modul, memperbaiki kode JavaScript, dan mencari penyebab masalah. Saya juga menjalankan dan menguji kode di browser, memeriksa Console, serta mencoba fitur penyimpanan favorit.

### Teknologi yang Digunakan

- HTML
- CSS
- JavaScript ES Modules
- Fetch API
- JSON
- localStorage
- Visual Studio Code
- Browser Developer Tools
- Git dan GitHub

## Pertemuan 12 — Build Tooling, npm, dan Framework SPA

Pada pertemuan ini saya memindahkan halaman profil dan daftar proyek ke Vue 3 menggunakan Vite. Saya belajar membagi halaman menjadi komponen, menggunakan state reaktif, dan membuat build produksi.

### Vue 3 dan Komponen

Saya menggunakan beberapa komponen Vue untuk membagi halaman berdasarkan fungsinya:

- `KepalaProfil.vue` untuk menampilkan informasi profil.
- `DaftarProyek.vue` untuk menampilkan daftar proyek dan filter kategori.
- `FormTopup.vue` untuk formulir top up diamond.
- `TentangSaya.vue` untuk bagian tentang saya.

Data profil diteruskan ke komponen melalui props, sedangkan daftar proyek dan kategori dikelola menggunakan state bersama.

### State Reaktif dan Penyimpanan

Saya menggunakan `reactive()` dari Vue untuk mengelola state aplikasi. Saya juga menggunakan `computed()` untuk menyaring daftar proyek berdasarkan kategori aktif.

Saya menggunakan `onMounted()` untuk memulihkan pilihan terakhir dan mengambil data proyek melalui Fetch API. Fungsi `watch()` digunakan untuk menyimpan perubahan state ke `localStorage` dalam format JSON.

Saya juga menguji penanganan data penyimpanan yang rusak agar aplikasi dapat kembali menggunakan nilai bawaan.

### Build Produksi

Saya menggunakan Vite untuk membangun dan menjalankan hasil produksi:

- `npm run dev` untuk menjalankan server pengembangan.
- `npm run build` untuk menghasilkan folder `dist/`.
- `npm run preview` untuk mencoba hasil build produksi.

Build berhasil dijalankan dan halaman dapat dibuka melalui server preview. Saya memeriksa permintaan berkas melalui tab Network pada Developer Tools untuk membandingkan versi pengembangan dengan hasil build.

### Teknologi yang Digunakan

- Vue 3
- Vite
- JavaScript
- HTML dan CSS
- Fetch API
- JSON
- `localStorage`
- npm
- Git dan GitHub

### Catatan Penggunaan AI

Saya menggunakan AI untuk membantu memahami instruksi worksheet, mempelajari konsep Vue, menyusun dan meninjau kode komponen, mengelola state reaktif, serta mencari penyebab masalah saat pengujian.

Saya menjalankan proyek sendiri, memeriksa hasil melalui browser dan Developer Tools, menguji penyimpanan, menjalankan build, dan memeriksa hasil preview. Saya juga mempelajari kembali kode yang digunakan agar dapat menjelaskan fungsinya.
