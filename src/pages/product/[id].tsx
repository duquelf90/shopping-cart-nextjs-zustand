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
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0 py-5">
        <div className="mb-[50px] sm:mb-20">
          <section className="mb-11">
            <Header data={product} />
          </section>
          <ProductListSec title="Te puede interesar" data={products} />
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
