"use client";

import React, { useState, useEffect } from "react";

interface PaymentMethodsProps {
  onMethodChange?: (method: string) => void;
  selectedMethod?: string;
  className?: string;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({
  onMethodChange,
  selectedMethod = "",
  className = "",
}) => {
  const [localSelectedMethod, setLocalSelectedMethod] =
    useState<string>(selectedMethod);

  const methods = ["Cash on Delivery", "Bank Transfer", "Online Payment"];

  const handleMethodSelect = (method: string) => {
    setLocalSelectedMethod(method);
    onMethodChange?.(method);
  };

  useEffect(() => {
    setLocalSelectedMethod(selectedMethod);
  }, [selectedMethod]);

  return (
    <div
      className={`min-w-64 w-full p-6 bg-[#20B8FB0D] rounded-xl outline-1 outline-gray-300 flex flex-col gap-6 ${className} hover:bg-sky-100 transition-all duration-300`}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="text-neutral-900 font-bold text-lg">Payment Methods</div>
      <div className="flex flex-col gap-4">
        {methods.map((method) => (
          <label
            key={method}
            className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg transition-all duration-200"
          >
            <div className="relative">
              <input
                type="radio"
                name="paymentMethod"
                value={method}
                checked={localSelectedMethod === method}
                onChange={() => handleMethodSelect(method)}
                className="sr-only"
              />
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200
                           ${
                             localSelectedMethod === method
                               ? "border-[#26ADDF] bg-[#26ADDF] shadow-lg scale-110"
                               : "border-gray-300 bg-white group-hover:border-[#26ADDF] group-hover:scale-105"
                           }`}
              >
                {localSelectedMethod === method && (
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                )}
              </div>
            </div>
            <div
              className={`font-medium transition-all duration-200
                         ${
                           localSelectedMethod === method
                             ? "text-[#26ADDF] font-semibold transform translate-x-1"
                             : "text-neutral-900 group-hover:text-[#26ADDF]"
                         }`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {method}
            </div>
          </label>
        ))}
      </div>

      {/* Display selected method with enhanced animation */}
      {localSelectedMethod && (
        <div className="mt-2 p-3 bg-[#26ADDF]/10 rounded-lg border-l-4 animate-slide-in border-gray-300 hover:border-[#26ADDF]">
          <p className="text-sm text-[#26ADDF] font-medium">
            ✓ Selected: {localSelectedMethod}
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentMethods;
