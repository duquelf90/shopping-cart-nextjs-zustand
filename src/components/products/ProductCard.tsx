"use client";
import Image from "next/image";

import { useCartStore } from "../../lib/stores/useCartStore";

import { Product } from "@/types/types";
import { useNotification } from "@/lib/context/NotificationContext";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "../ui/button";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addNotification } = useNotification();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product, addNotification);
  };
  console.log(product)

  return (
    <div className="flex flex-col items-start aspect-auto">
      <Link href={`/product/${product.id}`} className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-w-[295px] aspect-square mb-2.5 xl:mb-4 overflow-hidden">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={100}
          height={100}
          className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
        />
      </Link>
      <strong className="text-black xl:text-lg">{product.title}</strong>
      <div className="flex items-center w-full space-x-[5px] xl:space-x-2.5 mt-2 justify-between">
        <span className="font-bold text-black text-xl xl:text-2xl">
          ${product.price}
        </span>
        <Button
          title="Add to cart"
          className="ml-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 flex items-end"
          onClick={handleAddToCart}
        >
          <Icon icon="iconoir:cart" width="24" height="24"></Icon>
        </Button>
      </div>
    </div>
  );
}
