import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import TrpcProvider from "@/components/TrpcProvider";

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
      <body>
        <TrpcProvider>
          <SiteHeader />
          {children}
        </TrpcProvider>
      </body>
    </html>
  );
}
