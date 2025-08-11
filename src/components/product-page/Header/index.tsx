import React from "react";
import PhotoSection from "./PhotoSection";
import { cn } from "@/lib/utils";
import AddToCardSection from "./AddToCardSection";
import { Product } from "@/types";

const Header = ({ data }: { data: Product }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <PhotoSection data={data} />
        </div>
        <div>
          <h1
            className=
              "text-2xl md:text-[40px] md:leading-[40px] mb-3 md:mb-3.5 capitalize"
          >
            {data.title}
          </h1>
          
          <div className="flex items-center space-x-2.5 sm:space-x-3 mb-5">
            
            
          </div>
          <p className="text-sm sm:text-base text-black/60 mb-5">
            {data.description}
          </p>
          <hr className="h-[1px] border-t-black/10 mb-5" />
          <AddToCardSection data={data} />
        </div>
      </div>
    </>
  );
};

export default Header;