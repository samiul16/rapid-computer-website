"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiFillStar } from "react-icons/ai";
import { ChevronRight, Tag } from "react-feather";
import { useGetAllFoodsQuery } from "@/redux/apiSlice/apiSlice";
import Loading from "@/app/loading";
import { useTranslations, useLocale } from "next-intl";
import { toArabicNumerals } from "@/helpers/ui/Arabic";

interface ApiGroup {
  id: number;
  name: string;
  arabic_name?: string;
  image_url?: string;
  categories: Array<{
    id: number;
    name: string;
    arabic_name?: string;
  }>;
}

interface ApiItem {
  id: number;
  name: string;
  arabic_name?: string;
  price: number;
  final_price: number;
  offer_price: string;
  image_url?: string;
  purchase_group_id: number;
  purchase_category_id?: number;
  reviews_avg_star_number?: string;
  average_rating: number;
}

interface ApiResponse {
  group: ApiGroup[];
  items: ApiItem[];
}

const products = [
  // POS Systems
  {
    id: 1,
    name: "BEETLE /iSCAN EASY eXpress",
    category: "POS Systems",
    brand: "BEETLE",
    price: 2500,
    final_price: 2500,
    rating: 5,
    features: ["Touch Screen", "Compact Design", "High Performance"],
    imageUrl: "/global/game.png",
  },
  {
    id: 2,
    name: "BEETLE /iPOS plus",
    category: "POS Systems",
    brand: "BEETLE",
    price: 2800,
    final_price: 2800,
    rating: 5,
    features: ["Advanced POS", "Durable", "Multi-functional"],
    imageUrl: "/global/game.png",
  },
  {
    id: 3,
    name: "BEETLE /iSCAN EASY Hybrid",
    category: "POS Systems",
    brand: "BEETLE",
    price: 3000,
    final_price: 3000,
    rating: 5,
    features: ["Hybrid System", "Flexible", "Reliable"],
    imageUrl: "/global/game.png",
  },
  {
    id: 4,
    name: "BEETLE/DN A-Series",
    category: "POS Systems",
    brand: "BEETLE",
    price: 3200,
    final_price: 3200,
    rating: 5,
    features: ["A-Series", "Professional Grade", "High Efficiency"],
    imageUrl: "/global/game.png",
  },
  {
    id: 5,
    name: "Diebold Nixdorf BEETLE /M-III",
    category: "POS Systems",
    brand: "Diebold Nixdorf",
    price: 3500,
    final_price: 3500,
    rating: 5,
    features: ["M-III Series", "Enterprise Level", "Robust"],
    imageUrl: "/global/game.png",
  },
  {
    id: 6,
    name: "DN Series EASY ONE",
    category: "POS Systems",
    brand: "Diebold Nixdorf",
    price: 2900,
    final_price: 2900,
    rating: 5,
    features: ["Easy to Use", "Compact", "Efficient"],
    imageUrl: "/global/game.png",
  },
  {
    id: 7,
    name: "Endura POS Terminal",
    category: "POS Systems",
    brand: "Endura",
    price: 2700,
    final_price: 2700,
    rating: 4,
    features: ["Durable", "Reliable", "Cost Effective"],
    imageUrl: "/global/game.png",
  },
  {
    id: 8,
    name: "K-two Interactive Kiosk",
    category: "POS Systems",
    brand: "K-two",
    price: 4500,
    final_price: 4500,
    rating: 5,
    features: ["Interactive", "Self-Service", "Modern Design"],
    imageUrl: "/global/game.png",
  },
  {
    id: 9,
    name: "POZONE T810",
    category: "POS Systems",
    brand: "POZONE",
    price: 2200,
    final_price: 2200,
    rating: 4,
    features: ["Affordable", "Reliable", "Easy Setup"],
    imageUrl: "/global/game.png",
  },
  {
    id: 10,
    name: "POZONE T825",
    category: "POS Systems",
    brand: "POZONE",
    price: 2400,
    final_price: 2400,
    rating: 4,
    features: ["Enhanced Features", "Touch Screen", "Fast"],
    imageUrl: "/global/game.png",
  },
  {
    id: 11,
    name: "POZONE TABLET STANDS",
    category: "POS Systems",
    brand: "POZONE",
    price: 300,
    final_price: 300,
    rating: 4,
    features: ["Tablet Support", "Adjustable", "Sturdy"],
    imageUrl: "/global/game.png",
  },
  {
    id: 12,
    name: "RIO Xander 9",
    category: "POS Systems",
    brand: "RIO",
    price: 2600,
    final_price: 2600,
    rating: 5,
    features: ["Modern Design", "High Performance", "Reliable"],
    imageUrl: "/global/game.png",
  },
  {
    id: 13,
    name: "SUNMI D2 MINI",
    category: "POS Systems",
    brand: "SUNMI",
    price: 1800,
    final_price: 1800,
    rating: 4,
    features: ["Compact", "Portable", "Android Based"],
    imageUrl: "/global/game.png",
  },
  {
    id: 14,
    name: "SUNMI D2s LITE",
    category: "POS Systems",
    brand: "SUNMI",
    price: 1900,
    final_price: 1900,
    rating: 4,
    features: ["Lightweight", "Efficient", "User Friendly"],
    imageUrl: "/global/game.png",
  },
  {
    id: 15,
    name: "SUNMI D2s Plus",
    category: "POS Systems",
    brand: "SUNMI",
    price: 2100,
    final_price: 2100,
    rating: 5,
    features: ["Enhanced Version", "Fast Processing", "Reliable"],
    imageUrl: "/global/game.png",
  },
  {
    id: 16,
    name: "SUNMI K2",
    category: "POS Systems",
    brand: "SUNMI",
    price: 2300,
    final_price: 2300,
    rating: 5,
    features: ["All-in-One", "Touch Screen", "Modern"],
    imageUrl: "/global/game.png",
  },
  {
    id: 17,
    name: "SUNMI T2s",
    category: "POS Systems",
    brand: "SUNMI",
    price: 2000,
    final_price: 2000,
    rating: 4,
    features: ["Tablet POS", "Portable", "Versatile"],
    imageUrl: "/global/game.png",
  },
  {
    id: 18,
    name: "SUNMI T2s Lite",
    category: "POS Systems",
    brand: "SUNMI",
    price: 1700,
    final_price: 1700,
    rating: 4,
    features: ["Budget Friendly", "Compact", "Efficient"],
    imageUrl: "/global/game.png",
  },
  {
    id: 19,
    name: "Xtreme II V2 TOUCH POS TERMINAL",
    category: "POS Systems",
    brand: "Xtreme",
    price: 2800,
    final_price: 2800,
    rating: 5,
    features: ["Touch Interface", "High Performance", "Durable"],
    imageUrl: "/global/game.png",
  },

  // POS Peripherals
  {
    id: 20,
    name: "POZONE T80 PRICE CHECKER",
    category: "POS Peripherals",
    brand: "POZONE",
    price: 800,
    final_price: 800,
    rating: 4,
    features: ["Price Verification", "Easy to Use", "Accurate"],
    imageUrl: "/global/game.png",
  },
  {
    id: 21,
    name: "POZONE BS-330 BARCODE SCANNER",
    category: "POS Peripherals",
    brand: "POZONE",
    price: 350,
    final_price: 350,
    rating: 4,
    features: ["Fast Scanning", "Reliable", "Ergonomic"],
    imageUrl: "/global/game.png",
  },
  {
    id: 22,
    name: "POZONE BS-520 2D DESKTOP BARCODE SCANNER",
    category: "POS Peripherals",
    brand: "POZONE",
    price: 450,
    final_price: 450,
    rating: 4,
    features: ["2D Scanning", "Desktop Mount", "High Speed"],
    imageUrl: "/global/game.png",
  },
  {
    id: 23,
    name: "POZONE MP-310B MOBILE PRINTER",
    category: "POS Peripherals",
    brand: "POZONE",
    price: 600,
    rating: 4,
    features: ["Portable", "Bluetooth", "Compact"],
    imageUrl: "/global/game.png",
  },
  {
    id: 24,
    name: "POZONE MP-410B MOBILE PRINTER",
    category: "POS Peripherals",
    brand: "POZONE",
    price: 700,
    rating: 4,
    features: ["Enhanced Mobile Printing", "Fast", "Reliable"],
    imageUrl: "/global/game.png",
  },
  {
    id: 25,
    name: "RIO Heavy Duty Cash Drawer RSC-420",
    category: "POS Peripherals",
    brand: "RIO",
    price: 500,
    rating: 5,
    features: ["Heavy Duty", "Secure", "Durable"],
    imageUrl: "/global/game.png",
  },
  {
    id: 26,
    name: "RIO Customer Display RPD 210",
    category: "POS Peripherals",
    brand: "RIO",
    price: 400,
    rating: 4,
    features: ["Customer Facing", "Clear Display", "Easy Integration"],
    imageUrl: "/global/game.png",
  },
  {
    id: 27,
    name: "RIO ROLLER CASH DRAWER RSC200",
    category: "POS Peripherals",
    brand: "RIO",
    price: 450,
    rating: 4,
    features: ["Roller Design", "Smooth Operation", "Reliable"],
    imageUrl: "/global/game.png",
  },
  {
    id: 28,
    name: "SUNMI 80mm Kitchen Cloud Printer",
    category: "POS Peripherals",
    brand: "SUNMI",
    price: 550,
    rating: 5,
    features: ["Cloud Enabled", "Kitchen Use", "Fast Printing"],
    imageUrl: "/global/game.png",
  },
  {
    id: 29,
    name: "SUNMI L2s",
    category: "POS Peripherals",
    brand: "SUNMI",
    price: 1200,
    rating: 5,
    features: ["Handheld", "Scanner", "Multi-functional"],
    imageUrl: "/global/game.png",
  },
  {
    id: 30,
    name: "SUNMI M2 MAX",
    category: "POS Peripherals",
    brand: "SUNMI",
    price: 1400,
    rating: 5,
    features: ["Large Screen", "Powerful", "Versatile"],
    imageUrl: "/global/game.png",
  },
  {
    id: 31,
    name: "SUNMI V2 PRO",
    category: "POS Peripherals",
    brand: "SUNMI",
    price: 1100,
    rating: 5,
    features: ["Professional Grade", "Handheld POS", "Reliable"],
    imageUrl: "/global/game.png",
  },
  {
    id: 32,
    name: "SUNMI V2s",
    category: "POS Peripherals",
    brand: "SUNMI",
    price: 900,
    rating: 4,
    features: ["Compact", "Efficient", "User Friendly"],
    imageUrl: "/global/game.png",
  },
  {
    id: 33,
    name: "SUNMI V2s PLUS",
    category: "POS Peripherals",
    brand: "SUNMI",
    price: 1000,
    rating: 5,
    features: ["Enhanced Features", "Fast", "Reliable"],
    imageUrl: "/global/game.png",
  },

  // POS Printer
  {
    id: 34,
    name: "Pozone P302",
    category: "POS Printer",
    brand: "POZONE",
    price: 400,
    rating: 4,
    features: ["Thermal Printer", "Fast", "Reliable"],
    imageUrl: "/global/game.png",
  },
  {
    id: 35,
    name: "Pozone PFT4300 Fliptop Cash Drawer",
    category: "POS Printer",
    brand: "POZONE",
    price: 350,
    rating: 4,
    features: ["Flip Top Design", "Secure", "Easy Access"],
    imageUrl: "/global/game.png",
  },
  {
    id: 36,
    name: "Pozone PP610",
    category: "POS Printer",
    brand: "POZONE",
    price: 450,
    rating: 4,
    features: ["High Speed", "Reliable", "Compact"],
    imageUrl: "/global/game.png",
  },
  {
    id: 37,
    name: "RIO POS Printer RPP325 & RPP355",
    category: "POS Printer",
    brand: "RIO",
    price: 500,
    rating: 5,
    features: ["Dual Model", "Fast Printing", "Durable"],
    imageUrl: "/global/game.png",
  },
  {
    id: 38,
    name: "SEWOO LK-D30",
    category: "POS Printer",
    brand: "Sewoo",
    price: 420,
    rating: 4,
    features: ["Desktop Printer", "Reliable", "Easy Setup"],
    imageUrl: "/global/game.png",
  },
  {
    id: 39,
    name: "Sewoo SLK-TE213",
    category: "POS Printer",
    brand: "Sewoo",
    price: 380,
    rating: 4,
    features: ["Thermal Printer", "Compact", "Efficient"],
    imageUrl: "/global/game.png",
  },
  {
    id: 40,
    name: "Sewoo SLK",
    category: "POS Printer",
    brand: "Sewoo",
    price: 400,
    rating: 4,
    features: ["Standard Model", "Reliable", "Cost Effective"],
    imageUrl: "/global/game.png",
  },
  {
    id: 41,
    name: "Sewoo SLK-TS400",
    category: "POS Printer",
    brand: "Sewoo",
    price: 480,
    rating: 5,
    features: ["High Performance", "Fast", "Durable"],
    imageUrl: "/global/game.png",
  },
  {
    id: 42,
    name: "ZT231 RFID INDUSTRIAL PRINTER",
    category: "POS Printer",
    brand: "Zebra",
    price: 2500,
    rating: 5,
    features: ["RFID Enabled", "Industrial Grade", "High Volume"],
    imageUrl: "/global/game.png",
  },

  // Barcode Scanner
  {
    id: 43,
    name: "Datalogic GRYPHON I GPS4400 2D",
    category: "Barcode Scanner",
    brand: "Datalogic",
    price: 800,
    rating: 5,
    features: ["2D Scanning", "High Performance", "Ergonomic"],
    imageUrl: "/global/game.png",
  },
  {
    id: 44,
    name: "Datalogic MAGELLAN 3200VSI",
    category: "Barcode Scanner",
    brand: "Datalogic",
    price: 1200,
    rating: 5,
    features: ["Presentation Scanner", "Multi-plane", "Fast"],
    imageUrl: "/global/game.png",
  },
  {
    id: 45,
    name: "Datalogic Quickscan I LITE QW2400",
    category: "Barcode Scanner",
    brand: "Datalogic",
    price: 600,
    rating: 4,
    features: ["Lightweight", "Affordable", "Reliable"],
    imageUrl: "/global/game.png",
  },
  {
    id: 46,
    name: "Datalogic Quickscan QD2400",
    category: "Barcode Scanner",
    brand: "Datalogic",
    price: 700,
    rating: 5,
    features: ["Quick Scanning", "Durable", "Efficient"],
    imageUrl: "/global/game.png",
  },
  {
    id: 47,
    name: "Zebra LS2208",
    category: "Barcode Scanner",
    brand: "Zebra",
    price: 500,
    rating: 4,
    features: ["Entry Level", "Reliable", "Easy to Use"],
    imageUrl: "/global/game.png",
  },

  // PDT (Portable Data Terminals)
  {
    id: 48,
    name: "EC30 Enterprise Companion",
    category: "PDT",
    brand: "Zebra",
    price: 1500,
    rating: 5,
    features: ["Enterprise Grade", "Rugged", "Android"],
    imageUrl: "/global/game.png",
  },
  {
    id: 49,
    name: "EC50 and EC55 Enterprise Mobile Computers",
    category: "PDT",
    brand: "Zebra",
    price: 1800,
    rating: 5,
    features: ["Mobile Computing", "Durable", "High Performance"],
    imageUrl: "/global/game.png",
  },
  {
    id: 50,
    name: "M3 OX10",
    category: "PDT",
    brand: "M3",
    price: 1600,
    rating: 4,
    features: ["Rugged Design", "Long Battery", "Reliable"],
    imageUrl: "/global/game.png",
  },
  {
    id: 51,
    name: "MC2200 and MC2700 Mobile Computer",
    category: "PDT",
    brand: "Zebra",
    price: 1400,
    rating: 4,
    features: ["Affordable", "Reliable", "Easy to Use"],
    imageUrl: "/global/game.png",
  },
  {
    id: 52,
    name: "MC3300 Series Mobile Computer",
    category: "PDT",
    brand: "Zebra",
    price: 2000,
    rating: 5,
    features: ["Professional Grade", "Versatile", "Powerful"],
    imageUrl: "/global/game.png",
  },
  {
    id: 53,
    name: "PM550",
    category: "PDT",
    brand: "PM",
    price: 1300,
    rating: 4,
    features: ["Compact", "Efficient", "Durable"],
    imageUrl: "/global/game.png",
  },
  {
    id: 54,
    name: "PM85",
    category: "PDT",
    brand: "PM",
    price: 1100,
    rating: 4,
    features: ["Budget Friendly", "Reliable", "Portable"],
    imageUrl: "/global/game.png",
  },
  {
    id: 55,
    name: "PM850",
    category: "PDT",
    brand: "PM",
    price: 1250,
    rating: 4,
    features: ["Enhanced Model", "Fast", "User Friendly"],
    imageUrl: "/global/game.png",
  },

  // EAS Solutions
  {
    id: 56,
    name: "Sensormatic Concealed Door or Wall System",
    category: "EAS Solutions",
    brand: "Sensormatic",
    price: 3500,
    rating: 5,
    features: ["Concealed Design", "Security", "Reliable Detection"],
    imageUrl: "/global/game.png",
  },
  {
    id: 57,
    name: "Sensormatic Synergy Series",
    category: "EAS Solutions",
    brand: "Sensormatic",
    price: 4000,
    rating: 5,
    features: ["Advanced Detection", "Modern Design", "High Performance"],
    imageUrl: "/global/game.png",
  },
  {
    id: 58,
    name: "Sensormatic Ultra Series",
    category: "EAS Solutions",
    brand: "Sensormatic",
    price: 4500,
    rating: 5,
    features: ["Ultra Detection", "Premium", "Comprehensive Security"],
    imageUrl: "/global/game.png",
  },

  // Mobile Printer
  {
    id: 59,
    name: "RIO RMP-130 Mobile Printer (Wifi & Bluetooth)",
    category: "Mobile Printer",
    brand: "RIO",
    price: 650,
    rating: 4,
    features: ["Wifi & Bluetooth", "Portable", "Fast Printing"],
    imageUrl: "/global/game.png",
  },
  {
    id: 60,
    name: "RIO RMP-140 Mobile Printer (Wifi & Bluetooth)",
    category: "Mobile Printer",
    brand: "RIO",
    price: 700,
    rating: 4,
    features: ["Enhanced Connectivity", "Compact", "Reliable"],
    imageUrl: "/global/game.png",
  },
  {
    id: 61,
    name: "Sewoo LK-P20II",
    category: "Mobile Printer",
    brand: "Sewoo",
    price: 550,
    rating: 4,
    features: ["Compact Design", "Portable", "Easy to Use"],
    imageUrl: "/global/game.png",
  },
  {
    id: 62,
    name: "Sewoo LK-P25",
    category: "Mobile Printer",
    brand: "Sewoo",
    price: 600,
    rating: 4,
    features: ["Enhanced Model", "Fast", "Durable"],
    imageUrl: "/global/game.png",
  },
  {
    id: 63,
    name: "Sewoo LK-P30II",
    category: "Mobile Printer",
    brand: "Sewoo",
    price: 650,
    rating: 5,
    features: ["High Performance", "Reliable", "Portable"],
    imageUrl: "/global/game.png",
  },
  {
    id: 64,
    name: "Sewoo LK-P41",
    category: "Mobile Printer",
    brand: "Sewoo",
    price: 700,
    rating: 5,
    features: ["Professional Grade", "Fast Printing", "Durable"],
    imageUrl: "/global/game.png",
  },
  {
    id: 65,
    name: "ZD200 Series Desktop Printer",
    category: "Mobile Printer",
    brand: "Zebra",
    price: 800,
    rating: 4,
    features: ["Desktop/Mobile", "Versatile", "Reliable"],
    imageUrl: "/global/game.png",
  },
  {
    id: 66,
    name: "ZD400 Series 4-Inch Desktop Printers",
    category: "Mobile Printer",
    brand: "Zebra",
    price: 900,
    rating: 5,
    features: ["4-Inch Width", "High Quality", "Fast"],
    imageUrl: "/global/game.png",
  },
];

