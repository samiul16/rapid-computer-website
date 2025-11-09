"use client";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import PromoteProductCard from "@/components/general/PromoteProductCard";
import { useState, useEffect } from "react";
// import SectionHeader from "../common/SectionHeader";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  { name: "All Categories", count: 12, active: true },
  { name: "Laptop", count: 5, active: false },
  { name: "Mouse", count: 12, active: false },
  { name: "Printer", count: 12, active: false },
  { name: "Keyboard", count: 12, active: false },
  { name: "CCTV", count: 12, active: false },
];

const products = [
  {
    title: 'Lenovo IdeaPad Flex 5 14ALC7 AMD Ryzen 5 5500U 14" Touchscreen.',
    price: "Start form AED 2900",
    img: "https://placehold.co/166x146",
  },
  {
    title: 'HP Pavilion x360 14" Touchscreen Intel i5 11th Gen.',
    price: "Start form AED 2500",
    img: "https://placehold.co/166x146",
  },
  {
    title: "Dell Inspiron 15 Ryzen 7 Laptop.",
    price: "AED 3100",
    img: "https://placehold.co/166x146",
  },
  {
    title: 'Lenovo IdeaPad Flex 5 14ALC7 AMD Ryzen 5 5500U 14" Touchscreen.',
    price: "Start form AED 2900",
    img: "https://placehold.co/166x146",
  },
  {
    title: 'HP Pavilion x360 14" Touchscreen Intel i5 11th Gen.',
    price: "Start form AED 2500",
    img: "https://placehold.co/166x146",
  },
  {
    title: "Dell Inspiron 15 Ryzen 7 Laptop.",
    price: "AED 3100",
    img: "https://placehold.co/166x146",
  },
  {
    title: 'Lenovo IdeaPad Flex 5 14ALC7 AMD Ryzen 5 5500U 14" Touchscreen.',
    price: "Start form AED 2900",
    img: "https://placehold.co/166x146",
  },
];

// Animated Title Component
const AnimatedTitle = ({ text, delay = 0 }) => {
  const words = text.split(" ");

  return (
    <div className="flex flex-wrap gap-2">
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block"
          data-aos="fade-up"
          data-aos-delay={delay + index * 150}
          style={{ fontFamily: "Barlow, sans-serif" }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

const PromotedSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });

    // Set responsive items per view
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const nextSlide = () => {
    if (startIndex + itemsPerView < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerView);

  return (
    <main className="w-full  py-20">
      <div className="max-w-8xl mx-auto px-4 lg:px-14">
        {/* Heading */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-3xl font-bold text-gray-800 mb-8"
        >
          <AnimatedTitle text="Promoted" delay={200} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-10">
          {/* Categories Sidebar with Gradient Background */}
          <div
            className="lg:col-span-1 rounded-lg shadow p-6 bg-sky-50 border border-sky-100"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <ul className="space-y-4">
              {categories.map((cat, idx) => (
                <li
                  key={idx}
                  className={`flex justify-between items-center text-lg transition-colors duration-300 hover:text-sky-600 ${
                    cat.active ? "text-sky-500 font-semibold" : "text-gray-700"
                  }`}
                  style={{ fontFamily: "Barlow, sans-serif" }}
                  data-aos="fade-up"
                  data-aos-delay={400 + idx * 50}
                >
                  <span>{cat.name}</span>
                  <span>({cat.count})</span>
                </li>
              ))}
              <li
                className="text-sky-500 font-bold hover:text-sky-600 transition-colors duration-300 cursor-pointer"
                style={{ fontFamily: "Barlow, sans-serif" }}
                data-aos="fade-up"
                data-aos-delay={700}
              >
                View All
              </li>
            </ul>
          </div>

          {/* Products Carousel */}
          <div
            className="lg:col-span-3 relative min-w-0"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {visibleProducts.map((p, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={600 + idx * 150}
                  className="flex justify-center"
                >
                  <PromoteProductCard
                    img={p.img}
                    title={p.title}
                    price={p.price}
                    discount={10}
                  />
                </div>
              ))}
            </div>

            {/* Navigation */}
            <button
              onClick={prevSlide}
              disabled={startIndex === 0}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full cursor-pointer disabled:opacity-40 hover:scale-110 transition-all duration-300"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              <FaArrowLeftLong className="text-sky-500" />
            </button>
            <button
              onClick={nextSlide}
              disabled={startIndex + itemsPerView >= products.length}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full cursor-pointer disabled:opacity-40 hover:scale-110 transition-all duration-300"
              data-aos="fade-left"
              data-aos-delay="800"
            >
              <FaArrowRightLong className="text-sky-500" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PromotedSection;
