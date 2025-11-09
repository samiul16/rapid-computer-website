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
  Mic,
  MicOff,
  ChevronRight,
} from "react-feather";
import { setOpenCartModal } from "@/redux/cart/cartSlice";
import ProfileDropdown from "./ProfileDropdown";
import { useDebounce } from "@/hooks/useDebounce";
import { addSearchData, addSelectedSearchData } from "@/redux/app/appSlice";
import { useGetSearchFoodQuery } from "@/redux/apiSlice/apiSlice";
import CartModal from "@/components/Cart/CartModal";
import { navData } from "@/data/navData";
import Loading from "@/app/loading";

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
  const mobileInputRef = useRef(null);

  const isHomeRoute = pathname === "/";

  const { cartData, cartOpen } = useAppSelector((state) => state.cart);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const skip = !user?.userId;
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

  const handleWishlistClick = () => {
    if (user?.userId) {
      dispatch(clearWishlist());
      setWishlistSynced(true);
      router.push("/wishlist");
    } else {
      router.push("/login");
    }
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileSearchExpanded, setIsMobileSearchExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);

  // Voice search states
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const recognitionRef = useRef(null);

  // Debounce search query
  const debouncedSearch = useDebounce(searchQuery, 500);
  const searchParam = debouncedSearch ? debouncedSearch : "";

  const { data, isLoading } = useGetSearchFoodQuery(searchParam, {
    skip: !searchParam,
  });

  const logoRef = useRef(null);
  const navItemsRef = useRef([]);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        (window as any).webkitSpeechRecognition ||
        (window as any).SpeechRecognition;

      if (SpeechRecognition) {
        setSpeechSupported(true);
        const recognition = new SpeechRecognition();
        recognition.lang = "en-US";
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
          setIsListening(true);
        };

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setSearchQuery(transcript);
          setIsExpanded(true);
          setIsMobileSearchExpanded(true);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognition.onerror = (event) => {
          console.error("Speech recognition error:", event.error);
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      }
    }
  }, []);

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

  useEffect(() => {
    if (isMobileSearchExpanded && mobileInputRef.current) {
      mobileInputRef.current.focus();
    }
  }, [isMobileSearchExpanded]);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation
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

  // Search handlers
  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  const handleDesktopSearchFocus = () => {
    setIsExpanded(true);
  };

  const handleDesktopSearchExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDesktopSearchCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMobileSearchExpand = () => {
    setIsMobileSearchExpanded(true);
  };

  const handleMobileSearchCollapse = () => {
    setIsMobileSearchExpanded(false);
    setSearchQuery("");
  };

  const handleSearchFoodItem = (item) => {
    console.log("🚀 ~ item:", item);
    setIsExpanded(false);
    setIsMobileSearchExpanded(false);
    dispatch(addSelectedSearchData(item));
    console.log("🚀 ~ item:", item);
    router.push(`/product/${item.id}`);
  };

  // Voice search handler
  const handleVoiceSearch = () => {
    if (!speechSupported) {
      alert("Speech recognition is not supported in your browser");
      return;
    }

    setIsExpanded(true);

    if (recognitionRef.current) {
      if (isListening) {
        recognitionRef.current.stop();
      } else {
        recognitionRef.current.start();
      }
    }
  };

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const handleAuthRedirect = () => router.push("/login");
  const locale = useLocale();

  // Determine navbar background and text colors - keep home page same, change other pages
  const getNavbarStyles = () => {
    if (isHomeRoute) {
      // Home page: keep original styling exactly as it was
      return {
        navBg: isScrolled ? "bg-black/20 backdrop-blur-md" : "bg-transparent",
        textColor: "text-white",
        groupHoverColor: "group-hover:text-sky-500",
        hoverColor: "hover:text-sky-500",
        activeColor: "text-sky-500 font-semibold",
      };
    } else {
      // Other pages: dark text like in the image, same blur logic as home page
      return {
        navBg: isScrolled
          ? "bg-black/20 backdrop-blur-md shadow-lg"
          : "bg-white/90 backdrop-blur-sm",
        textColor: "text-black",
        groupHoverColor: "group-hover:text-sky-500", // Same group hover as home page
        hoverColor: "hover:text-sky-500",
        activeColor: "text-black font-semibold",
      };
    }
  };

  const styles = getNavbarStyles();

  // Determine which logo to show
  const getLogoSrc = () => {
    if (isHomeRoute) {
      // Home page: show skyRapid.png on hover, original logo otherwise
      return isNavbarHovered ? "/skyRapid.png" : "/whiteRapid.png";
    } else {
      // Other pages: always show skyRapid.png
      return "/skyRapid.png";
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-all duration-300 py-3 ${styles.navBg} hover:bg-white group`}
      style={{ zIndex: 9998 }}
      onMouseEnter={() => setIsNavbarHovered(true)}
      onMouseLeave={() => setIsNavbarHovered(false)}
    >
      <div className="max-w-8xl mx-auto px-4 lg:px-14 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="w-fit flex-shrink-0">
          <Link
            href="/"
            className="w-auto h-10 relative inline-block"
            ref={logoRef}
          >
            <Image
              src={getLogoSrc()}
              alt="Logo"
              width={120}
              height={50}
              priority
              quality={80}
              className="object-contain h-10 w-auto transition-all duration-300"
            />
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center gap-8">
          {navData.slice(0, 7).map((item, idx) => (
            <Link
              key={item.id}
              href={item.link}
              ref={(el) => {
                navItemsRef.current[idx] = el;
              }}
              className={`${
                pathname === item.link ? styles.activeColor : styles.textColor
              } ${styles.hoverColor} ${
                styles.groupHoverColor
              } font-semibold transition-colors text-lg uppercase`}
            >
              {locale === "ar" ? item.labelAr : item.labelEn}
            </Link>
          ))}
        </div>

        {/* Mobile controls */}
        <div className="flex gap-3 items-center md:hidden">
          {/* Mobile Search */}
          {mounted && (
            <div className="relative flex items-center" ref={dropdownRef}>
              <div
                style={{
                  backgroundColor: isMobileSearchExpanded
                    ? "rgba(255, 255, 255, 0.95)"
                    : "transparent",
                  backdropFilter: isMobileSearchExpanded
                    ? "blur(10px)"
                    : "none",
                  WebkitBackdropFilter: isMobileSearchExpanded
                    ? "blur(10px)"
                    : "none",
                }}
                className={`flex items-center transition-all rounded-full ${
                  isMobileSearchExpanded ? "w-[200px]" : "w-10"
                }`}
              >
                <button
                  type="button"
                  aria-label="Search"
                  onClick={
                    isMobileSearchExpanded
                      ? handleMobileSearchCollapse
                      : handleMobileSearchExpand
                  }
                  className={`p-2 ${styles.hoverColor} ${
                    styles.groupHoverColor
                  } transition-colors ${
                    isMobileSearchExpanded ? "text-gray-500" : styles.textColor
                  }`}
                >
                  {isMobileSearchExpanded ? (
                    <X className="h-4 w-4" />
                  ) : (
                    <Search className="h-4 w-4" />
                  )}
                </button>

                {isMobileSearchExpanded && (
                  <div className="flex items-center flex-1">
                    <input
                      ref={mobileInputRef}
                      value={searchQuery}
                      onChange={(e) => handleSearchChange(e.target.value)}
                      placeholder="Search..."
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                      className="flex-1 bg-transparent outline-none text-gray-700 px-2 rounded-full"
                    />
                    {speechSupported && (
                      <button
                        type="button"
                        onClick={handleVoiceSearch}
                        className={`p-1 rounded-full ${
                          isListening
                            ? "bg-red-500 text-white"
                            : "bg-gray-200 text-gray-600"
                        }`}
                        title={isListening ? "Stop listening" : "Voice search"}
                      >
                        {isListening ? (
                          <MicOff className="h-3 w-3" />
                        ) : (
                          <Mic className="h-3 w-3" />
                        )}
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Mobile Search Dropdown */}
              {isMobileSearchExpanded && searchQuery && (
                <div
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                  className="absolute top-full left-0 w-full border rounded shadow-lg max-h-60 overflow-y-auto mt-2 z-50"
                >
                  {isLoading ? (
                    <div
                      className="py-8 text-center text-brand"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      Loading...
                    </div>
                  ) : data?.items?.length > 0 ? (
                    data.items.map((food) => (
                      <button
                        key={food.id}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer w-full text-left"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "14px",
                          fontWeight: "400",
                        }}
                        onClick={() => handleSearchFoodItem(food)}
                      >
                        {HighLightMatchText(food.name, searchQuery)}
                      </button>
                    ))
                  ) : (
                    <div
                      className="py-4 text-center text-gray-500"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      No results found
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Mobile Wishlist */}
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
                    ? styles.activeColor.replace("font-semibold", "")
                    : styles.textColor
                } ${styles.groupHoverColor} ${styles.hoverColor}`}
              />
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "10px",
                  fontWeight: "400",
                }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-white text-sky-600 rounded-full text-xs flex items-center justify-center"
              >
                {wishlist.length}
              </span>
            </div>
          )}

          {/* Mobile Cart */}
          {mounted && (
            <div
              className="relative flex flex-col items-center cursor-pointer"
              onClick={() => dispatch(setOpenCartModal(true))}
              role="button"
              tabIndex={0}
            >
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "10px",
                  fontWeight: "400",
                }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-white text-sky-600 rounded-full text-xs flex items-center justify-center"
              >
                {cartData?.length ?? 0}
              </span>
              <ShoppingCart
                className={`w-4 h-4 ${styles.textColor} ${styles.groupHoverColor} ${styles.hoverColor}`}
              />
            </div>
          )}

          {/* Mobile User */}
          {mounted &&
            (user ? (
              <ProfileDropdown />
            ) : (
              <User
                onClick={handleAuthRedirect}
                className={`w-4 h-4 cursor-pointer ${styles.textColor} ${styles.groupHoverColor} ${styles.hoverColor}`}
                aria-label="Login"
              />
            ))}

          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            aria-label="Toggle menu"
            className={`md:hidden transition-colors cursor-pointer ${styles.textColor} ${styles.groupHoverColor} ${styles.hoverColor}`}
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Desktop search and controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Desktop Search */}
          <div className="relative" ref={dropdownRef}>
            <div className="flex">
              {!isExpanded && (
                <button
                  type="button"
                  onClick={() => handleDesktopSearchExpand()}
                  className="p-2 transition-all border-[#4ca1ec] cursor-pointer"
                  aria-label="Search"
                >
                  <Search
                    className={`h-5 w-5 stroke-2 ${styles.textColor} ${styles.groupHoverColor}`}
                  />
                </button>
              )}

              <div
                style={{
                  backgroundColor: isExpanded
                    ? "rgba(255, 255, 255, 0.95)"
                    : "transparent",
                  backdropFilter: isExpanded ? "blur(10px)" : "none",
                  WebkitBackdropFilter: isExpanded ? "blur(10px)" : "none",
                }}
                className={`flex items-center transition-all duration-200 ${
                  isExpanded
                    ? "w-60 h-10 px-3 py-2 rounded-full border border-[#4ca4ec] transition-all hover:shadow-md ring-2 ring-[#4c94ec] shadow-lg ease-in-out duration-400"
                    : "w-0 overflow-hidden"
                } `}
                onClick={(e) => e.stopPropagation()}
              >
                <ChevronRight
                  className="h-4 w-4 text-gray-400 mr-2 stroke-2 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDesktopSearchCollapse();
                  }}
                />
                <input
                  ref={inputRef}
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  onFocus={handleDesktopSearchFocus}
                  onClick={(e) => e.stopPropagation()}
                  placeholder="Search for products..."
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                  className="flex-1 outline-none text-gray-700 bg-transparent"
                />
                {speechSupported && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVoiceSearch();
                    }}
                    className={`ml-2 p-1.5 rounded-full transition-all duration-200 ${
                      isListening
                        ? "bg-red-500 text-white shadow-md"
                        : "bg-transparent text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                    }`}
                    title={isListening ? "Stop listening" : "Voice search"}
                  >
                    {isListening ? (
                      <MicOff className="h-4 w-4 stroke-2" />
                    ) : (
                      <Mic className="h-4 w-4 stroke-2" />
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Desktop Search Dropdown */}
            {isExpanded && searchQuery && (
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
                className="absolute top-full left-0 w-full border border-gray-200 rounded-2xl shadow-lg max-h-60 overflow-y-auto mt-2 z-50"
                onClick={(e) => e.stopPropagation()}
              >
                {isLoading ? (
                  <div
                    className="py-6 text-center text-brand"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    <Loading />
                  </div>
                ) : data?.items?.length > 0 ? (
                  data.items.map((food, index) => (
                    <div
                      key={food.id}
                      className={`px-3 py-2 hover:bg-gray-50 cursor-pointer transition-colors ${
                        index === 0 ? "rounded-t-2xl" : ""
                      } ${
                        index === data.items.length - 1 ? "rounded-b-2xl" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleSearchFoodItem(food);
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleSearchFoodItem(food);
                      }}
                    >
                      <div className="flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400 mr-2 stroke-2" />
                        <span
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          {HighLightMatchText(food.name, searchQuery)}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div
                    className="py-4 text-center text-gray-500"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    No results found
                  </div>
                )}
              </div>
            )}
          </div>

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
                    ? styles.activeColor.replace("font-semibold", "") +
                      " fill-sky-500"
                    : styles.textColor
                } ${styles.groupHoverColor} ${styles.hoverColor}`}
              />
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "10px",
                  fontWeight: "400",
                }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-white text-sky-600 rounded-full flex items-center justify-center"
              >
                {wishlist.length}
              </span>
            </div>
          )}

          {/* Desktop Cart */}
          {mounted && (
            <div
              className="relative flex flex-col items-center cursor-pointer"
              onClick={() => dispatch(setOpenCartModal(true))}
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
                className={`w-5 h-5 stroke-2 ${styles.textColor} ${styles.groupHoverColor} ${styles.hoverColor}`}
              />
            </div>
          )}

          {/* Desktop User */}
          {mounted &&
            (user?.userId ? (
              <ProfileDropdown />
            ) : (
              <User
                onClick={handleAuthRedirect}
                className={`w-5 h-5 cursor-pointer stroke-2 ${styles.textColor} ${styles.groupHoverColor} ${styles.hoverColor}`}
                aria-label="Login"
              />
            ))}
        </div>
      </div>

      {/* Sidebar */}
      <div
        style={{
          fontFamily: "'Poppins', sans-serif",
          backgroundColor: "#fff",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
        className={`fixed top-0 right-0 h-full w-64 z-50 shadow-lg transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 bg-white">
          <button
            onClick={toggleSidebar}
            aria-label="Close menu"
            className="text-orange-600 mb-8 cursor-pointer"
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

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Cart Modal */}
      <CartModal
        isOpen={cartOpen}
        onClose={() => dispatch(setOpenCartModal(false))}
      />
    </nav>
  );
};

export default Navbar;
