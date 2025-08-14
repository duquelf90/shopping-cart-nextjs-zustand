"use client";

import React, { useState } from "react";
// import AddToCartBtn from "./AddToCartBtn";
import { CartCounter } from "@/components/ui/CartCounter";
import { useNotification } from "@/lib/context/NotificationContext";
import { useCartStore } from "@/lib/stores/useCartStore";
import { Product } from "@/types/types";

const AddToCardSection = ({ data }: { data: Product }) => {
    const { addNotification } = useNotification();
    const addToCart = useCartStore((state) => state.addToCart);
    const updateCart = useCartStore((state) => state.updateCart);
    const [quantity, setQuantity] = useState<number>(1);
  
    const handleAddToCart = () => {
      // Verificar si el producto ya está en el carrito
      const cart = useCartStore.getState().cart;
      const cartItem = cart.find(item => item.id === data.id);
      
      if (cartItem) {
        // Si ya está en el carrito, actualizar la cantidad
        updateCart(data, quantity, addNotification);
      } else {
        // Si no está en el carrito, agregarlo
        addToCart(data, addNotification);
        updateCart(data, quantity, addNotification); // Asegurar la cantidad correcta
      }
    };

  return (
    <div className="md:relative w-full bg-white border-t md:border-none border-black/5 bottom-0 left-0 p-4 md:p-0 flex items-center justify-between sm:justify-start md:justify-center">
      <CartCounter counter={quantity} onAdd={setQuantity} onRemove={setQuantity} />
      <button
          title="Add to cart"
          className="bg-black w-full ml-3 sm:ml-5 rounded-full h-11 md:h-[52px] text-sm sm:text-base text-white hover:bg-black/80 transition-all"
          onClick={handleAddToCart}
        >
            Añadir al carrito
        </button>
    </div>
  );
};

export default AddToCardSection;