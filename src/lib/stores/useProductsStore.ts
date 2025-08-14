import { create } from "zustand"
import { Product } from "../../types/types"

interface State {
  products: Product[]
  newProduct: Product[]
  topSelling: Product[]
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
  newProduct: [],
  topSelling: [],
  isLoading: false,
  error: null,
  filterCategory: null,
}

export const useProductsStore = create<State & Actions>((set, get) => ({
  ...INITIAL_STATE,

  fetchData: async () => {
    try {
      set({ isLoading: true, error: null })
      const response = await fetch("https://dummyjson.com/products")
      if (!response.ok) {
        const errorMessage = `Error: ${response.status} ${response.statusText}`
        throw new Error(errorMessage)
      }
      const data = await response.json()
      const products = data.products
      // Generar nuevos productos
      const newProduct = [...products]
        .sort(() => 0.5 - Math.random())
        .slice(0, 6)

      // Generar más vendidos
      const topSelling = [...products]
        .sort((a, b) => (b.rating || 0) - (a.rating || 0))
        .slice(0, 7)

      set({
        products,
        newProduct,
        topSelling,
        isLoading: false
      })

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Error desconocido"
      set({ error: errorMessage, isLoading: false })
    }
  },

  setFilterCategory: (category) => set({ filterCategory: category }),

  filteredProducts: () => {
    const { products, filterCategory } = get()
    if (!filterCategory) return products
    return products.filter((p) =>
      Array.isArray(p.category) ? p.category.includes(filterCategory) : p.category === filterCategory
    )
  }

}))
