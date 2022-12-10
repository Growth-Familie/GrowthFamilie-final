# GROWTH FAMILIE WEB APPLICATION
Jika ingin mencoba menjalankan aplikasi Growth Familie secara lokal (localhost) buatlah file `.env` selevel dengan file .env.example dan isi seperti berikut:

```
API_KEY="<TOKEN>"
USER_STORAGE="@growfie-user"
```

Ganti ***\<TOKEN\>*** dengan bearer token untuk Growth Familie yang telah kami simpan dalam dokumen project brief di bab lampiran.

Begitu juga dengan akun yang digunakan untuk login ke halaman dashboard telah kami simpan di dokumen project brief di bab lampiran.

**Notes:**
+ Kami menggunakan Node.Js versi 16.17.0 LTS
+ [Dokumentasi API](https://github.com/Growth-Familie/back-end#readme)

###### DAFTAR ISI
+ [Tampilan Website](#tampilan-website)
    + [Halaman Home](#halaman-home)
    + [Halaman Kumpulan Artikel Berdasarkan Kategori](#halaman-kumpulan-artikel-berdasarkan-kategori)
    + [Halaman Detail Artikel](#halaman-detail-artikel)
    + [Halaman List Rekomendasi Produk](#halaman-list-rekomendasi-produk-budgeting)
    + [Halaman Login](#halaman-login)
    + [Halaman Dashboard Artikel-artikel](#halaman-dashboard-artikel-artikel)
    + [Halaman Dashboard Add Artikel](#halaman-dashboard-add-artikel)
    + [Halaman Dashboard Edit Artikel](#halaman-dashboard-edit-artikel)
    + [Halaman Dashboard Rekomendasi Produk](#halaman-dashboard-rekomendasi-produk)
    + [Halaman Dashboard Akun Admin](#halaman-dashboard-akun-admin)
    + [Halaman About Growth Familie](#halaman-about-growth-familie)
+ [Project Resource](#project-resource)
    + [Bahasa Pemrograman yang Digunakan](#bahasa-pemrograman-yang-digunakan)
    + [Framework](#framework)
    + [Hosting](#hosting)
    + [Database](#database)
    + [Dokumentasi Proyek](#dokumentasi-proyek)
    + [Text Editor](#text-editor)

## Tampilan Website
Berikut adalah beberapa screenshots yang menampilkan secara garis besar Aplikasi Growth Familie.

### Halaman Home
![Home Page Growth Familie](https://raw.githubusercontent.com/Growth-Familie/src-content/master/images/screenshot_aplikasi/common/home.png)

### Halaman Kumpulan Artikel Berdasarkan Kategori
![Articles Page Growth Familie](https://raw.githubusercontent.com/Growth-Familie/src-content/master/images/screenshot_aplikasi/common/articles.png)

### Halaman Detail Artikel
![Article Detail Growth Familie ](https://raw.githubusercontent.com/Growth-Familie/src-content/master/images/screenshot_aplikasi/common/detail-article.png)

### Halaman List Rekomendasi Produk (Budgeting)
![Product Recommendations Growth Familie](https://raw.githubusercontent.com/Growth-Familie/src-content/master/images/screenshot_aplikasi/common/products.png)

### Halaman Login
![Login Page Growth Familie](https://raw.githubusercontent.com/Growth-Familie/src-content/master/images/screenshot_aplikasi/common/login.png)

### Halaman Dashboard Artikel-artikel
![Dashboard Articles Growth Familie](https://raw.githubusercontent.com/Growth-Familie/src-content/master/images/screenshot_aplikasi/common/dashboard-articles.png)

### Halaman Dashboard Add Artikel
![Dashboard Add Article Growth Familie](https://raw.githubusercontent.com/Growth-Familie/src-content/master/images/screenshot_aplikasi/common/dashboard-add-article.png)

### Halaman Dashboard Edit Artikel
![Dashboard Edit Article Growth Familie](https://raw.githubusercontent.com/Growth-Familie/src-content/master/images/screenshot_aplikasi/common/dashboard-edit-article.png)

### Halaman Dashboard Rekomendasi Produk
![Dashboard Product Recommendations Growth Familie](https://raw.githubusercontent.com/Growth-Familie/src-content/master/images/screenshot_aplikasi/common/dashboard-products.png)

### Halaman Dashboard Akun Admin
![Dashboard Account Admin Growth Familie](https://raw.githubusercontent.com/Growth-Familie/src-content/master/images/screenshot_aplikasi/common/dashboard-account.png)

### Halaman About Growth Familie
![About Us Growth Familie](https://raw.githubusercontent.com/Growth-Familie/src-content/master/images/screenshot_aplikasi/common/about-us.png)

[KEMBALI KE DAFTAR ISI](#daftar-isi)

## Project Resource
Untuk sumber konten yang telah ada kami mencari, mengumpulkan, dan memfilter-nya dari beberapa website sudah dipercaya oleh masyarakat luas. Beberapa konten tersebut bersumber dari:

+ [HALODOC](https://www.halodoc.com/)
+ [HELLO SEHAT](https://hellosehat.com/)
+ [ALODOKTER](https://www.alodokter.com/)

Sedangkan untuk sumber-sumber seperti modul/librari, kami memasang-nya melalui Node Package Manager dan untuk daftar modul/librari yang digunakan bisa dilihat pada file `package.json` bagian dependencies dan devDependencies.

### Bahasa Pemrograman yang Digunakan
+ HTML
+ CSS
+ JavaScript

### Framework
+ Bootstrap 5.2
+ Hapi

### Hosting
+ Netlify
+ Cyclic.sh

### Database
+ MongoDB

### Dokumentasi Proyek
+ GitHub

### Text Editor
+ Visual Studio Code

[KEMBALI KE DAFTAR ISI](#daftar-isi)