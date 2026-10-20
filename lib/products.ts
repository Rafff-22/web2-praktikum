import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  return [
    { id: "1", name: "Laptop", slug: "laptop", price: 12000000, category: "electronics", inStock: true },
    { id: "2", name: "Kaos", slug: "kaos", price: 85000, category: "fashion", inStock: true },
    { id: "3", name: "Kopi", slug: "kopi", price: 25000, category: "food", inStock: false },
  ];
}

export async function getProductById(id: string): Promise<Product | null> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const products = await getProducts();
  return products.find((p) => p.id === id) ?? null;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find((p) => p.slug === slug) ?? null;
}