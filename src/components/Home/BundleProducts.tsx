import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "../common/ProductCard";
// import SectionHeader from "../common/SectionHeader";
import { PrimaryBtn } from "../common/PrimaryBtn";
// import CustomButton from "../common/CustomButton";
import { FaShoppingCart } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

interface ProductCardProps {
  title: string;
  price: number;
  oldPrice?: number;
  discount: number;
  rating: number;
  imageUrl: string;
}

const BundleProducts: React.FC = () => {
  const router = useRouter();

  const products: ProductCardProps[] = [
    {
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      discount: 40,
      rating: 5,
      imageUrl: "/products/Mobile.png",
    },
    {
      title: "Wireless Headphones",
      price: 95,
      oldPrice: 120,
      discount: 20,
      rating: 4,
      imageUrl: "/products/Mobile.png",
    },
    {
      title: "Gaming Keyboard",
      price: 180,
      oldPrice: 220,
      discount: 18,
      rating: 5,
      imageUrl: "/products/Mobile-2.png",
    },
  ];

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  // Handle shop now button click
  const handleShopNowClick = () => {
    router.push("/products");
  };

  // Animated title component
  const AnimatedTitle = ({ text, delay = 0 }) => {
    const words = text.split(" ");

    return (
      <div className="flex flex-wrap gap-2">
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block"
            data-aos="fade-up"
            data-aos-delay={delay + index * 150}
            style={{ fontFamily: "Barlow, sans-serif" }}
          >
            {word}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="w-full py-20 ">
      <div className="max-w-8xl mx-auto px-4 lg:px-28">
        {/* Header */}
        <div data-aos="fade-up" data-aos-delay="100">
          <div className="text-4xl sm:text-4xl font-bold text-sky-500 text-shadow-md mb-8">
            <AnimatedTitle text="Bundle Products" delay={200} />
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mt-10">
          {/* Left Side CTA Card */}
          <div
            // className="lg:col-span-1 h-[400px] rounded-2xl flex flex-col justify-center items-center text-center px-6 bg-sky-700 bg-[url('/global/blueBg.jpg')] bg-cover bg-center relative"
            className="lg:col-span-1 h-[400px] rounded-2xl flex flex-col justify-center items-center text-center px-6 bg-sky-600 relative"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            {/* Overlay for better text readability */}
            {/* <div className="absolute inset-0 bg-black/30 rounded-2xl"></div> */}

            <div className="relative z-10">
              <h3
                className="text-white text-xl lg:text-2xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "Barlow, sans-serif" }}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Buy in bulk for your business and get volume discounts
              </h3>

              <div data-aos="fade-up" data-aos-delay="700">
                <PrimaryBtn
                  size="lg"
                  onClick={handleShopNowClick}
                  className="cursor-pointer"
                  style={{ fontFamily: "Barlow, sans-serif" }}
                >
                  Shop Now
                </PrimaryBtn>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
              {products.map((product, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={600 + idx * 150}
                  className="flex justify-center"
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add All To Cart Button - Full Width Below */}
        <div
          className="mt-6 flex justify-end"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <button
            className="w-full max-w-4xl bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 text-lg shadow-lg cursor-pointer"
            style={{ fontFamily: "Barlow, sans-serif" }}
            onClick={() => console.log("Added all to cart")}
          >
            <FaShoppingCart className="text-xl" />
            Add All To Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default BundleProducts;
