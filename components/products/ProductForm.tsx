"use client";

import { useActionState } from "react";
import Link from "next/link";
import { createProductAction } from "@/app/produk/actions";
import type { ProductActionState } from "@/app/produk/actions";

const initialState: ProductActionState = {
  success: false,
  message: "",
};

export default function ProductForm() {
  const [state, formAction, pending] = useActionState(
    createProductAction,
    initialState,
  );

  if (state.success) {
    return (
      <div>
        <div role="status">{state.message}</div>
        <Link href="/produk" className="mt-4 inline-block text-sm font-semibold text-blue-700 underline">
          Kembali ke katalog produk
        </Link>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
          Nama Produk
        </label>
        <input
          id="name"
          name="name"
          required
          minLength={3}
          maxLength={150}
          className="w-full rounded border p-2"
        />
        <p className="text-sm text-red-600">
          {state.errors?.name?.[0]}
        </p>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-slate-700">
          Deskripsi
        </label>
        <textarea
          id="description"
          name="description"
          required
          minLength={10}
          className="w-full rounded border p-2"
        />
        <p className="text-sm text-red-600">
          {state.errors?.description?.[0]}
        </p>
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium text-slate-700">
          Harga
        </label>
        <input
          id="price"
          name="price"
          type="number"
          min="0.01"
          step="0.01"
          required
          className="w-full rounded border p-2"
        />
        <p className="text-sm text-red-600">
          {state.errors?.price?.[0]}
        </p>
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-slate-700">
          Kategori
        </label>
        <input
          id="category"
          name="category"
          required
          minLength={2}
          maxLength={100}
          className="w-full rounded border p-2"
        />
        <p className="text-sm text-red-600">
          {state.errors?.category?.[0]}
        </p>
      </div>

      <p role="status" aria-live="polite">
        {state.message}
      </p>

      <button
        type="submit"
        disabled={pending}
        className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
      >
        {pending ? "Menyimpan..." : "Simpan Produk"}
      </button>

      <Link href="/produk" className="mt-4 inline-block text-sm font-semibold text-blue-700 underline">
        Batal
      </Link>
    </form>
  );
}
