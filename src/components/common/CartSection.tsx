"use client";

import React, { useState } from "react";
import Image from "next/image";
import OrderSummary from "./OrderSummary";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface CartItemProps {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  price,
  quantity,
  image,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 border-b">
      {/* Product info */}
      <div className="flex items-center gap-3 w-full sm:w-1/3">
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="rounded-md"
          
        />
        <p className="text-sm font-medium text-gray-800">{title}</p>
      </div>

      {/* Price */}
      <div className="text-base font-semibold text-gray-900 w-20 text-center">
        AED {price.toFixed(2)}
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onDecrease(id)}
          className="px-2 py-1 text-[#00000080] hover:text-[#20B8FB] duration-500 cursor-pointer"
        >
          <CiCircleMinus size={25} />
        </button>
        <span className="text-[#20B8FB] font-semibold">{quantity}</span>
        <button
          onClick={() => onIncrease(id)}
          className="px-2 py-1  text-[#20B8FB] hover:text-[#20B8FB] duration-500 cursor-pointer"
        >
          <CiCirclePlus size={25} />
        </button>
      </div>

      {/* Subtotal */}
      <div className="text-base font-semibold text-gray-900 w-28 text-center">
        AED {(price * quantity).toFixed(2)}
      </div>

      {/* Remove */}
      <button
        onClick={() => onRemove(id)}
        className="text-red-600 hover:text-red-800 cursor-pointer"
      >
        <IoIosCloseCircleOutline size={25} />
      </button>
    </div>
  );
};

interface CartListProps {
  items: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  setItems: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        title: string;
        price: number;
        quantity: number;
        image: string;
      }[]
    >
  >;
}

const CartList: React.FC<CartListProps> = ({ items, setItems }) => {
  const handleIncrease = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };
  {
  }
  return (
    <section>
      <div className="divide-y">
        {items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </section>
  );
};

const CartActions: React.FC<{
  onClear: () => void;
  onContinue: () => void;
}> = ({ onClear, onContinue }) => (
  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
    <button
      onClick={onClear}
      className="px-5 py-2 rounded-full border border-sky-400 text-sky-400 font-semibold shadow hover:bg-sky-50 cursor-pointer"
    >
      Clear shopping cart
    </button>
    <button
      onClick={onContinue}
      className="px-5 py-2 rounded-full bg-sky-400 text-white font-bold shadow hover:bg-sky-500 cursor-pointer"
    >
      Continue shopping
    </button>
  </div>
);

export default function CartSection() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Lenovo IdeaPad Flex 5 AMD Ryzen 5500U 14” Touchscreen",
      price: 2500,
      quantity: 1,
      image: "/global/laptop.png",
    },
    {
      id: 2,
      title: "MacBook Air M2 13”",
      price: 5000,
      quantity: 1,
      image: "/global/laptop.png",
    },
    {
      id: 3,
      title: "Lenovo IdeaPad Flex 5 AMD Ryzen 5500U 14” Touchscreen",
      price: 2500,
      quantity: 1,
      image: "/global/laptop.png",
    },
  ]);

  const handleClearCart = () => setItems([]);
  const handleContinueShopping = () => alert("Redirecting to shop...");
  const [shipping, setShipping] = useState("express");

  return (
    <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 justify-between py-16">
      <div className="w-full mx-auto bg-sky-50/50 rounded-lg shadow p-6 md:col-span-2">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Shopping Cart
        </h2>
        <CartList items={items} setItems={setItems} />
        <CartActions
          onClear={handleClearCart}
          onContinue={handleContinueShopping}
        />
      </div>
      <OrderSummary
        subtotal={2500}
        shippingFee={shipping === "express" ? 50 : 0}
      />
    </section>
  );
}
