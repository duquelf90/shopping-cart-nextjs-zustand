import { Product } from "@/types/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface State {
	cart: Product[]
	totalItems: number
	totalPrice: number
}

interface Actions {
	addToCart: (Item: Product, addNotification: (msg: string) => void) => void
	removeFromCart: (Item: Product) => void
	clearCart: () => void
	incrementItem: (item: Product) => void
	decrementItem: (item: Product) => void
	updateCart: (item: Product, quantity: number, addNotification: (msg: string) => void) => void;
}

const INITIAL_STATE: State = {
	cart: [],
	totalItems: 0,
	totalPrice: 0,
}

export const useCartStore = create(
	persist<State & Actions>(
		(set, get) => ({
			...INITIAL_STATE,
			
			addToCart: (product: Product, addNotification) => {
				const cart = get().cart
				const cartItem = cart.find(item => item.id === product.id)

				if (cartItem) {
					const updatedCart = cart.map(item =>
						item.id === product.id ? { ...item, quantity: (item.quantity as number) + 1 } : item
					)
					set(state => ({
						cart: updatedCart,
						totalItems: state.totalItems + 1,
						totalPrice: state.totalPrice + product.price,
					}))
					addNotification("Se ha agregado al carrito.");
				} else {
					// Verifica si hay artículos en el carrito
					if (cart.length > 0) {
						const firstItemCategory = cart[0].category;

						// Si el nuevo producto no pertenece a la misma categoría
						if (product.category !== firstItemCategory) {
							addNotification("No se pueden agregar artículos de diferentes categorías.");
							return; // Salir de la función sin agregar el producto
						}
					}
					const updatedCart = [...cart, { ...product, quantity: 1 }]

					set(state => ({
						cart: updatedCart,
						totalItems: state.totalItems + 1,
						totalPrice: state.totalPrice + product.price,
					}))
					addNotification("Se ha agregado al carrito.");
				}
			},
			clearCart: () => { // Implementación de la nueva acción
				set({
					cart: [],
					totalItems: 0,
					totalPrice: 0,
				});
			},
			removeFromCart: (product: Product) => {
				set(state => ({
					cart: state.cart.filter(item => item.id !== product.id),
					totalItems: state.totalItems - 1,
					totalPrice: state.totalPrice - product.price,
				}))
			},
			incrementItem: (product: Product) => {
				const cart = get().cart;
				const cartItem = cart.find(item => item.id === product.id);

				if (cartItem) {
					const updatedCart = cart.map(item =>
						item.id === product.id ? { ...item, quantity: (item.quantity as number) + 1 } : item
					);
					set(state => ({
						cart: updatedCart,
						totalItems: state.totalItems + 1,
						totalPrice: state.totalPrice + product.price,
					}));
				}
			},
			decrementItem: (product: Product) => {
				const cart = get().cart;
				const cartItem = cart.find(item => item.id === product.id);
				if (cartItem) {
					if (cartItem.quantity > 1) {
						const updatedCart = cart.map(item =>
							item.id === product.id ? { ...item, quantity: (item.quantity as number) - 1 } : item
						);
						set(state => ({
							cart: updatedCart,
							totalItems: state.totalItems - 1,
							totalPrice: state.totalPrice - product.price,
						}));
					} else {
						// Si la cantidad es 1, se puede optar por eliminar el artículo
						set(state => ({
							cart: state.cart.filter(item => item.id !== product.id),
							totalItems: state.totalItems - 1,
							totalPrice: state.totalPrice - product.price,
						}));
					}
				}


			},

			updateCart: (product: Product, newQuantity: number, addNotification) => {
				const cart = get().cart;
				const cartItem = cart.find(item => item.id === product.id);
			  
				if (cartItem) {
				  const priceDifference = (newQuantity - cartItem.quantity) * product.price;
			  
				  const updatedCart = cart.map(item =>
					item.id === product.id ? { ...item, quantity: newQuantity } : item
				  );
			  
				  set(state => ({
					cart: updatedCart,
					totalItems: state.totalItems + (newQuantity - cartItem.quantity),
					totalPrice: state.totalPrice + priceDifference,
				  }));
			  
				  addNotification(`La cantidad de ${product.title} se ha actualizado a ${newQuantity}.`);
				}
			  },

		}),
		{
			name: "cart-storage",
		}
	)
)
