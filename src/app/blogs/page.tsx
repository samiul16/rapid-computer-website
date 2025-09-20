import Breadcrumb from "@/components/common/Breadcrumb";
import BlogPageSection from "@/components/general/BlogPageSection";

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

      <BlogPageSection />
    </main>
  );
}
