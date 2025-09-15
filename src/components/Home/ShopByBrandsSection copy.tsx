"use client";

import React, { useState } from "react";
import BrandCard from "../common/BrandCard";
import { PrimaryBtn } from "../common/PrimaryBtn";
import { cn } from "@/lib/utils";

const brandCards = [
  { id: 1, name: "Canon", src: "/global/Canon.png" },
  { id: 2, name: "Nikon", src: "/global/Nikon.png" },
  { id: 3, name: "Sony", src: "/global/Sony.png" },
  { id: 4, name: "Olympus", src: "/global/Olympus.png" },
  { id: 5, name: "Fujifilm", src: "/global/Fujifilm.png" },
  { id: 6, name: "Leica", src: "/global/Leica.png" },
  { id: 7, name: "Casio", src: "/global/Casio.png" },
  { id: 8, name: "Panasonic", src: "/global/Panasonic.png" },
  { id: 9, name: "Nikkor", src: "/global/Nikkor.png" },
  { id: 10, name: "Sigma", src: "/global/Sigma.png" },
  { id: 11, name: "Nikon", src: "/global/Nikon.png" },
  { id: 12, name: "Sony", src: "/global/Sony.png" },
];

export default function ShopByBrandsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerSlide = 6; // always 6 cards per slide
  const totalSlides = Math.ceil(brandCards.length / cardsPerSlide);

  return (
    <main className="flex flex-col md:flex-row gap-10 w-full max-w-7xl mx-auto py-16 px-4 relative">
      {/* Left Info */}
      <section className="w-64 flex flex-col justify-center mb-6 md:mb-0">
        <h2 className="text-black text-4xl font-bold font-['Barlow']">
          Shop by Brands
        </h2>
        <p className="text-black text-md font-normal py-5">
          Shop By your favorite Brands
        </p>

        <PrimaryBtn size="lg" className="font-bold">
          View More
        </PrimaryBtn>
      </section>

      {/* Slider */}
      <section className="overflow-hidden relative flex-1">
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
                  .map((card) => (
                    <BrandCard key={card.id} {...card} />
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center gap-2 mt-4">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "w-4 h-4 rounded-full transition-all cursor-pointer",
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
