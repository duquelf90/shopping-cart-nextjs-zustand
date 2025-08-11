import { useEffect } from "react";
import ProductList from "@/components/products/ProductList";
import { useProductsStore } from "@/lib/stores/useProductsStore";
import { Icon } from "@iconify/react";
import Filters from "@/components/shop-page/filters";

const HomePage = () => {
  const { products, isLoading, error, fetchData } = useProductsStore();
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="flex md:space-x-5 items-start">
      <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
      <div className="flex md:space-x-5 items-start">
        {/* filters */}
        <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
          <div className="flex items-center justify-between">
            <span className="font-bold text-black text-xl">Categorias</span>
            <Icon icon="mdi:slider" width="24" height="24"></Icon>
          </div>
          <Filters />
        </div>
        {/* products */}
        <ProductList products={products} />
        <hr className="border-t-black/10" />
      </div>
    </div>
  );
};

export default HomePage;
