# Toko Online — starter project

Starter website toko online barang fisik menggunakan Next.js, PostgreSQL/Prisma, dan Midtrans.

## Yang sudah ada
- Landing page responsif berbahasa Indonesia dengan katalog contoh.
- Struktur database untuk produk, pesanan, dan item pesanan.
- Endpoint awal pembuatan transaksi Midtrans Snap.
- Endpoint penerima notifikasi Midtrans (belum mengubah database).
- Contoh konfigurasi environment.

## Yang belum boleh dianggap siap produksi
Keranjang/checkout, autentikasi admin, CRUD produk, manajemen stok yang aman, ongkir/kurir, validasi harga server-side, penyimpanan order, verifikasi signature webhook dan perubahan status order, kebijakan privasi/ketentuan, serta deployment perlu diselesaikan dan diuji sebelum menerima pembayaran sungguhan. Endpoint pembayaran saat ini adalah kerangka awal, bukan integrasi produksi.

## Menjalankan di Windows
1. Install Node.js versi LTS.
2. Ekstrak ZIP, buka folder proyek di VS Code.
3. Salin `.env.example` menjadi `.env.local` dan isi variabel yang diperlukan.
4. Buka terminal pada folder proyek:
   ```bash
   npm install
   npm run dev
   ```
5. Buka http://localhost:3000.

## Database
Siapkan PostgreSQL, isi `DATABASE_URL`, lalu jalankan:
```bash
npx prisma generate
npx prisma db push
```

## Midtrans
Mulai dengan akun dan kredensial Sandbox Midtrans. Isi `MIDTRANS_SERVER_KEY` dan `MIDTRANS_CLIENT_KEY` di `.env.local`. Gunakan Sandbox sampai alur checkout, webhook, stok, dan status pesanan selesai diuji. Jangan pernah memasukkan Server Key ke kode browser atau mengunggah `.env.local`.

## Deployment
Deploy ke Vercel setelah database PostgreSQL online tersedia. Atur semua environment variables pada pengaturan proyek hosting. Daftarkan URL webhook:
`https://DOMAIN-ANDA/api/midtrans/webhook`

Sebelum live, implementasikan verifikasi notifikasi sesuai dokumentasi resmi Midtrans, idempotensi webhook, validasi nominal dan order dari database, serta pengurangan stok secara transaksional.
