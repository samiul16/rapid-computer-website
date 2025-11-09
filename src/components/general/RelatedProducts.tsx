"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";

interface RelatedProduct {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  discount?: number;
  inStock: boolean;
}

// Mock data - in real app, this would come from API
const relatedProducts: RelatedProduct[] = [
  {
    id: 2,
    name: "Gaming Mechanical Keyboard",
    price: 299,
    originalPrice: 399,
    image: "/products/keyboard.jpg",
    rating: 4.5,
    discount: 25,
    inStock: true,
  },
  {
    id: 3,
    name: "Wireless Gaming Mouse",
    price: 159,
    originalPrice: 199,
    image: "/products/mouse.jpg",
    rating: 4.8,
    discount: 20,
    inStock: true,
  },
  {
    id: 4,
    name: "Gaming Headset Pro",
    price: 249,
    image: "/products/headset.jpg",
    rating: 4.6,
    inStock: true,
  },
  {
    id: 5,
    name: "RGB Gaming Chair",
    price: 899,
    originalPrice: 1199,
    image: "/products/chair.jpg",
    rating: 4.7,
    discount: 25,
    inStock: false,
  },
  {
    id: 6,
    name: "4K Gaming Monitor",
    price: 1299,
    originalPrice: 1599,
    image: "/products/monitor.jpg",
    rating: 4.9,
    discount: 19,
    inStock: true,
  },
];

const RelatedProducts: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 ${
          index < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 font-barlow">
        Related Products
      </h3>

      <div className="space-y-4">
        {relatedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/product-details/${product.id}`}
            className="block group"
          >
            <div className="flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200">
              {/* Product Image */}
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={`object-cover rounded-lg ${
                    !product.inStock ? "opacity-50" : ""
                  }`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/products/placeholder.jpg";
                  }}
                />
                {product.discount && product.inStock && (
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold z-10">
                    -{product.discount}%
                  </div>
                )}
                {!product.inStock && (
                  <div className="absolute -top-1 -left-1 bg-gray-800 text-white text-xs px-2 py-1 rounded font-medium z-10">
                    Out of Stock
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-sky-600 transition-colors duration-200 font-barlow">
                  {product.name}
                </h4>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-1">
                  {renderStars(product.rating)}
                  <span className="text-xs text-gray-500 ml-1">
                    ({product.rating})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm font-bold text-sky-600 font-barlow">
                    AED {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through font-barlow">
                      AED {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="flex-shrink-0">
                <button
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                    product.inStock
                      ? "bg-sky-100 text-sky-600 hover:bg-sky-200"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!product.inStock}
                  onClick={(e) => {
                    e.preventDefault();
                    if (product.inStock) {
                      // Add to cart logic here
                      console.log(`Added ${product.name} to cart`);
                    }
                  }}
                >
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <Link
          href="/products"
          className="block w-full text-center py-2 px-4 bg-sky-50 text-sky-600 rounded-lg hover:bg-sky-100 transition-colors duration-200 font-medium font-barlow"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default RelatedProducts;
