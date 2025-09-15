"use client";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FiEye, FiHeart } from "react-icons/fi";
import { useRouter } from "next/navigation";

// Product Card Component
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

  const handleClick = () => {
    router.push("/product-details");
  };

  return (
    <div
      onClick={handleClick}
      className="w-72 h-80 bg-[#20B8FB0A] rounded-xl  outline-1 outline-black/20 backdrop-blur-md relative overflow-hidden group"
    >
      {/* Discount Badge */}
      <div className="absolute top-4 left-4 bg-[#26ADDF] text-white text-xs font-bold px-2 py-1 rounded">
        -{discount}%
      </div>

      {/* Product Image */}
      <div className="w-full h-52 p-4 flex justify-center items-center relative">
        <Image
          src={imageUrl}
          alt={title}
          width={280}
          height={280}
          className="object-contain"
        />
        {/* Love & View Icons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button className="p-1 bg-white rounded-full shadow-lg hover:bg-white group-hover:text-[#26ADDF] cursor-pointer">
            <FiHeart size={18} />
          </button>
          <button className="p-1 bg-white rounded-full shadow-lg hover:bg-white group-hover:text-[#26ADDF] cursor-pointer">
            <FiEye size={18} />
          </button>
        </div>

        {/* Add to Cart */}
        <button className="absolute bottom-4 left-4 right-4 bg-[#26ADDF] text-white py-2 rounded-br-lg rounded-bl-lg cursor-pointer">
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="absolute bottom-4 left-4 right-4 ">
        <h3 className="text-base font-medium">{title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[#26ADDF] font-semibold">${price}</span>
          {oldPrice && (
            <span className="text-black/50 line-through">${oldPrice}</span>
          )}
        </div>
        {/* Rating */}
        <div className="flex gap-1 mt-1 items-center">
          {Array.from({ length: 5 }).map((_, idx) => (
            <AiFillStar
              key={idx}
              className={`w-5 h-5 rounded-sm ${
                idx < rating ? "text-amber-400" : "text-gray-200"
              }`}
            />
          ))}
          <span className="text-xs text-black/50 ml-1">({rating})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
