import CartItem from "./CartItem";

import { useCartStore } from "../../stores/useCartStore";

import useFromStore from "../../hooks/useFromStore";
import Link from "next/link";

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
      <h3 className="text-2xl font-bold mb-4">Shopping Cart</h3>
      <ul>
        {cart?.map((product) => (
          <CartItem
            key={product.id}
            product={product}
          />
        ))}
      </ul>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold">Total:</span>
        <span className="text-xl font-bold">${total.toFixed(2)}</span>
      </div>
	  <div className="flex justify-center items-center gap-2">
		<button
        onClick={clearCart}
        className="mt-4 p-2 bg-red-500 text-white rounded"
      >
        Vaciar carrito
      </button>
      <Link href="/cart-details">
        <button className="mt-4 p-2 bg-indigo-500 text-white rounded">Ver Detalles</button>
      </Link>
	  </div>
    </section>
  );
}

export default Cart;
