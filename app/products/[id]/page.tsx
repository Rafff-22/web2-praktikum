import { getProductById } from "@/lib/products";
import { Suspense } from "react";
import ProductSkeleton from "@/components/ProductSkeleton";

async function ProductDetail({ id }: { id: string }) {
  const product = await getProductById(id);

  if (!product) {
    return <p className="p-8 text-center text-red-600">Produk tidak ditemukan.</p>;
  }

  return (
    <div className="rounded-lg border p-8 shadow-sm max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800">{product.name}</h1>
      <p className="mt-4 text-2xl text-gray-700">
        Rp{product.price.toLocaleString("id-ID")}
      </p>
      <p className="mt-2 text-gray-500">Kategori: {product.category}</p>
      <p className="text-gray-500">
        Status: {product.inStock ? "Tersedia" : "Habis"}
      </p>
    </div>
  );
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className="p-8">
      <p className="mb-4 text-gray-600">
        Header halaman muncul instan — detail menyusul.
      </p>
      <Suspense fallback={<ProductSkeleton />}>
        <ProductDetail id={id} />
      </Suspense>
    </div>
  );
}