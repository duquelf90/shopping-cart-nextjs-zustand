import Image from "next/image";

import { useCartStore } from "../../stores/useCartStore";

import { Product } from "@/types.d";
import { useNotification } from "@/context/NotificationContext";

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
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl flex flex-col justify-between p-4 ">
      {/* <Image
        src={product.images[0]}
        alt={product.name}
        width={100}
        height={100}
        className="object-contain w-full h-40"
      /> */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-900 line-clamp-1 hover:text-blue-600 transition-colors cursor-pointer">
            {product.name}
          </h2>
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            {product.category.name}
          </span>
        </div>
        <p className="text-gray-600 flex-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-gray-800 font-semibold">
            ${product.price.toFixed(2)}
          </span>
          <button
            type="button"
            className="ml-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
            onClick={handleAddToCart}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
