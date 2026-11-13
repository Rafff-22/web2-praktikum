import TrpcProductList from "@/components/TrpcProductList";

export default function TrpcDemoPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-4 px-4 py-8">
      <h1 className="text-2xl font-bold">Produk (tRPC)</h1>
      <TrpcProductList />
    </main>
  );
}
