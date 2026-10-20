import { Product } from "@/types/product";
import AddToCartButton from "./AddToCartButton";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-gray-600">Rp{product.price.toLocaleString("id-ID")}</p>
      <AddToCartButton product={product} />
    </div>
  );
}