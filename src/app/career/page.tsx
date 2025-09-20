import Breadcrumb from "@/components/common/Breadcrumb";
import CareerSection from "@/components/general/CareerSection";

export default function Career() {
  return (
    <main className="my-20">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          {
            label: "Career",
            href: "/career",
            active: true,
          },
        ]}
      />
      <CareerSection />
    </main>
  );
}
