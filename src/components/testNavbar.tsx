// "use client";
// import { ChevronDown } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState, useEffect, useRef } from "react";
// import { usePathname } from "next/navigation";
// import ExpandableSearchBar from "./Common/ExpandableSearchBar";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
//   const menuRef = useRef<HTMLDivElement>(null);
//   const langRef = useRef<HTMLDivElement>(null);
//   const pathname = usePathname();
//   const isHomePage = pathname === "/";

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setIsScrolled(scrollTop > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Handle escape key and outside click
//   useEffect(() => {
//     const handleEscapeKey = (event: KeyboardEvent) => {
//       if (event.key === "Escape" && isMobileMenuOpen) {
//         setIsMobileMenuOpen(false);
//       }
//       if (event.key === "Escape" && isLangDropdownOpen) {
//         setIsLangDropdownOpen(false);
//       }
//     };

//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         isMobileMenuOpen &&
//         menuRef.current &&
//         !menuRef.current.contains(event.target as Node)
//       ) {
//         setIsMobileMenuOpen(false);
//       }
//       if (
//         isLangDropdownOpen &&
//         langRef.current &&
//         !langRef.current.contains(event.target as Node)
//       ) {
//         setIsLangDropdownOpen(false);
//       }
//     };

//     if (isMobileMenuOpen) {
//       document.addEventListener("keydown", handleEscapeKey);
//       document.addEventListener("mousedown", handleClickOutside);
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }

//     if (isLangDropdownOpen) {
//       document.addEventListener("keydown", handleEscapeKey);
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("keydown", handleEscapeKey);
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.body.style.overflow = "unset";
//     };
//   }, [isMobileMenuOpen, isLangDropdownOpen]);

//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768 && isMobileMenuOpen) {
//         setIsMobileMenuOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [isMobileMenuOpen]);

//   // Determine navbar background and text colors - same for all pages
//   const getNavbarStyles = () => {
//     return {
//       navBg: isScrolled ? "bg-black/20 backdrop-blur-md" : "bg-transparent",
//       textColor: "text-white",
//       hoverColor: "hover:text-red-500",
//       activeColor: "text-red-500 font-semibold",
//     };
//   };

