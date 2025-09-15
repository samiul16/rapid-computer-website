"use client";

import React, { useState } from "react";
import PaymentMethods from "../payment/PaymentMethods";
import OrderSummary from "../common/OrderSummary";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const [shipping, setShipping] = useState("express");

  const router = useRouter();

  const handleCheckout = () => {
    router.push("/payment");
  };

  return (
    <div className="">
      {/* Header */}

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Form */}
        <div className="w-full flex flex-col md:col-span-2 gap-8">
          {/* Title */}
          <h2 className="text-neutral-900 text-lg font-bold font-['Barlow']">
            Personal Information
          </h2>

          {/* Form */}
          <div className="p-6 bg-sky-400/5 rounded-2xl shadow-[2px_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[2px] flex flex-col gap-8">
            {/* Name */}
            <div className="flex flex-col gap-3">
              <label className="text-zinc-600 text-lg font-medium font-['Barlow']">
                Name
              </label>
              <input
                type="text"
                className="h-14 px-4 bg-white rounded-full border border-neutral-200 focus:outline-sky-500"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-3">
              <label className="text-zinc-600 text-lg font-medium font-['Barlow']">
                Email
              </label>
              <input
                type="email"
                className="h-14 px-4 bg-white rounded-full border border-neutral-200 focus:outline-sky-500"
              />
            </div>

            {/* Mobile */}
            <div className="flex flex-col gap-3">
              <label className="text-zinc-600 text-lg font-medium font-['Barlow']">
                Mobile Number
              </label>
              <input
                type="tel"
                className="h-14 px-4 bg-white rounded-full border border-neutral-200 focus:outline-sky-500"
              />
            </div>

            {/* City, State, ZIP */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-3">
                <label className="text-zinc-600 text-lg font-medium font-['Barlow']">
                  City
                </label>
                <input
                  type="text"
                  className="h-14 px-4 bg-white rounded-full border border-neutral-200 focus:outline-sky-500"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-zinc-600 text-lg font-medium font-['Barlow']">
                  State
                </label>
                <input
                  type="text"
                  className="h-14 px-4 bg-white rounded-full border border-neutral-200 focus:outline-sky-500"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-zinc-600 text-lg font-medium font-['Barlow']">
                  ZIP
                </label>
                <input
                  type="text"
                  className="h-14 px-4 bg-white rounded-full border border-neutral-200 focus:outline-sky-500"
                />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-3">
              <label className="text-zinc-600 text-lg font-medium font-['Barlow']">
                Description
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-white rounded-2xl border border-neutral-200 focus:outline-sky-500"
              />
            </div>

            {/* Shipping */}
            <div className="flex flex-col gap-6">
              <h3 className="text-neutral-900 text-lg font-bold font-['Barlow']">
                Shipping Details
              </h3>

              <div className="flex flex-col md:flex-row gap-4">
                {/* Free Shipping */}
                <label className="flex-1 flex justify-between items-center p-6 bg-white rounded-full border cursor-pointer hover:border-[#26ADDF]">
                  <div className="flex gap-4 items-center">
                    {/* Custom Radio */}
                    <input
                      type="radio"
                      name="shipping"
                      value="free"
                      checked={shipping === "free"}
                      onChange={() => setShipping("free")}
                      className="hidden"
                    />
                    <div
                      className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
                        shipping === "free"
                          ? "border-[#26ADDF]"
                          : "border-gray-300"
                      }`}
                    >
                      {shipping === "free" && (
                        <div className="w-3 h-3 rounded-full bg-[#26ADDF]" />
                      )}
                    </div>

                    <div>
                      <p className="text-zinc-600 text-lg font-medium font-['Barlow']">
                        Free Shipping
                      </p>
                      <p className="text-zinc-600 text-sm font-medium font-['Barlow']">
                        7-20 Days
                      </p>
                    </div>
                  </div>
                  <span className="text-zinc-600 text-lg font-medium font-['Barlow']">
                    AED 0
                  </span>
                </label>

                {/* Express Shipping */}
                <label className="flex-1 flex justify-between items-center p-6 bg-white rounded-full border cursor-pointer hover:border-[#26ADDF]">
                  <div className="flex gap-4 items-center">
                    {/* Custom Radio */}
                    <input
                      type="radio"
                      name="shipping"
                      value="express"
                      checked={shipping === "express"}
                      onChange={() => setShipping("express")}
                      className="hidden"
                    />
                    <div
                      className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
                        shipping === "express"
                          ? "border-[#26ADDF]"
                          : "border-gray-300"
                      }`}
                    >
                      {shipping === "express" && (
                        <div className="w-3 h-3 rounded-full bg-[#26ADDF]" />
                      )}
                    </div>

                    <div>
                      <p className="text-zinc-600 text-lg font-medium font-['Barlow']">
                        Express Shipping
                      </p>
                      <p className="text-zinc-600 text-sm font-medium font-['Barlow']">
                        1-3 Days
                      </p>
                    </div>
                  </div>
                  <span className="text-zinc-600 text-lg font-medium font-['Barlow']">
                    AED 50
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Order Summary */}
        <aside className="space-y-6">
          <OrderSummary
            subtotal={2500}
            shippingFee={shipping === "express" ? 50 : 0}
            onCheckout={handleCheckout}
          />
          {/* <div className="bg-[#20B8FB0D] p-6 rounded-2xl shadow space-y-4 outline outline-1 outline-black/20">
            <h3 className="font-bold">Order Summary</h3>
            <div className="border-t pt-4 space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>AED 2500</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span>AED 0.00</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold">
                <span>Total</span>
                <span>AED 2500</span>
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Coupon Code"
                className="flex-1 border rounded-full px-4 h-10"
              />
              <button className="bg-[#26ADDF] text-white rounded-full px-6 h-10">
                Apply
              </button>
            </div>
            <button className="w-full bg-[#26ADDF] text-white font-bold rounded-full py-3">
              Proceed to Checkout
            </button>
          </div> */}

          {/* Payment */}
          <PaymentMethods />
        </aside>
      </section>
    </div>
  );
};

export default CheckoutPage;
