import React from "react";

export const ContactSection = () => {
  return (
    <section className="flex flex-col mt-5">
      <h3 className="text-sm md:text-base uppercase tracking-widest mb-6 font-bold">
        Contacto
      </h3>
      <ul className="space-y-4 text-black">
        <li className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit">
          {/* <i className="fas fa-phone text-[var(--primary-color)]" aria-hidden="true"></i> */}
          <span>+53 7 123 4567</span>
        </li>
        <li className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit">
          {/* <i className="fas fa-envelope text-[var(--primary-color)]" aria-hidden="true"></i> */}
          <span>info@llpmultiservice.com</span>
        </li>
        <li className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit">
          {/* <i className="fas fa-map-marker-alt text-[var(--primary-color)]" aria-hidden="true"></i> */}
          <span>330 e7 st Apto 101,33010, Hialeah, FL</span>
        </li>
        <li className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit">
          {/* <i className="fas fa-clock text-[var(--primary-color)]" aria-hidden="true"></i> */}
          <span>Lun - Dom: 8:00 AM - 8:00 PM</span>
        </li>
      </ul>
    </section>
  );
};
