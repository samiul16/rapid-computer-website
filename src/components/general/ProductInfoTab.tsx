"use client";
import { useState } from "react";
import Reviews from "./Reviews";
import SupplierCard from "./SupplierCard";
import DescriptionCardTab from "./DescriptionCardTab";

const TabButton = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-base border-b-4 transition-colors duration-200 cursor-pointer ${
      active
        ? "border-black font-extrabold text-zinc-950"
        : "border-transparent text-neutral-800 hover:border-gray-300"
    }`}
  >
    {label}
  </button>
);

const AttributeRow = ({ label, value }: { label: string; value: string }) => (
  <div className="grid grid-cols-2 border-b border-neutral-200">
    <div className="bg-stone-50 px-4 py-3 text-sm text-neutral-800">
      {label}
    </div>
    <div className="px-4 py-3 text-sm font-medium text-neutral-800">
      {value}
    </div>
  </div>
);

export default function ProductInfoTab() {
  const [activeTab, setActiveTab] = useState("Attributes");

  const attributes = [
    { label: "Model Number", value: "HC21" },
    { label: "Place of Origin", value: "Guangdong, China" },
    { label: "Brand Name", value: "HCD" },
    { label: "Type", value: "Touch Screen POS Cash Register" },
    { label: "Application", value: "Retail, Restaurant, Hospital" },
    { label: "CPU", value: "RK3568" },
    { label: "Memory", value: "2+16/4+32/64" },
    { label: "Screen Size", value: "15.6" },
    { label: "Sub Screen Size", value: "10.1" },
    { label: "Main Screen Pixel", value: "1366x768" },
    { label: "Sub Screen Pixel", value: "800x1280" },
    { label: "Size", value: "381mm x 246mm x 333mm" },
  ];

  const packaging = [
    { label: "Selling Units", value: "Single item" },
    { label: "Single Package Size", value: "51x34x44 cm" },
    { label: "Single Gross Weight", value: "5.9 kg" },
  ];

  return (
    <div className="w-full mx-auto">
      {/* Tabs */}
      <div className="flex bg-white overflow-x-auto">
        {["Attributes", "Reviews", "Supplier", "Description"].map((tab) => (
          <TabButton
            key={tab}
            label={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>

      {/* Content */}
      {activeTab === "Attributes" && (
        <div className="py-10 space-y-8">
          {/* Key Attributes */}
          <section>
            <h2 className="text-xl font-bold mb-4">Key Attributes</h2>
            <div className="grid md:grid-cols-2 border border-neutral-200 rounded-md overflow-hidden">
              {attributes.map((item, idx) => (
                <AttributeRow key={idx} label={item.label} value={item.value} />
              ))}
            </div>
          </section>

          {/* Packaging & Delivery */}
          <section>
            <h2 className="text-base font-bold mb-3">Packaging and Delivery</h2>
            <div className="grid md:grid-cols-2 border border-neutral-200 rounded-md overflow-hidden">
              {packaging.map((item, idx) => (
                <AttributeRow key={idx} label={item.label} value={item.value} />
              ))}
            </div>
          </section>

          {/* Lead Time */}
          <section>
            <div className="flex justify-between items-center border-t pt-5">
              <h2 className="text-xl font-bold">Lead Time</h2>
              <button className="w-6 h-6 bg-black cursor-pointer" />
            </div>
          </section>

          {/* Customization */}
          <section className="border-t pt-5">
            <h2 className="text-xl font-bold mb-3">Customization Options</h2>
            <ul className="space-y-2 text-base text-neutral-800">
              <li>
                Customized logo{" "}
                <span className="text-neutral-500">
                  (Min. order: 500 pieces)
                </span>
              </li>
              <li>
                Customized packaging{" "}
                <span className="text-neutral-500">
                  (Min. order: 500 pieces)
                </span>
              </li>
            </ul>
          </section>
        </div>
      )}

      {activeTab === "Reviews" && <Reviews />}

      {activeTab === "Supplier" && <SupplierCard />}

      {activeTab === "Description" && <DescriptionCardTab />}
    </div>
  );
}
