"use client";

import React from "react";
import ButtonLink from "../common/ButtonLink";
import ProductCard from "../common/ProductCard";
import { Slider } from "../common/Slider";
import SectionHeader from "../common/SectionHeader";

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
    imageUrl: "https://placehold.co/150x120",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 95,
    oldPrice: 120,
    discount: 20,
    rating: 4,
    imageUrl: "https://placehold.co/150x120",
  },
  {
    id: 3,
    title: "Gaming Keyboard",
    price: 180,
    oldPrice: 220,
    discount: 18,
    rating: 5,
    imageUrl: "https://placehold.co/150x120",
  },
  {
    id: 4,
    title: "Wireless Headphones",
    price: 95,
    oldPrice: 120,
    discount: 20,
    rating: 4,
    imageUrl: "https://placehold.co/150x120",
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

const Recommended: React.FC = () => {
  return (
    <main className="w-full max-w-7xl mx-auto py-16 px-4 relative">
      {/* Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-5">
        <SectionHeader title="Recommended For You" />
        <ButtonLink link="/">View All</ButtonLink>
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

export default Recommended;
