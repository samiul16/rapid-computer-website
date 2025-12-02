"use client";

const PrivacyPolicyPage = () => {
  return (
    <main className="max-w-8xl mx-auto px-4 lg:px-28 flex-1">
      <section className="mb-12">
        <h1 className="text-3xl font-semibold text-neutral-900">
          Privacy Policy
        </h1>

        <p className="mt-4 text-base text-neutral-800 leading-relaxed">
          At Rapid, we are committed to protecting your personal information and
          ensuring a safe online shopping experience. This Privacy Policy
          explains how we collect, use, and safeguard your data when you visit
          or make a purchase on our website.
        </p>
      </section>

      {/* Sections */}
      {[
        {
          title: "1. Information We Collect",
          points: [
            "Personal details: name, email, phone number, address",
            "Account details: username, password (encrypted)",
            "Order information: product purchases, billing and shipping details",
            "Technical data: IP address, browser type, device information",
            "Cookies: to improve browsing experience and website performance",
          ],
        },
        {
          title: "2. How We Use Your Information",
          points: [
            "Process and deliver orders",
            "Provide customer service and support",
            "Improve website performance and user experience",
            "Send updates, promotions, and notifications (only if you subscribe)",
            "Maintain security and prevent fraudulent activities",
          ],
        },
        {
          title: "3. Sharing Your Information",
          points: [
            "We do not sell or rent your personal information.",
            "Delivery and courier partners",
            "Payment gateway providers",
            "Service providers supporting website operations",
            "All partners follow strict privacy and security standards.",
          ],
        },
        {
          title: "4. Data Security",
          points: [
            "We use strong security measures to protect your information.",
            "No online transmission is 100% secure; users should protect their account info.",
          ],
        },
        {
          title: "5. Cookies & Tracking",
          points: [
            "Remember your browsing preferences",
            "Improve shopping experience",
            "Analyze website traffic and performance",
            "You can disable cookies from browser settings",
          ],
        },
        {
          title: "6. Your Rights",
          points: [
            "Access the personal information we hold",
            "Request correction or updates",
            "Request deletion of your data (where legally applicable)",
            "Unsubscribe from promotional emails anytime",
          ],
        },
        {
          title: "7. Third-Party Links",
          points: [
            "We may link to other websites.",
            "We are not responsible for their privacy practices or content.",
          ],
        },
        {
          title: "8. Changes to This Policy",
          points: [
            "We may update the Privacy Policy occasionally.",
            "Changes will be posted here with an updated revision date.",
          ],
        },
        {
          title: "9. Contact Us",
          points: [
            "For questions regarding the Privacy Policy or your data, contact us through the website support section.",
          ],
        },
      ].map((section, i) => (
        <section key={i} className="mb-10">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
            {section.title}
          </h2>

          <ul className="text-base text-slate-800 leading-relaxed text-justify space-y-2">
            {section.points.map((point, idx) => (
              <li key={idx} className="flex gap-2 items-start">
                <span className="mt-2 h-2 w-2 rounded-full bg-sky-500"></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
};

export default PrivacyPolicyPage;
