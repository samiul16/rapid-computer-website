"use client";

import Image from "next/image";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const categoriesData = [
  {
    title: "POS System",
    imageSrc: "/global/pos.jpg",
    discountText: "10% off",
    categories: [
      {
        name: "Desktops",
        count: 15,
        description: "High-performance desktop computers for business use",
      },
      {
        name: "Laptop",
        count: 15,
        description: "Portable laptops with advanced features for mobility",
      },
      {
        name: "Gaming",
        count: 15,
        description: "Gaming equipment and accessories for entertainment",
      },
      {
        name: "Keyboards",
        count: 15,
        description: "Professional keyboards for efficient data entry",
      },
      {
        name: "Monitors",
        count: 15,
        description: "High-quality displays for better productivity",
      },
    ],
  },
  {
    title: "Biometric Solutions",
    imageSrc: "/global/Biometric.jpg",
    discountText: "15% off",
    categories: [
      {
        name: "Printers",
        count: 10,
        description: "Professional printers for document management",
      },
      {
        name: "Scanners",
        count: 8,
        description: "High-resolution scanners for digital archiving",
      },
      {
        name: "Projectors",
        count: 5,
        description: "Presentation projectors for meetings and events",
      },
    ],
  },
  {
    title: "RFID Solutions",
    imageSrc: "/global/RFID.jpg",
    discountText: "5% off",
    categories: [
      {
        name: "Routers",
        count: 20,
        description: "Network routers for connectivity solutions",
      },
      {
        name: "Switches",
        count: 12,
        description: "Network switches for data management",
      },
      {
        name: "Cables",
        count: 50,
        description: "Various cables for networking and connections",
      },
    ],
  },
  {
    title: "CCTV Solutions",
    imageSrc: "/global/CCTV.jpg",
    discountText: "10% off",
    categories: [
      {
        name: "Desktops",
        count: 15,
        description: "Security desktop systems for surveillance",
      },
      {
        name: "Laptop",
        count: 15,
        description: "Mobile surveillance laptops for field work",
      },
      {
        name: "Gaming",
        count: 15,
        description: "High-performance gaming setups for security centers",
      },
      {
        name: "Keyboards",
        count: 15,
        description: "Specialized keyboards for security systems",
      },
      {
        name: "Monitors",
        count: 15,
        description: "Professional monitors for CCTV surveillance",
      },
    ],
  },
];

export interface CategoryItem {
  name: string;
  count: number;
  description: string;
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
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (itemIndex: number) => {
    setExpandedItems((prev) =>
      prev.includes(itemIndex)
        ? prev.filter((i) => i !== itemIndex)
        : [...prev, itemIndex]
    );
  };

  // const hasExpandedItems = expandedItems.length > 0;

  return (
    <div
      className={`relative w-72 h-[420px] ${className}`}
      data-aos="fade-up"
      data-aos-delay={300 + index * 80}
      data-aos-duration="800"
    >
      {/* Image Container */}
      <div className="w-40 h-40 absolute left-[60px] top-[-6px] overflow-hidden z-10">
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

      {/* Card Background - Fixed height with flex layout */}
      <div className="w-72 bg-white rounded-2xl shadow-[2px_4px_10px_rgba(0,0,0,0.15)] transition-all duration-300 pt-[120px] pb-6 px-5 mt-[94px] h-[326px] flex flex-col">
        {/* Title */}
        <div className="text-center text-gray-700 text-lg font-bold font-barlow mb-6 -mt-12">
          {title}
        </div>

        {/* Categories - Scrollable content area */}
        <div className="flex flex-col gap-2 flex-1 overflow-y-auto pr-2 no-scrollbar">
          {categories.map((cat, i) => {
            const isExpanded = expandedItems.includes(i);
            return (
              <div key={i} className="flex flex-col">
                <div
                  className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-1 rounded transition-colors duration-200"
                  onClick={() => toggleItem(i)}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-5 relative transition-transform duration-200">
                      {isExpanded ? <FaAngleDown /> : <FaAngleRight />}
                    </div>
                    <div className="text-gray-700 text-base font-normal font-barlow">
                      {cat.name}
                    </div>
                  </div>
                  <div className="text-gray-700 text-base font-normal font-barlow">
                    ({cat.count})
                  </div>
                </div>
                {isExpanded && (
                  <div className="ml-6 mt-1 mb-2 p-3 bg-sky-50 rounded-lg text-sm text-gray-600 font-barlow shadow-sm border border-sky-100 transition-all duration-300 transform">
                    {cat.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All - Fixed at bottom */}
        <div className="text-center mt-4 flex-shrink-0">
          <Link
            href="/products"
            className="text-sky-400 text-base font-bold underline cursor-pointer font-barlow hover:text-sky-600 transition-colors duration-300"
          >
            View All
          </Link>
        </div>
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
