import React from "react";

import { Icon } from "@iconify/react";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/Drawer";
import Filters from ".";


const MobileFilters = () => {
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <div
            title="filter"
            className="h-8 w-8 rounded-full bg-[#F0F0F0] text-black p-1 md:hidden"
          >
            <Icon icon="mdi:slider" width="24" height="24"></Icon>
          </div>
        </DrawerTrigger>
        <DrawerContent className="max-h-[90%] bg-white rounded-t-[20px] overflow-hidden shadow-xl">
          <DrawerHeader className="sticky top-0 z-10 bg-white px-5 flex items-center justify-between">
              <div className="font-bold text-black text-xl">Categorias</div>
              <Icon icon="mdi:slider" width="24" height="24"></Icon>
            <DrawerTitle className="hidden">filters</DrawerTitle>
            <DrawerDescription className="hidden">filters</DrawerDescription>
          </DrawerHeader>
          <div className="overflow-y-auto max-h-[calc(90vh-64px)] px-5 py-5 space-y-5 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <Filters />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileFilters;
