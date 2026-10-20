export default function PromoPage() {
  const buildTime = new Date().toLocaleTimeString("id-ID");

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800">Promo</h1>
      <p className="mt-4 text-gray-700">
        Dapatkan diskon spesial hingga 50% untuk semua produk elektronik hari ini saja!
        Buruan beli sebelum kehabisan stok.
      </p>
      <p className="mt-6 text-sm text-gray-500">
        Halaman ini dibuat saat build: {buildTime}
      </p>
    </main>
  );
}