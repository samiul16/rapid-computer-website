"use client";

import React, { useState } from "react";

interface OrderSummaryProps {
  subtotal: number;
  shippingFee: number;
  onApplyCoupon?: (code: string) => void;
  onCheckout?: () => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  subtotal,
  shippingFee,
  onApplyCoupon,
  // onCheckout,
}) => {
  const [coupon, setCoupon] = useState("");

  const total = subtotal + shippingFee;

  return (
    <div className="bg-white/30 backdrop-blur-xl p-6 rounded-2xl space-y-4 outline-1 outline-gray-100 shadow-[2px_4px_10px_rgba(0,0,0,0.1)] max-h-96 hover:bg-sky-100 transition-all duration-300">
      {/* Title */}
      <h3 className="font-bold text-lg text-sky-500">Order Summary</h3>

      {/* Price Details */}
      <div className="border-t border-sky-200 pt-4 space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>AED {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping Fee</span>
          <span>AED {shippingFee.toFixed(2)}</span>
        </div>
        <div className="border-t border-sky-200 pt-3 flex justify-between font-bold">
          <span>Total</span>
          <span>AED {total.toFixed(2)}</span>
        </div>
      </div>

      {/* Coupon */}
      <div className="flex gap-2 my-7">
        <input
          type="text"
          placeholder="Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="flex-1 border rounded-full px-4 h-10 focus:outline-sky-400 border-gray-300"
        />
        <button
          onClick={() => onApplyCoupon && onApplyCoupon(coupon)}
          className="bg-[#26ADDF] text-white rounded-full px-6 h-10 hover:bg-sky-500 transition cursor-pointer"
        >
          Apply
        </button>
      </div>

      {/* Checkout */}
      {/* <button
        onClick={onCheckout}
        className="w-full bg-[#26ADDF] text-white font-bold rounded-full py-3 hover:bg-sky-500 transition cursor-pointer"
      >
        Proceed to Checkout
      </button> */}
    </div>
  );
};

export default OrderSummary;
