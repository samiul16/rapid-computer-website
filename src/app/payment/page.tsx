"use client";

import React, { useState } from "react";
import SidebarMenu from "@/components/accounts/SidebarMenu";
import PaymentMethods from "@/components/accounts/AccountsMethods";
import Breadcrumb from "@/components/common/Breadcrumb";
import PaymentForm from "@/components/accounts/AccountsForm";

// Import or create these components for different views
const ProfileForm = () => (
  <div className="p-8 bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 font-['Poppins']">
      My Profile
    </h2>
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg bg-white/70"
            placeholder="John"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg bg-white/70"
            placeholder="Doe"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full p-3 border rounded-lg bg-white/70"
          placeholder="john@example.com"
        />
      </div>
      <button className="bg-sky-400 text-white px-6 py-3 rounded-lg hover:bg-sky-500 transition-colors">
        Update Profile
      </button>
    </div>
  </div>
);

const AddressBook = () => (
  <div className="p-8 bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 font-['Poppins']">
      Address Book
    </h2>
    <div className="space-y-4">
      <div className="border rounded-lg p-4 bg-white/50">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-gray-800">Home Address</h3>
            <p className="text-gray-600">123 Main St</p>
            <p className="text-gray-600">City, State 12345</p>
            <p className="text-gray-600">United States</p>
          </div>
          <button className="text-sky-600 hover:text-sky-700">Edit</button>
        </div>
      </div>
      <button className="bg-sky-400 text-white px-6 py-3 rounded-lg hover:bg-sky-500 transition-colors">
        Add New Address
      </button>
    </div>
  </div>
);

const MyOrders = () => (
  <div className="p-8 bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 font-['Poppins']">
      My Orders
    </h2>
    <div className="space-y-4">
      {[1, 2, 3].map((order) => (
        <div key={order} className="border rounded-lg p-4 bg-white/50">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-gray-800">Order #{order}001</h3>
              <p className="text-gray-600">Placed on: Jan {order + 10}, 2025</p>
              <p className="text-sky-600 font-semibold">$99.99</p>
            </div>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Delivered
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CashOnDeliveryForm = () => (
  <div className="p-8 bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 font-['Poppins']">
      Cash on Delivery
    </h2>
    <div className="space-y-6">
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">💰</span>
          </div>
          <div>
            <h3 className="font-semibold text-amber-800">
              Cash Payment Required
            </h3>
            <p className="text-amber-700 text-sm">
              Pay AED 130.00 when your order is delivered
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-gray-800">Delivery Address</h3>
        <div className="border rounded-lg p-4 bg-white/50">
          <p className="text-gray-700">123 Main Street, Dubai, UAE</p>
          <button className="text-sky-600 hover:text-sky-700 text-sm mt-2">
            Change Address
          </button>
        </div>
      </div>

      <button className="w-full bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition-colors font-semibold">
        Confirm Cash on Delivery Order
      </button>
    </div>
  </div>
);

const BankTransferForm = () => (
  <div className="p-8 bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 font-['Poppins']">
      Bank Transfer
    </h2>
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-800 mb-3">Bank Details</h3>
        <div className="space-y-2 text-sm text-blue-700">
          <p>
            <strong>Bank Name:</strong> Emirates NBD
          </p>
          <p>
            <strong>Account Number:</strong> 123-456-789
          </p>
          <p>
            <strong>IBAN:</strong> AE12 3456 7890 1234 5678 901
          </p>
          <p>
            <strong>Swift Code:</strong> EBILAEAD
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Reference Number
          </label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg bg-white/70"
            placeholder="Enter transaction reference"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Transfer Receipt
          </label>
          <input
            type="file"
            className="w-full p-3 border rounded-lg bg-white/70"
            accept="image/*,.pdf"
          />
        </div>
      </div>

      <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold">
        Submit Bank Transfer Details
      </button>
    </div>
  </div>
);

const PaymentPage = () => {
  const [activeView, setActiveView] = useState("payment-options");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  // Handle sidebar menu clicks
  const handleSidebarMenuClick = (itemId: string) => {
    setActiveView(itemId);
    setSelectedPaymentMethod(""); // Reset payment method when switching views
  };

  // Handle payment method selection
  const handlePaymentMethodSelect = (method: string) => {
    setSelectedPaymentMethod(method);
    // Map payment methods to specific views
    switch (method) {
      case "Cash on Delivery":
        setActiveView("cash-on-delivery");
        break;
      case "Bank Transfer":
        setActiveView("bank-transfer");
        break;
      case "Online Payment":
        setActiveView("online-payment");
        break;
      default:
        setActiveView("payment-options");
    }
  };

  // Render the appropriate content based on active view
  const renderMainContent = () => {
    switch (activeView) {
      case "my-profile":
        return <ProfileForm />;
      case "address-book":
        return <AddressBook />;
      case "payment-options":
        return <PaymentForm />;
      case "orders":
      case "my-returns":
      case "my-cancellations":
        return <MyOrders />;
      case "wishlist":
        return (
          <div className="p-8 bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 font-['Poppins']">
              My Wishlist
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-4 bg-white/50 hover:shadow-md transition-shadow"
                >
                  <div className="w-full h-32 bg-gray-200 rounded mb-3"></div>
                  <h3 className="font-semibold">Product {i + 1}</h3>
                  <p className="text-sky-600 font-bold">AED 99.99</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "cash-on-delivery":
        return <CashOnDeliveryForm />;
      case "bank-transfer":
        return <BankTransferForm />;
      case "online-payment":
        return <PaymentForm />;
      default:
        return <PaymentForm />;
    }
  };

  return (
    <section className="w-full py-16 px-4">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Account", href: "/account", active: true },
        ]}
      />

      <div className="max-w-7xl mx-auto mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        <div className="flex flex-col gap-6">
          <SidebarMenu
            onMenuItemClick={handleSidebarMenuClick}
            activeItem={activeView}
          />
          <PaymentMethods
            onMethodChange={handlePaymentMethodSelect}
            selectedMethod={selectedPaymentMethod}
          />
        </div>

        <div className="flex flex-col gap-6 md:col-span-2">
          {renderMainContent()}
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;
