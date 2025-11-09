"use client";

import Breadcrumb from "@/components/common/Breadcrumb";
import ProductCardGrid from "@/components/common/ProductCardGrid";
import ProductToolbar from "@/components/common/ProductToolbar";
import SidebarFilters from "@/components/common/SidebarFilters";
import { useState } from "react";

const filterData = [
  {
    title: "Categories",
    fieldName: "categories",
    items: [
      { label: "Laptop", count: 2 },
      { label: "Pendrive", count: 6, selected: true },
      {
        label: "Mouse",
        count: 3,
        subItems: [
          { label: "Gaming Mouse", count: 1 },
          { label: "Wireless Mouse", count: 2, selected: true },
        ],
      },
    ],
  },
];

const filterData2 = [
  {
    title: "Brands",
    fieldName: "brands",
    items: [
      { label: "HP", count: 5 },
      { label: "Lenovo", count: 7 },
    ],
  },
];

const filterData3 = [
  {
    title: "Price",
    fieldName: "price",
    items: [
      { label: "Under AED 1000", count: 5 },
      { label: "AED 1000 - AED 2000", count: 7 },
      { label: "Above AED 2000", count: 3 },
    ],
    isRange: true,
  },
];

// Mock products
const products = [
  {
    id: 1,
    title: "Laptop Pro 15",
    price: 4500,
    rating: 5,
    features: [
      "Processor: Intel i7 12th Gen, GPU- RTX 3060, SSD",
      "RAM: 16GB",
      "Storage: 512GB SSD",
    ],
    image: "/global/game.png",
  },
  {
    id: 2,
    title: "Gaming Laptop X",
    price: 5200,
    rating: 5,
    features: ["Processor: AMD Ryzen 7", "RAM: 32GB", "GPU: RTX 4070"],
    image: "/global/game.png",
  },
  {
    id: 3,
    title: "Pendrive 16GB",
    price: 50,
    rating: 4,
    features: ["USB 3.0", "Compact Design", "Fast Transfer"],
    image: "/global/game.png",
  },
  {
    id: 4,
    title: "Pendrive 32GB",
    price: 80,
    rating: 4,
    features: ["USB 3.1", "High Speed", "Durable"],
    image: "/global/game.png",
  },
  {
    id: 5,
    title: "Wireless Mouse Pro",
    price: 150,
    rating: 5,
    features: ["Ergonomic Design", "Battery Life 12 months", "Bluetooth"],
    image: "/global/game.png",
  },
  {
    id: 6,
    title: "Gaming Mouse Ultra",
    price: 300,
    rating: 5,
    features: ["RGB Lighting", "High DPI", "Customizable Buttons"],
    image: "/global/game.png",
  },
  {
    id: 7,
    title: "Mechanical Keyboard MK-1",
    price: 400,
    rating: 4,
    features: ["RGB Backlight", "Cherry MX Switches", "Durable Frame"],
    image: "/global/game.png",
  },
  {
    id: 8,
    title: 'Ultra HD Monitor 27"',
    price: 1200,
    rating: 5,
    features: ["Resolution: 2560x1440", "IPS Panel", "144Hz Refresh Rate"],
    image: "/global/game.png",
  },
  {
    id: 9,
    title: "External SSD 1TB",
    price: 800,
    rating: 4,
    features: ["USB-C", "Read Speed 1000MB/s", "Portable"],
    image: "/global/game.png",
  },
  {
    id: 10,
    title: "Laptop Stand Adjustable",
    price: 120,
    rating: 3,
    features: ["Aluminum", "Foldable", "Ergonomic Design"],
    image: "/global/game.png",
  },
];

interface FilterItem {
  label: string;
}

type SelectedFilters = {
  [field: string]: string[]; // Each filter field has an array of selected labels
};

export default function ProductsPage() {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  const handleFilterChange = (
    field: string,
    item: FilterItem,
    checked: boolean
  ) => {
    setSelectedFilters((prev) => {
      const updated = { ...prev };
      if (!updated[field]) updated[field] = [];
      if (checked) {
        updated[field].push(item.label);
      } else {
        updated[field] = updated[field].filter((i: string) => i !== item.label);
      }
      return updated;
    });
    console.log("Selected Filters:", selectedFilters);
  };

  const filteredProducts = products.filter((product) => {
    let matches = true;

    // Category filter
    if (selectedFilters["categories"]?.length) {
      matches =
        matches &&
        selectedFilters["categories"].some((cat) =>
          product.title.toLowerCase().includes(cat.toLowerCase())
        );
    }

    // Brand filter
    if (selectedFilters["brands"]?.length) {
      matches =
        matches &&
        selectedFilters["brands"].some((brand) =>
          product.title.toLowerCase().includes(brand.toLowerCase())
        );
    }

    return matches;
  });

  return (
    <main className=" bg-[#FAFDFF]">
      <div className="max-w-8xl mx-auto my-20 px-4 lg:px-2">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products", active: true },
          ]}
        />
      </div>

      <section className="max-w-8xl mx-auto my-20 px-4 lg:px-28">
        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          {/* Sidebar */}
          <aside className="w-full lg:w-80 flex-shrink-0 space-y-5">
            <SidebarFilters
              filterGroups={filterData}
              onChange={handleFilterChange}
              selectedFilters={selectedFilters}
            />
            <SidebarFilters
              filterGroups={filterData2}
              onChange={handleFilterChange}
              selectedFilters={selectedFilters}
            />
            <SidebarFilters
              filterGroups={filterData3}
              onChange={handleFilterChange}
              selectedFilters={selectedFilters}
            />
          </aside>

          {/* Main Content */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Top Filter Bar */}
            <ProductToolbar layout={layout} setLayout={setLayout} />

            {/* Products Grid */}
            <div
              className={`grid ${
                layout === "grid"
                  ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
                  : "grid-cols-1 gap-4"
              }`}
            >
              {filteredProducts.map((product) => (
                <ProductCardGrid
                  key={product.id}
                  product={product}
                  layout={layout}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
