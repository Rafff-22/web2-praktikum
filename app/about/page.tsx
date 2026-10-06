import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
      <section className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-blue-800">Tentang Saya</h1>

        <dl className="mt-6 space-y-4">
          <div>
            <dt className="text-sm font-semibold uppercase text-gray-500">Nama</dt>
            <dd className="text-lg text-gray-900">Andi Muh Rafi Khairan Rusdi</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase text-gray-500">NIM</dt>
            <dd className="text-lg text-gray-900">52024022</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase text-gray-500">
              Motivasi Mengikuti Mata Kuliah Ini
            </dt>
            <dd className="text-gray-700">
              Saya ingin menguasai pengembangan web modern dengan Next.js dan TypeScript agar siap membangun aplikasi web yang sesungguhnya.
            </dd>
          </div>
        </dl>

        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-blue-800 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
        >
          ← Kembali ke Beranda
        </Link>
      </section>
    </main>
  );
}