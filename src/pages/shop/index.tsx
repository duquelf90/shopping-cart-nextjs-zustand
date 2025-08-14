import { useEffect } from "react";
import ProductList from "@/components/products/ProductList";
import { useProductsStore } from "@/lib/stores/useProductsStore";
import { Icon } from "@iconify/react";
import Filters from "@/components/shop-page/filters";
import MobileFilters from "@/components/shop-page/filters/MobileFilter";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const { filteredProducts, isLoading, error, fetchData } = useProductsStore();
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <Icon
          icon="mdi:alert-circle-outline"
          className="text-red-500 mb-4"
          width="48"
          height="48"
        />
        <h2 className="text-xl font-semibold text-red-600">
          ¡Ups! Algo salió mal
        </h2>
        <p className="text-gray-600 mt-2 mb-6">
          No pudimos cargar los productos. Por favor, inténtalo de nuevo.
        </p>
        <Button
          onClick={() => fetchData()}
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Reintentar
        </Button>
      </div>
    );
  }

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0 py-5">
        <div className="flex md:space-x-5 items-start">
          <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-bold text-black text-xl">Categorias</span>
              <Icon icon="mdi:slider" width="24" height="24"></Icon>
            </div>
            <Filters />
          </div>
          <div className="flex flex-col w-full space-y-5">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-2xl md:text-[32px]">Productos</h1>
              <MobileFilters />
            </div>
            {/* products */}
            <ProductList products={filteredProducts()} />
            <hr className="border-t-black/10" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
