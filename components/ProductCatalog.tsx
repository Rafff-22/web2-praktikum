"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductCatalog() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = [
    "Semua",
    ...Array.from(new Set(products.map((product) => product.category))),
  ];

  const filteredProducts = products.filter((product) => {
    const keyword = search.trim().toLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(keyword) ||
      product.description.toLowerCase().includes(keyword);

    const matchesCategory =
      selectedCategory === "Semua" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="katalog" className="py-10">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
          Produk pilihan
        </p>

        <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
          Katalog Produk
        </h2>

        <p className="mt-2 text-slate-600">
          Temukan produk unggulan dari usaha lokal.
        </p>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="search"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Cari produk
          </label>

          <input
            id="search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Masukkan nama produk..."
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Filter kategori
          </label>

          <select
            id="category"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mb-4 text-sm text-slate-600" aria-live="polite">
        Menampilkan {filteredProducts.length} produk
      </p>

      {filteredProducts.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
          <h3 className="font-semibold text-slate-900">Produk tidak ditemukan</h3>

          <p className="mt-2 text-sm text-slate-600">
            Coba kata kunci atau kategori yang berbeda.
          </p>
        </div>
      )}
    </section>
  );
}
