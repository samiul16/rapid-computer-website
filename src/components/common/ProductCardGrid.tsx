"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar, FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { HiOutlineSparkles } from "react-icons/hi";
import { PrimaryBtn } from "./PrimaryBtn";
import { useRouter } from "next/navigation";
import { useAddToCart } from "@/hooks/addToCart";

interface Product {
  id: number;
  title: string;
  price: number;
  rating?: number;
  features?: string[];
  image?: string;
  discount?: number;
  originalPrice?: number;
  isNew?: boolean;
  inStock?: boolean;
}

interface ProductCardGridProps {
  product: Product;
  layout?: "grid" | "list";
  setLayout?: (layout: "grid" | "list") => void;
}

const ProductCardGrid: React.FC<ProductCardGridProps> = ({
  product,
  layout,
}) => {
  const router = useRouter();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const { addToCartGlobal } = useAddToCart();

  const handleClick = () => {
    router.push(`/product-details/${product.id}`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Quick view logic
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Added to cart:", product.title);
    // Add to cart logic
    addToCartGlobal(
      {
        id: 2,
        name: product.title,
        arabic_name: product.title,
        price: product.price,
        final_price: product.price,
        offer_price: "",
        image_url: product.image,
        currency: "AED",
      },
      2,
      1,
      () => {}
    );
  };

  return layout === "list" ? (
    // List Layout
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-white via-white to-blue-50/30 border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:shadow-xl cursor-pointer">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex items-center p-6 gap-6">
        {/* Image Container */}
        <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-xl bg-gray-50 group-hover:scale-105 transition-transform duration-500">
          {product.image ? (
            <>
              <Image
                src={product.image}
                alt={product.title}
                fill
                className={`object-cover transition-all duration-700 ${
                  imageLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
                }`}
                onLoadingComplete={() => setImageLoaded(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gradient-to-br from-gray-100 to-gray-200">
              <HiOutlineSparkles size={24} />
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && (
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold animate-pulse">
                NEW
              </span>
            )}
            {product.discount && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                -{product.discount}%
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          <div>
            <h3 className="font-bold text-xl text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors duration-300">
              {product.title}
            </h3>
            <div className="flex items-center gap-6 mt-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <GiCheckMark className="text-blue-500 w-4 h-4" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <GiCheckMark className="text-blue-500 w-4 h-4" />
                <span>Fast Delivery</span>
              </div>
              {product.inStock !== false && (
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>In Stock</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={`w-4 h-4 transition-colors duration-200 ${
                    i < (product.rating || 4)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 font-medium">
              ({product.rating || 4}.0)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-blue-600">
              AED {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                AED {product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleWishlist}
              className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                isWishlisted
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-600 hover:bg-red-50 hover:text-red-500"
              } shadow-lg`}
            >
              <FaHeart size={16} />
            </button>
            <button
              onClick={handleQuickView}
              className="p-2 bg-white text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-500 transition-all duration-200 hover:scale-110 shadow-lg"
            >
              <FaEye size={16} />
            </button>
          </div>

          <PrimaryBtn
            onClick={handleClick}
            className="px-8 py-3 font-bold transform group-hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
          >
            Buy Now
          </PrimaryBtn>
        </div>
      </div>
    </div>
  ) : (
    // Grid Layout
    <div
      className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
      onClick={handleClick}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {product.image ? (
          <>
            <Image
              src={product.image}
              alt={product.title}
              fill
              className={`object-cover transition-all duration-700 group-hover:scale-110 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoadingComplete={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <HiOutlineSparkles size={48} />
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold animate-bounce">
              NEW
            </span>
          )}
          {product.discount && (
            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
              -{product.discount}%
            </span>
          )}
        </div>

        {/* Action Icons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <button
            onClick={handleWishlist}
            className={`p-2 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm ${
              isWishlisted
                ? "bg-red-500 text-white"
                : "bg-white/90 text-gray-600 hover:bg-red-50 hover:text-red-500"
            } shadow-lg`}
          >
            <FaHeart size={14} />
          </button>
          <button
            onClick={handleQuickView}
            className="p-2 bg-white/90 text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-500 transition-all duration-200 hover:scale-110 backdrop-blur-sm shadow-lg"
          >
            <FaEye size={14} />
          </button>
        </div>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 cursor-pointer">
          <button
            onClick={handleAddToCart}
            className="w-full bg-[#20B8FB] hover:bg-[#20B8FB] text-white py-3 font-semibold transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <FaShoppingCart size={16} />
            Quick Add
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="font-bold text-lg text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 min-h-[3.5rem]">
            {product.title}
          </h3>

          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={`w-4 h-4 transition-all duration-200 ${
                    i < (product.rating || 4)
                      ? "text-yellow-400 scale-100"
                      : "text-gray-300 scale-90"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600 text-sm font-medium">
              ({product.rating || 4}.0)
            </span>
          </div>
        </div>

        {product.features && (
          <div className="space-y-1">
            {product.features.slice(0, 2).map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <GiCheckMark className="text-blue-500 w-3 h-3 flex-shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </div>
            ))}
          </div>
        )}

        <hr className="border-gray-200" />

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-blue-600">
                AED {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  AED {product.originalPrice}
                </span>
              )}
            </div>
            {product.inStock !== false && (
              <div className="flex items-center gap-1 text-xs text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>In Stock</span>
              </div>
            )}
          </div>

          <PrimaryBtn
            onClick={handleClick}
            className="w-full font-bold py-3 transform group-hover:scale-105 transition-transform duration-200"
          >
            Buy Now
          </PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default ProductCardGrid;
