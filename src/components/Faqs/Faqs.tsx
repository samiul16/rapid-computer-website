import FAQSection from "@/components/FAQ/FAQSection";
import Breadcrumb from "@/components/common/Breadcrumb";

export default function FAQPage() {
  return (
    <main className="my-20">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          {
            label: "FAQs",
            href: "/faq",
            active: true,
          },
        ]}
      />
      <FAQSection />
    </main>
  );
}
