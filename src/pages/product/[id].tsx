// pages/products/[id].tsx
import Header from "@/components/product-page/Header";
import ProductListSec from "@/components/products/ProductListSec";
import { useProductsStore } from "@/lib/stores/useProductsStore";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query; 
  const { products, fetchData } = useProductsStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <div>Cargando...</div>; 
  }

  return (
    <div className="mb-[50px] sm:mb-20">
      <section className="mb-11">
        <Header data={product} />
      </section>
      <ProductListSec title="Te puede interesar" data={products} />
    </div>
  );
};

export default ProductDetailPage;
