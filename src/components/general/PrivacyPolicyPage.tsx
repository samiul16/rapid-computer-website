"use client";

const PrivacyPolicyPage = () => {
  return (
    <main className="max-w-8xl mx-auto px-4 lg:px-28 flex-1">
      <section className="mb-12">
        <h1 className="text-3xl font-semibold text-neutral-900">
          Privacy Policy
        </h1>
        <p className="text-sm text-neutral-600 mt-2">
          By Jonh | 9 April 2020 | 8 mins read | 29k Views
        </p>
        <p className="mt-4 text-base text-neutral-800 leading-relaxed">
          Please read these Terms of Service (“Terms”, “Terms of Service”)
          carefully before using the{" "}
          <a
            href="https://Evara.com"
            className="text-sky-500 underline font-semibold"
          >
            https://Evara.com
          </a>{" "}
          website (the “Service”) operated by Evara (“us”, “we”, or “our”). Your
          access to and use of the Service is conditioned on your acceptance of
          and compliance with these Terms.
        </p>
      </section>

      {/* Sections */}
      {[
        "The type of personal information we collect",
        "Termination",
        "Governing Law",
        "Changes",
      ].map((title, i) => (
        <section key={i} className="mb-10">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
            {title}
          </h2>
          <p className="text-base text-slate-800 leading-relaxed text-justify">
            Our Service may contain links to third-party web sites or services
            that are not owned or controlled by Evara. Evara has no control
            over, and assumes no responsibility for, the content, privacy
            policies, or practices of any third party web sites or services.
          </p>
        </section>
      ))}
    </main>
  );
};

export default PrivacyPolicyPage;
