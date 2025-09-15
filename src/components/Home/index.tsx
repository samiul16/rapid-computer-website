"use client";
import React from "react";
// import CountryCategory from "./CountryCategory";
// import FoodCards from "./FoodCards";
import Header from "../common/Header";
// import HomeFoodCart from "./HomeFoodCart";
// import ProjectStatusCounter from "./ProjectStatusCounter";
// import ReserveATable from "./ReserveATable";
// import Reviews from "../Reviews/page";
// import Brand from "../Brand/page";
import Information from "../information/page";
// import TopModal from "../OpeningModal/page";
// import TopSelling from "./TopSelling";
// import MostPopular from "./Popular";
// import RecentlyView from "./RecentView";
// import Offer from "./Offer";
// import HurryUpDeals from "./Hurryup";
// import LatestPost from "./Blogs";
// import Popular from "@/app/popular/page";
// import SubscribeUs from "../SubscribeUs/Subscribe";
// import TopModal from "../OpeningModal/page";
import BrandsIcons from "./BrandIcons";
import CategorySection from "./CategorySection";
import ShopByCategories from "./ShopByCategories";
// import TopSellingSection from "./TopSellingSection";
import FlashSaleBanner from "./FlashSaleBanner";
import FlashSaleGrid from "./FlashSaleGrid";
import PromotedSection from "./PromotedSection";
import TopSellingSection from "./TopSellingSection";
import BundleProducts from "./BundleProducts";
import BrandSection from "./BrandSection";
import DownloadApp from "./DownloadApp";
import FeatureSection from "./FeatureSection";
import NewArrivalSection from "./NewArrivalSection";
import RecentlyViewed from "./RecentlyViewed";
import Recommended from "./Recommended";
import ShopByBrandsSection from "./ShopByBrandsSection";
import SubscribeSection from "./SubscribeSection";

const HomeComponent = () => {
  // State to manage the selected country by default is set to "Arabic"
  // This will be passed to HomeFoodCart to filter food items based on the selected country
  // const [selectedCountry, setSelectedCountry] = useState("Arabic");

  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <BrandsIcons />
      {/* <TopModal /> */}
      <CategorySection />
      {/* <FoodCards /> */}
      <ShopByCategories />
      <FlashSaleBanner />

      <FlashSaleGrid />
      <BundleProducts />
      <PromotedSection />
      <BrandSection />
      <TopSellingSection />

      <Recommended />
      <RecentlyViewed />
      <ShopByBrandsSection />
      <NewArrivalSection />
      <SubscribeSection />
      <DownloadApp />
      <FeatureSection />

      {/* old components */}
      {/* <CountryCategory onSelectCountry={setSelectedCountry} /> */}
      {/* <HomeFoodCart selectedCountry={selectedCountry} /> */}
      {/* <BookATable /> */}
      {/* <TopSelling />
      <MostPopular />
      <RecentlyView />
      <Offer /> */}
      {/* <HurryUpDeals /> */}
      {/* <LatestPost />
      <ReserveATable />
      <Popular />
      <SubscribeUs /> */}
      {/* <Reviews /> */}
      {/* <ProjectStatusCounter /> */}

      {/* <Brand /> */}

      <Information />
    </div>
  );
};

export default HomeComponent;
