import Breadcrumb from "@/components/common/Breadcrumb";
import CartSection from "@/components/common/CartSection";
import RecentlyViewed from "@/components/Home/RecentlyViewed";

export default function Cart() {
  return (
    <main className="my-20 bg-slate-50">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          {
            label: "Cart",
            href: "/cart",
            active: true,
          },
        ]}
      />
      <CartSection />
      <RecentlyViewed />
    </main>
  );
}
