"use client";

import React, { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { cn } from "@/lib/utils";

interface SliderProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  itemsPerViewSm?: number;
  itemsPerViewMd?: number;
  itemsPerViewLg?: number;
}

export const Slider = <T extends { id: number }>({
  items,
  renderItem,
  itemsPerViewSm = 1,
  itemsPerViewMd = 2,
  itemsPerViewLg = 4,
}: SliderProps<T>) => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerView(itemsPerViewSm);
      else if (width < 1024) setItemsPerView(itemsPerViewMd);
      else setItemsPerView(itemsPerViewLg);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerViewSm, itemsPerViewMd, itemsPerViewLg]);

  const totalSlides = Math.ceil(items.length / itemsPerView);
  const currentSlide = Math.floor(startIndex / itemsPerView);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) setStartIndex((currentSlide + 1) * itemsPerView);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setStartIndex((currentSlide - 1) * itemsPerView);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden px-5 py-10">
        <div
          className="flex transition-transform duration-500 gap-4"
          style={{
            transform: `translateX(-${(startIndex / items.length) * 100}%)`,
            width: `${(items.length / itemsPerView) * 100}%`,
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0"
              style={{ width: `${100 / items.length}%` }}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <SliderNav prevSlide={prevSlide} nextSlide={nextSlide} currentSlide={currentSlide} totalSlides={totalSlides} />

      {/* Dots */}
      <SliderDots currentSlide={currentSlide} totalSlides={totalSlides} onDotClick={(i) => setStartIndex(i * itemsPerView)} />
    </div>
  );
};

interface SliderNavProps {
  prevSlide: () => void;
  nextSlide: () => void;
  currentSlide: number;
  totalSlides: number;
}

const SliderNav: React.FC<SliderNavProps> = ({ prevSlide, nextSlide, currentSlide, totalSlides }) => (
  <>
    <button
      onClick={prevSlide}
      disabled={currentSlide === 0}
      className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full cursor-pointer disabled:opacity-40 z-10"
    >
      <FaArrowLeftLong className="text-[#20B8FB]" />
    </button>
    <button
      onClick={nextSlide}
      disabled={currentSlide === totalSlides - 1}
      className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full cursor-pointer disabled:opacity-40 z-10"
    >
      <FaArrowRightLong className="text-[#20B8FB]" />
    </button>
  </>
);

interface SliderDotsProps {
  currentSlide: number;
  totalSlides: number;
  onDotClick: (index: number) => void;
}

const SliderDots: React.FC<SliderDotsProps> = ({ currentSlide, totalSlides, onDotClick }) => (
  <div className="absolute bottom-2 w-full flex justify-center gap-2">
    {Array.from({ length: totalSlides }).map((_, i) => (
      <button
        key={i}
        onClick={() => onDotClick(i)}
        className={cn(
          "w-4 h-4 rounded-full transition-all",
          i === currentSlide ? "bg-[#20B8FB] w-8" : "bg-[#ABD5E7] hover:bg-[#20B8FB]"
        )}
      />
    ))}
  </div>
);


