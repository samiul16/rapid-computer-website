import BrandsIcons from "./components/home/BrandIcons";
import BundleProducts from "./components/home/BundleProducts";
import CategorySection from "./components/home/CategorySection";
import FlashSaleBanner from "./components/home/FlashSaleBanner";
import FlashSaleGrid from "./components/home/FlashSaleGrid";
import HeroSlider from "./components/home/HeroSlider";
import PromotedSection from "./components/home/PromotedSection";
import ShopByCategories from "./components/home/ShopByCategories";
import BrandSection from "./components/home/BrandSection";
import TopSellingSection from "./components/home/TopSellingSection";
import Recommended from "./components/home/Recommended";
import RecentlyViewed from "./components/home/RecentlyViewed";
import ShopByBrandsSection from "./components/home/ShopByBrandsSection";
import NewArrivalSection from "./components/home/NewArrivalSection";
import SubscribeSection from "./components/home/SubscribeSection";
import DownloadApp from "./components/home/DownloadApp";
import FeatureSection from "./components/home/FeatureSection";
// import Test from "./components/test/test";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <BrandsIcons />
      <CategorySection />
      <ShopByCategories />
      <FlashSaleBanner />
      <FlashSaleGrid />
      <BundleProducts />
      <PromotedSection />
      <BrandSection />
      <TopSellingSection />
      {/* <Test /> */}
      <Recommended />
      <RecentlyViewed />
      <ShopByBrandsSection />
      <NewArrivalSection />
      <SubscribeSection />
      <DownloadApp />
      <FeatureSection />
    </>
  );
}
