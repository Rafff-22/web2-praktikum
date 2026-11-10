import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import DeleteProductButton from "@/components/products/DeleteProductButton";
import { getProducts } from "@/lib/product-store";

export const runtime = "nodejs";

export const dynamic = "force-dynamic";

export default async function ProdukPage() {
  const products = await getProducts();

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <main className="mx-auto max-w-6xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="mb-0 text-3xl font-bold">Katalog Produk UMKM</h1>
        <Link
          href="/produk/new"
          className="rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
        >
          Tambah Produk
        </Link>
      </div>

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
        <p>Belum ada produk yang tersedia.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="flex h-full flex-col">
              <ProductCard product={product} />
              <div className="mt-3 flex items-center gap-2">
                <Link
                  href={`/produk/${product.id}/edit`}
                  className="rounded border px-3 py-1 text-sm font-semibold text-blue-700"
                >
                  Ubah produk
                </Link>
                <DeleteProductButton id={product.id} />
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
