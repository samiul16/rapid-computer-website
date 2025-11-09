"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react"; // clean arrow icon

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
    active?: boolean;
  }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="max-w-[1600px] mx-auto px-4 py-5">
      <ol className="flex items-center gap-2 text-md font-medium text-black">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-2">
              {!isLast && item.href ? (
                <Link
                  href={item.href}
                  className="text-black/50 hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`${
                    isLast ? "text-[#20B8FB]" : "text-black/50"
                  } whitespace-nowrap`}
                >
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight className="w-4 h-4 text-black/50" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
