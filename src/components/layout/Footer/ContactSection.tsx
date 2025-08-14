import React from "react";

export const ContactSection = () => {
  return (
    <section className="flex flex-col mt-5">
      <h3 className="text-sm md:text-base uppercase tracking-widest mb-6 font-bold">
        Contacto
      </h3>
      <ul className="space-y-4 text-black">
        <li className="flex items-center space-x-3">
          {/* <i className="fas fa-phone text-[var(--primary-color)]" aria-hidden="true"></i> */}
          <span>+53 7 123 4567</span>
        </li>
        <li className="flex items-center space-x-3">
          {/* <i className="fas fa-envelope text-[var(--primary-color)]" aria-hidden="true"></i> */}
          <span>info@mitienda.cu</span>
        </li>
        <li className="flex items-center space-x-3">
          {/* <i className="fas fa-map-marker-alt text-[var(--primary-color)]" aria-hidden="true"></i> */}
          <span>La Habana, Cuba</span>
        </li>
        <li className="flex items-center space-x-3">
          {/* <i className="fas fa-clock text-[var(--primary-color)]" aria-hidden="true"></i> */}
          <span>Lun - Dom: 8:00 AM - 8:00 PM</span>
        </li>
      </ul>
    </section>
  );
};
