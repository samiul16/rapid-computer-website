"use client";

import React, { useState, useEffect } from "react";
// import SectionHeader from "../common/SectionHeader";
import ButtonLink from "../common/ButtonLink";
import { PrimaryBtn } from "../common/PrimaryBtn";

const NewArrivalSection: React.FC = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const showContent = () => {
      setIsContentVisible(true);
      // Hide content after 6 seconds
      setTimeout(() => {
        setIsContentVisible(false);
      }, 6000);
    };

    // Show content immediately
    showContent();

    // Repeat every 10 seconds (6 seconds visible + 4 seconds hidden)
    const interval = setInterval(showContent, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full py-12 md:py-20">
      <div className="max-w-8xl mx-auto px-4 lg:px-28  flex flex-col gap-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          {/* <SectionHeader title="New Arrivals" /> */}
          <h2 className="text-4xl sm:text-4xl font-bold text-sky-500 text-shadow-md">
            New Arrivals
          </h2>
          <ButtonLink link="/">View All</ButtonLink>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Large Card */}
          <div className="relative w-full h-[400px] md:h-[650px] rounded-3xl overflow-hidden group cursor-pointer">
            {/* Background Image */}
            <div
              className={`absolute inset-0 rounded-3xl bg-cover bg-no-repeat bg-center transition-transform duration-700 ${
                isContentVisible ? "scale-110" : "scale-100"
              }`}
              style={{ backgroundImage: `url("/global/bg04.png")` }}
            />

            {/* Animated Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
                isContentVisible ? "opacity-80" : "opacity-60"
              }`}
            />

            {/* Floating Elements */}
            <div
              className={`absolute top-6 right-6 transition-all duration-700 delay-300 ${
                isContentVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="w-3 h-3 bg-white/30 rounded-full animate-pulse" />
            </div>
            <div
              className={`absolute top-12 right-12 transition-all duration-700 delay-500 ${
                isContentVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="w-2 h-2 bg-white/40 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>

            {/* Content Layer */}
            <div className="absolute bottom-0 w-full h-[250px] md:h-[280px] p-6 md:p-8 flex flex-col justify-end">
              {/* Content that slides up */}
              <div
                className={`transform transition-transform duration-500 delay-200 ${
                  isContentVisible ? "translate-y-0" : "translate-y-4"
                }`}
              >
                <div className="space-y-4">
                  {/* Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                    <span className="text-white text-xs font-semibold">
                      NEW ARRIVAL
                    </span>
                  </div>

                  {/* Title with typing animation effect */}
                  <h3 className="text-white text-2xl md:text-4xl font-bold leading-tight">
                    {[
                      "S",
                      "o",
                      "u",
                      "n",
                      "d",
                      "W",
                      "a",
                      "v",
                      "e",
                      " ",
                      "P",
                      "r",
                      "o",
                      " ",
                      "X",
                    ].map((char, index) => (
                      <span
                        key={index}
                        className={`inline-block transition-opacity duration-300 ${
                          isContentVisible ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                          transitionDelay: isContentVisible
                            ? `${300 + index * 100}ms`
                            : "0ms",
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-white/90 text-base md:text-lg max-w-sm leading-relaxed transform transition-all duration-500 delay-500 ${
                      isContentVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    Revolutionary audio experience with immersive 3D sound
                    technology for the ultimate gaming adventure.
                  </p>

                  {/* Features */}
                  <div
                    className={`flex gap-4 transform transition-all duration-500 delay-700 ${
                      isContentVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-white text-sm">Wireless</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      />
                      <span className="text-white text-sm">HD Audio</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div
                className={`mt-6 transform transition-all duration-500 delay-900 ${
                  isContentVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <PrimaryBtn
                  size="lg"
                  className="font-bold bg-white text-black hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                >
                  Discover More
                </PrimaryBtn>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            {/* Top Medium Card */}
            <div className="relative w-full h-[200px] md:h-[340px] rounded-3xl overflow-hidden group cursor-pointer">
              <div
                className={`absolute inset-0 rounded-3xl bg-cover bg-no-repeat bg-center transition-transform duration-700 ${
                  isContentVisible ? "scale-110" : "scale-100"
                }`}
                style={{ backgroundImage: `url("/global/bg01.png")` }}
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-l from-black/70 via-black/30 to-transparent transition-opacity duration-500 ${
                  isContentVisible ? "opacity-80" : "opacity-60"
                }`}
              />

              {/* Content positioned on the right */}
              <div className="absolute bottom-0 right-0 w-full md:w-3/5 h-[120px] md:h-[200px] p-4 md:p-6 flex flex-col justify-end">
                <div
                  className={`text-right transform transition-transform duration-500 delay-200 ${
                    isContentVisible ? "translate-x-0" : "translate-x-4"
                  }`}
                >
                  <div className="inline-flex items-center px-2 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-3">
                    <span className="text-white text-xs font-semibold">
                      4K DISPLAY
                    </span>
                  </div>

                  <h3
                    className={`text-white font-bold text-lg md:text-2xl mb-2 transition-opacity duration-500 delay-400 ${
                      isContentVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    UltraHD Monitor 24&quot;
                  </h3>

                  <p
                    className={`text-white/90 text-sm md:text-base mb-4 transition-opacity duration-500 delay-600 ${
                      isContentVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Professional gaming monitor with stunning clarity
                  </p>

                  <button
                    className={`text-white border-2 border-white px-4 py-2 font-semibold text-sm md:text-base rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 transform delay-800 ${
                      isContentVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Two Small Cards */}
            <div className="grid grid-cols-2 gap-6">
              {/* Small Card 1 */}
              <div className="relative w-full h-[140px] md:h-[285px] rounded-3xl overflow-hidden group cursor-pointer">
                <div
                  className={`absolute inset-0 rounded-3xl bg-cover bg-no-repeat bg-center transition-transform duration-700 ${
                    isContentVisible ? "scale-110" : "scale-100"
                  }`}
                  style={{ backgroundImage: `url("/global/bg03.png")` }}
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
                    isContentVisible ? "opacity-80" : "opacity-60"
                  }`}
                />

                <div className="absolute bottom-0 left-0 w-full p-3 md:p-4">
                  <div
                    className={`transform transition-transform duration-500 delay-200 ${
                      isContentVisible ? "translate-y-0" : "translate-y-2"
                    }`}
                  >
                    <h4
                      className={`text-white font-bold text-sm md:text-lg mb-2 transition-opacity duration-500 delay-300 ${
                        isContentVisible ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Wireless Earbuds
                    </h4>
                    <button
                      className={`text-white border border-white px-3 py-1 font-semibold text-xs md:text-sm rounded-full hover:bg-white hover:text-black transition-all duration-300 delay-500 ${
                        isContentVisible ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Small Card 2 */}
              <div className="relative w-full h-[140px] md:h-[285px] rounded-3xl overflow-hidden group cursor-pointer">
                <div
                  className={`absolute inset-0 rounded-3xl bg-cover bg-no-repeat bg-center transition-transform duration-700 ${
                    isContentVisible ? "scale-110" : "scale-100"
                  }`}
                  style={{ backgroundImage: `url("/global/bg02.png")` }}
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
                    isContentVisible ? "opacity-80" : "opacity-60"
                  }`}
                />

                <div className="absolute bottom-0 left-0 w-full p-3 md:p-4">
                  <div
                    className={`transform transition-transform duration-500 delay-200 ${
                      isContentVisible ? "translate-y-0" : "translate-y-2"
                    }`}
                  >
                    <h4
                      className={`text-white font-bold text-sm md:text-lg mb-2 transition-opacity duration-500 delay-300 ${
                        isContentVisible ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Smart Home Hub
                    </h4>
                    <button
                      className={`text-white border border-white px-3 py-1 font-semibold text-xs md:text-sm rounded-full hover:bg-white hover:text-black transition-all duration-300 delay-500 ${
                        isContentVisible ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewArrivalSection;
