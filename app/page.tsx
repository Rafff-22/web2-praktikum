import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import { formatList, sum } from "@/utils/format";


const products: Product[] = [
  { id: "p1", name: "Headphone", slug: "headphone", price: 350000, category: "electronics", inStock: true },
  { id: "p2", name: "Kaos Polos", slug: "kaos-polos", price: 85000, category: "fashion", inStock: true },
  { id: "p3", name: "Keripik Pisang", slug: "keripik-pisang", price: 25000, category: "food", inStock: false },
];



export default function Home() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-bold text-blue-800">Praktikum Web 2</h1>
      <p className="mt-2 text-gray-600">Produk: {formatList(products, (p) => p.name)}</p>
      <p className="text-gray-600">
        Total harga: Rp{sum(products, (p) => p.price).toLocaleString("id-ID")}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <Link href="/about" className="mt-8 inline-block text-blue-700 underline">
        Lihat Halaman About
      </Link>
    </main>
  );
}