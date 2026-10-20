export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: "electronics" | "fashion" | "food";
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type ProductPreview = Pick<Product, "id" | "name">;
export type ProductDraft = Partial<Product>;
export type ProductUpdate = Omit<Product, "id">;
export type ProductMap = Record<string, Product>;