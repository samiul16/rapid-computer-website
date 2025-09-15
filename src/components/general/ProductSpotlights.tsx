"use client";

import React from "react";
import Image from "next/image";

interface HighlightSectionProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

const HighlightSection: React.FC<HighlightSectionProps> = ({
  icon,
  title,
  children,
}) => (
  <div className="w-full bg-blue-50 rounded-lg px-4 sm:px-6 py-6 flex flex-col gap-4">
    {/* Header */}
    <div className="flex items-center gap-2">
      <Image
        src={icon}
        alt={title}
        width={28}
        height={28}
        className="w-7 h-7"
        
      />
      <h2 className="text-sky-500 text-lg sm:text-xl font-bold">{title}</h2>
    </div>

    {/* Content */}
    <div className="flex flex-col gap-4 text-sm sm:text-base text-neutral-800 leading-relaxed">
      {children}
    </div>
  </div>
);

const ProductSpotlights = () => {
  return (
    <HighlightSection
      icon="https://placehold.co/28x28"
      title="Product spotlights"
    >
      {/* Feature highlights */}
      <div>
        <p className="font-semibold">Feature highlights:</p>
        <p>
          This <span className="font-semibold">15.6-inch POS device</span>{" "}
          features a G+G capacitive multi-touch screen, powered by an{" "}
          <span className="font-semibold">RK3568 quad-core processor</span>, and
          supports versatile memory configurations like RAM options of 2G or 4G
          and ROM options of 16G, 32G, or 64G.
        </p>
        <p>
          It includes dual displays with HD resolution, a robust hardware base,
          and operates on Android 11 with multiple language support. Designed
          for retail, restaurant, and hospital applications, it ensures reliable
          performance in diverse environments.
        </p>
      </div>

      {/* Supplier highlights */}
      <div className="flex flex-wrap gap-1">
        <span className="font-semibold">Supplier highlights:</span>
        <span>This merchant is a</span>
        <span className="font-semibold">manufacturer</span>
        <span>and maintains a</span>
        <span className="font-semibold">positive review rate of 100.0%</span>
      </div>
    </HighlightSection>
  );
};

export default ProductSpotlights;
