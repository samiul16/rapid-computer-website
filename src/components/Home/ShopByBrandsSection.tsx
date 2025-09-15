"use client";

import React, { useState, useEffect } from "react";
import BrandCard from "../common/BrandCard";
import { PrimaryBtn } from "../common/PrimaryBtn";
import { cn } from "@/lib/utils";
import AOS from "aos";
import "aos/dist/aos.css";

const brandCards = [
  { id: 1, name: "Canon", src: "/global/Canon.png" },
  { id: 2, name: "Nikon", src: "/global/Nikon.png" },
  { id: 3, name: "Sony", src: "/global/Sony.jpg" },
  { id: 4, name: "Olympus", src: "" },
  { id: 5, name: "Fujifilm", src: "/global/Fujifilm.png" },
  { id: 6, name: "Leica", src: "" },
  { id: 7, name: "Casio", src: "/global/Casio.png" },
  { id: 8, name: "Panasonic", src: "/global/Panasonic.png" },
  { id: 9, name: "Nikkor", src: "/global/Nikkor.png" },
  { id: 10, name: "Sigma", src: "/global/Sigma.png" },
  { id: 11, name: "Nikon", src: "/global/Nikon.png" },
  { id: 12, name: "Sony", src: "/global/Sony.png" },
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

export default function ShopByBrandsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerSlide = 6; // always 6 cards per slide
  const totalSlides = Math.ceil(brandCards.length / cardsPerSlide);

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <main className="flex flex-col md:flex-row gap-10 w-full max-w-7xl  mx-auto py-16 px-4 relative bg-gray-100 rounded-3xl">
      {/* Left Info */}
      <section
        className="w-64 flex flex-col justify-center mb-6 md:mb-0"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <h2 className="text-black text-4xl font-bold mb-4">
          <AnimatedTitle text="Shop by Brands" delay={200} />
        </h2>
        <p
          className="text-black text-md font-normal py-5"
          style={{ fontFamily: "Barlow, sans-serif" }}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Shop By your favorite Brands
        </p>

        <div data-aos="fade-up" data-aos-delay="700">
          <PrimaryBtn
            size="lg"
            className="font-bold"
            style={{ fontFamily: "Barlow, sans-serif" }}
          >
            View More
          </PrimaryBtn>
        </div>
      </section>

      {/* Slider */}
      <section
        className="overflow-hidden relative flex-1"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <div className="overflow-hidden relative flex-1 py-10">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="grid gap-5 grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 flex-none w-full"
              >
                {brandCards
                  .slice(
                    slideIndex * cardsPerSlide,
                    slideIndex * cardsPerSlide + cardsPerSlide
                  )
                  .map((card, cardIndex) => (
                    <div
                      key={card.id}
                      data-aos="fade-up"
                      data-aos-delay={800 + cardIndex * 100}
                    >
                      <BrandCard {...card} />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div
          className="absolute bottom-0 left-0 w-full flex justify-center gap-2 mt-4"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "w-4 h-4 rounded-full transition-all cursor-pointer duration-300 hover:scale-110",
                i === currentIndex
                  ? "bg-[#20B8FB] w-8"
                  : "bg-[#ABD5E7] hover:bg-[#20B8FB]"
              )}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
