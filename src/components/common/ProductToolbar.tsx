"use client";

import React, { useEffect, useRef, useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";

// Dropdown Component
interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex justify-center items-center gap-5" ref={containerRef}>
      <span className="font-bold text-gray-800">{label}</span>
      <div
        className="mt-1 px-3 py-2 border border-gray-200 rounded-full cursor-pointer text-sm text-[#041A65] font-medium bg-white flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        {value || "Select..."}
        <svg
          className={`w-4 h-4 ml-2 transform transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {open && (
        <ul className="absolute top-10 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-10 max-h-60 overflow-auto">
          {options.map((opt, idx) => (
            <li
              key={idx}
              className={`px-4 py-2 cursor-pointer hover:bg-sky-100 ${
                value === opt ? "bg-sky-50 font-semibold" : ""
              }`}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// View Toggle Component
interface ViewToggleProps {
  view: "grid" | "list";
  onChange: (view: "grid" | "list") => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ view, onChange }) => {
  return (
    <div className="flex items-center gap-5">
      <span className="font-semibold text-gray-800">View as</span>
      <div className="flex items-center gap-5">
        <button
          onClick={() => onChange("grid")}
          className={`p-2 rounded-md border transition cursor-pointer ${
            view === "grid"
              ? "bg-white shadow-sm border-sky-300 text-sky-500"
              : "border-gray-300 text-gray-500 hover:text-sky-500"
          }`}
        >
          <BsFillGridFill className="w-5 h-5" />
        </button>
        <button
          onClick={() => onChange("list")}
          className={`p-2 rounded-md border transition cursor-pointer ${
            view === "list"
              ? "bg-white shadow-sm border-sky-300 text-sky-500"
              : "border-gray-300 text-gray-500 hover:text-sky-500"
          }`}
        >
          <FaListUl className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

interface ProductToolbarProps {
  layout: "grid" | "list";
  setLayout: (layout: "grid" | "list") => void;
}

const ProductToolbar: React.FC<ProductToolbarProps> = ({ layout, setLayout }) => {
  const [perPage, setPerPage] = useState("50 per page");
  const [sortBy, setSortBy] = useState("Newest item");

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-end gap-10 py-3">
      <div className="flex flex-col sm:flex-row gap-6">
        <Dropdown
          label="Show"
          options={["10 per page", "20 per page", "50 per page", "100 per page"]}
          value={perPage}
          onChange={setPerPage}
        />
        <Dropdown
          label="Sort by"
          options={[
            "Newest item",
            "Oldest item",
            "Price: Low to High",
            "Price: High to Low",
          ]}
          value={sortBy}
          onChange={setSortBy}
        />
      </div>
      <ViewToggle view={layout} onChange={setLayout} />
    </div>
  );
};

export default ProductToolbar;
