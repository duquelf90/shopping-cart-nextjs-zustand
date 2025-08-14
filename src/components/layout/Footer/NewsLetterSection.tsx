import { Button } from "@/components/ui/button";
import InputGroup from "@/components/ui/input-group";
import { Icon } from "@iconify/react";
import React from "react";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";

const NewsLetterSection = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 py-9 md:py-11 px-6 md:px-16 max-w-frame mx-auto bg-black rounded-[20px]">
      <p
        className={cn([
          integralCF.className,
          "font-bold text-[32px] md:text-4xl text-white mb-9 md:mb-0",
        ])}
      >
        mantente actualizado
      </p>
      <div className="flex items-center">
        <div className="flex flex-col w-full max-w-[349px] mx-auto">
          <InputGroup className="flex bg-white mb-[14px]">
            <InputGroup.Text>
            <Icon icon="basil:envelope-outline" width="24" height="24"></Icon>
              
            </InputGroup.Text>
            <InputGroup.Input
              type="email"
              name="email"
              placeholder="Dejanos tu correo electronico"
              className="bg-transparent placeholder:text-black/40 placeholder:text-sm sm:placeholder:text-base text-center"
            />
          </InputGroup>
          <Button
            variant="secondary"
            className="text-sm sm:text-base font-medium bg-white h-12 rounded-full px-4 py-3"
            aria-label="Subscribe to Newsletter"
            type="button"
          >
            Subscribete a hoy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSection;
