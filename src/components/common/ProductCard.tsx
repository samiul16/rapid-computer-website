"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Changed from "next/router"
import { AiFillStar } from "react-icons/ai";
import { FiEye, FiHeart } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useAddToCart } from "@/hooks/addToCart";
import { setOpenCartModal } from "@/redux/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";

const ProductCard: React.FC<{
  title: string;
  price: number;
  oldPrice?: number;
  discount: number;
  rating?: number;
  imageUrl: string;
}> = ({
  title,
  price,
  oldPrice,
  discount,
  rating = 0,
  imageUrl = "/global/game.png",
}) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const { addToCartGlobal } = useAddToCart();
  const dispatch = useAppDispatch();

  // Ensure component is mounted before using router
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    if (mounted) {
      router.push("/product-details");
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    console.log("Added to cart:", title);
    e.stopPropagation();
    addToCartGlobal(
      {
        id: 2,
        name: title,
        arabic_name: title,
        price: price,
        final_price: price,
        offer_price: "",
        image_url: imageUrl,
        currency: "AED",
      },
      2,
      1,
      () => {}
    );
    dispatch(setOpenCartModal(true));
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Added to wishlist:", title);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Quick view:", title);
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
      {/* Image Container with Overlays */}
      <div className="relative h-56 bg-gray-50 overflow-hidden">
        {/* Product Image */}
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

        {/* Discount Badge - Top Left */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 z-20">
            <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-lg">
              -{discount}%
            </div>
          </div>
        )}

        {/* Action Icons - Top Right */}
        <div className="absolute top-3 right-3 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleWishlist}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:text-red-500 transition-all duration-200 transform hover:scale-110"
          >
            <FiHeart size={16} />
          </button>
          <button
            onClick={handleQuickView}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:text-blue-500 transition-all duration-200 transform hover:scale-110"
          >
            <FiEye size={16} />
          </button>
        </div>

        {/* Add to Cart Button - Bottom (slides up on hover) */}
        <div className="absolute bottom-0 left-0 right-0 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 cursor-pointer">
          <button
            onClick={handleAddToCart}
            className="w-full bg-[#26ADDF] hover:bg-[#229acc] text-white py-3 font-semibold transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 space-y-3 cursor-pointer" onClick={handleClick}>
        {/* Product Title */}
        <h3 className="text-gray-800 font-semibold text-base line-clamp-2 min-h-[48px] leading-6">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, idx) => (
              <AiFillStar
                key={idx}
                className={`w-4 h-4 ${
                  idx < Math.floor(rating) ? "text-amber-400" : "text-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-[#26ADDF] font-bold text-lg">${price}</span>
          {oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              ${oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
