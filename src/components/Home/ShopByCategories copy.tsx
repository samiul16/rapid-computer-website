import Image from "next/image";
import SectionHeader from "../common/SectionHeader";
import { AiFillStar } from "react-icons/ai";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const ShopByCategories = () => {
  const categories = [
    "Camera & Photo",
    "Furnitures",
    "Home & Garden",
    "Technologies",
  ];
  const products = [
    {
      name: "Lenovo IdeaPad Flex 5 14ALC7 AMD Ryzen 5 5500U 14' Touchscreen.",
      image: "https://placehold.co/100x100",
      rating: 99,
      price: "AED 2500",
    },
    {
      name: "Lenovo IdeaPad Flex 5 14ALC7 AMD Ryzen 5 5500U 14' Touchscreen.",
      image: "https://placehold.co/100x100",
      rating: 85,
      price: "AED 3200",
    },
    {
      name: "Lenovo IdeaPad Flex 5 14ALC7 AMD Ryzen 5 5500U 14' Touchscreen.",
      image: "https://placehold.co/100x100",
      rating: 12,
      price: "AED 2700",
    },
    {
      name: "Lenovo IdeaPad Flex 5 14ALC7 AMD Ryzen 5 5500U 14' Touchscreen.",
      image: "https://placehold.co/100x100",
      rating: 60,
      price: "AED 4000",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-20 flex flex-col gap-10">
      {/* Header */}
      <section className="flex justify-between items-center">
        <SectionHeader title="Shop By Categories" />
        <div className="flex gap-2">
          <button
            // onClick={() => {}}
            className="z-10 text-black hover:text-[#26ADDF] p-2 rounded-full shadow cursor-pointer"
          >
            <FaArrowLeftLong />
          </button>
          <button
            // onClick={() => {}}
            className="z-10 text-black hover:text-[#26ADDF] p-2 rounded-full shadow cursor-pointer"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </section>

      {/* Content */}
      <section className="flex flex-col lg:flex-row gap-8">
        {/* Left panel */}
        <div className="w-64 h-80 relative bg-gradient-to-r from-[#041A65] via-[#041A65] to-[#0834CB] rounded-2xl shadow-lg p-5">
          <div className="flex flex-col gap-5 z-0">
            <div className="text-white text-xl font-bold">Audio & Home</div>
            {categories.map((item, idx) => (
              <div key={idx} className="text-white text-xl font-normal">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-5 text-white text-xl font-bold underline cursor-pointer">
            <Link href="/products">ALL CATEGORY</Link>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex-1 flex flex-col gap-5">
          {[0, 1].map((rowIdx) => (
            <div key={rowIdx} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {products.slice(rowIdx * 2, rowIdx * 2 + 2).map((product, i) => (
                <div
                  key={i}
                  className="w-full p-4 bg-sky-400/5 rounded-2xl shadow-md backdrop-blur-md flex gap-4"
                >
                  <Image
                    className="w-24 h-24 rounded-2xl object-cover"
                    src="/global/game.png"
                    alt={product.name}
                  />
                  <div className="flex flex-col justify-between gap-y-3 w-full">
                    <div>
                      <div className="text-slate-700 text-base font-medium">
                        {product.name}
                      </div>
                      <div className="flex items-center gap-2 mt-1.5">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, starIdx) => (
                            <AiFillStar
                              key={starIdx}
                              className={`w-5 h-5 ${
                                starIdx < product.rating
                                  ? "text-amber-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-black text-sm opacity-50 font-semibold">
                          ({product.rating})
                        </div>
                      </div>
                    </div>
                    <div className="text-sky-500 text-base font-semibold">
                      Start from {product.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ShopByCategories;
