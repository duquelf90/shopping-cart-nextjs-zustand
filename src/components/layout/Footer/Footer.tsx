import Link from "next/link";
import LinksSection from "./LinkSection";
import NewsLetterSection from "./NewsLetterSection";
import { ContactSection } from "./ContactSection";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { LogoSection } from "./LogoSection";



const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="relative">
        <div className="absolute bottom-0 w-full h-1/2 bg-[#F0F0F0]"></div>
        <div className="px-4">
          <NewsLetterSection />
        </div>
      </div>
      <div className="pt-8 md:pt-[50px] bg-[#F0F0F0] px-4 pb-4">
        <div className="max-w-frame mx-auto">
          <nav className="grid md:grid-cols-3 mb-8">
            <LogoSection/>            
            <LinksSection />
            <ContactSection />
          </nav>
          <hr className="h-[1px] border-t-black/10 mb-6" />
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-2">
            <p className=" text-center sm:text-left text-black/60 mb-4 sm:mb-0 sm:mr-1">
              © 2025 Mi Tienda. Todos los derechos reservados. Hecho por{" "}
              <Link
                href="https://yaenlineasoft.com"
                className="text-black font-medium"
              >
                YaenLineaSoft LLC
              </Link>
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-black/60">
              <a href="/faq">FAQ</a>
              <a href="/politica-de-privacidad">Política de Privacidad</a>
              <Link href="/cart">Carrito</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
