import Image from "next/image";
import { useCartStore } from "@/lib/stores/useCartStore";
import { Icon } from "@iconify/react";
import { Product } from "@/types/types";

interface Props {
  product: Product;
  incrementItem?: (item: Product) => void;
  decrementItem?: (item: Product) => void;
}

export default function CartItem({
  product,
  incrementItem,
  decrementItem,
}: Props) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <li className="flex py-2" key={product.id}>
      <div className="size-24 shrink-0 overflow-hidden">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={100}
          height={100}
          className="size-full object-cover"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <span className="font-bold flex-1">{product.title}</span>
            <p className="ml-4 font-bold">{product.price}</p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-between text-sm">
          <p className="text-gray-500">Qty {product.quantity}</p>

          <div className="flex">
            <button
              title="remove"
              type="button"
              onClick={() => removeFromCart(product)}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              <Icon
                icon="material-symbols:delete-outline-sharp"
                width="24"
                height="24"
              ></Icon>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
