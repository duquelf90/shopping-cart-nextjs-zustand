import { Product } from "../../types.d";
import Image from "next/image";
import { useCartStore } from "@/stores/useCartStore";
import { Icon } from "@iconify/react";

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
    <li className="flex justify-between items-center gap-4  mb-2 shadow-md p-4">
      <div className="flex items-center">
        <Image
          src={product.thumbnail}
          alt={product.name}
          width={100}
          height={100}
          className="h-10 w-10 rounded-full mr-4"
        />
        <div className="flex flex-col">
          <span className="font-bold flex-1">{product.name}</span>
          <span className="text-gray-600 font-bold">${product.price}</span>
          <span>Quantity: {product.quantity}</span>
        </div>
      </div>
      <div>
        <div>
          {incrementItem && (
            <button onClick={() => incrementItem(product)}>+</button>
          )}
          {decrementItem && (
            <button onClick={() => decrementItem(product)}>-</button>
          )}
        </div>
        <button
          title="Remove Item"
          className="text-red-500 hover:text-red-600 ml-4"
          onClick={() => removeFromCart(product)}
        >
          <Icon
            icon="material-symbols:delete-outline-sharp"
            width="24"
            height="24"
          ></Icon>
        </button>
      </div>
    </li>
  );
}
