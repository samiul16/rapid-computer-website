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
        products: [
          {
            id: 1,
            name: "Dell OptiPlex 7090",
            price: "$899",
            image: "/products/desktop.webp",
          },
          {
            id: 2,
            name: "HP EliteDesk 800",
            price: "$1,199",
            image: "/products/desktop-2.webp",
          },
          {
            id: 3,
            name: "Lenovo ThinkCentre M90q",
            price: "$799",
            image: "/products/desktop.webp",
          },
        ],
      },
      {
        name: "Laptop",
        count: 15,
        description: "Portable laptops with advanced features for mobility",
        products: [
          {
            id: 4,
            name: "Dell Latitude 5520",
            price: "$1,299",
            image: "/products/laptop-1.jpg",
          },
          {
            id: 5,
            name: "HP ProBook 450",
            price: "$999",
            image: "/products/laptop-1.jpg",
          },
          {
            id: 6,
            name: "Lenovo ThinkPad E15",
            price: "$1,099",
            image: "/products/laptop-1.jpg",
          },
        ],
      },
      {
        name: "Gaming",
        count: 15,
        description: "Gaming equipment and accessories for entertainment",
        products: [
          {
            id: 7,
            name: "Gaming Headset Pro",
            price: "$199",
            image: "/products/headphone.webp",
          },
          {
            id: 8,
            name: "RGB Gaming Keyboard",
            price: "$149",
            image: "/products/keyboard.webp",
          },
          {
            id: 9,
            name: "Gaming Mouse Wireless",
            price: "$89",
            image: "/global/game.png",
          },
        ],
      },
      {
        name: "Keyboards",
        count: 15,
        description: "Professional keyboards for efficient data entry",
        products: [
          {
            id: 10,
            name: "Mechanical Keyboard",
            price: "$159",
            image: "/products/keyboard.webp",
          },
          {
            id: 11,
            name: "Wireless Keyboard",
            price: "$79",
            image: "/products/keyboard.webp",
          },
          {
            id: 12,
            name: "Ergonomic Keyboard",
            price: "$199",
            image: "/products/keyboard.webp",
          },
        ],
      },
      {
        name: "Monitors",
        count: 15,
        description: "High-quality displays for better productivity",
        products: [
          {
            id: 13,
            name: '4K Monitor 27"',
            price: "$449",
            image: "/products/monitor.avif",
          },
          {
            id: 14,
            name: "Ultrawide Monitor",
            price: "$699",
            image: "/products/monitor.avif",
          },
          {
            id: 15,
            name: "Gaming Monitor 144Hz",
            price: "$399",
            image: "/products/monitor.avif",
          },
        ],
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
        products: [
          {
            id: 16,
            name: "HP LaserJet Pro",
            price: "$299",
            image: "/global/Canon.png",
          },
          {
            id: 17,
            name: "Canon PIXMA Pro",
            price: "$449",
            image: "/global/Canon.png",
          },
          {
            id: 18,
            name: "Epson EcoTank",
            price: "$399",
            image: "/global/Canon.png",
          },
        ],
      },
      {
        name: "Scanners",
        count: 8,
        description: "High-resolution scanners for digital archiving",
        products: [
          {
            id: 19,
            name: "Fujitsu ScanSnap",
            price: "$399",
            image: "/global/Fujifilm.png",
          },
          {
            id: 20,
            name: "Canon CanoScan",
            price: "$199",
            image: "/global/Canon.png",
          },
          {
            id: 21,
            name: "Epson Perfection",
            price: "$299",
            image: "/global/Canon.png",
          },
        ],
      },
      {
        name: "Projectors",
        count: 5,
        description: "Presentation projectors for meetings and events",
        products: [
          {
            id: 22,
            name: "Epson PowerLite",
            price: "$899",
            image: "/global/brand.png",
          },
          {
            id: 23,
            name: "BenQ MH535FHD",
            price: "$649",
            image: "/global/brand.png",
          },
          {
            id: 24,
            name: "ViewSonic PA503W",
            price: "$449",
            image: "/global/brand.png",
          },
        ],
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
        products: [
          {
            id: 25,
            name: "TP-Link Archer AX73",
            price: "$199",
            image: "/global/brand.png",
          },
          {
            id: 26,
            name: "ASUS AX6000",
            price: "$349",
            image: "/global/brand.png",
          },
          {
            id: 27,
            name: "Netgear Nighthawk",
            price: "$249",
            image: "/global/brand.png",
          },
        ],
      },
      {
        name: "Switches",
        count: 12,
        description: "Network switches for data management",
        products: [
          {
            id: 28,
            name: "Cisco Catalyst 2960",
            price: "$499",
            image: "/global/brand.png",
          },
          {
            id: 29,
            name: "TP-Link TL-SG108",
            price: "$29",
            image: "/global/brand.png",
          },
          {
            id: 30,
            name: "Netgear GS308",
            price: "$39",
            image: "/global/brand.png",
          },
        ],
      },
      {
        name: "Cables",
        count: 50,
        description: "Various cables for networking and connections",
        products: [
          {
            id: 31,
            name: "Cat6 Ethernet Cable",
            price: "$15",
            image: "/global/brand.png",
          },
          {
            id: 32,
            name: "USB-C to HDMI Cable",
            price: "$25",
            image: "/global/brand.png",
          },
          {
            id: 33,
            name: "Fiber Optic Cable",
            price: "$45",
            image: "/global/brand.png",
          },
        ],
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
        products: [
          {
            id: 34,
            name: "Security Workstation Pro",
            price: "$1,299",
            image: "/products/desktop.webp",
          },
          {
            id: 35,
            name: "Surveillance PC Tower",
            price: "$999",
            image: "/products/desktop-2.webp",
          },
          {
            id: 36,
            name: "CCTV Control Unit",
            price: "$1,499",
            image: "/products/desktop.webp",
          },
        ],
      },
      {
        name: "Laptop",
        count: 15,
        description: "Mobile surveillance laptops for field work",
        products: [
          {
            id: 37,
            name: "Rugged Security Laptop",
            price: "$1,899",
            image: "/products/laptop-1.jpg",
          },
          {
            id: 38,
            name: "Field Surveillance Laptop",
            price: "$1,599",
            image: "/products/laptop-1.jpg",
          },
          {
            id: 39,
            name: "Mobile CCTV Station",
            price: "$1,799",
            image: "/products/laptop-1.jpg",
          },
        ],
      },
      {
        name: "Gaming",
        count: 15,
        description: "High-performance gaming setups for security centers",
        products: [
          {
            id: 40,
            name: "Security Gaming Chair",
            price: "$399",
            image: "/global/game.png",
          },
          {
            id: 41,
            name: "High-End Gaming PC",
            price: "$2,499",
            image: "/global/game.png",
          },
          {
            id: 42,
            name: "Gaming Accessories Kit",
            price: "$299",
            image: "/products/headphone.webp",
          },
        ],
      },
      {
        name: "Keyboards",
        count: 15,
        description: "Specialized keyboards for security systems",
        products: [
          {
            id: 43,
            name: "Security Control Keyboard",
            price: "$199",
            image: "/products/keyboard.webp",
          },
          {
            id: 44,
            name: "Backlit Security Keyboard",
            price: "$149",
            image: "/products/keyboard.webp",
          },
          {
            id: 45,
            name: "Industrial Keyboard",
            price: "$299",
            image: "/products/keyboard.webp",
          },
        ],
      },
      {
        name: "Monitors",
        count: 15,
        description: "Professional monitors for CCTV surveillance",
        products: [
          {
            id: 46,
            name: 'Security Monitor 32"',
            price: "$599",
            image: "/products/monitor.avif",
          },
          {
            id: 47,
            name: "CCTV Display Wall",
            price: "$1,299",
            image: "/products/monitor.avif",
          },
          {
            id: 48,
            name: "Surveillance Monitor 4K",
            price: "$799",
            image: "/products/monitor.avif",
          },
        ],
      },
    ],
  },
];

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

export interface CategoryItem {
  name: string;
  count: number;
  description: string;
  products: Product[];
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

  return (
    <div
      className={`relative w-full max-w-[1600px] mx-auto h-[500px] px-4 sm:px-6 lg:px-8 ${className}`}
      data-aos="fade-up"
      data-aos-delay={300 + index * 80}
      data-aos-duration="800"
    >
      {/* Image Container */}
      <div className="w-32 h-32 absolute left-1/2 -translate-x-1/2 top-[-6px] overflow-hidden z-10">
        <div
          className="w-32 h-32 relative overflow-hidden"
          style={{
            borderRadius: "100000px",
            border: "4px solid #FAFDFF",
            boxShadow: "2px 2px 12px 0 rgba(32, 184, 251, 0.10)",
          }}
        >
          <Image
            className="w-full h-full object-cover"
            src={imageSrc}
            alt={title}
            width={128}
            height={128}
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
            <span className="text-black text-base font-bold px-2 py-0.5 rounded !font-barlow">
              {discountText}
            </span>
          </div>
        )}
      </div>

      {/* Card Background - Fixed height with flex layout */}
      <div className="w-full bg-white rounded-2xl shadow-[2px_4px_10px_rgba(0,0,0,0.15)] transition-all duration-300 pt-[100px] pb-4 px-3 mt-[88px] h-[360px] flex flex-col">
        {/* Title */}
        <div className="text-center text-gray-700 text-sm font-bold font-barlow mb-4 -mt-8">
          {title}
        </div>

        {/* Categories - Scrollable content area */}
        <div className="flex flex-col gap-1 flex-1 overflow-y-auto pr-1 no-scrollbar">
          {categories.map((cat, i) => {
            const isExpanded = expandedItems.includes(i);
            return (
              <div key={i} className="flex flex-col">
                <div
                  className="flex justify-between items-center cursor-pointer hover:bg-gray-50 py-0.5 px-1 rounded transition-colors duration-200"
                  onClick={() => toggleItem(i)}
                >
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-3.5 relative transition-transform duration-200">
                      {isExpanded ? (
                        <FaAngleDown className="text-xs" />
                      ) : (
                        <FaAngleRight className="text-xs" />
                      )}
                    </div>
                    <div className="text-gray-700 text-md font-normal font-barlow">
                      {cat.name}
                    </div>
                  </div>
                  <div className="text-gray-700 text-md font-normal font-barlow">
                    ({cat.count})
                  </div>
                </div>
                {isExpanded && (
                  <div className="ml-4 mt-0.5 mb-1 p-1 bg-sky-50 rounded-lg shadow-sm border border-sky-100 transition-all duration-300 transform">
                    <div className="grid grid-cols-1 gap-1">
                      {cat.products.map((product) => (
                        <Link
                          key={product.id}
                          href={`/product-details/${product.id}`}
                          className="flex items-center gap-1.5 p-1 bg-white rounded-lg hover:bg-sky-100 transition-colors duration-200 cursor-pointer border border-sky-200"
                        >
                          <div className="w-7 h-7 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={28}
                              height={28}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[11px] font-medium text-gray-800 font-barlow truncate leading-tight">
                              {product.name}
                            </div>
                            <div className="text-[10px] text-sky-600 font-bold font-barlow leading-tight">
                              {product.price}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All - Fixed at bottom */}
        <div className="text-center mt-2.5 flex-shrink-0">
          <Link
            href="/products"
            className="text-sky-400 text-xs font-bold underline cursor-pointer font-barlow hover:text-sky-600 transition-colors duration-300"
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
    <section className="bg-white py-10">
      <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 justify-items-center">
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
      </div>
    </section>
  );
}
