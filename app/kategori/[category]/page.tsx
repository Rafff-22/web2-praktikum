import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/product-store";

export const dynamic = "force-dynamic";

export default async function KategoriPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: encodedCategory } = await params;

  const category = decodeURIComponent(encodedCategory);

  const products = await getProducts();

  const filteredProducts = products.filter(
    (product) =>
      product.category.toLocaleLowerCase("id-ID") ===
      category.toLocaleLowerCase("id-ID")
  );

  if (filteredProducts.length === 0) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl p-6">
      <Link href="/produk" className="text-blue-700 underline">
        Kembali ke katalog
      </Link>

      <h1 className="my-5 text-3xl font-bold">Kategori: {category}</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
