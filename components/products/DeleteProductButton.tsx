"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { deleteProductAction } from "@/app/produk/actions";

export default function DeleteProductButton({ id }: { id: string }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState("");

  function handleDelete() {
    const confirmed = window.confirm(
      "Apakah Anda yakin ingin menghapus produk ini?",
    );

    if (!confirmed) {
      return;
    }

    setMessage("");

    startTransition(async () => {
      const result = await deleteProductAction(id);

      setMessage(result.message);

      if (result.success) {
        router.refresh();
      }
    });
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleDelete}
        disabled={pending}
        className="mt-3 rounded border border-red-600 px-3 py-1 text-red-600 disabled:opacity-50"
      >
        {pending ? "Menghapus..." : "Hapus"}
      </button>

      <p role="status" aria-live="polite">{message}</p>
    </div>
  );
}
