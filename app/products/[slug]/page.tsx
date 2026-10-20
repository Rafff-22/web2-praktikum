import { getProducts, getProductBySlug } from "@/lib/products";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return <p className="p-8">Produk tidak ditemukan.</p>;
  }

  const now = new Date().toLocaleTimeString("id-ID");

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800">{product.name}</h1>
      <p className="mt-4 text-2xl text-gray-700">Rp{product.price.toLocaleString("id-ID")}</p>
      <p className="mt-2 text-gray-500">Kategori: {product.category}</p>
      <p className="text-gray-500">Status: {product.inStock ? "Tersedia" : "Habis"}</p>
      <p className="mt-6 text-sm text-gray-500">
        Halaman ini statis, diregenerasi otomatis setiap 60 detik (ISR).
      </p>
      <p className="text-sm text-gray-500">Dibuat pada: {now}</p>
    </main>
  );
}