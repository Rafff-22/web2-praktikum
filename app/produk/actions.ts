"use server";

import { revalidatePath } from "next/cache";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "@/lib/product-store";
import { productSchema } from "@/lib/product-schema";

export type ProductActionState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

function parseFormData(formData: FormData) {
  const rawPrice = formData.get("price");

  return productSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    price:
      typeof rawPrice === "string" && rawPrice.trim() !== ""
        ? Number(rawPrice)
        : NaN,
    category: formData.get("category"),
  });
}

function revalidateProductPages(id?: string) {
  revalidatePath("/");
  revalidatePath("/produk");
  revalidatePath("/kategori/[category]", "page");
  if (id) {
    revalidatePath(`/produk/${id}`);
  }
}

export async function createProductAction(
  _previousState: ProductActionState,
  formData: FormData,
): Promise<ProductActionState> {
  const parsed = parseFormData(formData);

  if (!parsed.success) {
    return {
      success: false,
      message: "Periksa kembali data produk.",
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    await createProduct(parsed.data);
    revalidateProductPages();

    return { success: true, message: "Produk berhasil ditambahkan." };
  } catch (error) {
    console.error("Gagal menambahkan produk:", error);

    return {
      success: false,
      message: "Produk gagal ditambahkan. Periksa data dan koneksi database.",
    };
  }
}

export async function updateProductAction(
  id: string,
  _previousState: ProductActionState,
  formData: FormData,
): Promise<ProductActionState> {
  if (!id.trim()) {
    return { success: false, message: "ID produk tidak valid." };
  }

  const parsed = parseFormData(formData);

  if (!parsed.success) {
    return {
      success: false,
      message: "Periksa kembali data produk.",
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    const product = await updateProduct(id, parsed.data);

    if (!product) {
      return { success: false, message: "Produk tidak ditemukan." };
    }

    revalidateProductPages(id);

    return { success: true, message: "Produk berhasil diperbarui." };
  } catch (error) {
    console.error("Gagal memperbarui produk:", error);

    return {
      success: false,
      message: "Produk gagal diperbarui.",
    };
  }
}

export async function deleteProductAction(
  id: string,
): Promise<ProductActionState> {
  if (!id.trim()) {
    return { success: false, message: "ID produk tidak valid." };
  }

  try {
    const deleted = await deleteProduct(id);

    if (!deleted) {
      return { success: false, message: "Produk tidak ditemukan." };
    }

    revalidateProductPages(id);

    return { success: true, message: "Produk berhasil dihapus." };
  } catch (error) {
    console.error("Gagal menghapus produk:", error);

    return {
      success: false,
      message: "Produk gagal dihapus.",
    };
  }
}
