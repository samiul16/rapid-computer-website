"use client";

import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiHeart,
  FiShare2,
} from "react-icons/fi";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  productStatus?: number;
}

export default function ProductGallery({
  images,
  productStatus = 1,
}: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isOutOfStock = productStatus === 0;

  const prevImage = () =>
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative flex justify-center items-center shadow-lg rounded-[32px] bg-gray-50">
        <Image
          src={images[selectedIndex]}
          alt="Selected product"
          width={500}
          height={400}
          className={`object-contain min-h-[400px] md:min-h-[400px] ${
            isOutOfStock ? "grayscale opacity-75" : ""
          }`}
        />

        {/* Status Badge */}
        {isOutOfStock ? (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 text-sm font-semibold rounded-lg z-10 shadow-lg">
            OUT OF STOCK
          </div>
        ) : (
          <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 text-sm font-semibold rounded-lg z-10 shadow-lg">
            IN STOCK
          </div>
        )}

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow cursor-pointer"
        >
          <FiChevronLeft className="w-5 h-5 text-gray-800" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow cursor-pointer"
        >
          <FiChevronRight className="w-5 h-5 text-gray-800" />
        </button>

        {/* Action Icons */}
        <div className="absolute right-2 top-2 flex flex-col gap-2">
          <button className="bg-white/70 hover:bg-white p-2 rounded-full shadow cursor-pointer">
            <FiHeart className="w-5 h-5 text-gray-800" />
          </button>
          <button className="bg-white/70 hover:bg-white p-2 rounded-full shadow cursor-pointer">
            <FiShare2 className="w-5 h-5 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Thumbnails - Below and Centered */}
      <div className="flex gap-2 justify-center cursor-pointer">
        {images.map((src, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`border rounded-md overflow-hidden w-16 h-16 flex-shrink-0 cursor-pointer ${
              selectedIndex === idx
                ? "ring-2 ring-sky-500"
                : "hover:ring-2 hover:ring-gray-300"
            }`}
          >
            <Image
              src={src}
              alt={`Thumbnail ${idx + 1}`}
              width={64}
              height={64}
              className={`object-cover w-full h-full ${
                isOutOfStock ? "grayscale opacity-75" : ""
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
