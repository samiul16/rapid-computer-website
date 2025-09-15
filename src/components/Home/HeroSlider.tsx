"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { PrimaryBtn } from "../common/PrimaryBtn";
import { WatchVideoButton } from "../common/WatchVideoButton";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/global/banner.jpg",
    title: "Elevate Your Experience: Check Out Our Exclusive MacBook Pro.",
  },
  {
    id: 2,
    image: "/global/banner.jpg",
    title: "Elevate Your Experience: Check Out Our Exclusive MacBook Pro.",
  },
  {
    id: 3,
    image: "/global/banner.jpg",
    title: "Elevate Your Experience: Check Out Our Exclusive MacBook Pro.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <main className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${slides[current].image})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg max-w-5xl"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {slides[current].title}
            </motion.h1>
            <div className="mt-10 md:mt-24 flex gap-5">
              <PrimaryBtn
                className="font-extrabold shadow-white/60 shadow-md hover:shadow-white/80"
                size="lg"
                onClick={() => {}}
              >
                Shop Now
              </PrimaryBtn>
              <WatchVideoButton icon={<FaPlay size={20} />} />
            </div>
          </div>
        </motion.div>
      </AnimatePresence> */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Image Component */}
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill // covers the parent container
            priority // important: loads immediately
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg max-w-5xl"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {slides[current].title}
            </motion.h1>
            <div className="mt-10 md:mt-24 flex gap-5">
              <PrimaryBtn
                className="font-extrabold shadow-white/60 shadow-md hover:shadow-white/80"
                size="lg"
                onClick={() => {}}
              >
                Shop Now
              </PrimaryBtn>
              <WatchVideoButton icon={<FaPlay size={20} />} />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full hover:text-black transition duration-500 cursor-pointer"
      >
        <FaArrowLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full hover:text-black transition duration-500 cursor-pointer"
      >
        <FaArrowRight size={20} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "w-4 h-4 rounded-full transition-all cursor-pointer",
              i === current ? "bg-[#20B8FB] scale-125 w-8" : "bg-white"
            )}
          />
        ))}
      </div>
    </main>
  );
}
