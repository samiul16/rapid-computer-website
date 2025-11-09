"use client";

/* eslint-disable */
// @ts-nocheck

import { useEffect, useState } from "react";
import { ArrowDown } from "react-feather";
import { useLocale, useTranslations } from "next-intl";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaPlay } from "react-icons/fa6";
import { PrimaryBtn } from "../PrimaryBtn";
import { WatchVideoButton } from "../WatchVideoButton";
import Image from "next/image";
// banner images currently static, can be replaced with dynamic images later
// import { useGetBannerQuery } from "@/redux/apiSlice/apiSlice";
// baneer images can be fetched from an API is made dynamic
// for performance issue is closed for now
const backgroundImages = [
  "/assets/hero-1.jpg",
  "/assets/hero-2.jpg",
  "/assets/hero-3.jpg",
];

const heroTexts = [
  "Work Smarter & Faster – With the New MacBook Pro",
  "Level Up Your Game: Discover Our Premium Gaming Monitor!",
  "Enhance Your Sound: Discover Our Premium Headphones.",
];

const Hero = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({ offset: 120, duration: 5000, easing: "ease-out" });
  }, []);

  return (
    <div
      className="relative h-screen overflow-hidden"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      {/* Background slider */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          speed={2000}
          className="w-full h-full"
          style={{ height: "100%" }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        >
          {backgroundImages.map((image, index) => (
            <SwiperSlide key={`${image}-${index}`}>
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat "
                style={{
                  backgroundImage: `url(${image})`,
                  height: "100vh",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Text & Buttons Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center h-full text-center text-slate-100 px-4">
        {/* <p className="text-16 mb-4 hidden font-semibold md:block">
          {t("Hero.welcome")}{" "}
          <span className="text-brand">{t("Hero.second")}</span>
        </p> */}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl max-w-4xl sm:max-w-5xl mb-4 sm:mb-6 transition-all duration-500 leading-tight sm:leading-normal"
          data-aos="fade-up"
          key={currentSlide}
        >
          {heroTexts[currentSlide]}
        </h1>
        {/* <p className="text-xl mb-8" data-aos="fade-up">
          {t("Hero.subline")} <span>{t("Hero.smile")}</span>
        </p> */}
        <div className="flex items-center justify-center gap-4">
          <div className="mt-6 sm:mt-10 md:mt-24 flex flex-col sm:flex-row gap-3 sm:gap-5 items-center">
            <PrimaryBtn
              className="font-extrabold shadow hover:shadow-lg w-full sm:w-auto sm:min-w-64"
              size="lg"
              onClick={() => {}}
            >
              Shop Now
            </PrimaryBtn>
            <WatchVideoButton icon={<FaPlay size={20} />} />
          </div>
          {/* <button
            data-aos="fade-up"
            onClick={() => setIsOpen(true)}
            className="bg-brand text-slate-100 px-8 py-3 hover:bg-brand-dark transition-colors flex items-center gap-2 rounded"
          >
            <ArrowUp className="animate-float-item-one" />
            <span className="uppercase">{t("Hero.watch")}</span>
          </button> */}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "w-8 h-3 bg-sky-500 rounded-full"
                : "w-3 h-3 bg-white/60 hover:bg-white/80 rounded-full"
            }`}
            onClick={() => {
              // You can add swiper navigation here if needed
            }}
          />
        ))}
      </div>

      {/* Right Side Icon - Chat/Message */}
      {/* <div className="absolute bottom-8 right-8 z-30">
        <button className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg cursor-pointer">
          <Image
            src="/msg.svg"
            alt="Chat Icon"
            width={20}
            height={20}
            className="w-7 h-7"
          />
        </button>
      </div> */}
    </div>
  );
};

export default Hero;
