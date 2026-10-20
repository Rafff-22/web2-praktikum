export const dynamic = "force-dynamic";

export default function DashboardPage() {
  const now = new Date().toLocaleTimeString("id-ID");

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800">Dashboard (SSR)</h1>
      <p className="mt-4 text-gray-700">
        Waktu server saat permintaan ini diproses: {now}
      </p>
      <p className="mt-2 text-sm text-gray-500">
        Refresh halaman — waktu akan selalu berubah.
      </p>
    </main>
  );
}