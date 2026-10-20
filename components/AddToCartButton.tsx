"use client";

import { useState } from "react";
import { Product } from "@/types/product";

type AddToCartButtonProps = {
  product: Product;
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setAdded(true);
  };

  return (
    <button
      onClick={handleClick}
      disabled={added}
      className={`mt-2 rounded px-3 py-1 text-white transition-colors ${
        added ? "bg-green-600 cursor-default" : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {added ? "✓ Ditambahkan" : "Tambah ke Keranjang"}
    </button>
  );
}