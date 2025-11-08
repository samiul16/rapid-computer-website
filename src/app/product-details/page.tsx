import Breadcrumb from "@/components/common/Breadcrumb";
// import ProductDetails from "@/app/components/product-details/ProductDetails";
// import ComparisonTable from "../components/product-details/ComparisonTable";
import ProductSidebar from "@/components/general/ProductSidebar";
import ProductGallery from "@/components/general/ProductGallery";
import ProductTitle from "@/components/general/ProductTitle";
import ProductInfoTab from "@/components/general/ProductInfoTab";

// const products = [
//   {
//     id: 1,
//     name: "AK-900 Wired Keyboard",
//     image: "/global/laptop.png",
//     price: "450 AED",
//     rating: 5,
//     reviews: 99,
//     weight: "3kg",
//     availability: "In Stock",
//     additional: "Weight 3kg",
//     description: "Controller Skin",
//   },
//   {
//     id: 2,
//     name: "HAVIT HV-G92 Gamepad",
//     image: "/global/game.png",
//     price: "450 AED",
//     rating: 5,
//     reviews: 99,
//     weight: "3kg",
//     availability: "N/A",
//     additional: "Weight 3kg",
//     description: "Controller Skin",
//   },
//   {
//     id: 3,
//     name: "IPS LCD Gaming Monitor",
//     image: "/global/laptop2.png",
//     price: "450 AED",
//     rating: 5,
//     reviews: 99,
//     weight: "3kg",
//     availability: "In Stock",
//     additional: "Weight 3kg",
//     description: "Controller Skin",
//   },
//   {
//     id: 4,
//     name: "AK-900 Wired Keyboard",
//     image: "/product-details/p2.png",
//     price: "450 AED",
//     rating: 5,
//     reviews: 99,
//     weight: "3kg",
//     availability: "In Stock",
//     additional: "Weight 3kg",
//     description: "Controller Skin",
//   },
// ];

export default function ProductDetailsPage() {
  return (
    <div className="max-w-[1600px] mx-auto px-4 my-20">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Gaming", href: "/gaming" },
          {
            label: "Havic HV G-92 Gamepad",
            href: "/product-details",
            active: true,
          },
        ]}
      />
      {/* <ProductDetails
        title="Havic HV G-92 Gamepad"
        price="AED192.00"
        description="PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
        images={[
          "/product-details/p2.png",
          "/product-details/p1.png",
          "/product-details/p3.png",
          "/product-details/p4.png",
        ]}
      />
      <ComparisonTable products={products} /> */}

      <section className="max-w-[1600px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <ProductTitle title="Wholesale Android11 15.6inch Touch Display POS Device for Retail Store Cash Register POS Machine" />
            <ProductGallery
              images={[
                "/product-details/p2.png",
                "/product-details/p1.png",
                "/product-details/p3.png",
                "/product-details/p4.png",
              ]}
            />
            <ProductInfoTab />
          </div>
          <ProductSidebar />
        </div>
      </section>
    </div>
  );
}
