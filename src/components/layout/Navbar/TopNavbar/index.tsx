import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React from "react";
import { MenuList } from "./MenuList";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import CartBtn from "./CartBtn";
import useFromStore from "@/lib/hooks/useFromStore";
import { useCartStore } from "@/lib/stores/useCartStore";
import { Icon } from "@iconify/react";
import { data } from "@/data/menuItem";



interface Props {
  onCartIconClick: () => void;
  onMenuIconClick: () => void;
}

const TopNavbar = ({ onCartIconClick, onMenuIconClick }: Props) => {
  const cart = useFromStore(useCartStore, (state) => state.cart);
  return (
    <nav className="sticky top-0 bg-white z-20">
      <div className="flex relative max-w-frame mx-auto items-center justify-between py-5 md:py-6 px-4 xl:px-0">
        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            <div onClick={onMenuIconClick}>
            <Icon icon="mingcute:menu-fill" width="24" height="24"  color="black"/>
              </div>
          </div>
          <Link
            href="/"
            className={cn([
              integralCF.className,
              "text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10",
            ])}
          >
            MI TIENDA
          </Link>
        </div>
        <NavigationMenu className="hidden md:flex mr-2 lg:mr-7">
          <NavigationMenuList>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === "MenuItem" && (
                  <MenuItem label={item.label} url={item.url} />
                )}
                {item.type === "MenuList" && (
                  <MenuList data={item.children} label={item.label} />
                )}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center">
          <CartBtn onCartIconClick={onCartIconClick} count={cart?.length} />
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
