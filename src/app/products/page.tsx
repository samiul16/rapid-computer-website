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
    image: "/products/POZONE -T80 PRICE CHECKER.png",
  },
  {
    id: 21,
    title: "POZONE BS-330 BARCODE SCANNER",
    category: "POS Peripherals",
    brand: "POZONE",
    price: 350,
    rating: 4,
    features: ["Fast Scanning", "Reliable", "Ergonomic"],
    image: "/products/POZONE BS-330 BARCODE SCANNER.png",
  },
  {
    id: 22,
    title: "POZONE BS-520 2D DESKTOP BARCODE SCANNER",
    category: "POS Peripherals",
    brand: "POZONE",
    price: 450,
    rating: 4,
    features: ["2D Scanning", "Desktop Mount", "High Speed"],
    image: "/products/POZONE BS-520 2D DESKTOP BARCODE SCANNER.png",
  },
  {
    id: 23,
    title: "POZONE MP-310B MOBILE PRINTER",
    category: "POS Peripherals",
    brand: "POZONE",
    price: 600,
    rating: 4,
    features: ["Portable", "Bluetooth", "Compact"],
    image: "/products/POZONE MP-310B MOBILE PRINTER.png",
  },
  {
    id: 24,
    title: "POZONE MP-410B MOBILE PRINTER",
    category: "POS Peripherals",
    brand: "POZONE",
    price: 700,
    rating: 4,
    features: ["Enhanced Mobile Printing", "Fast", "Reliable"],
    image: "/products/POZONE MP-410B MOBILE PRINTER.png",
  },
  {
    id: 25,
    title: "RIO Heavy Duty Cash Drawer RSC-420",
    category: "POS Peripherals",
    brand: "RIO",
    price: 500,
    rating: 5,
    features: ["Heavy Duty", "Secure", "Durable"],
    image: "/products/RIO ROLLER CASH DRAWER RSC200.png",
  },
  {
    id: 26,
    title: "RIO Customer Display RPD 210",
    category: "POS Peripherals",
    brand: "RIO",
    price: 400,
    rating: 4,
    features: ["Customer Facing", "Clear Display", "Easy Integration"],
    image: "/products/RIO Customer Display RPD 210.png",
  },
  {
    id: 27,
    title: "RIO ROLLER CASH DRAWER RSC200",
    category: "POS Peripherals",
    brand: "RIO",
    price: 450,
    rating: 4,
    features: ["Roller Design", "Smooth Operation", "Reliable"],
    image: "/products/RIO ROLLER CASH DRAWER RSC200.png",
  },
  {
    id: 28,
    title: "SUNMI 80mm Kitchen Cloud Printer",
    category: "POS Peripherals",
    brand: "SUNMI",
    price: 550,
    rating: 5,
    features: ["Cloud Enabled", "Kitchen Use", "Fast Printing"],
    image: "/products/SUNMI 80mm Kitchen Cloud Printer.png",
  },
  {
    id: 29,
    title: "SUNMI L2s",
    category: "POS Peripherals",
    brand: "SUNMI",
    price: 1200,
    rating: 5,
    features: ["Handheld", "Scanner", "Multi-functional"],
    image: "/products/SUNMI L2s.png",
  },
  {
    id: 30,
    title: "SUNMI M2 MAX",
    category: "POS Peripherals",
    brand: "SUNMI",
    price: 1400,
    rating: 5,
    features: ["Large Screen", "Powerful", "Versatile"],
    image: "/products/SUNMI M2 MAX.png",
  },
  {
    id: 31,
    title: "SUNMI V2 PRO",
    category: "POS Peripherals",
    brand: "SUNMI",
    price: 1100,
    rating: 5,
    features: ["Professional Grade", "Handheld POS", "Reliable"],
    image: "/products/SUNMI V2 PRO.png",
  },
  {
    id: 32,
    title: "SUNMI V2s",
    category: "POS Peripherals",
    brand: "SUNMI",
    price: 900,
    rating: 4,
    features: ["Compact", "Efficient", "User Friendly"],
    image: "/products/SUNMI V2s.png",
  },
  {
    id: 33,
    title: "SUNMI V2s PLUS",
    category: "POS Peripherals",
    brand: "SUNMI",
    price: 1000,
    rating: 5,
    features: ["Enhanced Features", "Fast", "Reliable"],
    image: "/products/SUNMI V2s PLUS.png",
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
    image: "/products/POZONE P302.png",
  },
  {
    id: 35,
    title: "Pozone PFT4300 Fliptop Cash Drawer",
    category: "POS Printer",
    brand: "POZONE",
    price: 350,
    rating: 4,
    features: ["Flip Top Design", "Secure", "Easy Access"],
    image: "/products/ozone PFT4300 Fliptop Cash Drawer.png",
  },
  {
    id: 36,
    title: "Pozone PP610",
    category: "POS Printer",
    brand: "POZONE",
    price: 450,
    rating: 4,
    features: ["High Speed", "Reliable", "Compact"],
    image: "/products/POZONE PP610.png",
  },
  {
    id: 37,
    title: "RIO POS Printer RPP325 & RPP355",
    category: "POS Printer",
    brand: "RIO",
    price: 500,
    rating: 5,
    features: ["Dual Model", "Fast Printing", "Durable"],
    image: "/products/RIO POS Printer RPP325 & RPP355.png",
  },
  {
    id: 38,
    title: "SEWOO LK-D30",
    category: "POS Printer",
    brand: "Sewoo",
    price: 420,
    rating: 4,
    features: ["Desktop Printer", "Reliable", "Easy Setup"],
    image: "/products/SEWOO LK-D30.png",
  },
  {
    id: 39,
    title: "Sewoo SLK-TE213",
    category: "POS Printer",
    brand: "Sewoo",
    price: 380,
    rating: 4,
    features: ["Thermal Printer", "Compact", "Efficient"],
    image: "/products/SEWOO SLK-TE213.png",
  },
  {
    id: 40,
    title: "Sewoo SLK",
    category: "POS Printer",
    brand: "Sewoo",
    price: 400,
    rating: 4,
    features: ["Standard Model", "Reliable", "Cost Effective"],
    image: "/products/SEWOO SLK.png",
  },
  {
    id: 41,
    title: "Sewoo SLK-TS400",
    category: "POS Printer",
    brand: "Sewoo",
    price: 480,
    rating: 5,
    features: ["High Performance", "Fast", "Durable"],
    image: "/products/SEWOO SLK-TS400.png",
  },
  {
    id: 42,
    title: "ZT231 RFID INDUSTRIAL PRINTER",
    category: "POS Printer",
    brand: "Zebra",
    price: 2500,
    rating: 5,
    features: ["RFID Enabled", "Industrial Grade", "High Volume"],
    image: "/products/ZT231 RFID INDUSTRIAL PRINTER.png",
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
    image: "/products/Datalogic GRYPHON I GPS4400 2D.jpg",
  },
  {
    id: 44,
    title: "Datalogic MAGELLAN 3200VSI",
    category: "Barcode Scanner",
    brand: "Datalogic",
    price: 1200,
    rating: 5,
    features: ["Presentation Scanner", "Multi-plane", "Fast"],
    image: "/products/Datalogic MAGELLAN 3200VSI.png",
  },
  {
    id: 45,
    title: "Datalogic Quickscan I LITE QW2400",
    category: "Barcode Scanner",
    brand: "Datalogic",
    price: 600,
    rating: 4,
    features: ["Lightweight", "Affordable", "Reliable"],
    image: "/products/Datalogic Quickscan I LITE QW2400.png",
  },
  {
    id: 46,
    title: "Datalogic Quickscan QD2400",
    category: "Barcode Scanner",
    brand: "Datalogic",
    price: 700,
    rating: 5,
    features: ["Quick Scanning", "Durable", "Efficient"],
    image: "/products/Datalogic Quickscan QD2400.png",
  },
  {
    id: 47,
    title: "Zebra LS2208",
    category: "Barcode Scanner",
    brand: "Zebra",
    price: 500,
    rating: 4,
    features: ["Entry Level", "Reliable", "Easy to Use"],
    image: "/products/Zebra LS2208.png",
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
    image: "/products/EC30 Enterprise Companion.png",
  },
  {
    id: 49,
    title: "EC50 and EC55 Enterprise Mobile Computers",
    category: "PDT",
    brand: "Zebra",
    price: 1800,
    rating: 5,
    features: ["Mobile Computing", "Durable", "High Performance"],
    image: "/products/EC50 and EC55 Enterprise Mobile Computers.png",
  },
  {
    id: 50,
    title: "M3 OX10",
    category: "PDT",
    brand: "M3",
    price: 1600,
    rating: 4,
    features: ["Rugged Design", "Long Battery", "Reliable"],
    image: "/products/M3 OX10.png",
  },
  {
    id: 51,
    title: "MC2200 and MC2700 Mobile Computer",
    category: "PDT",
    brand: "Zebra",
    price: 1400,
    rating: 4,
    features: ["Affordable", "Reliable", "Easy to Use"],
    image: "/products/MC2200 and MC2700 Mobile Computers.png",
  },
  {
    id: 52,
    title: "MC3300 Series Mobile Computer",
    category: "PDT",
    brand: "Zebra",
    price: 2000,
    rating: 5,
    features: ["Professional Grade", "Versatile", "Powerful"],
    image: "/products/MC3300 Series Mobile Computer.png",
  },
  {
    id: 53,
    title: "PM550",
    category: "PDT",
    brand: "PM",
    price: 1300,
    rating: 4,
    features: ["Compact", "Efficient", "Durable"],
    image: "/products/PM550.png",
  },
  {
    id: 54,
    title: "PM85",
    category: "PDT",
    brand: "PM",
    price: 1100,
    rating: 4,
    features: ["Budget Friendly", "Reliable", "Portable"],
    image: "/products/PM85.png",
  },
  {
    id: 55,
    title: "PM550",
    category: "PDT",
    brand: "PM",
    price: 1250,
    rating: 4,
    features: ["Enhanced Model", "Fast", "User Friendly"],
    image: "/products/PM550.png",
  },

  // EAS Solutions
  {
    id: 56,
    title: "Sensormatic Ultra•Post EAS System",
    category: "EAS Solutions",
    brand: "Sensormatic",
    price: 3500,
    rating: 5,
    features: ["Concealed Design", "Security", "Reliable Detection"],
    image: "/products/Sensormatic Ultra•Post EAS System.png",
  },
  {
    id: 57,
    title: "Checkpoint Systems EAS Hard Tag",
    category: "EAS Solutions",
    brand: "Sensormatic",
    price: 4000,
    rating: 5,
    features: ["Advanced Detection", "Modern Design", "High Performance"],
    image: "/products/Checkpoint Systems EAS Hard Tag.png",
  },
  {
    id: 58,
    title: "Alio EAS Antenna System",
    category: "EAS Solutions",
    brand: "Sensormatic",
    price: 4500,
    rating: 5,
    features: ["Ultra Detection", "Premium", "Comprehensive Security"],
    image: "/products/Alio EAS Antenna System.png",
  },
  {
    id: 89,
    title: "Tyco Sensormatic AM 3.0",
    category: "EAS Solutions",
    brand: "Sensormatic",
    price: 4500,
    rating: 5,
    features: ["Ultra Detection", "Premium", "Comprehensive Security"],
    image: "/products/Tyco Sensormatic AM 3.0.png",
  },
  {
    id: 90,
    title: "Hikvision EAS Anti-Theft System",
    category: "EAS Solutions",
    brand: "Sensormatic",
    price: 4500,
    rating: 5,
    features: ["Ultra Detection", "Premium", "Comprehensive Security"],
    image: "/products/Hikvision EAS Anti-Theft System.png",
  },

  // Mobile Printer
  {
    id: 59,
    title: "Epson WorkForce WF-100",
    category: "Mobile Printer",
    brand: "Epson",
    price: 350,
    rating: 5,
    features: ["Portable", "Wireless Printing", "Compact Size"],
    image: "/products/Epson WorkForce WF-100.png",
  },
  {
    id: 60,
    title: "HP OfficeJet 200 Mobile Printer",
    category: "Mobile Printer",
    brand: "HP",
    price: 320,
    rating: 4,
    features: [
      "Mobile Printing",
      "Rechargeable Battery",
      "High Quality Output",
    ],
    image: "/products/HP OfficeJet 200 Mobile Printer.png",
  },
  {
    id: 61,
    title: "Canon PIXMA TR150",
    category: "Mobile Printer",
    brand: "Canon",
    price: 280,
    rating: 4,
    features: ["Wireless", "Portable Design", "Fast Printing"],
    image: "/products/Canon PIXMA TR150.png",
  },
  {
    id: 62,
    title: "Brother PocketJet PJ-773",
    category: "Mobile Printer",
    brand: "Brother",
    price: 420,
    rating: 5,
    features: ["Thermal Printing", "Ultra Portable", "Bluetooth Support"],
    image: "/products/Brother PocketJet PJ-773.png",
  },
  {
    id: 63,
    title: "Epson PictureMate PM-400",
    category: "Mobile Printer",
    brand: "Epson",
    price: 400,
    rating: 5,
    features: ["Photo Printing", "High Resolution", "Compact Size"],
    image: "/products/Epson PictureMate PM-400.png",
  },
  {
    id: 64,
    title: "Canon Selphy CP1300",
    category: "Mobile Printer",
    brand: "Canon",
    price: 150,
    rating: 4,
    features: ["Portable Photo Printer", "Wi-Fi Enabled", "Fast Drying Prints"],
    image: "/products/Canon Selphy CP1300.png",
  },
  {
    id: 65,
    title: "HP Tango X",
    category: "Mobile Printer",
    brand: "HP",
    price: 280,
    rating: 4,
    features: ["Smart Home Printer", "Voice-Control Ready", "Cloud Printing"],
    image: "/products/HP Tango X.png",
  },
  {
    id: 66,
    title: "Brother RuggedJet RJ-3050",
    category: "Mobile Printer",
    brand: "Brother",
    price: 500,
    rating: 5,
    features: ["Industrial Grade", "Fast Printing", "Durable Build"],
    image: "/products/Brother RuggedJet RJ-3050.png",
  },
  {
    id: 67,
    title: "Fujifilm Instax Mini Link",
    category: "Mobile Printer",
    brand: "Fujifilm",
    price: 120,
    rating: 4,
    features: ["Instant Photos", "Bluetooth", "Lightweight"],
    image: "/products/Fujifilm Instax Mini Link.png",
  },
  {
    id: 68,
    title: "Polaroid Hi-Print Pocket Printer",
    category: "Mobile Printer",
    brand: "Polaroid",
    price: 130,
    rating: 4,
    features: ["Pocket Size", "Color Printing", "Mobile Friendly"],
    image: "/products/Polaroid Hi-Print Pocket Printer.png",
  },

  // Desktop Computer
  {
    id: 67,
    title: "Dell OptiPlex 7090",
    category: "Desktop Computer",
    brand: "Dell",
    price: 950,
    rating: 5,
    features: ["Intel Core i7", "Compact Design", "Business Ready"],
    image: "/products/Dell OptiPlex 7090.png",
  },
  {
    id: 68,
    title: "HP EliteDesk 800 G6",
    category: "Desktop Computer",
    brand: "HP",
    price: 980,
    rating: 5,
    features: ["High Performance", "Security Enhanced", "Durable Build"],
    image: "/products/HP EliteDesk 800 G6.png",
  },
  {
    id: 69,
    title: "Lenovo ThinkCentre M90t",
    category: "Desktop Computer",
    brand: "Lenovo",
    price: 920,
    rating: 4,
    features: ["Powerful Processing", "Tool-less Design", "Enterprise Ready"],
    image: "/products/Lenovo ThinkCentre M90t.png",
  },
  {
    id: 70,
    title: "Apple iMac 24-inch",
    category: "Desktop Computer",
    brand: "Apple",
    price: 1500,
    rating: 5,
    features: ["M1 Chip", "4.5K Retina Display", "Ultra Slim"],
    image: "/products/Apple iMac 24-inch.png",
  },
  {
    id: 71,
    title: "Asus ROG Strix G15 Gaming Desktop",
    category: "Desktop Computer",
    brand: "Asus",
    price: 1800,
    rating: 5,
    features: ["RTX Graphics", "RGB Lighting", "High FPS Gaming"],
    image: "/products/Asus ROG Strix G15 Gaming Desktop.png",
  },
  {
    id: 72,
    title: "Acer Aspire TC-895",
    category: "Desktop Computer",
    brand: "Acer",
    price: 650,
    rating: 4,
    features: ["Everyday Performance", "Compact Tower", "Affordable"],
    image: "/products/Acer Aspire TC-895.png",
  },
  {
    id: 73,
    title: "MSI MEG Trident X",
    category: "Desktop Computer",
    brand: "MSI",
    price: 2100,
    rating: 5,
    features: ["Premium Gaming", "Slim Case", "RTX Graphics"],
    image: "/products/MSI MEG Trident X.png",
  },
  {
    id: 74,
    title: "Dell XPS Desktop 8950",
    category: "Desktop Computer",
    brand: "Dell",
    price: 1600,
    rating: 5,
    features: ["High-End Performance", "Advanced Cooling", "Premium Build"],
    image: "/products/Dell XPS Desktop 8950.png",
  },
  {
    id: 75,
    title: "HP Pavilion Gaming Desktop",
    category: "Desktop Computer",
    brand: "HP",
    price: 1200,
    rating: 4,
    features: ["NVIDIA Graphics", "RGB Case", "Affordable Gaming"],
    image: "/products/HP Pavilion Gaming Desktop.png",
  },
  {
    id: 76,
    title: "Lenovo Legion T5",
    category: "Desktop Computer",
    brand: "Lenovo",
    price: 1400,
    rating: 5,
    features: ["AMD Ryzen Processor", "RTX GPU", "High Airflow Case"],
    image: "/products/Lenovo Legion T5.png",
  },

  {
    id: 77,
    title: "Logitech K380",
    category: "Keyboard",
    brand: "Logitech",
    price: 40,
    rating: 4,
    features: ["Compact Design", "Multi-Device Support", "Wireless"],
    image: "/products/Logitech K380.png",
  },
  {
    id: 78,
    title: "Logitech MK270 Wireless Combo",
    category: "Keyboard",
    brand: "Logitech",
    price: 45,
    rating: 4,
    features: ["Keyboard-Mouse Combo", "Long Battery Life", "Wireless"],
    image: "/products/Logitech MK270 Wireless Combo.png",
  },
  {
    id: 79,
    title: "HP KM300F",
    category: "Keyboard",
    brand: "HP",
    price: 30,
    rating: 4,
    features: ["RGB Backlit", "Gaming Keyboard", "Durable Build"],
    image: "/products/HP KM300F.png",
  },
  {
    id: 80,
    title: "Dell KB216",
    category: "Keyboard",
    brand: "Dell",
    price: 20,
    rating: 4,
    features: ["Wired Keyboard", "Slim Profile", "Quiet Keys"],
    image: "/products/Dell KB216.png",
  },
  {
    id: 81,
    title: "Asus TUF Gaming K1",
    category: "Keyboard",
    brand: "Asus",
    price: 60,
    rating: 5,
    features: ["Gaming Keyboard", "RGB Lighting", "Spill Resistant"],
    image: "/products/Asus TUF Gaming K1.png",
  },
  {
    id: 82,
    title: "Razer Cynosa Lite",
    category: "Keyboard",
    brand: "Razer",
    price: 50,
    rating: 4,
    features: ["Soft Cushioned Keys", "RGB", "Gaming"],
    image: "/products/Razer Cynosa Lite.png",
  },
  {
    id: 83,
    title: "Corsair K55 RGB",
    category: "Keyboard",
    brand: "Corsair",
    price: 55,
    rating: 5,
    features: ["RGB Lighting", "Macro Keys", "Quiet Keys"],
    image: "/products/Corsair K55 RGB.png",
  },
  {
    id: 84,
    title: "Redragon K552 Kumara",
    category: "Keyboard",
    brand: "Redragon",
    price: 45,
    rating: 5,
    features: ["Mechanical Keyboard", "Compact Size", "Durable"],
    image: "/products/Redragon K552 Kumara.png",
  },
  {
    id: 85,
    title: "Microsoft Wired Keyboard 600",
    category: "Keyboard",
    brand: "Microsoft",
    price: 25,
    rating: 4,
    features: ["Quiet-Touch Keys", "Spill Resistant", "Plug-and-Play"],
    image: "/products/Microsoft Wired Keyboard 600.png",
  },
  {
    id: 86,
    title: "A4Tech KRS-85",
    category: "Keyboard",
    brand: "A4Tech",
    price: 15,
    rating: 4,
    features: ["Wired Keyboard", "Laser Engraved Keys", "Durable"],
    image: "/products/A4Tech KRS-85.png",
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
