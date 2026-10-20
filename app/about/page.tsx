import { getProfile } from "@/lib/profile";
import Link from "next/link";
import MotivationToggle from "@/components/MotivationToggle";

export default async function About() {
  const profile = await getProfile();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
      <section className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-blue-800">Tentang Saya</h1>

        <dl className="mt-6 space-y-4">
          <div>
            <dt className="text-sm font-semibold uppercase text-gray-500">Nama</dt>
            <dd className="text-lg text-gray-900">{profile.nama}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase text-gray-500">NIM</dt>
            <dd className="text-lg text-gray-900">{profile.nim}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase text-gray-500">
              Motivasi Mengikuti Mata Kuliah Ini
            </dt>
            <MotivationToggle text={profile.motivasi} />
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