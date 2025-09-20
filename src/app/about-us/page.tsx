// import React from "react";
// import AboutUs from "@/components/AboutUs/AboutUs";

// const AboutPage = () => <AboutUs />;

// export default AboutPage;

import AboutUsSection from "@/components/about-us/AboutUsSection";
import Breadcrumb from "@/components/common/Breadcrumb";

export default function About() {
  return (
    <main className="my-20">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          {
            label: "About Us",
            href: "/about-us",
            active: true,
          },
        ]}
      />
      <AboutUsSection />
    </main>
  );
}
