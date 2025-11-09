"use client";

import Image from "next/image";
import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { LiaAppStoreIos } from "react-icons/lia";

const DownloadApp: React.FC = () => {
  return (
    <div className="w-full px-4 lg:px-32 my-12 sm:my-20">
      <section
        className="max-w-8xl mx-auto rounded-[30px] sm:rounded-[50px] shadow-lg bg-[#041A65] flex flex-col lg:flex-row items-center gap-6 sm:gap-10 p-6 sm:p-10"
        style={{
          backgroundImage: `url("/global/appBg.png")`,
          backgroundSize: "cover",
        }}
      >
        {/* Left side graphics */}
        <div className="flex items-center justify-center w-full lg:w-2/5">
          <Image
            src="/global/app.png"
            width={500}
            height={500}
            alt="phone"
            className="w-64 sm:w-80 lg:w-full h-auto object-contain max-w-sm lg:max-w-none"
          />
        </div>

        {/* Right side content */}
        <div className="w-full lg:w-3/5 flex flex-col gap-6 sm:gap-10 text-white text-center lg:text-left items-center">
          {/* Heading & Description */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
              Download Rapid App!
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              Download our app today to access our services right from your
              mobile device! Stay updated with new arrivals, exclusive deals,
              seasonal sales, and special offers at your fingertips.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center lg:items-center lg:pl-[25%] gap-4 sm:gap-6 w-full">
            {/* App Store */}
            <button className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 bg-[#26ADDF] rounded-full backdrop-blur-md flex items-center justify-center gap-2 sm:gap-3 cursor-pointer">
              <LiaAppStoreIos className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              <span className="text-white text-base sm:text-xl font-bold">
                App Store
              </span>
            </button>

            {/* Play Store */}
            <button className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 bg-black/80 rounded-full backdrop-blur-md flex items-center justify-center gap-2 sm:gap-3 cursor-pointer">
              <BiLogoPlayStore className="w-5 h-5 sm:w-6 sm:h-6 text-[#26ADDF]" />
              <span className="text-sky-400 text-base sm:text-xl font-bold">
                Play Store
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadApp;
