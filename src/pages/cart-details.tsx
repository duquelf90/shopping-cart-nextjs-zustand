// pages/cart-details.tsx
import React from 'react';
import useFromStore from '@/hooks/useFromStore';
import { useCartStore } from '@/stores/useCartStore';
import CartItem from '@/components/minicart/CartItem';

const CartDetails = () => {
    const cart = useFromStore(useCartStore, state => state.cart)
    const incrementItem = useCartStore(state => state.incrementItem);
	const decrementItem = useCartStore(state => state.decrementItem);


  return (
    <div className="cart-details">
      <h2>Detalles del Carrito</h2>
      {cart?.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart?.map((product) => (
            <CartItem key={product.id} product={product} incrementItem={incrementItem} 
            decrementItem={decrementItem} />
            
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartDetails;