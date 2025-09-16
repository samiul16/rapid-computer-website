// import Image from "next/image";
// import { AiFillStar } from "react-icons/ai";
// import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
// import Link from "next/link";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import AppTitleHeader from "@/helpers/ui/AppTitleHeader";

// const ShopByCategories = () => {
//   const categories = [
//     "Camera & Photo",
//     "Furnitures",
//     "Home & Garden",
//     "Technologies",
//   ];
//   const products = [
//     {
//       name: "Lenovo IdeaPad Flex 5 14ALC7 AMD Ryzen 5 5500U 14' Touchscreen.",
//       image: "https://placehold.co/100x100",
//       rating: 99,
//       price: "AED 2500",
//     },
//     {
//       name: "Lenovo IdeaPad Flex 5 14ALC7 AMD Ryzen 5 5500U 14' Touchscreen.",
//       image: "https://placehold.co/100x100",
//       rating: 85,
//       price: "AED 3200",
//     },
//     {
//       name: "Lenovo IdeaPad Flex 5 14ALC7 AMD Ryzen 5 5500U 14' Touchscreen.",
//       image: "https://placehold.co/100x100",
//       rating: 12,
//       price: "AED 2700",
//     },
//     {
//       name: "Lenovo IdeaPad Flex 5 14ALC7 AMD Ryzen 5 5500U 14' Touchscreen.",
//       image: "https://placehold.co/100x100",
//       rating: 60,
//       price: "AED 4000",
//     },
//   ];

//   useEffect(() => {
//     AOS.init({
//       offset: 120,
//       duration: 800,
//       easing: "ease-out-cubic",
//       once: true,
//     });
//   }, []);

//   return (
//     <main className="max-w-7xl mx-auto px-4 py-20 flex flex-col gap-10">
//       {/* Header */}
//       <section
//         className="flex justify-between items-center"
//         data-aos="fade-up"
//         data-aos-delay="100"
//       >
//         <AppTitleHeader
//           title="Shop"
//           subtitle="By"
//           secondarySubTitle="Categories"
//         />
//         <div className="flex gap-2">
//           <button className="z-10 text-black hover:text-[#26ADDF] p-2 rounded-full shadow cursor-pointer">
//             <FaArrowLeftLong />
//           </button>
//           <button className="z-10 text-black hover:text-[#26ADDF] p-2 rounded-full shadow cursor-pointer">
//             <FaArrowRightLong />
//           </button>
//         </div>
//       </section>

//       {/* Content */}
//       <section className="flex flex-col lg:flex-row gap-8">
//         {/* Left panel - Updated design */}
//         <div
//           className="w-64 h-80 relative p-5"
//           style={{
//             borderRadius: "20px",
//             border: "1px solid #26ADDF",
//             background: "#E9F8FF",
//             boxShadow: "0 0 12px 0 rgba(32, 184, 251, 0.10)",
//           }}
//           data-aos="fade-up"
//           data-aos-delay="200"
//         >
//           <div className="flex flex-col gap-5 z-0">
//             <div
//               className="text-gray-800 text-xl font-bold"
//               style={{ fontFamily: "Barlow, sans-serif" }}
//             >
//               Audio & Home
//             </div>
//             {categories.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="text-gray-700 text-xl font-normal"
//                 style={{ fontFamily: "Barlow, sans-serif" }}
//               >
//                 {item}
//               </div>
//             ))}
//           </div>
//           <div className="mt-5">
//             <Link
//               href="/products"
//               className="text-[#26ADDF] text-xl font-bold underline cursor-pointer"
//               style={{ fontFamily: "Barlow, sans-serif" }}
//             >
//               ALL CATEGORY
//             </Link>
//           </div>
//         </div>

//         {/* Right panel */}
//         <div
//           className="flex-1 flex flex-col gap-5"
//           data-aos="fade-up"
//           data-aos-delay="300"
//         >
//           {[0, 1].map((rowIdx) => (
//             <div key={rowIdx} className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               {products.slice(rowIdx * 2, rowIdx * 2 + 2).map((product, i) => (
//                 <div
//                   key={i}
//                   className="w-full p-4 bg-sky-400/5 rounded-2xl shadow-md backdrop-blur-md flex gap-4"
//                   data-aos="fade-up"
//                   data-aos-delay={400 + (rowIdx * 2 + i) * 100}
//                 >
//                   <Image
//                     className="w-24 h-24 rounded-2xl object-cover"
//                     src="/global/laptop.png"
//                     alt={product.name}
//                     width={100}
//                     height={100}
//                   />
//                   <div className="flex flex-col justify-between gap-y-3 w-full">
//                     <div>
//                       <div
//                         className="text-slate-700 text-base font-medium"
//                         style={{ fontFamily: "Barlow, sans-serif" }}
//                       >
//                         {product.name}
//                       </div>
//                       <div className="flex items-center gap-2 mt-1.5">
//                         <div className="flex gap-1">
//                           {[...Array(5)].map((_, starIdx) => (
//                             <AiFillStar
//                               key={starIdx}
//                               className={`w-5 h-5 ${
//                                 starIdx < Math.floor(product.rating / 20)
//                                   ? "text-amber-400"
//                                   : "text-gray-300"
//                               }`}
//                             />
//                           ))}
//                         </div>
//                         <div
//                           className="text-black text-sm opacity-50 font-semibold"
//                           style={{ fontFamily: "Barlow, sans-serif" }}
//                         >
//                           ({product.rating})
//                         </div>
//                       </div>
//                     </div>
//                     <div
//                       className="text-sky-500 text-base font-semibold"
//                       style={{ fontFamily: "Barlow, sans-serif" }}
//                     >
//                       Start from {product.price}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ShopByCategories;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiFillStar } from "react-icons/ai";
import { ChevronRight, Tag, TrendingUp } from "react-feather";

interface Category {
  id: string;
  name: string;
  count: number;
  isPopular?: boolean;
}

interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
  category: string;
  isNew?: boolean;
  discount?: number;
}

