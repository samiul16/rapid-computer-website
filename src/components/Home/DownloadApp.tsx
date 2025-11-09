"use client";

import Image from "next/image";
import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { LiaAppStoreIos } from "react-icons/lia";

const DownloadApp: React.FC = () => {
  return (
    <section
      className="max-w-7xl py-20 px-4 my-20 mx-auto rounded-[50px] shadow-lg bg-[#041A65] flex flex-col lg:flex-row items-center justify-between gap-10 p-10"
      style={{
        backgroundImage: `url("/global/appBg.png")`,
        backgroundSize: "cover",
      }}
    >
      {/* Left side graphics */}
      <div className="flex items-center justify-center">
        <Image
          src="/global/app.png"
          width={500}
          height={500}
          alt="phone"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Right side content */}
      <div className="flex-1 flex flex-col gap-10 text-white">
        {/* Badge */}

        {/* Heading & Description */}
        <div>
          <h2 className="text-4xl font-bold leading-snug">
            Download Rapid App!
          </h2>
          <p className="mt-4 text-base leading-relaxed max-w-lg">
            Download our app today to access our services right from your mobile
            device! Stay updated with new arrivals, exclusive deals, seasonal
            sales, and special offers at your fingertips.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-6">
          {/* App Store */}
          <button className="px-6 py-4 bg-[#26ADDF] rounded-full backdrop-blur-md flex items-center gap-3 cursor-pointer">
            <LiaAppStoreIos className="w-7 h-7 text-white text-xl font-bold" />
            <span className="text-white text-xl font-bold">App Store</span>
          </button>

          {/* Play Store */}
          <button className="px-6 py-4 bg-black/80 rounded-full backdrop-blur-md flex items-center gap-3 cursor-pointer">
            <BiLogoPlayStore className="w-6 h-6 text-[#26ADDF] text-xl font-bold" />
            <span className="text-sky-400 text-xl font-bold">Play Store</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
