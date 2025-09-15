"use client";

import React from "react";
import { PrimaryBtn } from "../common/PrimaryBtn";
import Image from "next/image";

const SubscribeSection: React.FC = () => {
  return (
    <main className="w-full bg-[#041A65] py-10 my-20">
      <section className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <Image
            src="/global/mail.png"
            width={150}
            height={150}
            alt="Subscribe"
            className="w-20 md:w-36"
            
          />
        </div>

        {/* Text & Form Section */}
        <div className="flex-1 flex flex-col gap-6 text-white">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold">
            Subscribe & Get 15% Discount
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base max-w-md">
            Get 15% off on your first purchase! Plus, be the first to know about
            our latest deals and exclusive offers.
          </p>
        </div>
        {/* Email Input + Button */}
        <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-full text-black focus:outline-none bg-white"
          />
          <PrimaryBtn type="submit" size="md" className="font-bold px-6 py-3">
            Subscribe
          </PrimaryBtn>
        </form>
      </section>
    </main>
  );
};

export default SubscribeSection;