//   const styles = getNavbarStyles();

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 transition-all duration-300 py-3 ${styles.navBg} hover:bg-white group`}
//       style={{ zIndex: 9998 }}
//     >
//       <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-14 pt-2">
//         <div className="flex items-center justify-between h-16 sm:h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/">
//               <Image
//                 src="/logo.svg"
//                 alt="Company Logo"
//                 width={160}
//                 height={60}
//                 className="h-[70px] w-auto"
//               />
//             </Link>
//           </div>

//           {/* Navigation Links */}
//           <div className="hidden md:block">
//             <div className="flex gap-6 lg:gap-10">
//               {/* <Link
//                 href="/"
//                 className={`${
//                   pathname === "/" ? styles.activeColor : styles.textColor
//                 } ${
//                   styles.hoverColor
//                 } font-medium transition-colors text-lg font-anek`}
//               >
//                 Home
//               </Link> */}

//               <Link
//                 href="/cars"
//                 className={`${
//                   pathname === "/cars" ? styles.activeColor : styles.textColor
//                 } ${
//                   styles.hoverColor
//                 } group-hover:text-red-700 font-semibold transition-colors text-lg font-anek uppercase`}
//               >
//                 Our Fleet
//               </Link>
//               <Link
//                 href="/car-types"
//                 className={`${
//                   pathname === "/car-types"
//                     ? styles.activeColor
//                     : styles.textColor
//                 } ${
//                   styles.hoverColor
//                 } group-hover:text-red-700 font-semibold transition-colors text-lg font-anek uppercase`}
//               >
//                 Car Types
//               </Link>
//               <Link
//                 href="/about-us"
//                 className={`${
//                   pathname === "/about-us"
//                     ? styles.activeColor
//                     : styles.textColor
//                 } ${
//                   styles.hoverColor
//                 } group-hover:text-red-700 font-semibold transition-colors text-lg font-anek uppercase`}
//               >
//                 About
//               </Link>
//               <Link
//                 href="/blogs"
//                 className={`${
//                   pathname === "/blogs" ? styles.activeColor : styles.textColor
//                 } ${
//                   styles.hoverColor
//                 } group-hover:text-red-700 font-semibold transition-colors text-lg font-anek uppercase`}
//               >
//                 Blog
//               </Link>
//               <Link
//                 href="/career"
//                 className={`${
//                   pathname === "/career" ? styles.activeColor : styles.textColor
//                 } ${
//                   styles.hoverColor
//                 } group-hover:text-red-700 font-semibold transition-colors text-lg font-anek uppercase`}
//               >
//                 Career
//               </Link>
//               <Link
//                 href="/contact"
//                 className={`${
//                   pathname === "/contact"
//                     ? styles.activeColor
//                     : styles.textColor
//                 } ${
//                   styles.hoverColor
//                 } group-hover:text-red-700 font-semibold transition-colors text-lg font-anek uppercase`}
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>

//           {/* Right Side Controls */}
//           <div className="hidden md:flex items-center space-x-6">
//             {/* Search Bar for Desktop */}
//             <ExpandableSearchBar
//               onSearch={(query) => {
//                 console.log("Search query:", query);
//                 // Handle search functionality here
//               }}
//               placeholder="Search cars, locations..."
//               suggestions={[
//                 "BMW X5",
//                 "Mercedes C-Class",
//                 "Audi A4",
//                 "Toyota Camry",
//                 "Honda Accord",
//                 "Luxury Cars",
//                 "Economy Cars",
//                 "SUVs",
//                 "Dubai",
//                 "Abu Dhabi",
//                 "Sharjah",
//               ]}
//               iconColor={styles.textColor}
//               hoverIconColor="group-hover:text-red-500"
//             />

//             {/* Language Selector with Flag */}
//             {/* <div className="relative" ref={langRef}>
//               <button
//                 onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
//                 className="flex items-center space-x-2 rounded-full px-3 py-2 hover:bg-white/10 transition-colors cursor-pointer"
//               >
//                 <Image
//                   src="/b.svg"
//                   alt="English"
//                   width={24}
//                   height={16}
//                   className="rounded-sm"
//                 />
//                 <ChevronDown
//                   className={`${
//                     styles.textColor
//                   } group-hover:text-red-500 w-5 h-5 transition-transform ${
//                     isLangDropdownOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {isLangDropdownOpen && (
//                 <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
//                   <button
//                     onClick={() => {
//                       setIsLangDropdownOpen(false);
//                       // Handle language change to English
//                     }}
//                     className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 transition-colors text-left cursor-pointer"
//                   >
//                     <Image
//                       src="/b.svg"
//                       alt="English"
//                       width={24}
//                       height={16}
//                       className="rounded-sm"
//                     />
//                     <span className="text-gray-800 text-sm font-medium">
//                       English
//                     </span>
//                   </button>
//                   <button
//                     onClick={() => {
//                       setIsLangDropdownOpen(false);
//                       // Handle language change to Arabic
//                     }}
//                     className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 transition-colors text-left cursor-pointer"
//                   >
//                     <Image
//                       src="https://flagcdn.com/w40/sa.png"
//                       alt="Arabic"
//                       width={24}
//                       height={16}
//                       className="rounded-sm"
//                     />
//                     <span className="text-gray-800 text-sm font-medium">
//                       العربية
//                     </span>
//                   </button>
//                 </div>
//               )}
//             </div> */}

//             {/* CTA Button */}
//             <Link
//               href="/book-now"
//               className="px-6 py-2 bg-red-700 hover:bg-red-600 rounded-[30px] transition-colors shadow-lg"
//             >
//               <span className="text-indigo-50 text-base font-semibold">
//                 Book Now
//               </span>
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="relative w-12 h-12 flex items-center justify-center cursor-pointer rounded-lg border-2 border-red-700 bg-red-700/10 hover:bg-red-700/20 transition-colors"
//               aria-expanded={isMobileMenuOpen}
//               aria-label="Toggle mobile menu"
//             >
//               <div className="w-6 h-6 relative">
//                 <span
//                   className={`absolute left-0 top-1 w-6 h-1 bg-red-700 transform transition-all duration-300 ${
//                     isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
//                   }`}
//                 ></span>
//                 <span
//                   className={`absolute left-0 top-3 w-6 h-1 bg-red-700 transition-all duration-300 ${
//                     isMobileMenuOpen ? "opacity-0" : ""
//                   }`}
//                 ></span>
//                 <span
//                   className={`absolute left-0 top-5 w-6 h-1 bg-red-700 transform transition-all duration-300 ${
//                     isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
//                   }`}
//                 ></span>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
//           onClick={() => setIsMobileMenuOpen(false)}
//           style={{
//             zIndex: 2147483646,
//             position: "fixed",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//           }}
//         />
//       )}

//       {/* Mobile Menu Panel */}
//       <div
//         ref={menuRef}
//         className={`fixed top-0 right-0 h-full w-80 max-w-full bg-black/65 backdrop-blur-lg border-l border-white/10 transform transition-transform duration-300 ease-out md:hidden ${
//           isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//         style={{
//           zIndex: 2147483647,
//           position: "fixed",
//           top: 0,
//           right: 0,
//           height: "100vh",
//           isolation: "isolate",
//         }}
//       >
//         {/* Close Button */}
//         <div className="absolute top-6 right-6">
//           <button
//             onClick={() => setIsMobileMenuOpen(false)}
//             className="w-10 h-10 text-white hover:text-red-400 transition-colors flex items-center justify-center rounded-full hover:bg-white/10 cursor-pointer"
//             aria-label="Close mobile menu"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>

//         <div className="flex flex-col h-full pt-20 px-6">
//           {/* Mobile Search Bar */}
//           <div className="mb-6">
//             <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
//               <ExpandableSearchBar
//                 onSearch={(query) => {
//                   console.log("Mobile search query:", query);
//                   // Handle mobile search functionality here
//                   setIsMobileMenuOpen(false);
//                 }}
//                 placeholder="Search cars, locations..."
//                 suggestions={[
//                   "BMW X5",
//                   "Mercedes C-Class",
//                   "Audi A4",
//                   "Toyota Camry",
//                   "Honda Accord",
//                   "Luxury Cars",
//                   "Economy Cars",
//                   "SUVs",
//                   "Dubai",
//                   "Abu Dhabi",
//                   "Sharjah",
//                 ]}
//                 iconColor="text-white"
//                 hoverIconColor="hover:text-red-400"
//                 className="w-full"
//               />
//             </div>
//           </div>

//           {/* Mobile Navigation Links */}
//           <div className="flex flex-col space-y-6">
//             <Link
//               href="/cars"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={`${
//                 pathname === "/fleet" ? "text-red-400" : "text-white/80"
//               } hover:text-red-500 font-semibold transition-colors text-xl py-2 font-anek`}
//             >
//               Our Fleet
//             </Link>
//             <Link
//               href="/car-types"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={`${
//                 pathname === "/car-types" ? "text-red-400" : "text-white/80"
//               } hover:text-red-500 font-semibold transition-colors text-xl py-2 font-anek`}
//             >
//               Car Types
//             </Link>
//             <Link
//               href="/about-us"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={`${
//                 pathname === "/about-us" ? "text-red-400" : "text-white/80"
//               } hover:text-red-500 font-semibold transition-colors text-xl py-2 font-anek`}
//             >
//               About
//             </Link>
//             <Link
//               href="/blogs"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={`${
//                 pathname === "/blog" ? "text-red-400" : "text-white/80"
//               } hover:text-red-500 font-semibold transition-colors text-xl py-2 font-anek`}
//             >
//               Blog
//             </Link>
//             <Link
//               href="/career"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={`${
//                 pathname === "/career" ? "text-red-400" : "text-white/80"
//               } hover:text-red-500 font-semibold transition-colors text-xl py-2 font-anek`}
//             >
//               Career
//             </Link>
//             <Link
//               href="/contact"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={`${
//                 pathname === "/contact-us" ? "text-red-400" : "text-white/80"
//               } hover:text-red-500 font-semibold transition-colors text-xl py-2 font-anek`}
//             >
//               Contact
//             </Link>
//           </div>

//           {/* Mobile Language Selector */}
//           {/* <div className="mt-8 mb-4">
//             <div className="flex items-center space-x-3 px-3 py-2 bg-white/10 rounded-lg">
//               <Image
//                 src="https://flagcdn.com/w40/us.png"
//                 alt="English"
//                 width={24}
//                 height={16}
//                 className="rounded-sm"
//               />
//               <span className="text-white/90 text-base font-medium">
//                 English
//               </span>
//             </div>
//           </div> */}

//           {/* Mobile Book Now Button */}
//           <div>
//             <Link
//               href="/book-meeting"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="px-6 py-2 bg-red-700 rounded-[30px] inline-flex justify-center items-center gap-2.5 hover:bg-red-500 transition-colors mt-8"
//             >
//               <span className="text-indigo-50 text-base font-semibold">
//                 Book Now
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
