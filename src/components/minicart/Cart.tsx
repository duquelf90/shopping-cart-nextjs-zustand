import CartItem from "./CartItem";
import Link from "next/link";
import { useCartStore } from "@/lib/stores/useCartStore";
import useFromStore from "@/lib/hooks/useFromStore";

function Cart() {
  const cart = useFromStore(useCartStore, (state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  let total = 0;
  if (cart) {
    total = cart.reduce(
      (acc, product) => acc + product.price * (product.quantity as number),
      0
    );
  }

  return (
    <section>
      <h3 className="text-lg font-bold mb-4">Mi Carrito</h3>
      <ul role="list" className="-my-6 divide-y divide-gray-200">
        {cart?.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
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
