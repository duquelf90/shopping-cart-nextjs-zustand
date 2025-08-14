"use client";

import useFromStore from "@/lib/hooks/useFromStore";
import { useCartStore } from "@/lib/stores/useCartStore";
import { Icon } from "@iconify/react";

interface Props {
  onCartIconClick: () => void;
  count?:number
}
const CartBtn = ({ onCartIconClick, count }: Props) => {
  const cart = useFromStore(useCartStore, (state) => state.cart);

  return (
    <div className="relative mr-[14px] p-1" onClick={onCartIconClick}>
      <Icon icon="iconoir:cart" width="24" height="24"/>
      <span className="border bg-black text-white rounded-full w-fit-h-fit px-1 text-xs absolute -top-3 left-1/2 -translate-x-1/2">
        {count}
      </span>
    </div>
  );
};

export default CartBtn;
