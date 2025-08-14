'use client';

import Categories from "@/components/homepage/Categories";
import Home from "@/components/homepage/Home";
import Reviews from "@/components/homepage/Reviews";
import ProductListSec from "@/components/products/ProductListSec";
import { reviewsData } from "@/data/reviews";
import { useProductsStore } from "@/lib/stores/useProductsStore";
import { useEffect } from "react";

const HomePage = () => {
  const { fetchData, newProduct, topSelling } = useProductsStore();
  useEffect(() => {
    const loadData = async () => {
      await fetchData();      
    };
    loadData();
  }, [fetchData]);
  
  return (
    <>
    <Home/>
    <div className="bg-black h-10">
      <div className="max-w-frame mx-auto flex flex-wrap items-center justify-center md:justify-between py-5 md:py-0 sm:px-4 xl:px-0 space-x-7">
        
      </div>
    </div>
    <main className="my-[50px] sm:my-[72px]">
        <ProductListSec
          title="Nuevos productos"
          data={newProduct}
          viewAllLink="/shop"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="mas vendidos"
            data={topSelling}
            viewAllLink="/shop#top-selling"
          />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <Categories />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
};

export default HomePage;
