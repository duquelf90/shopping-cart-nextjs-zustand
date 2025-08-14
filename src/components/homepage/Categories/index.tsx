"use client";

import React from "react";
import * as motion from "framer-motion/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

type Category = {
  id: number;
  name: string;
  image: string;
};

const categories: Category[] = [
  { id: 1, name: "Carnes", image: "/images/carnes.jpg" },
  { id: 2, name: "Electrodomésticos", image: "/images/electro.jpg" },
  { id: 3, name: "Abarrotes", image: "/images/abarrotes.jpg" },
  { id: 4, name: "Enlatados", image: "/images/enlatados.jpg" },
  { id: 5, name: "Dulces", image: "/images/dulces.jpg" },
];

const CategoriesCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <section className="overflow-hidden bg-black py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          
          <CarouselContent>
            {categories.map((cat) => (
              <CarouselItem
                key={cat.id}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex flex-col items-center text-center px-4"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-white shadow-lg mb-3">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-white font-medium text-sm sm:text-base">
                  {cat.name}
                </span>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </section>
  );
};

export default CategoriesCarousel;
