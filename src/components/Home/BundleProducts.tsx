import React, { useEffect } from "react";
import ProductCard from "../common/ProductCard";
// import SectionHeader from "../common/SectionHeader";
import { PrimaryBtn } from "../common/PrimaryBtn";
import CustomButton from "../common/CustomButton";
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
    <section className="w-full max-w-7xl mx-auto py-20 px-4">
      {/* Header */}
      <div data-aos="fade-up" data-aos-delay="100">
        <div className="text-3xl font-bold text-gray-800 mb-8">
          <AnimatedTitle text="Bundle Products" delay={200} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start mt-10">
        {/* Left Side CTA Card */}
        <div
          className="w-full md:w-80 h-[400px] rounded-xl flex flex-col justify-center items-center text-center px-6 bg-sky-700 bg-[url('/global/blueBg.jpg')] bg-cover bg-center relative"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30 rounded-xl"></div>

          <div className="relative z-10">
            <h3
              className="text-white text-2xl font-bold mb-6"
              style={{ fontFamily: "Barlow, sans-serif" }}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Buy in bulk for your business and get volume discounts
            </h3>

            <div data-aos="fade-up" data-aos-delay="700">
              <PrimaryBtn
                size="lg"
                style={{ fontFamily: "Barlow, sans-serif" }}
              >
                Shop Now
              </PrimaryBtn>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          {/* Product Cards */}
          <div
            className="flex gap-6 overflow-x-auto md:overflow-visible scrollbar-none flex-1"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            {products.map((product, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={600 + idx * 150}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {/* Add All To Cart Button - Always Visible */}
          <div
            className="mt-8 flex justify-center"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <CustomButton
              text="Add All To Cart"
              icon={<FaShoppingCart />}
              className="w-full max-w-md px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => console.log("Added all to cart")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BundleProducts;
