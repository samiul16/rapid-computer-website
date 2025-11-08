import React from "react";
// import { FaTags } from "react-icons/fa";
import Image from "next/image";

const PromoteProductCard = ({ img, title, price, discount }) => {
  return (
    <div className="relative lg:w-80 w-72 h-84 bg-[#20B8FB0D] rounded-2xl shadow-lg p-4 mb-5 flex flex-col items-center text-center">
      {/* Promo Tag */}
      {/* {discount && (
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-[#26ADDF] text-white text-xs font-semibold px-2 py-1 rounded-lg shadow">
          <FaTags size={14} />
          <span>{discount}% OFF</span>
        </div>
      )} */}

      {/* Product Image */}
      {/* <Image
        src={Laptop}
        alt={title}
        className="w-40 h-36 object-cover rounded-xl mb-4 shadow"
        
      /> */}
      <div className="w-40 h-40 mb-4 relative">
        <Image
          src="/global/game.png"
          alt={title}
          fill
          className="object-cover rounded-xl shadow"
        />
      </div>

      {/* Title */}
      <p className="text-[#34385F] font-semibold text-sm md:text-base mb-12">
        {title}
      </p>

      {/* Price */}
      <p className="text-[#00ADEF] font-bold text-lg absolute bottom-3 left-4">
        {price}
      </p>
    </div>
  );
};

export default PromoteProductCard;
