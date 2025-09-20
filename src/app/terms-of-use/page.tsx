import Breadcrumb from "@/components/common/Breadcrumb";
import TermsOfUseSection from "@/components/general/TermsOfUseSection";

export default function TermsOfUsePage() {
  return (
    <main className="my-20">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          {
            label: "Terms of Use",
            href: "/terms-of-use",
            active: true,
          },
        ]}
      />
      <TermsOfUseSection />
    </main>
  );
}
