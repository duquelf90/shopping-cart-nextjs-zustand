import { useEffect } from "react";
import ProductList from "@/components/products/ProductList";
import { useProductsStore } from "@/lib/stores/useProductsStore";
import { Icon } from "@iconify/react";
import Filters from "@/components/shop-page/filters";
import MobileFilters from "@/components/shop-page/filters/MobileFilter";

const HomePage = () => {
  const { filteredProducts, isLoading, error, fetchData } = useProductsStore();
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex md:space-x-5 items-start">
      <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-bold text-black text-xl">Filtros</span>
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
  );
};

export default HomePage;
