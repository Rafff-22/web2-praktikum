# Perbandingan REST, GraphQL, dan tRPC

Perbandingan ini berdasarkan praktik Modul 6 pada proyek UMKM Digital Store.

- REST sudah dijalankan: `GET/POST /api/products` dan `GET/POST /api/tugas`.
- GraphQL hanya berupa skema konseptual di `docs/schema.graphql`; tidak ada server GraphQL yang dijalankan.
- tRPC sudah dijalankan melalui `/api/trpc` dan halaman `/trpc-demo`.

| Aspek | REST | GraphQL | tRPC |
| --- | --- | --- | --- |
| Cara pemilihan data | Endpoint dan bentuk respons ditentukan server; klien memilih endpoint yang sesuai. | Klien memilih field yang dibutuhkan lewat query, sehingga respons dapat disesuaikan. | Prosedur memakai tipe router; klien memanggil `getAll`, `getById`, atau `addProduct` dan menerima bentuk data yang sudah ditentukan. |
| Type safety | Tidak otomatis; tipe respons perlu dideklarasikan ulang atau digenerate manual di klien. | Perlu pembuatan tipe dari skema (code generation) agar type-safe. | Kuat secara bawaan karena `AppRouter` diimpor sebagai tipe dari server ke klien. |
| Validasi input | Dilakukan manual di handler, misalnya dengan Zod seperti pada `POST /api/products` dan `POST /api/tugas`. | Validasi dilakukan di resolver; skema GraphQL memvalidasi tipe dan nullability, sedangkan aturan bisnis tetap manual. | Validasi dilakukan di prosedur dengan Zod (`.input(productSchema)`), lalu tipe input ikut tersirat. |
| Kemudahan pengujian (Thunder Client/Postman) | Mudah; endpoint HTTP biasa dapat langsung dipanggil dengan method dan body JSON. | Perlu mengirim query/mutation GraphQL ke satu endpoint, biasanya lewat tool yang mendukung GraphQL. | Bisa diuji lewat endpoint `/api/trpc`, tetapi format request mengikuti protokol tRPC sehingga kurang nyaman dibanding REST biasa. |
| Kebutuhan pustaka tambahan | Tidak wajib; cukup `NextResponse` dan pustaka validasi seperti Zod. | Memerlukan pustaka server GraphQL (misalnya Apollo Server) dan umumnya code generation di klien. | Memerlukan `@trpc/server`, `@trpc/client`, `@trpc/react-query`, dan `@tanstack/react-query`. |
| Cocok digunakan ketika | API publik atau lintas platform yang ingin sederhana dan mudah dikonsumsi berbagai klien. | Klien membutuhkan fleksibilitas memilih field dan ada banyak jenis data yang saling terkait. | Klien dan server sama-sama TypeScript dalam satu proyek sehingga type safety end-to-end menjadi prioritas. |
