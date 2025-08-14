import CartItem from "./CartItem";
import Link from "next/link";
import { useCartStore } from "@/lib/stores/useCartStore";
import useFromStore from "@/lib/hooks/useFromStore";

function Cart() {
  const cart = useFromStore(useCartStore, (state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  if (!cart || cart.length === 0) {
    return (
      <section className="text-center py-10">
        <h3 className="text-lg font-bold mb-4">Tu carrito está vacío</h3>
        <p className="text-gray-500 mb-6">
          Parece que aún no has añadido productos.
        </p>
        <Link
          href="/shop"
          className="inline-block bg-black text-white px-6 py-3 rounded-md text-base font-medium hover:bg-indigo-700 transition-colors"
        >
          Ir a la tienda
        </Link>
      </section>
    );
  }

  let total = 0;
  if (cart) {
    total = cart.reduce(
      (acc, product) => acc + product.price * (product.quantity as number),
      0
    );
  }

  return (
    <section className="px-2 py-6">
      <h3 className="text-lg font-bold mb-4">Mi Carrito</h3>
      <hr className="h-[1px] border-t-black/10" />
      <ul role="list" className="my-1 ">
        {cart?.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
      <div className="border-t border-gray-200 ">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Envios y taxes son calculados en la confirmacion de la compra
        </p>
        <div className="mt-6">
          <Link
            href="/cart-details"
            className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
          >
            Checkout
          </Link>
        </div>
          <div
            onClick={clearCart}
            className="mt-6 flex w-full items-center p-4 justify-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
          >
            Vaciar carrito
          </div>
      </div>
    </section>
  );
}

export default Cart;
