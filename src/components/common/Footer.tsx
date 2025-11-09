"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

interface SocialIconProps {
  icon: ReactNode;
  href: string;
  bgColor?: string;
  borderColor?: string;
  hoverBg?: string;
}

export function SocialIcon({ icon, href }: SocialIconProps) {
  return (
    <div className="group w-12 h-12 border hover:bg-white border-white p-1.5 rounded-full cursor-pointer duration-500">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full flex items-center justify-center rounded-full border border-white bg-white text-sky-500 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 transition duration-500"
      >
        {icon}
      </Link>
    </div>
  );
}

interface FooterLinkGroupProps {
  title: string;
  links: { label: string; href?: string }[];
}

function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <div className="flex flex-col gap-4">
      <h4
        className="text-xl font-bold"
        style={{ fontFamily: "Barlow, sans-serif" }}
      >
        {title}
      </h4>
      <div className="flex flex-col gap-2">
        {links.map((link, idx) =>
          link.href ? (
            <Link
              key={idx}
              href={link.href}
              className="hover:text-sky-200 transition text-base"
              style={{ fontFamily: "Barlow, sans-serif" }}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
            >
              {link.label}
            </Link>
          ) : (
            <span
              key={idx}
              className="text-base"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              {link.label}
            </span>
          )
        )}
      </div>
    </div>
  );
}

export default function Footer() {
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <footer className="bg-sky-500 text-white pt-10 pb-8 rounded-tl-[50px] rounded-tr-[50px] relative">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8 px-4 lg:px-28">
        {/* Logo & About */}
        <div className="flex flex-col gap-4 md:col-span-2">
          <Image
            src="/whiteRapid.png"
            alt="Rapid Logo"
            width={200}
            height={80}
            priority
          />
          <p
            className="text-base text-white md:w-[80%]"
            style={{ fontFamily: "noto, sans-serif" }}
          >
            Rapid is your go-to destination for quality products at unbeatable
            prices.
          </p>
          <div className="flex gap-3">
            <SocialIcon icon={<FaFacebookF />} href="https://facebook.com" />
            <SocialIcon icon={<FaTwitter />} href="https://twitter.com" />
            <SocialIcon icon={<FaInstagram />} href="https://instagram.com" />
            <SocialIcon icon={<FaLinkedinIn />} href="https://linkedin.com" />
          </div>
        </div>

        {/* Help & Support */}
        <FooterLinkGroup
          title="Help & Support"
          links={[
            { label: "Shipping Info", href: "/help-support" },
            { label: "Returns", href: "/help-support" },
            { label: "How to Order", href: "/help-support" },
            { label: "How to Track", href: "/help-support" },
            { label: "How to Confirm", href: "/help-support" },
          ]}
        />

        {/* Company Info */}
        <FooterLinkGroup
          title="Company Info"
          links={[
            { label: "About Us", href: "/about-us" },
            { label: "Our Blog", href: "/blogs" },
            { label: "Careers", href: "/career" },
            {
              label: "Store Location",
              href: "https://maps.google.com/?q=Al+Rashidiya+1+Ajman+United+Arab+Emirates",
            },
            { label: "Testimonial" },
          ]}
        />

        {/* Customer Care */}
        <FooterLinkGroup
          title="Customer Care"
          links={[
            { label: "FAQ", href: "/faq" },
            { label: "Terms Of Service", href: "/terms-of-use" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Contact Us", href: "/contact-us" },
            { label: "Gift Card", href: "/gift-card" },
          ]}
        />

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h4
            className="text-xl font-bold"
            style={{ fontFamily: "Barlow, sans-serif" }}
          >
            Contact
          </h4>
          <div className="flex flex-col gap-6">
            <span
              className="text-base"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              Al Rashidiya 1 - Ajman - United Arab Emirates
            </span>
            <span
              className="text-base"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              +1 (800) 123-4567
            </span>
            <span
              className="text-base"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              support@rapid.com
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-8xl mx-auto mt-8 border-t border-white pt-4 flex flex-col md:flex-row justify-between items-center gap-4 px-4 lg:px-14">
        <span style={{ fontFamily: "Barlow, sans-serif" }}>
          © {new Date().getFullYear()} Rapid. All Rights Reserved.
        </span>
        <span
          className="underline cursor-pointer"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Download Our App
        </span>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((num) => (
            <Image
              key={num}
              src={`/global/${num}.png`}
              alt={`Payment Method ${num}`}
              width={50}
              height={30}
              className="rounded cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Scroll to Top Button - Footer Bottom Left */}
      {/* <button
        onClick={scrollToTop}
        className="absolute bottom-8 left-8 w-12 h-12 bg-sky-600 hover:bg-sky-700 rounded-full flex items-center justify-center transition-colors shadow-lg cursor-pointer z-10"
        aria-label="Scroll to top"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button> */}
    </footer>
  );
}
