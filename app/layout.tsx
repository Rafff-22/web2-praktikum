import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UMKM Digital Store",
  description: "Katalog digital produk UMKM lokal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
