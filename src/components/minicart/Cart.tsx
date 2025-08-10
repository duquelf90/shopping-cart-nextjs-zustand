import CartItem from "./CartItem"

import { useCartStore } from "../../stores/useCartStore"

import useFromStore from "../../hooks/useFromStore"

function Cart() {
	const cart = useFromStore(useCartStore, state => state.cart)
	const clearCart = useCartStore(state => state.clearCart);
	const incrementItem = useCartStore(state => state.incrementItem);
	const decrementItem = useCartStore(state => state.decrementItem);

	let total = 0
	if (cart) {
		total = cart.reduce((acc, product) => acc + product.price * (product.quantity as number), 0)
	}

	return (
		<section>
			<h3 className='text-2xl font-bold mb-4'>Shopping Cart</h3>
			<ul>
				{cart?.map(product => (
					<CartItem key={product.id} product={product} incrementItem={incrementItem} 
					decrementItem={decrementItem} />
				))}
			</ul>
			<div className='flex justify-between items-center mt-4'>
				<span className='text-lg font-bold'>Total:</span>
				<span className='text-xl font-bold'>${total.toFixed(2)}</span>
			</div>

			{/* boton de limpiar el carrito */}
			<button onClick={clearCart} className='mt-4 p-2 bg-red-500 text-white rounded'>Vaciar carrito</button>
		</section>
	)
}

export default Cart
