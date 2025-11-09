"use client";
import React, { useRef, useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import ProductCard from "../common/ProductCard";
import AOS from "aos";
import "aos/dist/aos.css";

// Dynamic Timer Component
const Timer: React.FC = () => {
  const [timer, setTimer] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        let { days, hours, minutes, seconds } = prevTimer;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeItems = [
    { label: "Days", value: timer.days },
    { label: "Hours", value: timer.hours },
    { label: "Minutes", value: timer.minutes },
    { label: "Seconds", value: timer.seconds },
  ];

  return (
    <div
      className="inline-flex shadow bg-sky-500 rounded-2xl p-4 gap-6"
      data-aos="fade-left"
      data-aos-delay="300"
    >
      {timeItems.map((item, index) => (
        <div
          key={item.label}
          className={`flex flex-col items-center text-center relative ${
            index < timeItems.length - 1 ? "pr-6" : ""
          }`}
          data-aos="zoom-in"
          data-aos-delay={400 + index * 100}
        >
          <div
            className="text-3xl font-bold text-white mb-1 transition-all duration-300"
            style={{ fontFamily: "Barlow, sans-serif" }}
          >
            {String(item.value).padStart(2, "0")}
          </div>
          <div
            className="text-sm font-medium text-sky-100"
            style={{ fontFamily: "Barlow, sans-serif" }}
          >
            {item.label}
          </div>

          {/* Right border - only show for items that aren't the last one */}
          {index < timeItems.length - 1 && (
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-px bg-sky-100"></div>
          )}
        </div>
      ))}
    </div>
  );
};

// Animated Word Component
const AnimatedTitle: React.FC<{ text: string; delay?: number }> = ({
  text,
  delay = 0,
}) => {
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

// Flash Sale Section with Dummy Data
const FlashSaleGrid: React.FC = () => {
  const products = [
    {
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      discount: 40,
      rating: 5,
      imageUrl: "/products/monitor.avif",
    },
    {
      title: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      discount: 35,
      rating: 4,
      imageUrl: "/products/desktop.webp",
    },
    {
      title: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      discount: 30,
      rating: 5,
      imageUrl: "/products/desktop-2.webp",
    },
    {
      title: "S-Series Comfort Chair",
      price: 375,
      oldPrice: 400,
      discount: 25,
      rating: 5,
      imageUrl: "/products/laptop-1.jpg",
    },
    {
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      discount: 40,
      rating: 5,
      imageUrl: "/products/server.jpg",
    },
    {
      title: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      discount: 35,
      rating: 4,
      imageUrl: "https://placehold.co/191x101",
    },
    {
      title: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      discount: 30,
      rating: 5,
      imageUrl: "https://placehold.co/140x106",
    },
    {
      title: "S-Series Comfort Chair",
      price: 375,
      oldPrice: 400,
      discount: 25,
      rating: 5,
      imageUrl: "https://placehold.co/95x159",
    },
  ];

  const [scrollIndex, setScrollIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const itemsPerView =
    typeof window !== "undefined" && window.innerWidth < 768 ? 2 : 4;

  const maxIndex = Math.ceil(products.length / itemsPerView) - 1;

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const scrollTo = (direction: number) => {
    const newIndex = Math.min(Math.max(scrollIndex + direction, 0), maxIndex);
    setScrollIndex(newIndex);
    const container = sliderRef.current;
    if (container) {
      const childWidth = (container.firstChild as HTMLElement).offsetWidth;
      container.scrollTo({
        left: newIndex * childWidth * itemsPerView,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full  py-20">
      <div className="max-w-8xl mx-auto px-4 lg:px-14">
        {/* Header */}
        <div
          className="flex justify-between items-end mb-8 px-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="text-4xl font-bold text-sky-500 text-shadow-md">
            <AnimatedTitle text="Hurry Up Sales" delay={200} />
          </div>
          <Timer />
        </div>

        {/* Product Grid */}
        <div
          className="relative w-full"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {/* Left Button */}
          {scrollIndex > 0 && (
            <button
              onClick={() => scrollTo(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:text-[#26ADDF] p-2 rounded-full shadow cursor-pointer transition-all duration-300 hover:scale-110"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <FaArrowLeftLong />
            </button>
          )}

          {/* Cards */}
          <div
            ref={sliderRef}
            className="grid grid-flow-col auto-cols-[calc(100%/2)] md:auto-cols-[calc(100%/4)] gap-6 overflow-x-auto scrollbar-none scroll-smooth px-4 py-5 hide-scrollbar"
          >
            {products.map((product, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={700 + idx * 100}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {/* Right Button */}
          {scrollIndex < maxIndex && (
            <button
              onClick={() => scrollTo(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:text-[#26ADDF] p-2 rounded-full shadow cursor-pointer transition-all duration-300 hover:scale-110"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <FaArrowRightLong />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FlashSaleGrid;
