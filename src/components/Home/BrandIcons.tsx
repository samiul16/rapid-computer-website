"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const brands = [
  { id: 1, name: "Apple", src: "/global/brand.png" },
  { id: 3, name: "Dell", src: "/brands/dell.png" },
  { id: 2, name: "Samsung", src: "/brands/apple.png" },
  { id: 8, name: "Microsoft", src: "/brands/microsoft.png" },
  { id: 4, name: "HP", src: "/brands/msi.jpg" },
  { id: 5, name: "Lenovo", src: "/brands/lenovo.png" },
  { id: 6, name: "Asus", src: "/brands/asus.webp" },
  { id: 7, name: "Lg", src: "/brands/lg.png" },
];

export default function BrandsIcons() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-4 md:grid-cols-8 gap-6 justify-center md:justify-between items-center">
      {brands.map((brand, index) => (
        <div
          key={brand.id}
          className="w-20 md:w-28 h-20 md:h-28 flex mx-auto items-center justify-center bg-white rounded-full shadow-[0px_0px_8px_0px_rgba(0,0,0,0.15)] p-4 duration-300 cursor-pointer hover:scale-115 transition-all"
          data-aos="fade-up"
          data-aos-delay={index * 100}
          data-aos-anchor-placement="bottom-bottom"
          onAnimationEnd={() => {
            // Add scaling effect after animation completes
            const element = document.querySelector(
              `[data-brand-id="${brand.id}"]`
            );
            if (element) {
              element.classList.add("animate-scale-bounce");
            }
          }}
          data-brand-id={brand.id}
        >
          <Image
            src={brand.src}
            alt={brand.name}
            width={80}
            height={80}
            className="object-contain"
            quality={75}
          />
        </div>
      ))}

      <style jsx>{`
        @keyframes scaleBounce {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-scale-bounce {
          animation: scaleBounce 0.6s ease-in-out;
        }
      `}</style>
    </section>
  );
}
