"use client";

import React from "react";

interface ProductTitleProps {
  title: string;
}

export default function ProductTitle({ title }: ProductTitleProps) {
  return (
    <div className="w-full pt-2.5 pb-5">
      <h1
        className="
          text-base sm:text-lg md:text-xl lg:text-2xl
          font-semibold text-neutral-800
          leading-snug sm:leading-relaxed
          font-inter
          line-clamp-2
        "
      >
        {title}
      </h1>
    </div>
  );
}
