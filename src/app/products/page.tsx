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
      { label: "POS Systems", count: 20 },
      { label: "POS Peripherals", count: 15 },
      { label: "POS Printer", count: 11 },
      { label: "Barcode Scanner", count: 7 },
      { label: "PDT", count: 10 },
      { label: "EAS Solutions", count: 3 },
      { label: "Mobile Printer", count: 10 },
    ],
  },
];

const filterData2 = [
  {
    title: "Brands",
    fieldName: "brands",
    items: [
      { label: "BEETLE", count: 4 },
      { label: "SUNMI", count: 15 },
      { label: "POZONE", count: 12 },
      { label: "RIO", count: 8 },
      { label: "Datalogic", count: 4 },
      { label: "Zebra", count: 3 },
      { label: "Sewoo", count: 6 },
      { label: "Diebold Nixdorf", count: 2 },
      { label: "Sensormatic", count: 3 },
    ],
  },
];

const filterData3 = [
  {
    title: "Price",
    fieldName: "price",
    items: [
      { label: "Under AED 1000", count: 25 },
      { label: "AED 1000 - AED 5000", count: 30 },
      { label: "Above AED 5000", count: 15 },
    ],
    isRange: true,
  },
];

// Products organized by category
const products = [
  // POS Systems
  {
    id: 1,
    title: "BEETLE /iSCAN EASY eXpress",
    category: "POS Systems",
    brand: "BEETLE",
    price: 2500,
    rating: 5,
    features: ["Touch Screen", "Compact Design", "High Performance"],
    image: "/products/modern BEETLE iSCAN EASY eXpress.jpg",
  },
  {
    id: 2,
    title: "BEETLE /iPOS plus",
    category: "POS Systems",
    brand: "BEETLE",
    price: 2800,
    rating: 5,
    features: ["Advanced POS", "Durable", "Multi-functional"],
    image: "/products/BEETLE iPOS plus .jpg",
  },
  {
    id: 3,
    title: "BEETLE /iSCAN EASY Hybrid",
    category: "POS Systems",
    brand: "BEETLE",
    price: 3000,
    rating: 5,
    features: ["Hybrid System", "Flexible", "Reliable"],
    image: "/products/BEETLE iSCAN EASY Hybrid.jpg",
  },
  {
    id: 4,
    title: "BEETLE/DN A-Series",
    category: "POS Systems",
    brand: "BEETLE",
    price: 3200,
    rating: 5,
    features: ["A-Series", "Professional Grade", "High Efficiency"],
    image: "/products/BEETLEDN A-Series.jpg",
  },
  {
    id: 5,
    title: "Diebold Nixdorf BEETLE /M-III",
    category: "POS Systems",
    brand: "Diebold Nixdorf",
    price: 3500,
    rating: 5,
    features: ["M-III Series", "Enterprise Level", "Robust"],
    image: "/products/Diebold Nixdorf BEETLE M-III.jpg",
  },
  {
    id: 6,
    title: "DN Series EASY ONE",
    category: "POS Systems",
    brand: "Diebold Nixdorf",
    price: 2900,
    rating: 5,
    features: ["Easy to Use", "Compact", "Efficient"],
    image: "/products/DN Series EASY ONE.jpg",
  },
  {
    id: 7,
    title: "Endura POS Terminal",
    category: "POS Systems",
    brand: "Endura",
    price: 2700,
    rating: 4,
    features: ["Durable", "Reliable", "Cost Effective"],
    image: "/products/Endura POS Terminal.jpg",
  },
  {
    id: 8,
    title: "K-two Interactive Kiosk",
    category: "POS Systems",
    brand: "K-two",
    price: 4500,
    rating: 5,
    features: ["Interactive", "Self-Service", "Modern Design"],
    image: "/products/K-two Interactive Kiosk.jpg",
  },
  {
    id: 9,
    title: "POZONE T810",
    category: "POS Systems",
    brand: "POZONE",
    price: 2200,
    rating: 4,
    features: ["Affordable", "Reliable", "Easy Setup"],
    image: "/products/POZONE T810.jpg",
  },
  {
    id: 10,
    title: "POZONE T825",
    category: "POS Systems",
    brand: "POZONE",
    price: 2400,
    rating: 4,
    features: ["Enhanced Features", "Touch Screen", "Fast"],
    image: "/products/POZONE T825.jpg",
  },
  {
    id: 11,
    title: "POZONE TABLET STANDS",
    category: "POS Systems",
    brand: "POZONE",
    price: 300,
    rating: 4,
    features: ["Tablet Support", "Adjustable", "Sturdy"],
    image: "/products/POZONE Tablet Stand.jpg",
  },
  {
    id: 12,
    title: "RIO Xander 9",
    category: "POS Systems",
    brand: "RIO",
    price: 2600,
    rating: 5,
    features: ["Modern Design", "High Performance", "Reliable"],
    image: "/products/RIO Xander 9.jpg",
  },
  {
    id: 13,
    title: "SUNMI D2 MINI",
    category: "POS Systems",
    brand: "SUNMI",
    price: 1800,
    rating: 4,
    features: ["Compact", "Portable", "Android Based"],
    image: "/products/SUNMI D2 MINI.jpg",
  },
  {
    id: 14,
    title: "SUNMI D2s LITE",
    category: "POS Systems",
    brand: "SUNMI",
    price: 1900,
    rating: 4,
    features: ["Lightweight", "Efficient", "User Friendly"],
    image: "/products/SUNMI D2s LITE.jpg",
  },
  {
    id: 15,
    title: "SUNMI D2s Plus",
    category: "POS Systems",
    brand: "SUNMI",
    price: 2100,
    rating: 5,
    features: ["Enhanced Version", "Fast Processing", "Reliable"],
    image: "/products/SUNMI D2s Plus.jpg",
  },
  {
    id: 16,
    title: "SUNMI K2",
    category: "POS Systems",
    brand: "SUNMI",
    price: 2300,
    rating: 5,
    features: ["All-in-One", "Touch Screen", "Modern"],
    image: "/products/SUNMI K2.jpg",
  },
  {
    id: 17,
    title: "SUNMI T2s",
    category: "POS Systems",
    brand: "SUNMI",
    price: 2000,
    rating: 4,
    features: ["Tablet POS", "Portable", "Versatile"],
    image: "/products/SUNMI T2s.jpg",
  },
  {
    id: 18,
    title: "SUNMI T2s Lite",
    category: "POS Systems",
    brand: "SUNMI",
    price: 1700,
    rating: 4,
    features: ["Budget Friendly", "Compact", "Efficient"],
    image: "/products/SUNMI T2s Lite.jpg",
  },
  {
    id: 19,
    title: "Xtreme II V2 TOUCH POS TERMINAL",
    category: "POS Systems",
    brand: "Xtreme",
    price: 2800,
    rating: 5,
    features: ["Touch Interface", "High Performance", "Durable"],
    image: "/global/game.png",
  },

  // POS Peripherals
  {
    id: 20,
    title: "POZONE T80 PRICE CHECKER",
    category: "POS Peripherals",
    brand: "POZONE",
    price: 800,
    rating: 4,
    features: ["Price Verification", "Easy to Use", "Accurate"],
    image: "/global/game.png",
  },
  {
    id: 21,
    title: "POZONE BS-330 BARCODE SCANNER",
    category: "POS Peripherals",
    brand: "POZONE",
    price: 350,
    rating: 4,
    features: ["Fast Scanning", "Reliable", "Ergonomic"],
    image: "/global/game.png",
  },
  {
    id: 22,
    title: "POZONE BS-520 2D DESKTOP BARCODE SCANNER",
    category: "POS Peripherals",
    brand: "POZONE",
    price: 450,
    rating: 4,
    features: ["2D Scanning", "Desktop Mount", "High Speed"],
    image: "/global/game.png",
  },
  {
    id: 23,
    title: "POZONE MP-310B MOBILE PRINTER",
    category: "POS Peripherals",
    brand: "POZONE",
    price: 600,
    rating: 4,
    features: ["Portable", "Bluetooth", "Compact"],
    image: "/global/game.png",
  },
  {
    id: 24,
    title: "POZONE MP-410B MOBILE PRINTER",
    category: "POS Peripherals",
    brand: "POZONE",
    price: 700,
    rating: 4,
    features: ["Enhanced Mobile Printing", "Fast", "Reliable"],
    image: "/global/game.png",
  },
  {
    id: 25,
    title: "RIO Heavy Duty Cash Drawer RSC-420",
    category: "POS Peripherals",
    brand: "RIO",
    price: 500,
    rating: 5,
    features: ["Heavy Duty", "Secure", "Durable"],
    image: "/global/game.png",
  },
  {
    id: 26,
    title: "RIO Customer Display RPD 210",
    category: "POS Peripherals",
    brand: "RIO",
    price: 400,
    rating: 4,
    features: ["Customer Facing", "Clear Display", "Easy Integration"],
    image: "/global/game.png",
  },
  {
    id: 27,
    title: "RIO ROLLER CASH DRAWER RSC200",
    category: "POS Peripherals",
    brand: "RIO",
    price: 450,
    rating: 4,
    features: ["Roller Design", "Smooth Operation", "Reliable"],
    image: "/global/game.png",
  },
  {
    id: 28,
    title: "SUNMI 80mm Kitchen Cloud Printer",
    category: "POS Peripherals",
    brand: "SUNMI",
    price: 550,
    rating: 5,
    features: ["Cloud Enabled", "Kitchen Use", "Fast Printing"],
    image: "/global/game.png",
  },
  {
    id: 29,
    title: "SUNMI L2s",
    category: "POS Peripherals",
    brand: "SUNMI",
    price: 1200,
    rating: 5,
    features: ["Handheld", "Scanner", "Multi-functional"],
    image: "/global/game.png",
  },
  {
    id: 30,
    title: "SUNMI M2 MAX",
    category: "POS Peripherals",
    brand: "SUNMI",
    price: 1400,
    rating: 5,
    features: ["Large Screen", "Powerful", "Versatile"],
    image: "/global/game.png",
  },
  {
    id: 31,
    title: "SUNMI V2 PRO",
    category: "POS Peripherals",
    brand: "SUNMI",
    price: 1100,
    rating: 5,
    features: ["Professional Grade", "Handheld POS", "Reliable"],
    image: "/global/game.png",
  },
  {
    id: 32,
    title: "SUNMI V2s",
    category: "POS Peripherals",
    brand: "SUNMI",
    price: 900,
    rating: 4,
    features: ["Compact", "Efficient", "User Friendly"],
    image: "/global/game.png",
  },
  {
    id: 33,
    title: "SUNMI V2s PLUS",
    category: "POS Peripherals",
    brand: "SUNMI",
    price: 1000,
    rating: 5,
    features: ["Enhanced Features", "Fast", "Reliable"],
    image: "/global/game.png",
  },

  // POS Printer
  {
    id: 34,
    title: "Pozone P302",
    category: "POS Printer",
    brand: "POZONE",
    price: 400,
    rating: 4,
    features: ["Thermal Printer", "Fast", "Reliable"],
    image: "/global/game.png",
  },
  {
    id: 35,
    title: "Pozone PFT4300 Fliptop Cash Drawer",
    category: "POS Printer",
    brand: "POZONE",
    price: 350,
    rating: 4,
    features: ["Flip Top Design", "Secure", "Easy Access"],
    image: "/global/game.png",
  },
  {
    id: 36,
    title: "Pozone PP610",
    category: "POS Printer",
    brand: "POZONE",
    price: 450,
    rating: 4,
    features: ["High Speed", "Reliable", "Compact"],
    image: "/global/game.png",
  },
  {
    id: 37,
    title: "RIO POS Printer RPP325 & RPP355",
    category: "POS Printer",
    brand: "RIO",
    price: 500,
    rating: 5,
    features: ["Dual Model", "Fast Printing", "Durable"],
    image: "/global/game.png",
  },
  {
    id: 38,
    title: "SEWOO LK-D30",
    category: "POS Printer",
    brand: "Sewoo",
    price: 420,
    rating: 4,
    features: ["Desktop Printer", "Reliable", "Easy Setup"],
    image: "/global/game.png",
  },
  {
    id: 39,
    title: "Sewoo SLK-TE213",
    category: "POS Printer",
    brand: "Sewoo",
    price: 380,
    rating: 4,
    features: ["Thermal Printer", "Compact", "Efficient"],
    image: "/global/game.png",
  },
  {
    id: 40,
    title: "Sewoo SLK",
    category: "POS Printer",
    brand: "Sewoo",
    price: 400,
    rating: 4,
    features: ["Standard Model", "Reliable", "Cost Effective"],
    image: "/global/game.png",
  },
  {
    id: 41,
    title: "Sewoo SLK-TS400",
    category: "POS Printer",
    brand: "Sewoo",
    price: 480,
    rating: 5,
    features: ["High Performance", "Fast", "Durable"],
    image: "/global/game.png",
  },
  {
    id: 42,
    title: "ZT231 RFID INDUSTRIAL PRINTER",
    category: "POS Printer",
    brand: "Zebra",
    price: 2500,
    rating: 5,
    features: ["RFID Enabled", "Industrial Grade", "High Volume"],
    image: "/global/game.png",
  },

  // Barcode Scanner
  {
    id: 43,
    title: "Datalogic GRYPHON I GPS4400 2D",
    category: "Barcode Scanner",
    brand: "Datalogic",
    price: 800,
    rating: 5,
    features: ["2D Scanning", "High Performance", "Ergonomic"],
    image: "/global/game.png",
  },
  {
    id: 44,
    title: "Datalogic MAGELLAN 3200VSI",
    category: "Barcode Scanner",
    brand: "Datalogic",
    price: 1200,
    rating: 5,
    features: ["Presentation Scanner", "Multi-plane", "Fast"],
    image: "/global/game.png",
  },
  {
    id: 45,
    title: "Datalogic Quickscan I LITE QW2400",
    category: "Barcode Scanner",
    brand: "Datalogic",
    price: 600,
    rating: 4,
    features: ["Lightweight", "Affordable", "Reliable"],
    image: "/global/game.png",
  },
  {
    id: 46,
    title: "Datalogic Quickscan QD2400",
    category: "Barcode Scanner",
    brand: "Datalogic",
    price: 700,
    rating: 5,
    features: ["Quick Scanning", "Durable", "Efficient"],
    image: "/global/game.png",
  },
  {
    id: 47,
    title: "Zebra LS2208",
    category: "Barcode Scanner",
    brand: "Zebra",
    price: 500,
    rating: 4,
    features: ["Entry Level", "Reliable", "Easy to Use"],
    image: "/global/game.png",
  },

  // PDT (Portable Data Terminals)
  {
    id: 48,
    title: "EC30 Enterprise Companion",
    category: "PDT",
    brand: "Zebra",
    price: 1500,
    rating: 5,
    features: ["Enterprise Grade", "Rugged", "Android"],
    image: "/global/game.png",
  },
  {
    id: 49,
    title: "EC50 and EC55 Enterprise Mobile Computers",
    category: "PDT",
    brand: "Zebra",
    price: 1800,
    rating: 5,
    features: ["Mobile Computing", "Durable", "High Performance"],
    image: "/global/game.png",
  },
  {
    id: 50,
    title: "M3 OX10",
    category: "PDT",
    brand: "M3",
    price: 1600,
    rating: 4,
    features: ["Rugged Design", "Long Battery", "Reliable"],
    image: "/global/game.png",
  },
  {
    id: 51,
    title: "MC2200 and MC2700 Mobile Computer",
    category: "PDT",
    brand: "Zebra",
    price: 1400,
    rating: 4,
    features: ["Affordable", "Reliable", "Easy to Use"],
    image: "/global/game.png",
  },
  {
    id: 52,
    title: "MC3300 Series Mobile Computer",
    category: "PDT",
    brand: "Zebra",
    price: 2000,
    rating: 5,
    features: ["Professional Grade", "Versatile", "Powerful"],
    image: "/global/game.png",
  },
  {
    id: 53,
    title: "PM550",
    category: "PDT",
    brand: "PM",
    price: 1300,
    rating: 4,
    features: ["Compact", "Efficient", "Durable"],
    image: "/global/game.png",
  },
  {
    id: 54,
    title: "PM85",
    category: "PDT",
    brand: "PM",
    price: 1100,
    rating: 4,
    features: ["Budget Friendly", "Reliable", "Portable"],
    image: "/global/game.png",
  },
  {
    id: 55,
    title: "PM850",
    category: "PDT",
    brand: "PM",
    price: 1250,
    rating: 4,
    features: ["Enhanced Model", "Fast", "User Friendly"],
    image: "/global/game.png",
  },

  // EAS Solutions
  {
    id: 56,
    title: "Sensormatic Concealed Door or Wall System",
    category: "EAS Solutions",
    brand: "Sensormatic",
    price: 3500,
    rating: 5,
    features: ["Concealed Design", "Security", "Reliable Detection"],
    image: "/global/game.png",
  },
  {
    id: 57,
    title: "Sensormatic Synergy Series",
    category: "EAS Solutions",
    brand: "Sensormatic",
    price: 4000,
    rating: 5,
    features: ["Advanced Detection", "Modern Design", "High Performance"],
    image: "/global/game.png",
  },
  {
    id: 58,
    title: "Sensormatic Ultra Series",
    category: "EAS Solutions",
    brand: "Sensormatic",
    price: 4500,
    rating: 5,
    features: ["Ultra Detection", "Premium", "Comprehensive Security"],
    image: "/global/game.png",
  },

  // Mobile Printer
  {
    id: 59,
    title: "RIO RMP-130 Mobile Printer (Wifi & Bluetooth)",
    category: "Mobile Printer",
    brand: "RIO",
    price: 650,
    rating: 4,
    features: ["Wifi & Bluetooth", "Portable", "Fast Printing"],
    image: "/global/game.png",
  },
  {
    id: 60,
    title: "RIO RMP-140 Mobile Printer (Wifi & Bluetooth)",
    category: "Mobile Printer",
    brand: "RIO",
    price: 700,
    rating: 4,
    features: ["Enhanced Connectivity", "Compact", "Reliable"],
    image: "/global/game.png",
  },
  {
    id: 61,
    title: "Sewoo LK-P20II",
    category: "Mobile Printer",
    brand: "Sewoo",
    price: 550,
    rating: 4,
    features: ["Compact Design", "Portable", "Easy to Use"],
    image: "/global/game.png",
  },
  {
    id: 62,
    title: "Sewoo LK-P25",
    category: "Mobile Printer",
    brand: "Sewoo",
    price: 600,
    rating: 4,
    features: ["Enhanced Model", "Fast", "Durable"],
    image: "/global/game.png",
  },
  {
    id: 63,
    title: "Sewoo LK-P30II",
    category: "Mobile Printer",
    brand: "Sewoo",
    price: 650,
    rating: 5,
    features: ["High Performance", "Reliable", "Portable"],
    image: "/global/game.png",
  },
  {
    id: 64,
    title: "Sewoo LK-P41",
    category: "Mobile Printer",
    brand: "Sewoo",
    price: 700,
    rating: 5,
    features: ["Professional Grade", "Fast Printing", "Durable"],
    image: "/global/game.png",
  },
  {
    id: 65,
    title: "ZD200 Series Desktop Printer",
    category: "Mobile Printer",
    brand: "Zebra",
    price: 800,
    rating: 4,
    features: ["Desktop/Mobile", "Versatile", "Reliable"],
    image: "/global/game.png",
  },
  {
    id: 66,
    title: "ZD400 Series 4-Inch Desktop Printers",
    category: "Mobile Printer",
    brand: "Zebra",
    price: 900,
    rating: 5,
    features: ["4-Inch Width", "High Quality", "Fast"],
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
        updated[field] = [...updated[field], item.label];
      } else {
        updated[field] = updated[field].filter((i: string) => i !== item.label);
      }
      console.log("Updated Filters:", updated);
      return updated;
    });
  };

  const filteredProducts = products.filter((product) => {
    let matches = true;

    // Category filter
    if (selectedFilters["categories"]?.length) {
      matches =
        matches &&
        selectedFilters["categories"].some((cat) => product.category === cat);
    }

    // Brand filter
    if (selectedFilters["brands"]?.length) {
      matches =
        matches &&
        selectedFilters["brands"].some((brand) => product.brand === brand);
    }

    // Price filter
    if (selectedFilters["price"]?.length) {
      matches =
        matches &&
        selectedFilters["price"].some((priceRange) => {
          if (priceRange === "Under AED 1000") {
            return product.price < 1000;
          } else if (priceRange === "AED 1000 - AED 5000") {
            return product.price >= 1000 && product.price <= 5000;
          } else if (priceRange === "Above AED 5000") {
            return product.price > 5000;
          }
          return false;
        });
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

            {/* Active Filters Display */}
            {Object.keys(selectedFilters).some(
              (key) => selectedFilters[key].length > 0
            ) && (
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="font-semibold text-gray-700">
                    Active Filters:
                  </span>
                  {Object.entries(selectedFilters).map(([field, values]) =>
                    values.map((value) => (
                      <span
                        key={`${field}-${value}`}
                        className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm flex items-center gap-2"
                      >
                        {value}
                        <button
                          onClick={() =>
                            handleFilterChange(field, { label: value }, false)
                          }
                          className="hover:text-sky-900"
                        >
                          ×
                        </button>
                      </span>
                    ))
                  )}
                  <button
                    onClick={() => setSelectedFilters({})}
                    className="text-sm text-red-500 hover:text-red-700 underline"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            )}

            {/* Product Count */}
            <div className="text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </div>

            {/* Products Grid */}
            <div
              className={`grid ${
                layout === "grid"
                  ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
                  : "grid-cols-1 gap-4"
              }`}
            >
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCardGrid
                    key={product.id}
                    product={product}
                    layout={layout}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-12 text-gray-500">
                  No products found matching your filters.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
