import Breadcrumb from "@/components/common/Breadcrumb";
import BlogPageSection from "@/components/general/BlogPageSection";

export default function Blogs() {
  return (
    <main className="my-20 bg-slate-50">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          {
            label: "Blogs",
            href: "/blogs",
            active: true,
          },
        ]}
      />

      <BlogPageSection />
    </main>
  );
}
