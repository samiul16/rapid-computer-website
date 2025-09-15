import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { PrimaryBtn } from "../common/PrimaryBtn";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

interface FlashSaleBannerProps {
  title?: string;
  subtitle?: string;
  discount?: number;
  imageUrl?: string | StaticImageData;
  initialTimer?: {
    hours: number;
    days: number;
    minutes: number;
    seconds: number;
  };
}

const FlashSaleBanner: React.FC<FlashSaleBannerProps> = ({
  title = "Enhance Your Music Experience",
  subtitle = "Categories",
  discount = 30,
  imageUrl = "/global/alt.png",
  initialTimer = { days: 5, hours: 23, minutes: 59, seconds: 35 },
}) => {
  const [timer, setTimer] = useState(initialTimer);
  const [imageVisible, setImageVisible] = useState(true);
  const [, setArrowPosition] = useState(0);

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  // Dynamic countdown timer
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

  // Image animation every 5 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageVisible(false);
      setTimeout(() => setImageVisible(true), 2000); // 2 seconds invisible
    }, 8000); // Total cycle: 8 seconds (6 visible + 2 invisible)

    return () => clearInterval(imageInterval);
  }, []);

  // Add this state for button arrow animation
  const [buttonArrowForward, setButtonArrowForward] = useState(true);

  // Add this useEffect for button arrow animation
  useEffect(() => {
    const buttonArrowInterval = setInterval(() => {
      setButtonArrowForward((prev) => !prev);
    }, 2500);

    return () => clearInterval(buttonArrowInterval);
  }, []);

  // Arrow animation every 5 seconds
  useEffect(() => {
    const arrowInterval = setInterval(() => {
      setArrowPosition((prev) => (prev >= 100 ? 0 : prev + 25));
    }, 2500);

    return () => clearInterval(arrowInterval);
  }, []);

  return (
    <main className="relative w-full max-w-7xl h-[500px] mx-auto px-4 my-20 bg-black/70 rounded-3xl backdrop-blur-[10px] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 w-[504px] h-full bg-zinc-300/70 rounded-full blur-[100px] opacity-30" />

      <div className="p-10 flex justify-between items-center gap-5">
        <div className="w-1/2">
          {/* Category Label */}
          <div
            className="text-[#20B8FB] text-base font-bold"
            style={{ fontFamily: "Barlow, sans-serif" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {subtitle}
          </div>

          {/* Title with Bluish Gradient */}
          <h2
            className="text-3xl sm:text-5xl font-semibold leading-[40px] sm:leading-[60px] tracking-widest py-8"
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #e0f2fe 20%, #81d4fa 40%, #26a69a 60%, #1976d2 80%, #0d47a1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "Barlow, sans-serif",
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {title}
          </h2>

          {/* Dynamic Timer */}
          <div
            className="flex gap-3 sm:gap-6 pb-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {Object.entries(timer).map(([label, value], index) => (
              <div
                key={label}
                className="w-12 sm:w-16 h-12 sm:h-16 relative transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={400 + index * 100}
              >
                <div className="absolute inset-0 bg-blue-50 rounded-full" />
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <div
                    className="text-black text-sm sm:text-base font-semibold"
                    style={{ fontFamily: "Barlow, sans-serif" }}
                  >
                    {String(value).padStart(2, "0")}
                  </div>
                  <div
                    className="text-black text-xs font-normal text-center capitalize"
                    style={{ fontFamily: "Barlow, sans-serif" }}
                  >
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Shop Now Button */}
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            className="flex justify-start flex-row"
          >
            <PrimaryBtn
              size="lg"
              className="text-white flex items-center gap-3"
              style={{
                fontFamily: "Barlow, sans-serif",
                background:
                  "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 25%, #06b6d4 50%, #0891b2 75%, #0e7490 100%)",
                border: "none",
              }}
            >
              <span>Shop Now</span>
              <span
                className={`transition-transform duration-1000 ease-in-out ${
                  buttonArrowForward
                    ? "transform translate-x-2"
                    : "transform -translate-x-1"
                }`}
              >
                <FaArrowRight />
              </span>
            </PrimaryBtn>
          </div>
        </div>

        {/* Right Side: Image + Discount Badge */}
        <div
          className="relative w-full sm:w-1/2 flex justify-end items-start"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          {/* Discount Badge */}
          <div
            className="absolute top-0 right-0 w-52 sm:w-60 h-24 sm:h-28 z-10"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 rounded-2xl bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url('/global/Rectangle.png')` }}
            />

            {/* Text */}
            <div
              className="absolute top-3 sm:top-4 left-5 sm:left-12 text-white text-xl sm:text-2xl font-semibold tracking-wide"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              upto
            </div>
            <div
              className="absolute top-10 sm:top-16 left-10 sm:left-18 text-white text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              {discount}% <small className="text-base sm:text-lg">off</small>
            </div>
          </div>

          {/* Animated Image */}
          <div
            className={`relative w-[284px] sm:w-[568px] h-64 sm:h-80 transition-all duration-500 ${
              imageVisible
                ? "transform translate-y-0 opacity-100"
                : "transform -translate-y-8 opacity-0"
            }`}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Image
              src={imageUrl}
              alt="Flash Sale"
              className="absolute bottom-0 left-0 w-full h-full object-cover origin-top-left"
              width={568}
              height={320}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FlashSaleBanner;
