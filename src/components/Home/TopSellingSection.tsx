"use client";

import React, { useState } from "react";
import SectionHeader2 from "../common/SectionHeader2";
import ButtonLink from "../common/ButtonLink";
import ProductCard from "../common/ProductCard";
import { Slider } from "../common/Slider";

const products = [
  {
    id: 1,
    title: "BEETLE /iSCAN EASY eXpress",
    category: "POS Systems",
    brand: "BEETLE",
    price: 2500,
    oldPrice: 2900,
    discount: 14,
    rating: 5,
    features: ["Touch Screen", "Compact Design", "High Performance"],
    imageUrl: "/products/modern BEETLE iSCAN EASY eXpress.jpg",
  },
  {
    id: 2,
    title: "BEETLE /iPOS plus",
    category: "POS Systems",
    brand: "BEETLE",
    price: 2800,
    oldPrice: 2800,
    discount: 14,
    rating: 5,
    features: ["Advanced POS", "Durable", "Multi-functional"],
    imageUrl: "/products/BEETLE iPOS plus .jpg",
  },
  {
    id: 3,
    title: "BEETLE /iSCAN EASY Hybrid",
    category: "POS Systems",
    brand: "BEETLE",
    price: 3000,
    oldPrice: 3000,
    discount: 14,
    rating: 5,
    features: ["Hybrid System", "Flexible", "Reliable"],
    imageUrl: "/products/BEETLE iSCAN EASY Hybrid.jpg",
  },
  {
    id: 4,
    title: "BEETLE/DN A-Series",
    category: "POS Systems",
    brand: "BEETLE",
    price: 3200,
    oldPrice: 3200,
    discount: 14,
    rating: 5,
    features: ["A-Series", "Professional Grade", "High Efficiency"],
    imageUrl: "/products/BEETLEDN A-Series.jpg",
  },
  {
    id: 5,
    title: "Diebold Nixdorf BEETLE /M-III",
    category: "POS Systems",
    brand: "Diebold Nixdorf",
    price: 3500,
    oldPrice: 3500,
    discount: 14,
    rating: 5,
    features: ["M-III Series", "Enterprise Level", "Robust"],
    imageUrl: "/products/Diebold Nixdorf BEETLE M-III.jpg",
  },
  {
    id: 6,
    title: "DN Series EASY ONE",
    category: "POS Systems",
    brand: "Diebold Nixdorf",
    price: 2900,
    oldPrice: 2900,
    discount: 14,
    rating: 5,
    features: ["Easy to Use", "Compact", "Efficient"],
    imageUrl: "/products/DN Series EASY ONE.jpg",
  },
  {
    id: 7,
    title: "Endura POS Terminal",
    category: "POS Systems",
    brand: "Endura",
    price: 2700,
    oldPrice: 2700,
    discount: 14,
    rating: 4,
    features: ["Durable", "Reliable", "Cost Effective"],
    imageUrl: "/products/Endura POS Terminal.jpg",
  },
  {
    id: 20,
    title: "POZONE T80 PRICE CHECKER",
    category: "POS Peripherals",
    brand: "POZONE",
    price: 800,
    oldPrice: 800,
    discount: 14,
    rating: 4,
    features: ["Price Verification", "Easy to Use", "Accurate"],
    imageUrl: "/products/POZONE -T80 PRICE CHECKER.png",
  },
  {
    id: 21,
    title: "POZONE BS-330 BARCODE SCANNER",
    category: "POS Peripherals",
    brand: "POZONE",
    discount: 14,
    price: 350,
    oldPrice: 350,
    rating: 4,
    features: ["Fast Scanning", "Reliable", "Ergonomic"],
    imageUrl: "/products/POZONE BS-330 BARCODE SCANNER.png",
  },
];

type Category = {
  id: number;
  name: string;
};

const categories: Category[] = [
  { id: 1, name: "POS Systems" },
  { id: 2, name: "POS Peripherals" },
  { id: 3, name: "POS Printer" },
  { id: 4, name: "Barcode Scanner" },
  { id: 5, name: "PDT" },
  { id: 6, name: "EAS Solutions" },
];

const TopSellingSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("POS Systems");
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );
  return (
    <main className="w-full py-16">
      <div className="max-w-8xl mx-auto  px-4 lg:px-28 relative">
        {/* Header */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <SectionHeader2
            title="Top Selling"
            subtitle="Discover our top-selling products that customers can’t get enough of!"
          />
          <ButtonLink link="/">View All</ButtonLink>
        </section>

        {/* Categories */}
        <section className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`px-6 py-2 rounded-full border cursor-pointer ${
                selectedCategory === cat.name
                  ? "bg-[#20B8FB] text-white border-[#20B8FB] font-semibold"
                  : "text-gray-900 border-gray-300"
              } hover:bg-[#20B8FB] hover:text-white transition`}
              onClick={() => {
                setSelectedCategory(cat.name);
              }}
            >
              {cat.name}
            </button>
          ))}
        </section>

        <Slider
          items={filteredProducts}
          renderItem={(product) => <ProductCard {...product} />}
          itemsPerViewSm={1}
          itemsPerViewMd={2}
          itemsPerViewLg={4}
        />
      </div>
    </main>
  );
};

export default TopSellingSection;
