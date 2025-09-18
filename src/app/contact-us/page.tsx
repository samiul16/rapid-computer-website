import Breadcrumb from "@/components/common/Breadcrumb";
import ContactPageSection from "@/components/general/ContactPageSection";

export default function ContactUs() {
  return (
    <main className="my-20 bg-slate-50">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          {
            label: "Contact Us",
            href: "/contact-us",
            active: true,
          },
        ]}
      />
      <ContactPageSection />
    </main>
  );
}
