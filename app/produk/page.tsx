import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/product-store";

export const runtime = "nodejs";

export const dynamic = "force-dynamic";

export default async function ProdukPage() {
  const products = await getProducts();

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="mb-4 text-3xl font-bold">Katalog Produk UMKM</h1>

      <div className="mb-6 flex flex-wrap gap-3">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/kategori/${encodeURIComponent(category)}`}
            className="rounded border px-3 py-2"
          >
            {category}
          </Link>
        ))}
      </div>

      {products.length === 0 ? (
        <p>Belum ada produk.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
