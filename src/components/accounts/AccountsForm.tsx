"use client";

import Image from "next/image";
import React from "react";

// Common Input Field
const InputField = ({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="text-black text-base font-bold font-['Barlow'] leading-normal">
      {label}
    </label>
    <div className="h-12 relative rounded-[100px]">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-12 px-4 bg-white rounded-[50px] outline-none 
                   text-black text-base font-normal font-['Barlow'] 
                   placeholder:opacity-50"
      />
    </div>
  </div>
);

// Expiry Date + CVV Row
const CardDetails = () => (
  <div className="w-full flex flex-col gap-10">
    <div className="flex items-center gap-14">
      {/* Expiry Date */}
      <div className="flex flex-col gap-2 w-80">
        <label className="text-black text-base font-bold font-['Barlow'] leading-normal">
          End Date
        </label>
        <div className="flex gap-4">
          {/* MM */}
          <input
            type="text"
            placeholder="mm"
            maxLength={2}
            className="w-36 h-12 px-4 bg-white rounded-[100px] outline-none 
                       text-black text-base font-normal font-['Barlow'] 
                       placeholder:opacity-50"
          />
          {/* YY */}
          <input
            type="text"
            placeholder="yy"
            maxLength={2}
            className="w-36 h-12 px-4 bg-white rounded-[100px] outline-none 
                       text-black text-base font-normal font-['Barlow'] 
                       placeholder:opacity-50"
          />
        </div>
      </div>

      {/* CVV */}
      <div className="flex items-end gap-2">
        <div className="flex flex-col gap-2 w-36">
          <label className="text-black text-base font-bold font-['Barlow'] leading-normal">
            CVV
          </label>
          <input
            type="password"
            placeholder="123"
            maxLength={3}
            className="h-12 px-4 bg-white rounded-[100px] outline-none 
                       text-black text-base font-normal font-['Barlow'] 
                       placeholder:opacity-50"
          />
        </div>
        <div className="flex items-center gap-3">
          {/* Custom Checkbox */}
          <input
            type="checkbox"
            className="w-6 h-6 rounded-full border border-black 
                       appearance-none cursor-pointer 
                       checked:bg-sky-400 checked:border-sky-400 
                       checked:before:content-[''] 
                       checked:before:text-white 
                       checked:before:flex checked:before:items-center 
                       checked:before:justify-center"
          />
          <span className="opacity-50 text-black text-base">3 Digits</span>
        </div>
      </div>
    </div>

    {/* Terms Checkbox */}
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        className="w-6 h-6 rounded-full border border-black 
                   appearance-none cursor-pointer 
                   checked:bg-sky-400 checked:border-sky-400 
                   checked:before:content-[''] 
                   checked:before:text-white 
                   checked:before:flex checked:before:items-center 
                   checked:before:justify-center"
      />
      <span className="opacity-50 text-black text-base">
        I have read and accept the terms of use and privacy policy
      </span>
    </div>
  </div>
);


// Payment Header
const PaymentHeader = () => (
  <div className="flex justify-between items-center w-full">
    <h2 className="text-sky-400 text-xl font-bold font-['Barlow'] leading-7">
      Payment Options
    </h2>
    <span className="text-sky-400 text-lg font-semibold font-['Barlow'] leading-7">
      Total AED130.00
    </span>
  </div>
);

// Payment Methods Logos
const PaymentMethods = () => (
  <div className="flex justify-between items-center w-full">
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 bg-sky-400 rounded-full" />
      <span className="opacity-50 text-black text-base font-normal font-['Barlow'] leading-normal">
        Payment System
      </span>
    </div>
    <div className="flex items-center gap-2">
      <Image
        src={"/product-details/paypal.png"}
        alt="paypal"
        width={100}
        height={100}
        className="w-16 h-8 rounded"
        
      />
      <Image
        src={"/product-details/paypal.png"}
        alt="paypal"
        width={100}
        height={100}
        className="w-16 h-8 rounded"
        
      />
      <Image
        src={"/product-details/paypal.png"}
        alt="paypal"
        width={100}
        height={100}
        className="w-16 h-8 rounded"
        
      />
      <Image
        src={"/product-details/paypal.png"}
        alt="paypal"
        width={100}
        height={100}
        className="w-16 h-8 rounded"
        
      />
    </div>
  </div>
);

// Pay Button
const PayButton = () => (
  <button className="w-96 h-12 px-12 py-4 bg-sky-400 rounded-[50px] flex justify-center items-center gap-2.5 cursor-pointer">
    <span className="text-neutral-50 text-base font-bold font-['Barlow'] leading-normal">
      Pay Now
    </span>
  </button>
);

// Main Payment Form
const PaymentForm = () => {
  return (
    <div className="w-[754px] h-[630px] relative bg-sky-400/5 rounded-[20px] shadow-[2px_4px_10px_0px_rgba(0,0,0,0.10)] backdrop-blur-xl overflow-hidden">
      <div className="w-[615px] left-[70px] top-[37px] absolute flex flex-col gap-4">
        <PaymentHeader />
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-6 w-full">
            <PaymentMethods />
            <InputField label="Cardholder Name" placeholder="Rimel" />
            <InputField label="Card Number" placeholder="4123 7890 8989" />
            <CardDetails />
          </div>
          <PayButton />
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
