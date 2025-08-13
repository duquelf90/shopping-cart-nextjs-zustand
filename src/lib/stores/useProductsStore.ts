import { create } from "zustand"
import { Product } from "../../types"

interface State {
  products: Product[]
  isLoading: boolean
  error: any
  filterCategory: string | null
}

interface Actions {
  fetchData: () => Promise<void>
  setFilterCategory: (category: string | null) => void
  filteredProducts: () => Product[]
}

const INITIAL_STATE: State = {
  products: [],
  isLoading: false,
  error: null,
  filterCategory: null,
}

export const useProductsStore = create<State & Actions>((set, get) => ({
  products: INITIAL_STATE.products,
  isLoading: INITIAL_STATE.isLoading,
  error: INITIAL_STATE.error,
  filterCategory: INITIAL_STATE.filterCategory,

  fetchData: async () => {
    try {
      set({ isLoading: true, error: null })
      const response = await fetch("https://dummyjson.com/products")
	//   const response = await fetch("https://127.0.0.1:8000/api/products")
      if (!response.ok) {
        const errorMessage = `Error: ${response.status} ${response.statusText}`
        throw new Error(errorMessage)
      }
      const data = await response.json()
      set({ products: data.products, isLoading: false })
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Error desconocido"
      set({ error: errorMessage, isLoading: false })
    }
  },

  setFilterCategory: (category) => set({ filterCategory: category }),

  filteredProducts: () => {
    const { products, filterCategory } = get()
    if (!filterCategory) return products
    // Si el producto tiene varias categorías (array), verificamos si incluye la seleccionada
    return products.filter((p) =>
      Array.isArray(p.category) ? p.category.includes(filterCategory) : p.category === filterCategory
    )
  },
}))
