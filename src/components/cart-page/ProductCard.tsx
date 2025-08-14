import { useCartStore } from "@/lib/stores/useCartStore";
import { Product } from "@/types/types";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CartCounter } from "../ui/CartCounter";

type ProductCardProps = {
  product: Product;
  incrementItem?: (item: Product) => void;
  decrementItem?: (item: Product) => void;
};

export const ProductCard = ({
  product,
  incrementItem,
  decrementItem,
}: ProductCardProps) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  return (
    <div className="flex items-start space-x-4">
      <Link
        href={`/product/${product.id}`}
        className="bg-[#F0EEED] rounded-lg w-full min-w-[100px] max-w-[100px] sm:max-w-[124px] aspect-square overflow-hidden"
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={124}
          height={124}
          className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-500"
          priority
        />
      </Link>
      <div className="flex w-full self-stretch flex-col">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-black font-bold text-base xl:text-xl">
            {product.title}
          </h1>
          <div
            className="h-5 w-5 md:h-9 md:w-9"
            onClick={() => removeFromCart(product)}
          >
            <Icon
              icon="material-symbols:delete-outline-sharp"
              width="24"
              height="24"
              color="red"
            ></Icon>
          </div>
        </div>
        <div className="flex items-center flex-wrap justify-between">
          <div className="flex items-center space-x-[5px] xl:space-x-2.5">
            <span className="font-bold text-black text-xl xl:text-2xl">
              ${product.price}
            </span>
          </div>

          <CartCounter
            counter={product.quantity}
            onAdd={() => incrementItem && incrementItem(product)} // Incrementa el producto
            onRemove={() => decrementItem && decrementItem(product)} // Decrementa el producto
          />
        </div>
      </div>
    </div>
  );
};
