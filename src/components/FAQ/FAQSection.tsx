"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    category: "General FAQs",
    items: [
      {
        question: "What is Rapid Computer?",
        answer:
          "There are many variations of passage of Lorem Ipsum available, but the majority have suffered. There are many variations of passage of Lorem Ipsum available, but the majority There are many variations of passage of Lorem Ipsum available.",
      },
      {
        question: "How can I place an order?",
        answer:
          "You can place an order through our website or mobile app easily. Just add products to your cart and checkout.",
      },
      {
        question: "Do you offer warranty on products?",
        answer:
          "Yes, all products come with standard manufacturer warranty. Extended warranty is also available for some categories.",
      },
      {
        question: "What payment methods are accepted?",
        answer:
          "We accept credit cards, debit cards, PayPal, Apple Pay, and cash on delivery in selected regions.",
      },
    ],
  },
  {
    category: "Shipping FAQs",
    items: [
      {
        question: "How long does shipping take?",
        answer:
          "Shipping usually takes 3-5 business days depending on your location. Express shipping is also available.",
      },
      {
        question: "Can I track my order?",
        answer:
          "Yes, you will receive a tracking number by email once your order has shipped.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Yes, we ship to most countries worldwide. Shipping costs vary depending on location.",
      },
    ],
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<{ [key: string]: number | null }>(
    {}
  );

  const toggleFAQ = (category: string, index: number) => {
    setOpenIndex((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {faqs.map((faqCategory, catIndex) => (
        <div key={catIndex} className="mb-12">
          <h2 className="text-neutral-800 text-2xl font-semibold mb-6">
            {faqCategory.category}
          </h2>
          <div className="flex flex-col gap-4">
            {faqCategory.items.map((faq, index) => {
              const isOpen = openIndex[faqCategory.category] === index;
              return (
                <div key={index} className="border-b border-neutral-300 pb-4">
                  <button
                    onClick={() => toggleFAQ(faqCategory.category, index)}
                    className="w-full flex justify-between items-center text-left cursor-pointer"
                  >
                    <span
                      className={`text-xl transition-colors ${
                        isOpen
                          ? "text-sky-400 font-medium"
                          : "text-zinc-700 font-normal"
                      }`}
                    >
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <FiChevronUp className="text-zinc-800 w-5 h-5 transition-transform duration-300" />
                    ) : (
                      <FiChevronDown className="text-zinc-800 w-5 h-5 transition-transform duration-300" />
                    )}
                  </button>

                  {/* Animated answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-neutral-800 text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
