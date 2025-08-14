'use client';

import Categories from "@/components/homepage/Categories";
import Home from "@/components/homepage/Home";
import Reviews from "@/components/homepage/Reviews";
import ProductListSec from "@/components/products/ProductListSec";
import { useProductsStore } from "@/lib/stores/useProductsStore";
import { Review } from "@/types/types";
import { useEffect } from "react";


export const reviewsData: Review[] = [
  {
    "id": 1,
    "user": "María G.",
    "content": "\"Desde que descubrí este lugar, hacer compras se ha vuelto mucho más fácil. La variedad de productos de calidad que ofrecen es impresionante, especialmente en alimentos y productos de aseo.\"",
    "rating": 5,
    "date": "Enero 14, 2024"
  },
  {
    "id": 2,
    "user": "José L.",
    "content": "\"La calidad de los productos es excepcional. He comprado arroz, frijoles y productos de limpieza, y todo ha superado mis expectativas. ¡Definitivamente volveré!\"",
    "rating": 5,
    "date": "Febrero 15, 2024"
  },
  {
    "id": 3,
    "user": "Ana T.",
    "content": "\"Me encanta la frescura de las frutas y verduras. Además, la entrega es rápida y eficiente. Es un alivio tener un lugar de confianza para mis compras.\"",
    "rating": 5,
    "date": "Marzo 16, 2024"
  },
  {
    "id": 4,
    "user": "Carlos M.",
    "content": "\"Este lugar ha cambiado la forma en que hago mis compras. La variedad de productos de abarrotes es impresionante, y siempre encuentro lo que necesito sin problemas.\"",
    "rating": 4,
    "date": "Abril 17, 2024"
  },
  {
    "id": 5,
    "user": "Lucía R.",
    "content": "\"Aprecio mucho la atención al cliente. Cada vez que he tenido una consulta, han sido muy amables y rápidos en responder. ¡Los productos son de gran calidad!\"",
    "rating": 5,
    "date": "Mayo 18, 2024"
  },
  {
    "id": 6,
    "user": "Diego S.",
    "content": "\"La experiencia de compra es excelente. Tienen una amplia gama de productos, desde alimentos básicos hasta artículos de aseo. ¡Recomiendo este lugar a todos mis amigos!\"",
    "rating": 5,
    "date": "Junio 19, 2025"
  }
];


const HomePage = () => {
  const { fetchData, newProduct, topSelling } = useProductsStore();
  useEffect(() => {
    const loadData = async () => {
      await fetchData();
      console.log("Productos cargados:", useProductsStore.getState().products);
    };
    loadData();
  }, [fetchData]);
  console.log(newProduct)
  console.log(topSelling)
  return (
    <>
    <Home/>
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
