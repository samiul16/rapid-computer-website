"use client";

import Image from "next/image";
import React, { useState } from "react";

// Floating Label Input Field
const FloatingLabelInput = ({
  label,
  type = "text",
  maxLength,
}: {
  label: string;
  placeholder: string;
  type?: string;
  maxLength?: number;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div
      className="relative w-full"
      style={{
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <input
        type={type}
        placeholder=""
        maxLength={maxLength}
        className="w-full h-14 px-4 pt-6 pb-2 bg-white/70 backdrop-blur-sm rounded-2xl border-2 border-transparent 
                   focus:border-sky-400 focus:bg-white transition-all duration-300 outline-none
                   text-black text-base peer"
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value !== "");
        }}
        onChange={(e) => setHasValue(e.target.value !== "")}
      />
      <label
        className={`absolute left-4 transition-all duration-300 pointer-events-none font-['Barlow']
                   ${
                     isFocused || hasValue
                       ? "top-2 text-xs text-sky-600 font-semibold"
                       : "top-4 text-base text-gray-500"
                   }`}
      >
        {label}
      </label>
    </div>
  );
};

// Payment Method Option
const PaymentMethodOption = ({
  id,
  label,
  isSelected,
  onSelect,
  icon,
}: {
  id: string;
  label: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
  icon?: React.ReactNode;
}) => (
  <div
    onClick={() => onSelect(id)}
    className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 border-2
               ${
                 isSelected
                   ? "bg-sky-50 border-sky-400 shadow-md"
                   : "bg-white/50 border-transparent hover:bg-white/70"
               }`}
  >
    <div className="relative">
      <input
        type="radio"
        checked={isSelected}
        onChange={() => onSelect(id)}
        className="w-5 h-5 text-sky-400 border-2 border-gray-300 focus:ring-sky-400"
      />
    </div>
    <div className="flex items-center gap-3 flex-1">
      {icon}
      <span className="text-black text-base font-medium font-['Barlow']">
        {label}
      </span>
    </div>
  </div>
);

// Credit Card Form Section
const CreditCardSection = () => (
  <div className="space-y-6 animate-fadeIn">
    <FloatingLabelInput label="Cardholder Name" placeholder="John Doe" />
    <FloatingLabelInput label="Card Number" placeholder="1234 5678 9012 3456" />

    {/* Expiry Date + CVV Row */}
    <div className="flex gap-4">
      <div className="flex-1">
        <div className="flex gap-2">
          <FloatingLabelInput label="Month" placeholder="MM" maxLength={2} />
          <FloatingLabelInput label="Year" placeholder="YY" maxLength={2} />
        </div>
      </div>
      <div className="w-32">
        <FloatingLabelInput
          label="CVV"
          placeholder="123"
          type="password"
          maxLength={3}
        />
      </div>
    </div>
  </div>
);

// PayPal Section
const PayPalSection = () => (
  <div className="space-y-4 animate-fadeIn">
    <div className="text-center p-8 bg-white/70 rounded-xl backdrop-blur-sm">
      <Image
        src="/product-details/paypal.png"
        alt="PayPal"
        width={120}
        height={40}
        className="mx-auto mb-4"
      />
      <p className="text-gray-600 font-['Barlow']">
        You&apos;ll be redirected to PayPal to complete your payment
      </p>
    </div>
  </div>
);

// Bank Transfer Section
const BankTransferSection = () => (
  <div className="space-y-4 animate-fadeIn">
    <FloatingLabelInput label="Account Holder Name" placeholder="John Doe" />
    <FloatingLabelInput label="Bank Account Number" placeholder="1234567890" />
    <FloatingLabelInput label="Routing Number" placeholder="123456789" />
  </div>
);

// Custom Checkbox
const CustomCheckbox = ({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}) => (
  <div className="flex items-center gap-3">
    <label className="relative flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <div
        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300
                      ${
                        checked
                          ? "bg-sky-400 border-sky-400"
                          : "bg-white border-gray-300 hover:border-sky-400"
                      }`}
      >
        {checked && (
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
    </label>
    <span className="text-gray-600 text-sm font-['Barlow'] leading-relaxed">
      {label}
    </span>
  </div>
);

// Payment Header
const PaymentHeader = ({ total }: { total: string }) => (
  <div className="flex justify-between items-center w-full mb-8">
    <h2
      className="text-gray-800 text-2xl"
      style={{
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      Payment Details
    </h2>
    <div className="text-right">
      <p
        className="text-gray-500 text-sm"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Total Amount
      </p>
      <p
        className="text-sky-400 text-xl font-bold"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {total}
      </p>
    </div>
  </div>
);

// Main Payment Form
const PaymentForm = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [saveCard, setSaveCard] = useState(false);

  const paymentMethods = [
    {
      id: "card",
      label: "Credit/Debit Card",
      icon: (
        <div className="flex gap-1">
          <div className="w-8 h-5 bg-blue-600 rounded-sm flex items-center justify-center">
            <span className="text-white text-xs font-bold">VISA</span>
          </div>
          <div className="w-8 h-5 bg-red-500 rounded-sm"></div>
        </div>
      ),
    },
    {
      id: "paypal",
      label: "PayPal",
      icon: (
        <Image
          src="/product-details/paypal.png"
          alt="PayPal"
          width={32}
          height={20}
          className="rounded"
        />
      ),
    },
    {
      id: "bank",
      label: "Bank Transfer",
      icon: (
        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
          </svg>
        </div>
      ),
    },
  ];

  const renderPaymentSection = () => {
    switch (selectedPaymentMethod) {
      case "card":
        return <CreditCardSection />;
      case "paypal":
        return <PayPalSection />;
      case "bank":
        return <BankTransferSection />;
      default:
        return <CreditCardSection />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
      <div className="p-8 lg:p-12">
        <PaymentHeader total="AED 130.00" />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Payment Methods Sidebar */}
          <div className="lg:col-span-2">
            <h3
              className="text-gray-700 text-lg font-semibold mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Choose Payment Method
            </h3>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <PaymentMethodOption
                  key={method.id}
                  id={method.id}
                  label={method.label}
                  icon={method.icon}
                  isSelected={selectedPaymentMethod === method.id}
                  onSelect={setSelectedPaymentMethod}
                />
              ))}
            </div>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {renderPaymentSection()}

              {/* Options */}
              <div className="space-y-4 pt-4 border-t border-gray-200">
                {selectedPaymentMethod === "card" && (
                  <CustomCheckbox
                    checked={saveCard}
                    onChange={setSaveCard}
                    label="Save this card for future payments"
                  />
                )}
                <CustomCheckbox
                  checked={termsAccepted}
                  onChange={setTermsAccepted}
                  label="I agree to the Terms of Service and Privacy Policy"
                />
              </div>

              {/* Pay Button */}
              <button
                disabled={!termsAccepted}
                className={`w-full h-14 rounded-2xl font-bold font-['Barlow'] text-lg transition-all duration-300 transform
                           ${
                             termsAccepted
                               ? "bg-sky-400 hover:bg-sky-500 text-white hover:scale-[1.02] shadow-lg"
                               : "bg-gray-300 text-gray-500 cursor-not-allowed"
                           }`}
              >
                {selectedPaymentMethod === "paypal"
                  ? "Continue with PayPal"
                  : "Pay Now - AED 130.00"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
