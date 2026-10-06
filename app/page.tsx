import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-blue-800">
        Selamat Datang di Praktikum Web 2
      </h1>
      <p className="mt-4 text-gray-600">
        Nama: [Andi Muh Rafi Khairan Rusdi] — NIM: [52024002]
      </p>
      <Link
        href="/about"
        className="mt-8 rounded-lg bg-blue-800 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Lihat Halaman About
      </Link>
    </main>
  );
}