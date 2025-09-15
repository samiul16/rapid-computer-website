"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// ✅ Price section
const PriceSection = () => (
  <div className="w-full border-b border-gray-200 p-5">
    <p className="text-neutral-500 text-sm">Minimum order quantity: 1 piece</p>
    <h2 className="text-zinc-800 text-2xl font-bold">AED 190</h2>
  </div>
);

// ✅ Quantity Selector
const QuantitySelector = () => {
  const [qty, setQty] = useState(0);
  return (
    <div className="w-full px-5 py-5">
      <h3 className="text-neutral-800 text-lg font-semibold mb-2">Quantity</h3>
      <div className="w-[130px] flex items-center border rounded-full gap-2">
        <button
          onClick={() => setQty(Math.max(0, qty - 1))}
          className="w-8 h-8 flex justify-center items-center rounded-full bg-gray-200 text-gray-500 border cursor-pointer"
        >
          -
        </button>
        <span className="w-12 text-center text-gray-900">{qty}</span>
        <button
          onClick={() => setQty(qty + 1)}
          className="w-8 h-8 flex justify-center items-center rounded-full bg-white hover:bg-sky-500 text-gray-900 hover:text-white border cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
};

// ✅ Customization Options
const CustomizationOptions = () => {
  const options = [
    "Customized logo (Min. order: 500 pieces)",
    "Customized packaging (Min. order: 500 pieces)",
    "Graphic customization (Min. order: 500 pieces)",
    "+1 more option",
  ];
  return (
    <div className="w-full px-5 py-5 border-t border-gray-200">
      <h3 className="text-lg font-bold mb-3">Customization options</h3>
      <ul className="space-y-2">
        {options.map((opt, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm">
            <div className="w-1 h-1 rounded-full bg-black mt-2" />
            <span>{opt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ✅ Shipping Info
const ShippingInfo = () => (
  <div className="w-full px-5 py-5 border-t border-gray-200">
    <h3 className="text-lg font-semibold">Shipping</h3>
    <p className="text-sm text-zinc-950 mt-2">
      Shipping fee and delivery date to be negotiated. Chat with supplier now
      for more details.
    </p>
  </div>
);

// ✅ Summary Section
const SummarySection = () => (
  <div className="w-full px-5 py-5 border-t border-gray-200 space-y-2 text-sm">
    <div className="flex justify-between">
      <span>Item subtotal (0 variations 0 items)</span>
      <span className="font-semibold">AED0.00</span>
    </div>
    <div className="flex justify-between">
      <span>Shipping total</span>
      <span className="font-semibold">To be negotiated</span>
    </div>
    <div className="flex justify-between border-t pt-2">
      <span className="font-semibold">Subtotal</span>
      <span className="font-semibold">AED0.00</span>
    </div>
  </div>
);

// ✅ Payment Plans
const PaymentPlans = () => (
  <div className="w-full px-5 py-5 border-t border-gray-200 text-sm text-stone-500">
    <p>4 interest-free payments with</p>
    <div className="flex gap-2 mt-2">
      <Image
        alt="payments"
        width={20}
        height={20}
        src="/global/pay.png"
        className="h-4"
        
      />
      <Image
        alt="payments"
        width={20}
        height={20}
        src="/global/pay.png"
        className="h-4"
        
      />
      <Image
        alt="payments"
        width={20}
        height={20}
        src="/global/pay.png"
        className="h-4"
        
      />
    </div>
  </div>
);

// ✅ Protections
const Protections = () => (
  <div className="w-full px-5 py-5 border-t border-gray-200 space-y-5">
    <h3 className="text-base font-semibold">Protections for this product</h3>
    <div>
      <h4 className="flex items-center gap-2 font-semibold text-base">
        <Image
          alt="secure"
          width={20}
          height={20}
          src="/global/pay.png"
          className="h-5 w-5"
          
        />
        Secure payments
      </h4>
      <p className="text-sm pl-7">
        Every payment you make is secured with SSL encryption and PCI DSS data
        protection.
      </p>
    </div>
    <div>
      <h4 className="flex items-center gap-2 font-semibold text-base">
        <Image
          alt="return"
          width={20}
          height={20}
          src="/global/pay.png"
          className="h-5 w-5"
          
        />
        Easy Return & Refund
      </h4>
      <p className="text-sm pl-7">
        Claim a refund if your order is missing or defective, plus free local
        returns on qualifying purchases.
      </p>
    </div>
    <p className="text-xs text-stone-500">
      Alibaba.com protects all your orders placed and paid on the platform.
    </p>
  </div>
);

// ✅ Action Buttons
const ActionButtons = () => (
  <div className="w-full px-5 py-5 flex gap-3">
    <Link
      href="/checkout"
      className="flex-1 h-12 bg-gradient-to-b from-sky-400 to-sky-600 text-white rounded-full font-bold"
    >
      <span className="flex items-center justify-center h-full"> Send inquiry</span>
    </Link>
    <button className="flex-1 h-12 border rounded-full font-bold text-neutral-800">
      Chat now
    </button>
  </div>
);

// ✅ Main Wrapper Component
export default function ProductSidebar() {
  return (
    <div className="w-full bg-white rounded-lg shadow border border-gray-200 flex flex-col">
      <PriceSection />
      <QuantitySelector />
      <CustomizationOptions />
      <ShippingInfo />
      <SummarySection />
      <PaymentPlans />
      <Protections />
      <ActionButtons />
    </div>
  );
}