const CategorySection = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories: Category[] = [
    { id: "all", name: "All Products", count: 156 },
    { id: "headphones", name: "Headphones", count: 45, isPopular: true },
    { id: "speakers", name: "Speakers", count: 32 },
    { id: "microphones", name: "Microphones", count: 28 },
    { id: "accessories", name: "Accessories", count: 51, isPopular: true },
    { id: "smartwatches", name: "Smart Watches", count: 24 },
    { id: "tablets", name: "Tablets", count: 18 },
    { id: "cameras", name: "Cameras", count: 33 },
    { id: "gaming", name: "Gaming", count: 67 },
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
      price: "AED 1,299",
      rating: 5,
      image: "/global/game.png",
      category: "headphones",
      isNew: true,
    },
    {
      id: 2,
      name: "Apple AirPods Pro (2nd Generation)",
      price: "AED 899",
      rating: 4,
      image: "/global/game.png",
      category: "headphones",
      discount: 15,
    },
    {
      id: 3,
      name: "JBL Charge 5 Portable Bluetooth Speaker",
      price: "AED 599",
      rating: 4,
      image: "/global/game.png",
      category: "speakers",
    },
    {
      id: 4,
      name: "Blue Yeti USB Microphone for Podcasting",
      price: "AED 449",
      rating: 5,
      image: "/global/game.png",
      category: "microphones",
      isNew: true,
    },
    {
      id: 5,
      name: "Apple Watch Series 9",
      price: "AED 1,599",
      rating: 5,
      image: "/global/game.png",
      category: "smartwatches",
    },
    {
      id: 6,
      name: "iPad Pro 12.9-inch",
      price: "AED 4,299",
      rating: 5,
      image: "/global/game.png",
      category: "tablets",
      discount: 10,
    },
    {
      id: 7,
      name: "Canon EOS R6 Mark II",
      price: "AED 8,999",
      rating: 5,
      image: "/global/game.png",
      category: "cameras",
      isNew: true,
    },
    {
      id: 8,
      name: "PlayStation 5 Console",
      price: "AED 2,099",
      rating: 5,
      image: "/global/game.png",
      category: "gaming",
    },
  ];

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    console.log(`Selected category: ${categoryId}`);
  };

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Title at top left */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
        <p className="text-gray-600 mt-2">
          Discover products by your favorite categories
        </p>
      </div>

      <section className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Panel - Categories */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-gradient-to-br from-[#041A65] via-[#0834CB] to-[#1e3a8a] rounded-3xl shadow-2xl p-6 overflow-hidden relative h-[600px] flex flex-col">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 flex-shrink-0">
                <div className="p-2 bg-white/20 rounded-full">
                  <Tag className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">Audio & Home</h3>
                  <p className="text-blue-200 text-sm">
                    Discover our collection
                  </p>
                </div>
              </div>

              {/* Categories - Scrollable */}
              <div
                className="flex-1 overflow-y-auto pr-2 mb-6"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(255,255,255,0.3) transparent",
                }}
              >
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 group cursor-pointer ${
                        selectedCategory === category.id
                          ? "bg-white/20 backdrop-blur-sm border border-white/30"
                          : "hover:bg-white/10 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-white font-medium">
                            {category.name}
                          </span>
                          {category.isPopular && (
                            <div className="flex items-center gap-1 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                              <TrendingUp size={10} />
                              Popular
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-blue-200 text-sm">
                            {category.count}
                          </span>
                          <ChevronRight
                            className={`w-4 h-4 text-blue-200 transition-transform duration-300 ${
                              selectedCategory === category.id
                                ? "rotate-90"
                                : "group-hover:translate-x-1"
                            }`}
                          />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* View All Link */}
              <Link href="/products" className="block w-full flex-shrink-0">
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-center cursor-pointer hover:bg-white/30 transition-all duration-300">
                  <span className="text-white font-bold text-lg">
                    VIEW ALL CATEGORIES
                  </span>
                  <div className="text-blue-200 text-sm mt-1">
                    Browse complete collection
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Panel - Products */}
        <div className="flex-1">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 h-[600px] flex flex-col">
            <div className="mb-6 flex-shrink-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedCategory === "all"
                  ? "Featured Products"
                  : categories.find((c) => c.id === selectedCategory)?.name}
              </h3>
              <p className="text-gray-600">
                {filteredProducts.length} products available
              </p>
            </div>

            {/* Products Grid - Scrollable with fixed height */}
            <div
              className="flex-1 overflow-y-auto pr-2"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#d1d5db transparent",
                maxHeight: "calc(600px - 160px)", // Adjust based on header height
              }}
            >
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 pb-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                    className="group bg-gray-50 hover:bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 cursor-pointer overflow-hidden relative"
                  >
                    <div className="p-4 flex gap-3">
                      {/* Product Image */}
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <div className="w-full h-full rounded-xl overflow-hidden bg-gray-100 relative">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          {/* Static Badges */}
                          <div className="absolute top-1 left-1 flex flex-col gap-1">
                            {product.isNew && (
                              <span className="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                                NEW
                              </span>
                            )}
                            {product.discount && (
                              <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                                -{product.discount}%
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <h4 className="text-gray-900 font-semibold text-sm line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {product.name}
                          </h4>

                          {/* Rating */}
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, starIdx) => (
                                <AiFillStar
                                  key={starIdx}
                                  className={`w-3 h-3 ${
                                    starIdx < product.rating
                                      ? "text-amber-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-gray-500 text-xs font-medium">
                              ({product.rating}.0)
                            </span>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between">
                          <div className="text-blue-600 text-sm font-bold">
                            Start from {product.price}
                          </div>
                          <div className="text-blue-600 group-hover:translate-x-1 transition-transform duration-200">
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card-specific hover overlay - removed full page effect */}
                    <div className="absolute inset-0 bg-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
                  </div>
                ))}
              </div>

              {/* Empty state */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-12 h-full flex items-center justify-center flex-col">
                  <div className="text-gray-400 text-lg mb-2">
                    No products found
                  </div>
                  <p className="text-gray-500">
                    Try selecting a different category
                  </p>
                </div>
              )}
            </div>

            {/* Bottom action */}
            {filteredProducts.length > 0 && (
              <div className="pt-4 mt-4 border-t border-gray-200 flex-shrink-0">
                <Link
                  href={`/products?category=${selectedCategory}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  View All{" "}
                  {categories.find((c) => c.id === selectedCategory)?.name ||
                    "Products"}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategorySection;
