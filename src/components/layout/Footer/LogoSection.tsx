import { Icon } from "@iconify/react";
import React from "react";
import { SocialNetworks } from "./footer.types";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

const socialsData: SocialNetworks[] = [
  {
    id: 1,
    icon: <Icon icon="ri:twitter-x-line" width="28" />,
    url: "https://twitter.com",
  },
  {
    id: 2,
    icon: <Icon icon="lucide:facebook" width="28" />,
    url: "https://facebook.com",
  },
  {
    id: 3,
    icon: <Icon icon="lucide:instagram" width="28" />,
    url: "https://instagram.com",
  },
];

export const LogoSection = () => {
  return (
    <div className="flex flex-col lg:max-w-[248px]">
      <h1
        className={cn([
          integralCF.className,
          "text-[28px] lg:text-[32px] mb-6",
        ])}
      >
        MiTienda
      </h1>
      <p className="text-black/60 text-sm mb-9">
        Tu multimarket de confianza en Cuba. Productos de primera necesidad para
        toda la familia con la mejor calidad y servicio.
      </p>
      <div className="flex items-center">
        {socialsData.map((social) => (
          <Link
            href={social.url}
            key={social.id}
            className="bg-white hover:bg-black hover:text-white transition-all mr-3 w-12 h-12 rounded-full border border-black/20 flex items-center justify-center p-1.5"
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};
