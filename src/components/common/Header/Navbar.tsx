/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable */
// @ts-nocheck

"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
  Heart,
} from "react-feather";
import { setOpenCartModal } from "@/redux/cart/cartSlice";
import ProfileDropdown from "./ProfileDropdown";
import { useDebounce } from "@/hooks/useDebounce";
import { addSearchData, addSelectedSearchData } from "@/redux/app/appSlice";
import { useGetSearchFoodQuery } from "@/redux/apiSlice/apiSlice";
import CartModal from "@/components/Cart/CartModal";
import { navData } from "@/data/navData";

import HighLightMatchText from "./HighLightMatchText";
import gsap from "gsap";

import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import { toArabicNumerals } from "@/helpers/ui/Arabic";

import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import {
  setWishlist,
  clearWishlist,
} from "@/redux/wishListSlice/wishListSlice";
import {
  useCreateWishListMutation,
  useGetWishListQuery,
} from "@/redux/wishListApi/wishListApi";

const Navbar = ({ from = "" }) => {
  const { wishlist } = useAppSelector((state) => state.wish);

  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const isHomeRoute = pathname === "/";

  const { cartData, cartOpen } = useAppSelector((state) => state.cart);

  console.log("cartOpen ", cartOpen);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  // Getting user from Redux store
  const skip = !user?.userId;
  //  wishlist sync state and functionality
  const [wishlistSynced, setWishlistSynced] = useState(false);

  const { data: wishListData } = useGetWishListQuery(
    { customer_id: user?.userId },
    { skip }
  );

  useEffect(() => {
    if (!wishlistSynced && wishListData?.list) {
      dispatch(setWishlist(wishListData.list));
      setWishlistSynced(true);
    }
  }, [wishListData, wishlistSynced, dispatch]);

  const [createWishList] = useCreateWishListMutation();

  useEffect(() => {
    if (user?.userId && wishlist.length > 0) {
      createWishList({ customer_id: user.userId, items: wishlist }).unwrap();
    }
  }, [user, wishlist, createWishList]);

  // Wishlist icon handler
  const handleWishlistClick = () => {
    if (user?.userId) {
      dispatch(clearWishlist());
      setWishlistSynced(true);
      router.push("/wishlist");
    } else {
      router.push("/login");
    }
  };

  // Use fetched wishlist or fallback to local redux wishlist

  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Debounce search query to avoid too many API calls but not used here
  const debouncedSearch = useDebounce(searchQuery, 500);
  const searchParam = isExpanded && debouncedSearch ? debouncedSearch : "";

  const { data, isLoading } = useGetSearchFoodQuery(searchParam, {
    skip: !searchParam,
  });

  const logoRef = useRef(null);
  const navItemsRef = useRef([]);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (searchQuery.trim()) {
      dispatch(addSearchData(data));
    }
  }, [searchQuery, data, dispatch]);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Faster GSAP animation for logo and nav items
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(logoRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.5,
        ease: "power2.out",
      });
      tl.fromTo(
        navItemsRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.08,
        },
        "-=0.2"
      );
    });
    return () => ctx.revert();
  }, []);

  //  search input change handler
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setIsExpanded(value.trim() !== "");
    if (value.trim() !== "") {
      router.push("/all-products");
    }
  };

  const handleSearchExpand = () => setIsExpanded(true);
  const handleSearchCollapse = () => {
    setIsExpanded(false);
    setSearchQuery("");
  };

  const handleSearchFoodItem = (item) => {
    setIsExpanded(false);
    dispatch(addSelectedSearchData(item));
  };

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const handleAuthRedirect = () => router.push("/login");

  const locale = useLocale();

  const cartHandleClick = () => {
    console.log("cartHandleClick");
    dispatch(setOpenCartModal(true));
  };

  return (
    <nav
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        height: "64px",
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg border-b border-gray-200 bg-white/90" : ""
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="w-fit mt-2 flex-shrink-0 bg-sky-400 py-2 px-3 rounded-full">
          <Link
            href="/"
            className="w-full h-full relative inline-block"
            ref={logoRef}
          >
            <Image
              src="/assets/rapid-logo-2.png"
              alt="Logo"
              width={100}
              height={100}
              priority
              quality={80}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {navData.slice(0, 7).map((item, idx) => (
            <Link
              key={item.id}
              href={item.link}
              ref={(el) => {
                navItemsRef.current[idx] = el;
              }}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
              }}
              className={`hover:text-brand uppercase transition-colors relative ${
                pathname === item.link
                  ? "text-gray-800  rounded px-2 py-1"
                  : isScrolled
                  ? "text-gray-800"
                  : "text-gray-800"
              }`}
            >
              {locale === "ar" ? item.labelAr : item.labelEn}
            </Link>
          ))}
        </div>

        {/* Mobile controls */}
        <div className="flex gap-3 items-center md:hidden">
          {/* Wishlist icon (Mobile) */}
          {mounted && (
            <div
              onClick={handleWishlistClick}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleWishlistClick();
              }}
              className="relative flex flex-col items-center cursor-pointer"
              aria-label="Wishlist"
              role="button"
              tabIndex={0}
            >
              <Heart
                className={`w-4 h-4 ${
                  wishlist.length > 0
                    ? "text-red-600"
                    : isScrolled
                    ? "text-gray-800"
                    : "text-gray-800"
                }`}
              />
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "10px",
                  fontWeight: "400",
                }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-white text-red-600 rounded-full text-xs flex items-center justify-center"
              >
                {wishlist.length}
              </span>
            </div>
          )}
          {mounted && (
            <div
              className="relative flex flex-col items-center cursor-pointer"
              onClick={() => cartHandleClick()}
              role="button"
              tabIndex={0}
            >
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "10px",
                  fontWeight: "400",
                }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-white text-brand rounded-full text-xs flex items-center justify-center"
              >
                {cartData?.length ?? 0}
              </span>
              aaaaaaaaaaaaaaaa
              <ShoppingCart
                className={`w-4 h-4 ${
                  isScrolled ? "text-gray-800" : "text-gray-800"
                }`}
              />
            </div>
          )}

          {mounted &&
            (user ? (
              <ProfileDropdown />
            ) : (
              <User
                onClick={handleAuthRedirect}
                className={`w-4 h-4 cursor-pointer ${
                  isScrolled ? "text-gray-800" : "text-gray-800"
                }`}
                aria-label="Login"
              />
            ))}

          <button
            onClick={toggleSidebar}
            aria-label="Toggle menu"
            className={`md:hidden transition-colors ${
              isScrolled ? "text-orange-600" : "text-gray-800"
            }`}
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Desktop search and controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Desktop Wishlist */}
          {mounted && (
            <div
              onClick={handleWishlistClick}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleWishlistClick();
              }}
              className="relative flex flex-col items-center cursor-pointer"
              aria-label="Wishlist"
              role="button"
              tabIndex={0}
            >
              <Heart
                className={`w-5 h-5 stroke-2 ${
                  wishlist.length > 0
                    ? "text-red-600 fill-red-600"
                    : isScrolled
                    ? "text-gray-800"
                    : "text-gray-800"
                }`}
              />
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "10px",
                  fontWeight: "400",
                }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-white text-red-600 rounded-full flex items-center justify-center"
              >
                {wishlist.length}
              </span>
            </div>
          )}

          {mounted && (
            <div
              className="relative flex flex-col items-center cursor-pointer"
              onClick={() => cartHandleClick()}
              role="button"
              tabIndex={0}
            >
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "10px",
                  fontWeight: "400",
                }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-white text-brand rounded-full flex items-center justify-center"
              >
                {locale === "ar"
                  ? toArabicNumerals(cartData?.length ?? 0)
                  : cartData?.length ?? 0}
              </span>
              <ShoppingCart
                className={`w-5 h-5 stroke-2 ${
                  isScrolled ? "text-gray-800" : "text-gray-800"
                }`}
              />
            </div>
          )}

          {mounted &&
            (user?.userId ? (
              <ProfileDropdown />
            ) : (
              <User
                onClick={handleAuthRedirect}
                className={`w-5 h-5 cursor-pointer stroke-2 ${
                  isScrolled ? "text-gray-800" : "text-gray-800"
                }`}
                aria-label="Login"
              />
            ))}
        </div>
      </div>

      {/* Sidebar */}
      <div
        style={{
          fontFamily: "'Poppins', sans-serif",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
        className={`fixed top-0 right-0 h-full w-64 z-50 shadow-lg transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <button
            onClick={toggleSidebar}
            aria-label="Close menu"
            className="text-orange-600 mb-8"
          >
            <X size={20} />
          </button>
          <div className="flex flex-col gap-4">
            {navData.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                onClick={toggleSidebar}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                }}
                className={`transition-colors ${
                  pathname === item.link ? "text-brand" : "text-gray-800"
                }`}
              >
                {locale === "ar" ? item.labelAr : item.labelEn}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
      {/* cart modal */}
      <CartModal
        isOpen={cartOpen}
        onClose={() => dispatch(setOpenCartModal(false))}
      />
    </nav>
  );
};

export default Navbar;
