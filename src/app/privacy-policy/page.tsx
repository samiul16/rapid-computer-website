
import Breadcrumb from "@/components/common/Breadcrumb";
import PrivacyPolicyPage from "@/components/general/PrivacyPolicyPage";


export default function PrivacyPolicy() {
  return (
    <main className="my-20">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          {
            label: "Privacy Policy",
            href: "/privacy-policy",
            active: true,
          },
        ]}
      />
      <PrivacyPolicyPage />
    </main>
  );
}
