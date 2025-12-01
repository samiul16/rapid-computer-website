"use client";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

interface InfoCardProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  isOpen,
  onClick,
}) => {
  return (
    <div
      className="w-full bg-sky-50 rounded-[30px] transition hover:bg-sky-100 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      {/* Header */}
      <div className="p-6 flex justify-between items-center">
        <div className="text-neutral-900 text-2xl font-medium leading-normal tracking-wider">
          {title}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
          className="w-6 h-6 flex items-center justify-center"
        >
          <FaAngleDown className="text-neutral-900" />
        </motion.div>
      </div>

      {/* Collapsible Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.2,
              ease: [0.4, 0.0, 0.2, 1],
              opacity: { duration: 0.15 },
            }}
            className="px-6 pb-6 text-zinc-700 text-base leading-relaxed"
          >
            {description}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AboutUsSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const infoCards = [
    {
      id: 1,
      title: "Our Mission",
      description:
        "To deliver reliable, innovative, and user-friendly computer solutions that empower our customers to achieve their digital goals effortlessly.",
    },
    {
      id: 2,
      title: "Our Vision",
      description:
        "To be a globally recognized technology partner, trusted for excellence, innovation, and exceptional customer service.",
    },
    {
      id: 3,
      title: "Our Values",
      description:
        "Provide high-quality computing solutions tailored to every client and stay ahead with the latest technology trends and innovations. Ensure exceptional customer support and satisfaction. Promote sustainable and responsible technology usage.",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto px-4 lg:px-28">
      <section className="w-full  flex flex-col lg:flex-row justify-start items-center gap-10 px-4 py-12">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-start items-start gap-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[56px] tracking-[3.36px] text-neutral-900">
            About Us
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-neutral-900 leading-7 max-w-[600px]">
            Fast, Reliable, and Trusted Tech Solutions
          </p>
          <div className="flex flex-col gap-4 max-w-[600px]">
            <p className="text-base sm:text-base font-normal f text-zinc-600 leading-relaxed">
              At Rapid, we believe that technology should be fast, reliable, and
              accessible for everyone. Our mission is to make your digital
              journey smoother by providing high-quality tech products, expert
              solutions, and customer-first service — all delivered with speed
              and efficiency. We specialize in offering a wide range of
              computers, electronics, gadgets, accessories, and e-commerce
              solutions designed to meet the needs of students, professionals,
              gamers, and businesses. Whether you are upgrading your
              workstation, building a custom PC, or looking for the latest tech
              trends, Rapid delivers the most trusted options in the market.
            </p>
            <p className="text-base sm:text-base font-normal  text-zinc-600 leading-relaxed">
              Our mission is to make online shopping effortless, enjoyable, and
              trustworthy. Every product we feature is carefully selected, and
              every package is shipped with care — because at Rapid, your
              satisfaction drives everything we do.
            </p>
          </div>
        </div>

        {/* Right Info Cards */}
        <div className="flex-1 flex flex-col justify-start items-start gap-6 w-full">
          {infoCards.map((info) => (
            <InfoCard
              key={info.id}
              {...info}
              isOpen={openId === info.id}
              onClick={() => setOpenId(openId === info.id ? null : info.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUsSection;
