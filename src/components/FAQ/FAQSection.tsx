"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    category: "General FAQs",
    items: [
      {
        question: "What products do you offer?",
        answer:
          "We provide a wide range of computers, electronics, gadgets, accessories, and e-commerce solutions.",
      },
      {
        question: "Do you offer warranty on products?",
        answer:
          "Yes, all products come with a manufacturer or Rapid-backed warranty, depending on the item.",
      },
      {
        question: "Can I return or exchange a product?",
        answer:
          "Yes, we have a simple return and exchange policy within the specified period.",
      },
      {
        question: "How can I contact customer support?",
        answer:
          "You can reach us via email, phone, or our website contact form for assistance.",
      },
    ],
  },
  {
    category: "Shipping FAQs",
    items: [
      {
        question: "Do you ship internationally?",
        answer: "Yes, we offer international shipping to selected countries.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Delivery time varies by location, typically 3–7 business days for local shipments and 7–15 days for international orders.",
      },
      {
        question: "Can I track my order?",
        answer:
          "Yes, every order comes with a tracking number for real-time delivery updates.",
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
    <div className="w-full max-w-8xl mx-auto px-4 lg:px-28 py-12">
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
