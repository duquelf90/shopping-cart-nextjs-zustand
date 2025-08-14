import React from "react";
import { FooterLinks } from "./footer.types";
import Link from "next/link";

const footerLinksData: FooterLinks[] = [
  {
    id: 1,
    title: "empresa",
    children: [
      {
        id: 11,
        label: "inicio",
        url: "#",
      },
      {
        id: 12,
        label: "productos",
        url: "#",
      },
      {
        id: 13,
        label: "categorias",
        url: "#",
      },
      {
        id: 14,
        label: "nosotros",
        url: "#",
      },
    ],
  },
  
];

const LinksSection = () => {
  return (
    <>
      {footerLinksData.map((item) => (
        <section className="flex flex-col mt-5 md:pl-10" key={item.id}>
          <h3 className="text-sm md:text-base uppercase tracking-widest mb-6 font-bold">
            {item.title}
          </h3>
          {item.children.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit"
            >
              {link.label}
            </Link>
          ))}
        </section>
      ))}
    </>
  );
};

export default LinksSection;
