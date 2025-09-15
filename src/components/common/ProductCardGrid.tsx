"use client";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { PrimaryBtn } from "./PrimaryBtn";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  title: string;
  price: number;
  rating?: number;
  features?: string[];
  image?: string; // optional for dummy
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
  const handleClick = () => {
    router.push("/product-details");
  };
  return layout === "list" ? (
    <div className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition bg-[#20B8FB08]">
      {/* Image */}
      <div className="w-24 h-24 rounded-lg flex items-center justify-center">
        {product.image ? (
          <Image src="/global/game.png" alt={product.title} />
        ) : (
          <span className="text-gray-400">Image</span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 px-4 flex flex-col gap-1">
        <h3 className="font-semibold text-md md:text-2xl line-clamp-1">
          {product.title}
        </h3>
        <div className="flex items-center gap-5 py-2">
          <div className="flex items-center gap-2 ">
            <GiCheckMark className="text-[#20B8FB]" /> Equal Opportunities
          </div>
          <div className="flex items-center gap-2 ">
            <GiCheckMark className="text-[#20B8FB]" /> Equal Opportunities
          </div>
        </div>
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={`${
                i < (product.rating || 4) ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <div className="font-semibold">Start from AED {product.price}</div>
      </div>

      {/* Button */}
      <PrimaryBtn onClick={handleClick} className="w-40 font-bold">
        Buy Now
      </PrimaryBtn>
    </div>
  ) : (
    <div className="border p-5 rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col bg-[#20B8FB08]">
      <div className="h-40 flex items-center justify-center rounded-xl">
        {product.image ? (
          <Image src="/global/game.png" alt={product.title} />
        ) : (
          <span className="text-gray-400">Image</span>
        )}
      </div>
      <div className="p-4 flex flex-col gap-1">
        <h3 className="font-semibold text-md md:text-xl line-clamp-2 text-neutral-900">
          {product.title}
        </h3>
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={`${
                i < (product.rating || 4) ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-gray-500 font-semibold">
            ({product.rating || 4})
          </span>
        </div>
        {product.features && (
          <ul className="text-gray-600 text-md list-disc list-outside mt-1 pl-5">
            {product.features.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
        )}
        <hr className="border-[#6ACFFC80] my-5" />
        <div className="flex flex-col justify-between items-center">
          <span className=" text-md md:text-xl font-bold text-[#00ADEF] pb-3">
            AED {product.price}
          </span>
          <PrimaryBtn onClick={handleClick} className="w-full font-bold">
            Buy Now
          </PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default ProductCardGrid;
