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
        <DrawerContent className="max-h-[90%] bg-white">
          <DrawerHeader>
            <div className="flex items-center justify-between">
              <span className="font-bold text-black text-xl">Filtros</span>
              <Icon icon="mdi:slider" width="24" height="24"></Icon>
            </div>
            <DrawerTitle className="hidden">filters</DrawerTitle>
            <DrawerDescription className="hidden">filters</DrawerDescription>
          </DrawerHeader>
          <div className="max-h-[90%] overflow-y-auto w-full px-5 md:px-6 py-5 space-y-5 md:space-y-6">
            <Filters />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileFilters;
