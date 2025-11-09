import Breadcrumb from "@/components/common/Breadcrumb";
import ProductGallery from "@/components/general/ProductGallery";
// import ProductTitle from "@/components/general/ProductTitle";
import ProductInfoTab from "@/components/general/ProductInfoTab";
import ProductActions from "@/components/general/ProductAction";
import RelatedProducts from "@/components/general/RelatedProducts";

// This would typically come from your API or database
const product = {
  id: 1,
  name: "Wholesale Android11 15.6inch Touch Display POS",
  arabic_name:
    "جهاز نقاط البيع بشاشة لمس مقاس 15.6 بوصة يعمل بنظام Android11 بالجملة لآلة نقاط البيع بسجل النقد في متجر البيع بالتجزئة",
  image_url: "/product-details/p2.png",
  description: `
    <p>High-performance POS device with Android 11 operating system.</p>
    <ul>
      <li>15.6 inch capacitive touch screen</li>
      <li>Built-in thermal printer</li>
      <li>Multiple connectivity options</li>
      <li>Perfect for retail and restaurant businesses</li>
    </ul>
  `,
  final_price: 1299,
  price: 1499,
  status: 1, // 1 = in stock, 0 = out of stock
};

export default function ProductDetailsPage() {
  return (
    <div className="max-w-8xl mx-auto px-4 lg:px-2 my-20">
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

      <section className="max-w-8xl mx-auto px-4 lg:px-28">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Container - 75% width */}
          <div className="w-full lg:w-3/4">
            {/* <ProductTitle title={product.name} /> */}

            <div className="mt-6">
              <ProductGallery
                images={[
                  "/product-details/p2.png",
                  "/product-details/p1.png",
                  "/product-details/p3.png",
                  "/product-details/p4.png",
                ]}
              />
            </div>

            {/* Actions Section - Below Gallery */}
            <div className="mt-4 bg-white rounded-[32px] border border-gray-200 shadow-lg p-6">
              <ProductActions product={product} />
            </div>

            {/* Product Info Tabs */}
            <div className="mt-4">
              <ProductInfoTab />
            </div>
          </div>

          {/* Right Sidebar - 25% width */}
          <div className="w-full lg:w-1/4">
            <div className="sticky top-6">
              <RelatedProducts />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
