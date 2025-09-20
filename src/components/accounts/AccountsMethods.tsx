"use client";

import React, { useState } from "react";

const AccountsMethods = () => {
  const methods = ["Cash on Delivery", "Bank Transfer", "Online Payment"];
  const [selectedMethod, setSelectedMethod] = useState("Cash on Delivery");

  return (
    <div className="min-w-64 w-full p-6 bg-[#20B8FB0D] rounded-xl outline outline-1 outline-black/20 flex flex-col gap-6 hover:bg-sky-100 transition-all duration-300">
      <div className="text-neutral-900 font-bold text-lg">Accounts Methods</div>
      <div className="flex flex-col gap-4">
        {methods.map((method) => (
          <label
            key={method}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="relative">
              <input
                type="radio"
                name="paymentMethod"
                value={method}
                checked={selectedMethod === method}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="sr-only"
              />
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedMethod === method
                    ? "border-sky-500 bg-white"
                    : "border-gray-300 bg-white"
                }`}
              >
                {selectedMethod === method && (
                  <div className="w-3 h-3 rounded-full bg-sky-500"></div>
                )}
              </div>
            </div>
            <div className="text-neutral-900 font-medium">{method}</div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AccountsMethods;
