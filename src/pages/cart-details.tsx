import React from "react";
import useFromStore from "@/hooks/useFromStore";
import { useCartStore } from "@/stores/useCartStore";
import { ProductCard } from "@/components/cart-page/ProductCard";
import { Icon } from "@iconify/react";
import Link from "next/link";

const CartDetails = () => {
  const cart = useFromStore(useCartStore, (state) => state.cart);
  const incrementItem = useCartStore((state) => state.incrementItem);
  const decrementItem = useCartStore((state) => state.decrementItem);
  let total = 0;
  if (cart) {
    total = cart.reduce(
      (acc, product) => acc + product.price * (product.quantity as number),
      0
    );
  }

  return (
    <div className="max-w-frame mx-auto px-4 xl:px-0">
      <h2 className="font-bold text-[32px] md:text-[40px] text-black uppercase mb-5 md:mb-6">
        Detalles del Carrito
      </h2>
     
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-start">
         {/* product cards */}
        <div className="w-full p-3.5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10">
          {cart?.length === 0 ? (
            <div className="flex items-center flex-col text-gray-300 mt-32">
              <Icon
                icon="streamline-kameleon-color:basket-2"
                width="24"
                height="24"
              ></Icon>
              <span className="block mb-4">Your shopping cart is empty.</span>
              {/* <Button className="rounded-full w-24" asChild> */}
              <Link href="/shop">Shop</Link>
              {/* </Button> */}
            </div>
          ) : (
            <>
              {cart?.map((product) => (
                <>
                  <ProductCard
                    key={product.id}
                    product={product}
                    incrementItem={incrementItem}
                    decrementItem={decrementItem}
                  />
                  <hr className="border-t-black/10"></hr>
                </>
              ))}
            </>
          )}
        </div>

        {/* end productCard */}

        {/* order sumary */}
        <div className="w-full lg:max-w-[505px] p-5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10">
          <h6 className="text-xl md:text-2xl font-bold text-black">
            Order Summary
          </h6>
          <div className="flex flex-col space-y-5">
            <div className="flex items-center justify-between">
              <span className="md:text-xl text-black/60">Subtotal</span>
              <span className="md:text-xl font-bold">${total.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="md:text-xl text-black/60">Delivery Fee</span>
              <span className="md:text-xl font-bold">Free</span>
            </div>
            <hr className="border-t-black/10" />
            <div className="flex items-center justify-between">
              <span className="md:text-xl text-black">Total</span>
              <span className="text-xl md:text-2xl font-bold">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="flex space-x-3">
            <Link
              href="/checkout"
              className="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow hover:bg-primary/90 px-4 text-sm md:text-base font-medium bg-black rounded-full w-full py-4 h-[54px] md:h-[60px] group text-white"
            >
              Finalizar compra
            </Link>
          </div>
        </div>
        {/* end order sumary */}
      </div>
    </div>
  );
};

export default CartDetails;
