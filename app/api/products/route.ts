import { NextResponse } from "next/server";
import { createProduct, getProducts } from "@/lib/product-store";
import { productSchema } from "@/lib/product-schema";

export const runtime = "nodejs";

export async function GET() {
  try {
    const products = await getProducts();
    return NextResponse.json(products);
  } catch (error) {
    console.error("Gagal membaca produk:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Body harus berupa JSON yang valid" },
      { status: 400 },
    );
  }

  const parsed = productSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  try {
    const newProduct = await createProduct(parsed.data);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("Gagal menyimpan produk:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server." },
      { status: 500 },
    );
  }
}
