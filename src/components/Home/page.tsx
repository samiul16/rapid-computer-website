import BrandsIcons from "./BrandIcons";
import BundleProducts from "./BundleProducts";
import CategorySection from "./CategorySection";
import FlashSaleBanner from "./FlashSaleBanner";
import FlashSaleGrid from "./FlashSaleGrid";
import HeroSlider from "./HeroSlider";
import PromotedSection from "./PromotedSection";
import ShopByCategories from "./ShopByCategories";
import BrandSection from "./BrandSection";
import TopSellingSection from "./TopSellingSection";
import Recommended from "./Recommended";
import RecentlyViewed from "./RecentlyViewed";
import ShopByBrandsSection from "./ShopByBrandsSection";
import NewArrivalSection from "./NewArrivalSection";
import SubscribeSection from "./SubscribeSection";
import DownloadApp from "./DownloadApp";
import FeatureSection from "./FeatureSection";
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
