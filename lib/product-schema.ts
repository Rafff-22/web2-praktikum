import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Nama produk minimal 3 karakter.")
    .max(150, "Nama produk maksimal 150 karakter."),

  description: z
    .string()
    .trim()
    .min(10, "Deskripsi produk minimal 10 karakter."),

  price: z
    .number()
    .finite("Harga harus berupa angka yang valid.")
    .positive("Harga harus lebih besar dari nol.")
    .max(9999999999.99, "Harga melebihi batas yang diperbolehkan."),

  category: z
    .string()
    .trim()
    .min(2, "Kategori minimal 2 karakter.")
    .max(100, "Kategori maksimal 100 karakter."),
});

export type ProductFormValues = z.infer<typeof productSchema>;
