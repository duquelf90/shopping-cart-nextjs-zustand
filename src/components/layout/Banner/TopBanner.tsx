import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";


const TopBanner = () => {
  return (
    <div className="bg-black text-white text-center py-2 px-2 sm:px-4 xl:px-0">
      <div className="relative max-w-frame mx-auto">
        <p className="text-xs sm:text-sm">
          En tu primera compra tienes un 20%{" "}
          <Link href="/shop" className="underline font-medium">
            Comprar ahora
          </Link>
        </p>
        <Button
          variant="ghost"
          className="hover:bg-transparent absolute right-0 top-1/2 -translate-y-1/2 w-fit h-fit p-1 hidden sm:flex"
          size="icon"
          type="button"
          aria-label="close banner"
        >
          <Icon icon="ic:baseline-close" width="24" height="24" color="white" />
        </Button>
      </div>
    </div>
  );
};

export default TopBanner;
