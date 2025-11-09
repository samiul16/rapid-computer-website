"use client";

import React from "react";
import ButtonLink from "../common/ButtonLink";
import ProductCard from "../common/ProductCard";
import { Slider } from "../common/Slider";
// import SectionHeader from "../common/SectionHeader";

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
    imageUrl: "/products/Mobile.png",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 95,
    oldPrice: 120,
    discount: 20,
    rating: 4,
    imageUrl: "/products/headphone.webp",
  },
  {
    id: 3,
    title: "Gaming Keyboard",
    price: 180,
    oldPrice: 220,
    discount: 18,
    rating: 5,
    imageUrl: "/products/Mobile-2.png",
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
    imageUrl: "/products/Mobile-4.jpg",
  },
  {
    id: 6,
    title: "Wireless Headphones",
    price: 95,
    oldPrice: 120,
    discount: 20,
    rating: 4,
    imageUrl: "/products/Mobile-3.jpg",
  },
  {
    id: 7,
    title: "Gaming Keyboard",
    price: 180,
    oldPrice: 220,
    discount: 18,
    rating: 5,
    imageUrl: "/products/Mobile-3.jpg",
  },
  {
    id: 8,
    title: "Wireless Headphones",
    price: 95,
    oldPrice: 120,
    discount: 20,
    rating: 4,
    imageUrl: "/products/headphone.webp",
  },
];

const Recommended: React.FC = () => {
  return (
    <main className="w-full py-16">
      <div className="max-w-8xl mx-auto lg:px-28  px-4 relative">
        {/* Header */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-5">
          {/* <SectionHeader title="Recommended For You" /> */}
          <h2 className="text-4xl sm:text-4xl font-bold text-sky-500 text-shadow-md">
            Recommended For You
          </h2>
          ;<ButtonLink link="/">View All</ButtonLink>
        </section>

        <Slider
          items={products}
          renderItem={(product) => <ProductCard {...product} />}
          itemsPerViewSm={1}
          itemsPerViewMd={2}
          itemsPerViewLg={4}
        />
      </div>
    </main>
  );
};

export default Recommended;
