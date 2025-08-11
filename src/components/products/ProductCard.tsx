"use client";
import Image from "next/image";

import { useCartStore } from "../../lib/stores/useCartStore";

import { Product } from "@/types.d";
import { useNotification } from "@/lib/context/NotificationContext";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addNotification } = useNotification();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product, addNotification);
  };

  return (
    <div className="flex flex-col items-start aspect-auto">
      <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-w-[295px] aspect-square mb-2.5 xl:mb-4 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          width={100}
          height={100}
          className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
        />
      </div>
      <strong className="text-black xl:text-xl">{product.title}</strong>
      <div className="flex items-center space-x-[5px] xl:space-x-2.5">
        <span className="font-bold text-black text-xl xl:text-2xl">
          ${product.price}
        </span>
        <button
          title="Add to cart"
          className="ml-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 flex items-end"
          onClick={handleAddToCart}
        >
          <Icon icon="iconoir:cart" width="24" height="24"></Icon>
        </button>
      </div>
    </div>
  );
}
