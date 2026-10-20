import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Praktikum Web 2",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-gray-50">
        <nav className="bg-blue-900 text-white p-4 flex gap-4">
          <Link href="/" className="hover:underline">Beranda</Link>
          <Link href="/products" className="hover:underline">Produk</Link>
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          <Link href="/promo" className="hover:underline">Promo</Link>
        </nav>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}