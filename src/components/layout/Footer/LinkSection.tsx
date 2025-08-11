import React from "react";
import { FooterLinks } from "./footer.types";
import Link from "next/link";

const footerLinksData: FooterLinks[] = [
  {
    id: 1,
    title: "company",
    children: [
      {
        id: 11,
        label: "about",
        url: "#",
      },
      {
        id: 12,
        label: "features",
        url: "#",
      },
      {
        id: 13,
        label: "works",
        url: "#",
      },
      {
        id: 14,
        label: "career",
        url: "#",
      },
    ],
  },
  {
    id: 2,
    title: "contactos",
    children: [
      {
        id: 21,
        label: "customer support",
        url: "#",
      },
      {
        id: 22,
        label: "delivery details",
        url: "#",
      },
      {
        id: 23,
        label: "terms & conditions",
        url: "#",
      },
      {
        id: 24,
        label: "privacy policy",
        url: "#",
      },
    ],
  },  
  
];

const LinksSection = () => {
  return (
    <>
      {footerLinksData.map((item) => (
        <section className="flex flex-col mt-5" key={item.id}>
          <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
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
