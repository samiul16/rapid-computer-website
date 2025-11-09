"use client";
import React from "react";
import Image from "next/image";

const features = [
  {
    title: "FREE Shipping",
    desc: "Been either finished for",
    icon: "/global/delivery.png",
  },
  {
    title: "Online Payment",
    desc: "Their Professional look",
    icon: "/global/card.png",
  },
  {
    title: "Support 24",
    desc: "Break the lines whenever",
    icon: "/global/support.png",
  },
  {
    title: "Return of Purchase",
    desc: "Photography online website",
    icon: "/global/return.png",
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-8xl px-4 lg:px-14 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-4">
            {/* Icon wrapper */}
            <div className="relative w-20 h-20 flex items-center justify-center">
              {/* Gradient background */}
              <div className="absolute inset-0 rounded-full bg-[#26ADDF] opacity-30" />
              {/* White circle */}
              <div className="relative w-14 h-14 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={item.icon}
                  width={35}
                  height={35}
                  alt={item.title}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Text */}
            <div>
              <h3 className="text-neutral-900 text-xl font-semibold">
                {item.title}
              </h3>
              <p className="text-zinc-600 text-base">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
