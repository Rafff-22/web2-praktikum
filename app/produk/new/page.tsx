import ProductForm from "@/components/products/ProductForm";

export default function NewProductPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Tambah Produk</h1>
      <ProductForm />
    </main>
  );
}
