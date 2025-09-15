import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppTitleHeader from "@/helpers/ui/AppTitleHeader";

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

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 py-20 flex flex-col gap-10">
      {/* Header */}
      <section
        className="flex justify-between items-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <AppTitleHeader
          title="Shop"
          subtitle="By"
          secondarySubTitle="Categories"
        />
        <div className="flex gap-2">
          <button className="z-10 text-black hover:text-[#26ADDF] p-2 rounded-full shadow cursor-pointer">
            <FaArrowLeftLong />
          </button>
          <button className="z-10 text-black hover:text-[#26ADDF] p-2 rounded-full shadow cursor-pointer">
            <FaArrowRightLong />
          </button>
        </div>
      </section>

      {/* Content */}
      <section className="flex flex-col lg:flex-row gap-8">
        {/* Left panel - Updated design */}
        <div
          className="w-64 h-80 relative p-5"
          style={{
            borderRadius: "20px",
            border: "1px solid #26ADDF",
            background: "#E9F8FF",
            boxShadow: "0 0 12px 0 rgba(32, 184, 251, 0.10)",
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex flex-col gap-5 z-0">
            <div
              className="text-gray-800 text-xl font-bold"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              Audio & Home
            </div>
            {categories.map((item, idx) => (
              <div
                key={idx}
                className="text-gray-700 text-xl font-normal"
                style={{ fontFamily: "Barlow, sans-serif" }}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-5">
            <Link
              href="/products"
              className="text-[#26ADDF] text-xl font-bold underline cursor-pointer"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              ALL CATEGORY
            </Link>
          </div>
        </div>

        {/* Right panel */}
        <div
          className="flex-1 flex flex-col gap-5"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {[0, 1].map((rowIdx) => (
            <div key={rowIdx} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {products.slice(rowIdx * 2, rowIdx * 2 + 2).map((product, i) => (
                <div
                  key={i}
                  className="w-full p-4 bg-sky-400/5 rounded-2xl shadow-md backdrop-blur-md flex gap-4"
                  data-aos="fade-up"
                  data-aos-delay={400 + (rowIdx * 2 + i) * 100}
                >
                  <Image
                    className="w-24 h-24 rounded-2xl object-cover"
                    src="/global/laptop.png"
                    alt={product.name}
                    width={100}
                    height={100}
                  />
                  <div className="flex flex-col justify-between gap-y-3 w-full">
                    <div>
                      <div
                        className="text-slate-700 text-base font-medium"
                        style={{ fontFamily: "Barlow, sans-serif" }}
                      >
                        {product.name}
                      </div>
                      <div className="flex items-center gap-2 mt-1.5">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, starIdx) => (
                            <AiFillStar
                              key={starIdx}
                              className={`w-5 h-5 ${
                                starIdx < Math.floor(product.rating / 20)
                                  ? "text-amber-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <div
                          className="text-black text-sm opacity-50 font-semibold"
                          style={{ fontFamily: "Barlow, sans-serif" }}
                        >
                          ({product.rating})
                        </div>
                      </div>
                    </div>
                    <div
                      className="text-sky-500 text-base font-semibold"
                      style={{ fontFamily: "Barlow, sans-serif" }}
                    >
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
