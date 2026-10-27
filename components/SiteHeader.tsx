import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-xl font-bold text-blue-700">
          UMKM Digital Store
        </Link>

        <nav aria-label="Navigasi utama">
          <a
            href="#katalog"
            className="text-sm font-medium text-slate-600 hover:text-blue-700"
          >
            Katalog Produk
          </a>
        </nav>
      </div>
    </header>
  );
}
