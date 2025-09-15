"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface PromoCardProps {
  title: string;
  subtitle: string;
  imgSrc?: string;
  bgColor: string;
  textColor: string;
  buttonColor: string;
  link?: string;
}

const BrandTopProduct = ({
  title,
  subtitle,
  imgSrc,
  bgColor,
  buttonColor,
}: PromoCardProps) => {
  const [imagePosition, setImagePosition] = useState(-240); // Start off-screen to the right
  const [isScaled, setIsScaled] = useState(false);

  useEffect(() => {
    // Initial animation when component mounts
    const initialTimeout = setTimeout(() => {
      setImagePosition(297); // Move to final position
      setTimeout(() => setIsScaled(true), 500); // Scale up after reaching position
      setTimeout(() => setIsScaled(false), 1000); // Scale back to normal
    }, 100);

    // Repeat animation every 5 seconds
    const interval = setInterval(() => {
      setImagePosition(-240); // Reset to off-screen
      setIsScaled(false);

      setTimeout(() => {
        setImagePosition(297); // Move to final position
        setTimeout(() => setIsScaled(true), 500); // Scale up
        setTimeout(() => setIsScaled(false), 1000); // Scale back
      }, 100);
    }, 5000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`relative w-full h-72 rounded-3xl overflow-hidden ${bgColor}`}
    >
      {/* Text & Button */}
      <div className="absolute left-10 top-14 flex flex-col gap-14 w-80">
        <div className="flex flex-col gap-4">
          <h2
            className="text-4xl font-bold leading-[60px] tracking-wide text-white"
            style={{ fontFamily: "Barlow, sans-serif" }}
          >
            {title}
          </h2>
          <p
            className="text-2xl font-semibold tracking-wide text-white"
            style={{ fontFamily: "Barlow, sans-serif" }}
          >
            {subtitle}
          </p>
        </div>
        <button
          className={`w-40 h-12 rounded-[100px] bg-white flex justify-center items-center cursor-pointer transition-all duration-300 hover:scale-105`}
        >
          <span
            className={`font-bold text-base`}
            style={{
              color: buttonColor,
              fontFamily: "Barlow, sans-serif",
            }}
          >
            Shop Now
          </span>
        </button>
      </div>

      {/* Animated Image */}
      <Image
        className={`absolute w-60 h-60 top-[30px] transition-all duration-1000 ease-out ${
          isScaled ? "transform scale-110" : "transform scale-100"
        }`}
        style={{
          left: `${imagePosition}px`,
          transitionProperty: "left, transform",
        }}
        src={imgSrc || "/global/headphone.png"}
        width={240}
        height={240}
        alt={title}
      />
    </div>
  );
};

export default BrandTopProduct;
