import Link from "next/link";
import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="grid grid-cols-1 gap-4 p-8 md:grid-cols-3">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
          <Link
            href={`/products/${product.slug}`}
            className="mt-2 inline-block text-blue-600 underline hover:text-blue-800"
          >
            Lihat detail →
          </Link>
        </div>
      ))}
    </main>
  );
}