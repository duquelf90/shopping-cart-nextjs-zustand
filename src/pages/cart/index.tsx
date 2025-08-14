import React from "react";
import useFromStore from "@/lib/hooks/useFromStore";
import { useCartStore } from "@/lib/stores/useCartStore";
import { ProductCard } from "@/components/cart/ProductCard";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";

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
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0 py-5">
        {cart && cart.length > 0 ? (
          <>
            <h2
              className={cn([
                integralCF.className,
                "font-bold text-[32px] md:text-4xl text-black uppercase mb-5 md:mb-6",
              ])}
            >
              Detalles del Carrito
            </h2>
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-start">
              <div className="w-full p-3.5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10">
                {cart?.map((product, idx, arr) => (
                  <React.Fragment key={idx}>
                    <ProductCard
                      product={product}
                      incrementItem={incrementItem}
                      decrementItem={decrementItem}
                    />
                    {arr.length - 1 !== idx && (
                      <hr className="border-t-black/10" />
                    )}
                  </React.Fragment>
                ))}
              </div>
              {/* order sumary */}
              <div className="w-full lg:max-w-[505px] p-5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10">
                <h6 className="text-xl md:text-2xl font-bold text-black">
                  Resumen
                </h6>
                <div className="flex flex-col space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="md:text-xl text-black/60">Subtotal</span>
                    <span className="md:text-xl font-bold">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="md:text-xl text-black/60">
                      Gastos de envio
                    </span>
                    <span className="md:text-xl font-bold">Gratis</span>
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
                    aria-disabled={cart?.length === 0 ? "true" : "false"}
                    tabIndex={cart?.length === 0 ? -1 : 0}
                  >
                    Finalizar compra
                  </Link>
                </div>
              </div>
              {/* end order sumary */}
            </div>
          </>
        ) : (
          <div className="flex items-center flex-col text-gray-300 mt-32">
            <Icon icon="tabler:basket-x" className="text-6xl w-12 h-12"></Icon>
            <span className="block mb-4">Tu carrito esta vacio.</span>
            <Link href="/shop">Shop</Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartDetails;
