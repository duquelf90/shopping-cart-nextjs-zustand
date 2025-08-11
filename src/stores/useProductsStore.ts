import { create } from "zustand"

import { Product } from "../types"

interface State {
	products: Product[]
	isLoading: boolean
	error: any
}

interface Actions {
	fetchData: () => Promise<void>
}

const INITIAL_STATE: State = {
	products: [],
	isLoading: false,
	error: null,
}

export const useProductsStore = create<State & Actions>(set => ({
	products: INITIAL_STATE.products,
	isLoading: INITIAL_STATE.isLoading,
	error: INITIAL_STATE.error,
	fetchData: async () => {
		try {
			set({ isLoading: true, error: null })
			const response = await fetch("https://127.0.0.1:8000/api/products")

			// Manejo de respuestas no exitosas
			if (!response.ok) {
				const errorMessage = `Error: ${response.status} ${response.statusText}`;
				throw new Error(errorMessage);
			  }
			const data = await response.json()
			set({ products: data.products, isLoading: false })
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : "Error desconocido";
			set({ error: errorMessage, isLoading: false });
		}
	},
}))
