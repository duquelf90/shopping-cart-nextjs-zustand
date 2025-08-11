import Link from "next/link";
import LinksSection from "./LinkSection";
import Image from "next/image";
import LayoutSpacing from "./LayoutSpacing";
import { PaymentBadge } from "./footer.types";

// components/Footer.tsx
// const socialsData: SocialNetworks[] = [
//   {
//     id: 1,
//     icon: <FaTwitter />,
//     url: "https://twitter.com",
//   },
//   {
//     id: 2,
//     icon: <FaFacebookF />,
//     url: "https://facebook.com",
//   },
//   {
//     id: 3,
//     icon: <FaInstagram />,
//     url: "https://instagram.com",
//   },
//   {
//     id: 4,
//     icon: <FaGithub />,
//     url: "https://github.com/mohammadoftadeh",
//   },
// ];

const paymentBadgesData: PaymentBadge[] = [
  {
    id: 1,
    srcUrl: "/icons/zelle.webp",
  }
  
];

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="pt-8 md:pt-[50px] bg-[#F0F0F0] px-4 pb-4">
        <div className="max-w-frame mx-auto">
          <nav className="lg:grid lg:grid-cols-12 mb-8">
            <div className="flex flex-col lg:col-span-3 lg:max-w-[248px]">
              <h1 className="text-[28px] lg:text-[32px] mb-6">SHOP.CO</h1>
              <p className="text-black/60 text-sm mb-9">
                Tu multimarket de confianza en Cuba. Productos de primera
                necesidad para toda la familia con la mejor calidad y servicio.
              </p>
              <div className="flex items-center">
                {/* {socialsData.map((social) => (
                  <Link
                    href={social.url}
                    key={social.id}
                    className="bg-white hover:bg-black hover:text-white transition-all mr-3 w-7 h-7 rounded-full border border-black/20 flex items-center justify-center p-1.5"
                  >
                    {social.icon}
                  </Link>
                ))} */}
              </div>
            </div>
            <div className="hidden lg:grid col-span-9 lg:grid-cols-2 lg:pl-10">
              <LinksSection />
            </div>
            <div className="grid lg:hidden grid-cols-2">
              <LinksSection />
            </div>
          </nav>
          <hr className="h-[1px] border-t-black/10 mb-6" />
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-2">
            <p className="text-sm text-center sm:text-left text-black/60 mb-4 sm:mb-0 sm:mr-1">
              Shop.co © Made by{" "}
              <Link
                href="https://github.com/mohammadoftadeh"
                className="text-black font-medium"
              >
                YaenLineaSoft LLC
              </Link>
              con
            </p>
            <div className="flex items-center">
              {paymentBadgesData.map((badge, _, arr) => (
                <span
                  key={badge.id}
                  className="mr-3
                    w-[60px] h-[40px] rounded-[5px] border-[#D6DCE5] bg-white flex items-center justify-center"
                >
                  <Image
                    priority
                    src={badge.srcUrl}
                    width={33}
                    height={100}
                    alt="user"
                    className="max-h-[15px]"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
