"use client";

import useFromStore from "@/lib/hooks/useFromStore";
import { useCartStore } from "@/lib/stores/useCartStore";
import { Icon } from "@iconify/react";
import Link from "next/link";

const CartBtn = () => {
  const cart = useFromStore(useCartStore, (state) => state.cart);

  return (
    <Link href="/cart" className="relative mr-[14px] p-1">
      <Icon icon="iconoir:cart" width="24" height="24"/>
      <span className="border bg-black text-white rounded-full w-fit-h-fit px-1 text-xs absolute -top-3 left-1/2 -translate-x-1/2">
        {cart?.length}
      </span>
    </Link>
  );
};

export default CartBtn;
