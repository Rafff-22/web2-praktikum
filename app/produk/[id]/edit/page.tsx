import { notFound } from "next/navigation";
import ProductEditForm from "@/components/products/ProductEditForm";
import { getProductById } from "@/lib/product-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Ubah Produk</h1>
      <ProductEditForm product={product} />
    </main>
  );
}
