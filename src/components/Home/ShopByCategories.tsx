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

  // Filter items based on selected group
  const filteredItems = selectedGroupId
    ? foodsData?.items.filter(
        (item) => item.purchase_group_id === selectedGroupId
      ) || []
    : foodsData?.items || [];

  // Get selected group name
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

  const hasOffer = (item: ApiItem) => {
    return parseFloat(item.offer_price) > 0;
  };

  const getDiscountPercentage = (item: ApiItem) => {
    if (!hasOffer(item)) return 0;
    const originalPrice = item.price;
    const offerPrice = parseFloat(item.offer_price);
    return Math.round(((originalPrice - offerPrice) / originalPrice) * 100);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Title at top left */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
        <p className="text-gray-600 mt-2">
          Discover products by your favorite categories
        </p>
      </div>

      <section className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Panel - Categories */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-gradient-to-br from-[#041A65] via-[#0834CB] to-[#1e3a8a] rounded-3xl shadow-2xl p-6 overflow-hidden relative h-[600px] flex flex-col">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 flex-shrink-0">
                <div className="p-2 bg-white/20 rounded-full">
                  <Tag className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">
                    Menu Categories
                  </h3>
                  <p className="text-blue-200 text-sm">Explore our cuisines</p>
                </div>
              </div>

              {/* Categories - Scrollable */}
              <div
                className="flex-1 overflow-y-auto pr-2 mb-6"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(255,255,255,0.3) transparent",
                }}
              >
                <div className="space-y-3">
                  {/* All Items Button */}
                  <button
                    onClick={() => setSelectedGroupId(null)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 group cursor-pointer ${
                      selectedGroupId === null
                        ? "bg-white/20 backdrop-blur-sm border border-white/30"
                        : "hover:bg-white/10 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-white font-medium">
                          All Items
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-200 text-sm">
                          {locale === "ar"
                            ? toArabicNumerals(foodsData?.items.length || 0)
                            : foodsData?.items.length || 0}
                        </span>
                        <ChevronRight
                          className={`w-4 h-4 text-blue-200 transition-transform duration-300 ${
                            selectedGroupId === null
                              ? "rotate-90"
                              : "group-hover:translate-x-1"
                          }`}
                        />
                      </div>
                    </div>
                  </button>

                  {/* API Categories */}
                  {foodsData?.group.map((group) => {
                    const itemsInGroup = foodsData.items.filter(
                      (item) => item.purchase_group_id === group.id
                    ).length;

                    return (
                      <button
                        key={group.id}
                        onClick={() => handleCategoryClick(group.id)}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 group cursor-pointer ${
                          selectedGroupId === group.id
                            ? "bg-white/20 backdrop-blur-sm border border-white/30"
                            : "hover:bg-white/10 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {group.image_url && (
                              <div className="w-8 h-8 rounded-full overflow-hidden bg-white/20">
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
                            <span className="text-white font-medium">
                              {getDisplayName(group.name, group.arabic_name)}
                            </span>
                            {/* {itemsInGroup > 10 && (
                              <div className="flex items-center gap-1 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                                <TrendingUp size={10} />
                                Popular
                              </div>
                            )} */}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-blue-200 text-sm">
                              {locale === "ar"
                                ? toArabicNumerals(itemsInGroup)
                                : itemsInGroup}
                            </span>
                            <ChevronRight
                              className={`w-4 h-4 text-blue-200 transition-transform duration-300 ${
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

              {/* View All Link */}
              <Link href="/products" className="block w-full flex-shrink-0">
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-center cursor-pointer hover:bg-white/30 transition-all duration-300">
                  <span className="text-white font-bold text-lg">
                    VIEW ALL CATEGORIES
                  </span>
                  <div className="text-blue-200 text-sm mt-1">
                    Browse complete menu
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Panel - Products */}
        <div className="flex-1">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 h-[600px] flex flex-col">
            <div className="mb-6 flex-shrink-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedGroup
                  ? getDisplayName(
                      selectedGroup.name,
                      selectedGroup.arabic_name
                    )
                  : "Featured Items"}
              </h3>
              <p className="text-gray-600">
                {locale === "ar"
                  ? `${toArabicNumerals(
                      filteredItems.length
                    )} ${"items available"}`
                  : `${filteredItems.length} ${"items available"}`}
              </p>
            </div>

            {/* Products Grid - Scrollable with fixed height */}
            <div
              className="flex-1 overflow-y-auto pr-2"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#d1d5db transparent",
                maxHeight: "calc(600px - 160px)",
              }}
            >
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 pb-4">
                {filteredItems.map((item) => {
                  const discount = getDiscountPercentage(item);

                  return (
                    <div
                      key={item.id}
                      onClick={() => handleProductClick(item.id)}
                      className="group bg-gray-50 hover:bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 cursor-pointer overflow-hidden relative"
                    >
                      <div className="p-4 flex gap-3">
                        {/* Product Image */}
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <div className="w-full h-full rounded-xl overflow-hidden bg-gray-100 relative">
                            <Image
                              src={item.image_url || "/global/game.png"}
                              alt={getDisplayName(item.name, item.arabic_name)}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Badges */}
                            <div className="absolute top-1 left-1 flex flex-col gap-1">
                              {hasOffer(item) && (
                                <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                                  -{discount}%
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          <div>
                            <h4 className="text-gray-900 font-semibold text-sm line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                              {getDisplayName(item.name, item.arabic_name)}
                            </h4>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-2">
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, starIdx) => (
                                  <AiFillStar
                                    key={starIdx}
                                    className={`w-3 h-3 ${
                                      starIdx < item.average_rating
                                        ? "text-amber-400"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              {item.average_rating > 0 && (
                                <span className="text-gray-500 text-xs font-medium">
                                  (
                                  {locale === "ar"
                                    ? toArabicNumerals(item.average_rating)
                                    : item.average_rating}
                                  .0)
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Price */}
                          <div className="flex items-center justify-between">
                            <div className="text-blue-600 text-sm font-bold">
                              <div className="flex items-center gap-2">
                                {hasOffer(item) ? (
                                  <>
                                    <span className="text-red-600">
                                      {t("Cart.Currency")}{" "}
                                      {formatPrice(
                                        parseFloat(item.offer_price)
                                      )}
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
                            <div className="text-blue-600 group-hover:translate-x-1 transition-transform duration-200">
                              <ChevronRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Card-specific hover overlay */}
                      <div className="absolute inset-0 bg-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
                    </div>
                  );
                })}
              </div>

              {/* Empty state */}
              {filteredItems.length === 0 && (
                <div className="text-center py-12 h-full flex items-center justify-center flex-col">
                  <div className="text-gray-400 text-lg mb-2">
                    {t("ShopByCategory.noProducts") || "No items found"}
                  </div>
                  <p className="text-gray-500">
                    {t("ShopByCategory.tryDifferentCategory") ||
                      "Try selecting a different category"}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom action */}
            {filteredItems.length > 0 && (
              <div className="pt-4 mt-4 border-t border-gray-200 flex-shrink-0">
                <Link
                  href={`/products${
                    selectedGroupId ? `?group=${selectedGroupId}` : ""
                  }`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  View All
                  {selectedGroup
                    ? getDisplayName(
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
