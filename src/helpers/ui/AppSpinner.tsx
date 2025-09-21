"use client";
import React from "react";
import Image from "next/image";

interface AppSpinnerProps {
  clsname: string;
}

const AppSpinner = ({ clsname }: AppSpinnerProps) => {
  return (
    <div
      className={`${clsname} flex justify-center items-center text-dark fw-bold my-5 bg-transparent`}
    >
      <Image
        src="/rapid-logo-2.webp"
        alt="loader"
        width={80}
        height={80}
        quality={100}
        priority={true}
      />
    </div>
  );
};

export default AppSpinner;
