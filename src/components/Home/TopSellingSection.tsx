"use client";

import React from "react";
import SectionHeader2 from "../common/SectionHeader2";
import ButtonLink from "../common/ButtonLink";
import ProductCard from "../common/ProductCard";
import { Slider } from "../common/Slider";

type Product = {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  discount: number;
  rating: number;
  sale?: boolean;
  imageUrl: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    discount: 40,
    rating: 5,
    imageUrl: "/products/casing.webp",
  },
  {
    id: 2,
    title: "Servers",
    price: 95,
    oldPrice: 120,
    discount: 20,
    rating: 4,
    imageUrl: "/products/server.jpg",
  },
  {
    id: 3,
    title: "Gaming Monitor",
    price: 180,
    oldPrice: 220,
    discount: 18,
    rating: 5,
    imageUrl: "/products/monitor.avif",
  },
  {
    id: 4,
    title: "Wireless Headphones",
    price: 95,
    oldPrice: 120,
    discount: 20,
    rating: 4,
    imageUrl: "/products/headphone.webp",
  },
  {
    id: 5,
    title: "Gaming Keyboard",
    price: 180,
    oldPrice: 220,
    discount: 18,
    rating: 5,
    imageUrl: "https://placehold.co/150x120",
  },
  {
    id: 6,
    title: "Wireless Headphones",
    price: 95,
    oldPrice: 120,
    discount: 20,
    rating: 4,
    imageUrl: "https://placehold.co/150x120",
  },
  {
    id: 7,
    title: "Gaming Keyboard",
    price: 180,
    oldPrice: 220,
    discount: 18,
    rating: 5,
    imageUrl: "https://placehold.co/150x120",
  },
  {
    id: 8,
    title: "Wireless Headphones",
    price: 95,
    oldPrice: 120,
    discount: 20,
    rating: 4,
    imageUrl: "https://placehold.co/150x120",
  },
];

type Category = {
  id: number;
  name: string;
};

const categories: Category[] = [
  { id: 1, name: "Mobile" },
  { id: 2, name: "Headphones" },
  { id: 3, name: "Laptop" },
  { id: 4, name: "Accessories" },
  { id: 5, name: "Monitor" },
  { id: 6, name: "Desktop" },
];

const TopSellingSection: React.FC = () => {
  return (
    <main className="w-full max-w-[1600px] mx-auto py-16 px-4 relative">
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
        {categories.map((cat, idx) => (
          <button
            key={cat.id}
            className={`px-6 py-2 rounded-full border cursor-pointer ${
              idx === 0
                ? "bg-[#20B8FB] text-white border-[#20B8FB] font-semibold"
                : "text-gray-900 border-gray-300"
            } hover:bg-[#20B8FB] hover:text-white transition`}
          >
            {cat.name}
          </button>
        ))}
      </section>

      <Slider
        items={products}
        renderItem={(product) => <ProductCard {...product} />}
        itemsPerViewSm={1}
        itemsPerViewMd={2}
        itemsPerViewLg={4}
      />
    </main>
  );
};

export default TopSellingSection;
