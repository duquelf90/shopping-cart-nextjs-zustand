import Link from "next/link";
import ProductCard from "./ProductCard";

import { Product } from "@/types.d";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
