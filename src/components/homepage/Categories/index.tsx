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
import Link from "next/link";

type Category = {
  id: number;
  name: string;
  image: string;
  src: string;
};

const categories: Category[] = [
  { id: 1, name: "Carnes", image: "/images/carnes.jpg", src: "/shop#" },
  { id: 2, name: "Electrodomésticos", image: "/images/electro.jpg", src: "/shop#" },
  { id: 3, name: "Abarrotes", image: "/images/abarrotes.jpg", src: "/shop#" },
  { id: 4, name: "Enlatados", image: "/images/enlatados.jpg", src: "/shop#" },
  { id: 5, name: "Dulces", image: "/images/dulces.jpg", src: "/shop#" },
];

export const CategoriesCarousel = () => {
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
                className="basis-1/3 md:basis-1/4 lg:basis-1/5 flex flex-col items-center text-center px-4"
              >
                <Link href={cat.src} className="w-24 h-24 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white shadow-lg mb-3">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </Link>
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

export const InfiniteCarousel = () => {
  const row = (reverse = false) => (
    <motion.div
      className="flex gap-8"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 15,
      }}
    >
      {categories.map((cat, i) => (
        <Link
          key={`${cat.name}-${i}`}
          className="flex flex-col items-center min-w-[200px]"
          href={cat.src}
        >
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={cat.image}
              alt={cat.name}
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
          <p className="text-white mt-3 text-lg font-semibold">{cat.name}</p>
        </Link>
      ))}
    </motion.div>
  );

  return (
    <div className="w-full bg-black py-10 overflow-hidden space-y-8">
      {row(false)}
      {row(true)}
    </div>
  );
};
