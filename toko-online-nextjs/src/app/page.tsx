import { demoProducts } from "@/lib/products";

const rupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);

export default function Home() {
  return (
    <main>
      <div className="topbar">Gratis ongkir untuk pesanan tertentu · Belanja mudah dan aman</div>
      <header className="header wrap">
        <a className="brand" href="/">TOKO<span>ONLINE.</span></a>
        <nav><a href="#produk">Produk</a><a href="#keunggulan">Keunggulan</a><a href="#kontak">Kontak</a></nav>
        <a className="cart" href="#produk">Keranjang <span>0</span></a>
      </header>

      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">KOLEKSI PILIHAN</p>
          <h1>Temukan produk yang membuat harimu lebih mudah.</h1>
          <p className="muted">Belanja kebutuhan pilihan dengan proses sederhana, harga transparan, dan pembayaran aman.</p>
          <a className="primary" href="#produk">Belanja sekarang <span>→</span></a>
        </div>
        <div className="hero-art">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200" alt="Suasana toko modern" />
          <div className="hero-note"><strong>Pilihan terbaik</strong><br/><span>Untuk kebutuhan sehari-hari</span></div>
        </div>
      </section>

      <section className="wrap products-section" id="produk">
        <div className="section-heading"><div><p className="eyebrow">BELANJA SEKARANG</p><h2>Produk pilihan</h2></div><span className="muted">Koleksi terbaru untukmu</span></div>
        <div className="products">
          {demoProducts.map((product) => (
            <article className="product" key={product.id}>
              <div className="product-image"><img src={product.imageUrl} alt={product.name}/><span className="tag">Tersedia</span></div>
              <div className="product-info"><p className="category">{product.category}</p><h3>{product.name}</h3><p className="price">{rupiah(product.price)}</p><p className="stock">Stok: {product.stock}</p><button className="secondary" disabled>Tambah ke keranjang — segera hadir</button></div>
            </article>
          ))}
        </div>
      </section>

      <section className="benefits" id="keunggulan"><div className="wrap benefit-grid">
        <div><span>01</span><h3>Produk pilihan</h3><p>Katalog produk dengan informasi harga dan stok yang jelas.</p></div>
        <div><span>02</span><h3>Pembayaran aman</h3><p>Integrasi payment gateway dengan konfirmasi dari server.</p></div>
        <div><span>03</span><h3>Pesanan terpantau</h3><p>Status pesanan dan pengelolaan transaksi dalam satu dashboard.</p></div>
      </div></section>
      <footer id="kontak"><div className="wrap footer-inner"><a className="brand" href="/">TOKO<span>ONLINE.</span></a><p>© {new Date().getFullYear()} Toko Online. Semua hak dilindungi.</p></div></footer>
    </main>
  );
}