const CategorySection = () => {
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale();
  const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null);

  const { data: foodsData, isLoading } = useGetAllFoodsQuery({}) as {
    data: ApiResponse | undefined;
    isLoading: boolean;
  };

  const handleCategoryClick = (groupId: number) => {
    setSelectedGroupId(selectedGroupId === groupId ? null : groupId);
  };

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  const filteredItems = selectedGroupId
    ? foodsData?.items.filter(
        (item) => item.purchase_group_id === selectedGroupId
      ) || []
    : foodsData?.items || [];

  const selectedGroup = selectedGroupId
    ? foodsData?.group.find((g) => g.id === selectedGroupId)
    : null;

  const getDisplayName = (name: string, arabicName?: string) => {
    if (locale === "ar" && arabicName) {
      return arabicName;
    }
    return name;
  };

  const formatPrice = (price: number) => {
    const formatted = Math.round(price);
    return locale === "ar" ? toArabicNumerals(formatted) : formatted;
  };

  const hasOffer = (item) => {
    return parseFloat(item.offer_price) > 0;
  };

  const getDiscountPercentage = (item) => {
    if (!hasOffer(item)) return 0;
    const originalPrice = item.price;
    const offerPrice = parseFloat(item.offer_price);
    return Math.round(((originalPrice - offerPrice) / originalPrice) * 100);
  };

  if (isLoading) {
    return <Loading />;
  }

  const avarage_rating = 5;

  const categories = [
    {
      id: 1,
      name: "POS Systems",
      arabic_name: "POS Systems",
      image_url: "/global/game.png",
    },
    {
      id: 2,
      name: "POS Peripherals",
      arabic_name: "POS Peripherals",
      image_url: "/global/game.png",
    },
    {
      id: 3,
      name: "Mobile Printer",
      arabic_name: "Mobile Printer",
      image_url: "/global/game.png",
    },
    {
      id: 4,
      name: "Mobile Printer",
      arabic_name: "Mobile Printer",
      image_url: "/global/game.png",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-30 py-8">
      {/* Title at top left */}
      <div className="mb-6 lg:mb-8">
        <h2 className="text-5xl sm:text-5xl font-bold text-sky-500 text-center text-shadow-md">
          Shop by Category
        </h2>
        <p className="text-sm sm:text-base text-gray-600 text-center mt-2">
          Discover products by your favorite categories
        </p>
      </div>

      <section className="flex flex-col lg:flex-row gap-4 lg:gap-6 xl:gap-8 items-start">
        {/* Left Panel - Categories */}
        <div className="w-full lg:w-72 xl:w-80 flex-shrink-0">
          <div className="bg-gradient-to-br from-sky-500 via-sky-600 to-blue-600 rounded-3xl shadow-2xl p-4 sm:p-6 overflow-hidden relative h-[500px] sm:h-[600px] flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4 sm:mb-6 flex-shrink-0">
                <div className="p-2 bg-white/20 rounded-full">
                  <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-lg text-shadow-md sm:text-xl font-bold">
                    Menu Categories
                  </h3>
                  <p className="text-blue-200 text-xs sm:text-sm">
                    Explore our cuisines
                  </p>
                </div>
              </div>

              <div
                className="flex-1 overflow-y-auto pr-1 sm:pr-2 mb-4 sm:mb-6"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(255,255,255,0.3) transparent",
                }}
              >
                <div className="space-y-2 sm:space-y-3">
                  <button
                    onClick={() => setSelectedGroupId(null)}
                    className={`w-full text-left p-3 sm:p-4 rounded-xl transition-all duration-300 group cursor-pointer ${
                      selectedGroupId === null
                        ? "bg-white/20 backdrop-blur-sm border border-white/30"
                        : "hover:bg-white/10 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-white text-sm sm:text-base font-medium">
                          All Items
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-200 text-xs sm:text-sm">
                          {locale === "ar"
                            ? toArabicNumerals(foodsData?.items.length || 0)
                            : foodsData?.items.length || 0}
                        </span>
                        <ChevronRight
                          className={`w-3 h-3 sm:w-4 sm:h-4 text-blue-200 transition-transform duration-300 ${
                            selectedGroupId === null
                              ? "rotate-90"
                              : "group-hover:translate-x-1"
                          }`}
                        />
                      </div>
                    </div>
                  </button>

                  {categories.map((group) => {
                    const itemsInGroup = products.filter(
                      (item) => item.category === group.name
                    ).length;

                    return (
                      <button
                        key={group.id}
                        onClick={() => handleCategoryClick(group.id)}
                        className={`w-full text-left p-3 sm:p-4 rounded-xl transition-all duration-300 group cursor-pointer ${
                          selectedGroupId === group.id
                            ? "bg-white/20 backdrop-blur-sm border border-white/30"
                            : "hover:bg-white/10 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 sm:gap-3">
                            {group.image_url && (
                              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-white/20 flex-shrink-0">
                                <Image
                                  src={group.image_url}
                                  alt={getDisplayName(
                                    group.name,
                                    group.arabic_name
                                  )}
                                  width={32}
                                  height={32}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            <span className="text-white text-sm sm:text-base font-medium truncate">
                              {getDisplayName(group.name, group.arabic_name)}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className="text-blue-200 text-xs sm:text-sm">
                              {locale === "ar"
                                ? toArabicNumerals(itemsInGroup)
                                : itemsInGroup}
                            </span>
                            <ChevronRight
                              className={`w-3 h-3 sm:w-4 sm:h-4 text-blue-200 transition-transform duration-300 ${
                                selectedGroupId === group.id
                                  ? "rotate-90"
                                  : "group-hover:translate-x-1"
                              }`}
                            />
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <Link href="/products" className="block w-full flex-shrink-0">
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-3 sm:p-4 text-center cursor-pointer hover:bg-white/30 transition-all duration-300">
                  <span className="text-white font-bold text-base sm:text-lg">
                    VIEW ALL CATEGORIES
                  </span>
                  <div className="text-blue-200 text-xs sm:text-sm mt-1">
                    Browse complete menu
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Panel - Products */}
        <div className="flex-1 w-full min-w-0">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-4 sm:p-6 h-[500px] sm:h-[600px] flex flex-col">
            <div className="mb-4 sm:mb-6 flex-shrink-0">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {selectedGroup
                  ? getDisplayName(
                      selectedGroup.name,
                      selectedGroup.arabic_name
                    )
                  : "Featured Items"}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {locale === "ar"
                  ? `${toArabicNumerals(
                      filteredItems.length
                    )} ${"items available"}`
                  : `${filteredItems.length} ${"items available"}`}
              </p>
            </div>

            <div
              className="flex-1 overflow-y-auto pr-1 sm:pr-2"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#d1d5db transparent",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-2 gap-3 sm:gap-4 pb-4">
                {products.map((item) => {
                  const discount = getDiscountPercentage(item);

                  return (
                    <div
                      key={item.id}
                      onClick={() => handleProductClick(item.id)}
                      className="group bg-gray-50 hover:bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 cursor-pointer overflow-hidden relative"
                    >
                      <div className="p-3 sm:p-4 flex gap-3">
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                          <div className="w-full h-full rounded-xl overflow-hidden bg-gray-100 relative">
                            <Image
                              src={item.imageUrl || "/global/game.png"}
                              alt={getDisplayName(item.name, "")}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute top-1 left-1 flex flex-col gap-1">
                              {hasOffer(item) && (
                                <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                                  -{discount}%
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          <div>
                            <h4 className="text-gray-900 font-semibold text-xs sm:text-sm line-clamp-2 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors duration-300">
                              {getDisplayName(item.name, "")}
                            </h4>

                            <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                              <div className="flex gap-0.5 sm:gap-1">
                                {[...Array(5)].map((_, starIdx) => (
                                  <AiFillStar
                                    key={starIdx}
                                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${
                                      starIdx < 5
                                        ? "text-amber-400"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              {avarage_rating > 0 && (
                                <span className="text-gray-500 text-xs font-medium">
                                  (
                                  {locale === "ar"
                                    ? toArabicNumerals(avarage_rating)
                                    : avarage_rating}
                                  .0)
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="text-blue-600 text-xs sm:text-sm font-bold">
                              <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                                {hasOffer(item) ? (
                                  <>
                                    <span className="text-red-600">
                                      {t("Cart.Currency")}{" "}
                                      {/* {formatPrice(
                                        parseFloat(item.offer_price)
                                      )} */}
                                    </span>
                                    <span className="text-gray-400 line-through text-xs">
                                      {formatPrice(item.price)}
                                    </span>
                                  </>
                                ) : (
                                  <span>
                                    {t("Cart.Currency")}{" "}
                                    {formatPrice(item.final_price)}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="text-blue-600 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0">
                              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-0 bg-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
                    </div>
                  );
                })}
              </div>

              {filteredItems.length === 0 && (
                <div className="text-center py-12 h-full flex items-center justify-center flex-col">
                  <div className="text-gray-400 text-base sm:text-lg mb-2">
                    {t("ShopByCategory.noProducts") || "No items found"}
                  </div>
                  <p className="text-sm sm:text-base text-gray-500">
                    {t("ShopByCategory.tryDifferentCategory") ||
                      "Try selecting a different category"}
                  </p>
                </div>
              )}
            </div>

            {/* Centered, rounded-full, w-64 "View All" button */}
            {filteredItems.length > 0 && (
              <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-gray-200 flex-shrink-0 flex justify-center">
                <Link
                  href={`/products${
                    selectedGroupId ? `?group=${selectedGroupId}` : ""
                  }`}
                  className="inline-flex items-center justify-center gap-2 w-64 py-3 bg-gradient-to-br from-sky-500 via-sky-600 to-blue-600 text-white rounded-full text-sm sm:text-base font-semibold hover:from-sky-600 hover:via-sky-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View All
                  {selectedGroup
                    ? " " +
                      getDisplayName(
                        selectedGroup.name,
                        selectedGroup.arabic_name
                      )
                    : " Items"}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategorySection;
