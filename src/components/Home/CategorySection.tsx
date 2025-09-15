"use client";

import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const categoriesData = [
  {
    title: "POS System",
    imageSrc: "/global/pos.jpg",
    discountText: "10% off",
    categories: [
      { name: "Desktops", count: 15 },
      { name: "Laptop", count: 15 },
      { name: "Gaming", count: 15 },
      { name: "Keyboards", count: 15 },
      { name: "Monitors", count: 15 },
    ],
  },
  {
    title: "Biometric Solutions",
    imageSrc: "/global/Biometric.jpg",
    discountText: "15% off",
    categories: [
      { name: "Printers", count: 10 },
      { name: "Scanners", count: 8 },
      { name: "Projectors", count: 5 },
    ],
  },
  {
    title: "RFID Solutions",
    imageSrc: "/global/RFID.jpg",
    discountText: "5% off",
    categories: [
      { name: "Routers", count: 20 },
      { name: "Switches", count: 12 },
      { name: "Cables", count: 50 },
    ],
  },
  {
    title: "CCTV Solutions",
    imageSrc: "/global/CCTV.jpg",
    discountText: "10% off",
    categories: [
      { name: "Desktops", count: 15 },
      { name: "Laptop", count: 15 },
      { name: "Gaming", count: 15 },
      { name: "Keyboards", count: 15 },
      { name: "Monitors", count: 15 },
    ],
  },
];

export interface CategoryItem {
  name: string;
  count: number;
}

export interface ProductCategoryCardProps {
  imageSrc: string;
  title: string;
  discountText?: string;
  categories: CategoryItem[];
  className?: string;
  index?: number;
}

export function ProductCategoryCard({
  title,
  discountText,
  categories,
  className,
  imageSrc,
  index = 0,
}: ProductCategoryCardProps) {
  return (
    <div
      className={`relative w-72 h-96 ${className}`}
      data-aos="fade-up"
      data-aos-delay={300 + index * 80}
      data-aos-duration="800"
    >
      {/* Card Background */}
      <div className="w-72 h-80 absolute top-[94px] left-0 bg-white rounded-2xl shadow-[2px_4px_10px_rgba(0,0,0,0.15)]" />

      {/* Image Container */}
      <div className="w-40 h-40 absolute left-[60px] top-[-6px] overflow-hidden">
        <div
          className="w-40 h-40 relative overflow-hidden"
          style={{
            borderRadius: "100000px",
            border: "5px solid #FAFDFF",
            boxShadow: "2px 2px 12px 0 rgba(32, 184, 251, 0.10)",
          }}
        >
          <Image
            className="w-full h-full object-cover"
            src={imageSrc}
            alt={title}
            width={160}
            height={160}
            style={{
              borderRadius: "100000px",
            }}
          />

          <div
            className="absolute bottom-0 left-0 w-full h-1/3 bg-[#E9F8FF99]"
            style={{
              borderRadius: "0 0 100000px 100000px",
            }}
          />
        </div>

        {discountText && (
          <div className="absolute left-0 bottom-[10%] w-full flex justify-center">
            <span className="text-black text-xl font-bold px-3 py-1 rounded !font-barlow">
              {discountText}
            </span>
          </div>
        )}
      </div>

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center text-gray-700 text-lg font-bold font-barlow">
        {title}
      </div>

      {/* Categories */}
      <div className="absolute top-[212px] left-[20px] w-60 flex flex-col gap-3">
        {categories.map((cat, i) => (
          <div key={i} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-5 relative">
                <FaAngleRight />
              </div>
              <div className="text-gray-700 text-base font-normal font-barlow">
                {cat.name}
              </div>
            </div>
            <div className="text-gray-700 text-base font-normal font-barlow">
              ({cat.count})
            </div>
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="absolute top-[385px] left-[112px] text-sky-400 text-base font-bold underline cursor-pointer font-barlow">
        <Link href="/products">View All</Link>
      </div>
    </div>
  );
}

export default function CategorySection() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#f2f2f25b] py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 justify-center">
        {categoriesData.map((cat, i) => (
          <ProductCategoryCard
            key={i}
            title={cat.title}
            imageSrc={cat.imageSrc}
            discountText={cat.discountText}
            categories={cat.categories}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
