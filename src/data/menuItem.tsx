import { NavMenu } from "@/components/layout/Navbar/navbar.types";

export const data: NavMenu = [
    {
      id: 1,
      label: "Ofertas",
      type: "MenuList",
      children: [
        {
          id: 11,
          label: "Combos de comida",
          url: "/shop#men-clothes",
          description: "In attractive and spectacular colors and designs",
        },
        {
          id: 12,
          label: "Combos de carnes",
          url: "/shop#women-clothes",
          description: "Ladies, your style and tastes are important to us",
        },
        {
          id: 13,
          label: "Equipos para apagones",
          url: "/shop#kids-clothes",
          description: "For all ages, with happy and beautiful colors",
        },
        {
          id: 14,
          label: "Combo de aseo personal",
          url: "/shop#bag-shoes",
          description: "Suitable for men, women and all tastes and styles",
        },
      ],
    },
    {
      id: 2,
      type: "MenuItem",
      label: "Nuevos Productos",
      url: "/shop#on-sale",
      children: [],
    },
    {
      id: 3,
      type: "MenuItem",
      label: "Mas vendidos",
      url: "/shop#new-arrivals",
      children: [],
    },
    {
      id: 4,
      type: "MenuItem",
      label: "Contacto",
      url: "/#contacto",
      children: [],
    },
    {
      id: 5,
      type: "MenuItem",
      label: "FAQs",
      url: "/#faqs",
      children: [],
    },
  ];