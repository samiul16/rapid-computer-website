/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import OrderSummary from "./OrderSummary";
import {
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
  Heart,
} from "react-feather";
import { motion, AnimatePresence } from "framer-motion";

interface CartItemProps {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  inStock: boolean;
  category: string;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
  onToggleWishlist: (id: number) => void;
  isWishlisted: boolean;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  price,
  originalPrice,
  quantity,
  image,
  inStock,
  category,
  onIncrease,
  onDecrease,
  onRemove,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [isRemoving, setIsRemoving] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleRemove = async () => {
    setIsRemoving(true);
    setTimeout(() => {
      onRemove(id);
    }, 300);
  };

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -300, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className={`group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 ${
        isRemoving ? "opacity-50" : ""
      } ${!inStock ? "bg-gray-50" : ""}`}
    >
      {/* Out of stock overlay */}
      {!inStock && (
        <div className="absolute inset-0 bg-gray-100/80 rounded-2xl flex items-center justify-center z-10">
          <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Out of Stock
          </span>
        </div>
      )}

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
        {/* Product Image */}
        <div className="relative w-24 h-24 flex-shrink-0">
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100">
            <Image
              src={image}
              alt={title}
              fill
              className={`object-cover transition-all duration-500 ${
                imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl" />
            )}
          </div>
          {discount > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
              -{discount}%
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div>
              <span className="text-xs text-blue-600 font-semibold uppercase tracking-wide">
                {category}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mt-1">
                {title}
              </h3>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={() => onToggleWishlist(id)}
                className={`p-2 rounded-full transition-all duration-200 ${
                  isWishlisted
                    ? "bg-red-50 text-red-500 hover:bg-red-100"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                <Heart
                  size={16}
                  className={isWishlisted ? "fill-current" : ""}
                />
              </button>
              <button
                onClick={handleRemove}
                disabled={isRemoving}
                className="p-2 bg-gray-100 text-gray-800 hover:bg-red-50 hover:text-red-500 rounded-full transition-all duration-200 disabled:opacity-50"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">
                AED {price.toFixed(2)}
              </span>
              {originalPrice && (
                <span className="text-lg text-gray-400 line-through">
                  AED {originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => onDecrease(id)}
                  disabled={quantity <= 1 || !inStock}
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-white rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-2 font-bold text-gray-900 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => onIncrease(id)}
                  disabled={!inStock}
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-white rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Subtotal */}
              <div className="text-right">
                <div className="text-xl font-bold text-gray-900">
                  AED {(price * quantity).toFixed(2)}
                </div>
                <div className="text-sm text-gray-500">
                  {quantity} × AED {price.toFixed(2)}
                </div>
              </div>
            </div>
          </div>

          {/* Stock Status */}
          <div className="mt-3">
            {inStock ? (
              <div className="flex items-center gap-2 text-sm text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                In Stock - Ready to ship
              </div>
            ) : (
              <div className="flex items-center gap-2 text-sm text-red-600">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                Out of Stock
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface CartListProps {
  items: {
    id: number;
    title: string;
    price: number;
    originalPrice?: number;
    quantity: number;
    image: string;
    inStock: boolean;
    category: string;
    isWishlisted: boolean;
  }[];
  setItems: React.Dispatch<React.SetStateAction<any[]>>;
}

const CartList: React.FC<CartListProps> = ({ items, setItems }) => {
  const handleIncrease = useCallback(
    (id: number) => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    },
    [setItems]
  );

  const handleDecrease = useCallback(
    (id: number) => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        )
      );
    },
    [setItems]
  );

  const handleRemove = useCallback(
    (id: number) => {
      setItems((prev) => prev.filter((item) => item.id !== id));
    },
    [setItems]
  );

  const handleToggleWishlist = useCallback(
    (id: number) => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, isWishlisted: !item.isWishlisted } : item
        )
      );
    },
    [setItems]
  );

  if (items.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Your cart is empty
        </h3>
        <p className="text-gray-500 mb-8">Add some items to get started</p>
        <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200">
          Continue Shopping
        </button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      <AnimatePresence>
        {items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onRemove={handleRemove}
            onToggleWishlist={handleToggleWishlist}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const CartActions: React.FC<{
  onClear: () => void;
  onContinue: () => void;
  itemCount: number;
}> = ({ onClear, onContinue, itemCount }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 p-6 bg-gray-50 rounded-2xl"
  >
    <button
      onClick={onClear}
      disabled={itemCount === 0}
      className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-600 font-semibold hover:border-red-400 hover:text-red-600 hover:bg-red-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Clear Cart ({itemCount} items)
    </button>
    <button
      onClick={onContinue}
      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
    >
      <ArrowLeft size={16} />
      Continue Shopping
    </button>
  </motion.div>
);

export default function CartSection() {
  const router = useRouter();
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Lenovo IdeaPad Flex 5 AMD Ryzen 5500U 14" Touchscreen Laptop',
      price: 2500,
      originalPrice: 3000,
      quantity: 1,
      image: "/global/laptop.png",
      inStock: true,
      category: "Laptops",
      isWishlisted: false,
    },
    {
      id: 2,
      title: 'MacBook Air M2 13" - Space Gray',
      price: 5000,
      originalPrice: 5500,
      quantity: 2,
      image: "/global/laptop.png",
      inStock: true,
      category: "Laptops",
      isWishlisted: true,
    },
    {
      id: 3,
      title: "Gaming Laptop ASUS ROG Strix G15",
      price: 3200,
      quantity: 1,
      image: "/global/laptop.png",
      inStock: false,
      category: "Gaming",
      isWishlisted: false,
    },
  ]);

  const [shippingType] = useState<"standard" | "express">("express");

  // Memoized calculations for performance
  const cartSummary = useMemo(() => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalSavings = items.reduce((sum, item) => {
      return (
        sum +
        (item.originalPrice
          ? (item.originalPrice - item.price) * item.quantity
          : 0)
      );
    }, 0);
    return { subtotal, totalItems, totalSavings };
  }, [items]);

  const handleClearCart = useCallback(() => {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      setItems([]);
    }
  }, []);

  const handleContinueShopping = useCallback(() => {
    router.push("/products");
  }, [router]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 py-8"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
        <p className="text-gray-600">
          {cartSummary.totalItems}{" "}
          {cartSummary.totalItems === 1 ? "item" : "items"} in your cart
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="xl:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <CartList items={items} setItems={setItems} />
            <CartActions
              onClear={handleClearCart}
              onContinue={handleContinueShopping}
              itemCount={items.length}
            />
          </div>
        </div>

        {/* Order Summary */}
        <div className="xl:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <OrderSummary
              subtotal={cartSummary.subtotal}
              shippingFee={shippingType === "express" ? 50 : 0}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
