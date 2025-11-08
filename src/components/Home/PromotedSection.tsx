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

  // Responsive: 1 item for mobile, 3 for md+
  const itemsPerView =
    typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1;

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
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
    <main className="w-full max-w-[1600px] mx-auto px-4 py-20">
      {/* Heading */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-3xl font-bold text-gray-800 mb-8"
      >
        <AnimatedTitle text="Promoted" delay={200} />
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-10">
        {/* Categories Sidebar with Gradient Background */}
        <div
          className="rounded-lg shadow-md p-6 w-full md:w-80 text-white"
          style={{
            background: "linear-gradient(125deg, #0bc1e9, #3749bb, #00237e)",
          }}
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <ul className="space-y-4">
            {categories.map((cat, idx) => (
              <li
                key={idx}
                className={`flex justify-between items-center text-lg transition-colors duration-300 hover:text-cyan-200 ${
                  cat.active ? "text-cyan-200 font-semibold" : ""
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
              className="text-cyan-200 font-bold hover:text-white transition-colors duration-300 cursor-pointer"
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
          className="relative flex-1"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="flex gap-6">
            {visibleProducts.map((p, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={600 + idx * 150}
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
            <FaArrowLeftLong className="text-[#20B8FB]" />
          </button>
          <button
            onClick={nextSlide}
            disabled={startIndex + itemsPerView >= products.length}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full cursor-pointer disabled:opacity-40 hover:scale-110 transition-all duration-300"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            <FaArrowRightLong className="text-[#20B8FB]" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default PromotedSection;
