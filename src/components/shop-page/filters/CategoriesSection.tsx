import { Button } from "@/components/ui/button";
import { useProductsStore } from "@/lib/stores/useProductsStore";
import { Icon } from "@iconify/react";
import React from "react";

const CategoriesSection = () => {
  const { products, filterCategory, setFilterCategory } = useProductsStore()
  const categories = [...new Set(products.flatMap(p => Array.isArray(p.category) ? p.category : [p.category]))]
  return (
    <>
    
    <div className="flex flex-col space-y-0.5 text-black/60 gap-2">
      {categories.map((cat) => (
        <div
          key={cat}
          className={`flex items-center justify-between px-4 rounded-lg transition-all capitalize py-2 cursor-pointer ${
            filterCategory === cat ? "bg-black text-white" : "bg-gray-100 dark:bg-gray-700"
          }`}
          onClick={() => setFilterCategory(filterCategory === cat ? null : cat)}
        >
          {cat}
          <Icon icon="weui:arrow-filled" width="12" height="24"></Icon>
        </div>
      ))}
    </div>
    <Button
        type="button"
        onClick={() => setFilterCategory(null)}
        className="bg-black w-full rounded-full text-sm font-medium py-4 h-12 text-white"
      >
        Limpiar filtro
      </Button>
    </>
  );
};

export default CategoriesSection;
