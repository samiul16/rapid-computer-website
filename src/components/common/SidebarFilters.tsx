"use client";

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

// Types
interface FilterItem {
  label: string;
  count?: number;
  selected?: boolean;
  subItems?: FilterItem[];
}

interface FilterGroupProps {
  title: string;
  fieldName: string;
  items: FilterItem[];
  isRange?: boolean;
  onChange?: (fieldName: string, item: FilterItem, checked: boolean) => void;
}

type SelectedFilters = {
  [key: string]: string[];
};

interface SidebarFilterGroupProps extends FilterGroupProps {
  selectedFilters?: SelectedFilters;
}

// Custom Checkbox
const CustomCheckbox = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) => (
  <div
    onClick={onChange}
    className={`w-5 h-5 flex items-center justify-center rounded border cursor-pointer transition 
      ${checked ? "bg-sky-500 border-sky-500" : "bg-white border-gray-300"}`}
  >
    {checked && <FaCheck className="text-white text-[10px]" />}
  </div>
);

// SidebarFilterGroup
const SidebarFilterGroup: React.FC<SidebarFilterGroupProps> = ({
  title,
  fieldName,
  items,
  isRange = false,
  onChange,
  selectedFilters,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderItems = (items: FilterItem[], level = 0) => (
    <div className={`space-y-5 ${level > 0 ? "ml-6" : ""}`}>
      {items.map((item, index) => {
        const isChecked =
          selectedFilters?.[fieldName]?.includes(item.label) || false;

        return (
          <div key={index} className="space-y-1">
            <div className="flex items-center justify-between">
              <label
                className={`flex items-center gap-2 cursor-pointer ${
                  isChecked ? "text-sky-500" : "text-zinc-800"
                }`}
              >
                <CustomCheckbox
                  checked={isChecked}
                  onChange={() =>
                    onChange && onChange(fieldName, item, !isChecked)
                  }
                />
                <span className="text-base">{item.label}</span>
              </label>
              {item.count !== undefined && (
                <span className="text-sm text-zinc-600">({item.count})</span>
              )}
            </div>
            {item.subItems && renderItems(item.subItems, level + 1)}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold bg-gradient-to-r from-[#041A65] to-[#0834CB] bg-clip-text text-transparent">
          {title}
        </h3>
        <IoIosArrowDown
          className={`text-xl ${isOpen ? "rotate-180" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {isOpen && (
        <>
          {!isRange && (
            <div className="w-full h-10 flex items-center bg-white rounded-full border border-sky-300 px-4">
              <FiSearch className="text-sky-500 text-lg" />
              <input
                type="text"
                placeholder={`Search ${title.toLowerCase()}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="ml-3 w-full h-full outline-none rounded-full text-sm text-gray-700 placeholder-gray-400"
              />
            </div>
          )}
          {renderItems(filteredItems)}
          {isRange && (
            <div className="flex items-center gap-3">
              <input
                type="number"
                placeholder="Min"
                className="w-20 p-1 border border-neutral-300 rounded"
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max"
                className="w-20 p-1 border border-neutral-300 rounded"
              />
              <button className="w-full px-4 py-1 bg-sky-500 text-white rounded cursor-pointer">
                OK
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

// Wrapper SidebarFilters
interface SidebarFiltersProps {
  filterGroups: {
    title: string;
    fieldName: string;
    items: FilterItem[];
    isRange?: boolean;
  }[];
  onChange?: (fieldName: string, item: FilterItem, checked: boolean) => void;
  selectedFilters?: SelectedFilters;
}

const SidebarFilters: React.FC<SidebarFiltersProps> = ({
  filterGroups,
  onChange,
  selectedFilters,
}) => {
  return (
    <div className="w-80 p-4 space-y-6 bg-white rounded-lg shadow-md overflow-y-auto max-h-screen">
      {filterGroups.map((group, idx) => (
        <SidebarFilterGroup
          key={idx}
          title={group.title}
          fieldName={group.fieldName}
          items={group.items}
          isRange={group.isRange}
          onChange={onChange}
          selectedFilters={selectedFilters}
        />
      ))}
    </div>
  );
};

export default SidebarFilters;
