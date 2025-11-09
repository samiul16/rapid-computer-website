"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Heart, Share2, X } from "react-feather";
import { useTranslations, useLocale } from "next-intl";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { useProductQuantity } from "@/hooks/useProductQuantity";
import { useAddToCart } from "@/hooks/addToCart";
import SocialIconLink from "@/helpers/ui/FontAwesome";
import { useGetSocialMediaQuery } from "@/redux/apiSlice/apiSlice";
import { setOpenCartModal } from "@/redux/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/redux/wishListSlice/wishListSlice";
import toastAlert from "@/utils/toastConfig";
import { toArabicNumerals } from "@/helpers/ui/Arabic";
import Loading from "@/app/loading";

interface ProductActionsProps {
  product: {
    id: number;
    name: string;
    arabic_name?: string;
    image_url: string;
    description?: string;
    final_price: number;
    price: number;
    status?: number;
  };
}

const ProductActions = ({ product }: ProductActionsProps) => {
  const locale = useLocale();
  const t = useTranslations();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { user } = useAppSelector((state) => state.user);
  const { wishlist } = useAppSelector((state) => state.wish);

  const [isTogglingWishlist, setIsTogglingWishlist] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState("");

  const { id, name, arabic_name, final_price, status } = product || {};

  // Check if product is out of stock
  const isOutOfStock = status === 0;

  const { quantity, setQuantity, handleIncrement, handleDecrement } =
    useProductQuantity(id);

  const { addToCartGlobal } = useAddToCart();

  const { data: socialMedia, isLoading } = useGetSocialMediaQuery({});
  const selectedItems = socialMedia?.list?.filter((_, index) =>
    [1, 3, 11].includes(index)
  );

  // Check if item is in wishlist
  const isInWishlist = useMemo(() => {
    return wishlist.some((item) => item.purchase_item_id === id);
  }, [wishlist, id]);

  // Function to handle adding product to cart
  const handleAddToCart = () => {
    if (isOutOfStock) {
      toastAlert("error", "This item is out of stock", "top-right");
      return;
    }
    addToCartGlobal(product, id, quantity, setQuantity);
    setTimeout(() => {
      dispatch(setOpenCartModal(true));
    }, 100);
  };

  // Function to handle wishlist toggle
  const handleToggleWishlist = async () => {
    if (isOutOfStock) {
      toastAlert("error", "This item is out of stock", "top-right");
      return;
    }

    if (!user || !user.userId) {
      toastAlert("error", "Please login to add items to wishlist", "top-right");
      router.push("/login");
      return;
    }

    if (isTogglingWishlist) return;

    setIsTogglingWishlist(true);

    if (isInWishlist) {
      const wishlistItem = wishlist.find(
        (item) => item.purchase_item_id === id
      );
      if (!wishlistItem) {
        setIsTogglingWishlist(false);
        return;
      }

      dispatch(removeFromWishlist(wishlistItem.id));

      try {
        // await removeItemFromWishlist(id, user.userId);
        toastAlert("success", "Removed from wishlist", "top-right");
      } catch (error) {
        console.error("Error removing from wishlist:", error);
        toastAlert("error", "Failed to remove from wishlist", "top-right");
        dispatch(addToWishlist(wishlistItem));
      }
    } else {
      const newWishlistItem = {
        id: Date.now(),
        purchase_item_id: id,
        customer_id: user.userId,
      };

      dispatch(addToWishlist(newWishlistItem));

      try {
        const response = await addToWishlist({
          purchase_item_id: id,
          customer_id: user.userId,
        });

        if (response) {
          dispatch(removeFromWishlist(newWishlistItem.id));
          dispatch(
            addToWishlist({
              ...newWishlistItem,
              id: product.id,
            })
          );
        }

        toastAlert("success", "Added to wishlist", "top-right");
      } catch (error) {
        console.error("Error adding to wishlist:", error);
        toastAlert("error", "Failed to add to wishlist", "top-right");
        dispatch(removeFromWishlist(newWishlistItem.id));
      }
    }

    setIsTogglingWishlist(false);
  };

  const handleIncrementWrapper = () => {
    if (isOutOfStock) {
      toastAlert("error", "This item is out of stock", "top-right");
      return;
    }
    handleIncrement();
  };

  const handleDecrementWrapper = () => {
    if (isOutOfStock) {
      toastAlert("error", "This item is out of stock", "top-right");
      return;
    }
    handleDecrement();
  };

  // Safely get product URL
  const getProductUrl = () => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}/product/${id}`;
    }
    return `/product/${id}`;
  };

  const productUrl = getProductUrl();
  const productName = locale === "ar" ? arabic_name : name;

  const socialColors = {
    facebook: "#1877F2",
    twitter: "#000000",
    whatsapp: "#25D366",
    linkedin: "#0077B5",
    instagram: "#E4405F",
    youtube: "#FF0000",
    pinterest: "#E60023",
  };

  const openShareWindow = (url: string) => {
    const width = 600;
    const height = 500;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    window.open(
      url,
      "Share",
      `width=${width},height=${height},top=${top},left=${left},toolbar=0,status=0`
    );
  };

  const handleSocialShare = (platform: string) => {
    let shareUrl = "";
    const shareText = `Check out ${productName} - ${t(
      "product.currency"
    )} ${Math.round(final_price)}`;

    switch (platform.toLowerCase()) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          productUrl
        )}&quote=${encodeURIComponent(shareText)}`;
        openShareWindow(shareUrl);
        break;

      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          productUrl
        )}&text=${encodeURIComponent(shareText)}`;
        openShareWindow(shareUrl);
        break;

      case "instagram":
        toastAlert(
          "info",
          "Instagram doesn't support web sharing. Opening profile...",
          "top-right"
        );
        window.open("https://www.instagram.com/", "_blank");
        break;

      case "youtube":
        window.open("https://www.youtube.com/", "_blank");
        break;

      case "whatsapp":
        setShowWhatsAppModal(true);
        setShowShareModal(false);
        break;

      default:
        if (platform) {
          window.open(platform, "_blank");
        }
        break;
    }
  };

  const handleWhatsAppShare = () => {
    if (!whatsappNumber) {
      toastAlert("error", "Please enter a phone number", "top-right");
      return;
    }

    if (!isValidPhoneNumber(whatsappNumber)) {
      toastAlert("error", "Please enter a valid phone number", "top-right");
      return;
    }

    const cleanNumber = whatsappNumber.replace(/[\s+]/g, "");
    const shareText = `Check out ${productName}!\n\n${t(
      "product.currency"
    )} ${Math.round(final_price)}\n\nView details: ${productUrl}`;

    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
      shareText
    )}`;

    window.open(whatsappUrl, "_blank");
    setShowWhatsAppModal(false);
    setWhatsappNumber("");
  };

  return (
    <>
      {/* WhatsApp Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Share via WhatsApp</h3>
              <button
                onClick={() => {
                  setShowWhatsAppModal(false);
                  setWhatsappNumber("");
                }}
                className="p-1 hover:bg-gray-100 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-gray-600 mb-4">
              Enter the phone number you want to share this product with:
            </p>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <PhoneInput
                international
                defaultCountry="AE"
                placeholder="Enter phone number"
                value={whatsappNumber}
                onChange={(value) => setWhatsappNumber(value || "")}
                className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowWhatsAppModal(false);
                  setWhatsappNumber("");
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleWhatsAppShare}
                className="flex-1 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#25D366]/90 transition-colors cursor-pointer"
              >
                Share
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Share Product</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="p-1 hover:bg-gray-100 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-gray-600 mb-4">
              Share this product with your friends:
            </p>

            <div className="flex gap-3 flex-wrap">
              {isLoading ? (
                <Loading />
              ) : (
                <>
                  {selectedItems
                    ?.filter(
                      (item) =>
                        item?.title_value &&
                        typeof item.title_value === "string" &&
                        item.title_value.startsWith("http")
                    )
                    .map(({ id, index_name, title }) => {
                      const trimmedIndex =
                        index_name?.trim().toLowerCase() || "facebook";

                      return (
                        <button
                          key={id}
                          onClick={() => handleSocialShare(trimmedIndex)}
                          className="w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all hover:scale-110 cursor-pointer"
                          style={{
                            borderColor:
                              socialColors[trimmedIndex] ||
                              "rgba(251 191 36 / 0.75)",
                            color:
                              socialColors[trimmedIndex] ||
                              "rgba(251 191 36 / 0.75)",
                          }}
                          aria-label={title}
                          type="button"
                        >
                          <SocialIconLink
                            indexName={trimmedIndex}
                            label={title}
                            url="#"
                            color={
                              socialColors[trimmedIndex] ||
                              "rgba(251 191 36 / 0.75)"
                            }
                          />
                        </button>
                      );
                    })}

                  <button
                    onClick={() => handleSocialShare("whatsapp")}
                    className="w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all hover:scale-110 cursor-pointer"
                    style={{
                      borderColor: socialColors.whatsapp,
                      color: socialColors.whatsapp,
                    }}
                    aria-label="Share on WhatsApp"
                    type="button"
                  >
                    <SocialIconLink
                      indexName="whatsapp"
                      label="WhatsApp"
                      url="#"
                      color={socialColors.whatsapp}
                    />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {/* Out of Stock Warning */}
        {isOutOfStock && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
            <p className="font-semibold">
              {locale === "ar"
                ? "هذا المنتج غير متوفر حاليًا"
                : "This product is currently out of stock"}
            </p>
          </div>
        )}

        {/* First Row: Title and Price */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Product Title - Left */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex-1">
            {locale === "ar" ? arabic_name : name}
          </h2>

          {/* Price - Right */}
          <span className="text-2xl sm:text-3xl font-bold text-sky-500 whitespace-nowrap">
            {t("product.currency")}
            {"\u00A0"}
            {locale === "ar"
              ? toArabicNumerals(Math.round(final_price))
              : Math.round(final_price)}
          </span>
        </div>

        {/* Second Row: Quantity and Action Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Quantity - Left */}
          <div className="flex items-center gap-4">
            <span className="font-semibold text-gray-700">
              {t("product.quantity")}:
            </span>

            <div
              className={`flex items-center border-2 border-gray-300 rounded-full ${
                isOutOfStock ? "opacity-50" : ""
              }`}
            >
              <button
                role="button"
                tabIndex={0}
                className="px-5 py-2 border-r-2 border-gray-300 cursor-pointer disabled:cursor-not-allowed hover:bg-gray-50 transition-colors rounded-l-full"
                onClick={handleDecrementWrapper}
                disabled={isOutOfStock}
              >
                -
              </button>
              <span className="px-6 py-2 select-none font-semibold">
                {locale === "ar" ? toArabicNumerals(quantity) : quantity}
              </span>
              <button
                role="button"
                tabIndex={0}
                className="px-5 py-2 border-l-2 border-gray-300 cursor-pointer disabled:cursor-not-allowed hover:bg-gray-50 transition-colors rounded-r-full"
                onClick={handleIncrementWrapper}
                disabled={isOutOfStock}
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons - Right */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Share Button */}
            <button
              role="button"
              tabIndex={0}
              onClick={() => setShowShareModal(true)}
              className="flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full transition duration-200 hover:border-sky-500 hover:text-sky-500 cursor-pointer font-semibold shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              <Share2 className="w-5 h-5" />
              <span>{t("product.share") || "Share Product"}</span>
            </button>

            {/* Add to Wishlist Button */}
            <button
              role="button"
              tabIndex={0}
              onClick={handleToggleWishlist}
              disabled={isTogglingWishlist || isOutOfStock}
              className={`flex items-center justify-center gap-2 border-2 px-6 py-3 rounded-full transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-semibold shadow-md hover:shadow-lg w-full sm:w-auto lg:w-64 ${
                isInWishlist
                  ? "bg-red-50 border-red-500 text-red-500 hover:bg-red-100"
                  : "bg-white border-gray-300 text-gray-700 hover:border-sky-500 hover:text-sky-500"
              }`}
            >
              <Heart
                className={`w-5 h-5 ${
                  isInWishlist ? "fill-current" : "fill-transparent"
                }`}
              />
              <span>
                {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              </span>
            </button>

            {/* Add to Cart Button */}
            <button
              role="button"
              tabIndex={0}
              className="bg-sky-500 text-white px-6 cursor-pointer py-3 rounded-full transition duration-200 hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-md hover:shadow-lg w-full sm:w-auto lg:w-64"
              onClick={handleAddToCart}
              disabled={isOutOfStock}
            >
              {t("product.addToCart") || "Add to Cart"}
            </button>
          </div>
        </div>

        {/* Shop Meta */}
        {/* <div className="pt-6 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">
              {t("product.shop") || "Shop"}:{" "}
            </span>
            <span className="text-sky-600 font-semibold">
              {t("product.excellency") || "Excellency"}
            </span>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ProductActions;
