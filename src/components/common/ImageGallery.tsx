"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title }) => {
  const [activeImage, setActiveImage] = useState(images[0]);
  const thumbRef = useRef<HTMLDivElement>(null);

  // Thumbnail scroll function
  const scrollThumbnails = (direction: "up" | "down") => {
    if (thumbRef.current) {
      const scrollAmount = 120; // px per scroll
      thumbRef.current.scrollBy({
        top: direction === "up" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex gap-6">
      {/* ---- Thumbnails (Vertical Scrollable Slider) ---- */}
      <div className="flex flex-col items-center gap-2">
        <button
          onClick={() => scrollThumbnails("up")}
          className="p-1 bg-white rounded shadow hover:bg-gray-100 cursor-pointer"
        >
          <ChevronUp className="w-5 h-5" />
        </button>

        <div
          ref={thumbRef}
          className="flex flex-col gap-3 max-h-[400px] overflow-y-auto scrollbar-hide"
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`w-24 h-20 rounded border cursor-pointer flex items-center justify-center ${
                activeImage === img
                  ? "border-[#20B8FB]"
                  : "border-transparent"
              }`}
              onClick={() => setActiveImage(img)}
            >
              <Image
                src={img}
                alt={`thumb-${idx}`}
                width={100}
                height={100}
                className="object-contain h-full"
                
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollThumbnails("down")}
          className="p-1 bg-white rounded shadow hover:bg-gray-100 cursor-pointer cursor-pointer"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* ---- Main Image with Zoom ---- */}
      <div className="flex-1 bg-white rounded-lg flex items-center justify-center overflow-hidden group">
        <div className="relative w-full h-[400px]">
          <Image
            src={activeImage}
            alt={title}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-110"
            
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
