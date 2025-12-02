"use client";

const TermsOfUseSection = () => {
  return (
    <div className="w-full max-w-8xl mx-auto px-4 lg:px-28 flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        <section className="mb-12">
          <h1 className="text-2xl font-semibold text-neutral-900">
            Terms of Use
          </h1>
          <p className="mt-4 text-sm text-neutral-900 leading-relaxed">
            Welcome to Rapid. By accessing or using our website, you agree to
            follow the terms and conditions outlined below. Please read them
            carefully before using our services.
          </p>
        </section>

        {/* Sections */}
        {[
          {
            title: "Acceptance of Terms",
            text: "By using this website, you agree to comply with these Terms of Use. If you do not agree, please avoid using the site.",
          },
          {
            title: "Use of the Website",
            text: "You may browse and use the website for personal, non-commercial purposes. Misuse of the site, including unauthorized access, data extraction, or harmful activity, is strictly prohibited.",
          },
          {
            title: "Product Information",
            text: "We always aim to provide accurate product details. However, prices, specifications, or availability may change without notice. Rapid reserves the right to update or modify information anytime.",
          },
          {
            title: "User Responsibilities",
            text: "You agree not to engage in activities that could harm the website, violate laws, or disrupt other users' experience.",
          },
          {
            title: "Intellectual Property",
            text: "All content on this website—including text, images, logos, and graphics—is owned by Rapid. Copying, reproducing, or distributing content without permission is not allowed.",
          },
          {
            title: "Account & Security",
            text: "If you create an account, you are responsible for maintaining the confidentiality of your login information and for all activities under your account.",
          },
          {
            title: "Third-Party Links",
            text: "Our website may contain links to external websites. Rapid is not responsible for the content, safety, or practices of third-party sites.",
          },
          {
            title: "Limitation of Liability",
            text: "Rapid is not responsible for any direct or indirect damages resulting from website use, including errors, delays, or technical issues.",
          },
          {
            title: "Privacy Protection",
            text: "We value your privacy. Any personal information shared with us will be protected according to our Privacy Policy.",
          },
          {
            title: "Changes to Terms",
            text: "Rapid may update these Terms of Use at any time. Continued use of the website means you accept any changes made.",
          },
          {
            title: "Contact Information",
            text: "If you have any questions regarding these Terms of Use, you can contact our support team through the website’s contact page.",
          },
        ].map((item, i) => (
          <section key={i} className="mb-10">
            <h2 className="text-lg font-semibold text-neutral-900">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
              {item.text}
            </p>
          </section>
        ))}
      </main>
    </div>
  );
};

export default TermsOfUseSection;
