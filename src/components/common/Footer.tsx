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

export function SocialIcon({
  icon,
  href,
  bgColor = "#26ADDF",
  borderColor = "#20B8FB",
}: SocialIconProps) {
  return (
    <div className="group w-12 h-12 border hover:bg-[#20B8FB] border-[#20B8FB] p-1.5 rounded-full cursor-pointer duration-500">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundColor: bgColor, borderColor }}
        className="w-full h-full flex items-center justify-center rounded-full border group-hover:bg-[#20B8FB] text-[#041A65] group-hover:text-white transition hover:bg-white duration-500"
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
              className="hover:text-[#20B8FB] transition text-base"
              style={{ fontFamily: "Barlow, sans-serif" }}
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
  return (
    <footer className="bg-gradient-to-br from-blue-950 to-blue-700 text-white pt-10 pb-8 px-8 md:px-28 rounded-tl-[50px] rounded-tr-[50px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* Logo & About */}
        <div className="flex flex-col gap-4 md:col-span-2">
          <Image
            src="/global/Logo.png"
            alt="Rapid Logo"
            width={262}
            height={80}
            priority
          />
          <p
            className="text-base text-white"
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

        {/* Contact */}
        <FooterLinkGroup
          title="Contact"
          links={[
            { label: "Al Rashidiya 1 - Ajman - United Arab Emirates" },
            { label: "+1 (800) 123-4567" },
            { label: "support@rapid.com" },
          ]}
        />

        {/* Help & Support */}
        <FooterLinkGroup
          title="Help & Support"
          links={[
            { label: "Shipping Info" },
            { label: "Returns" },
            { label: "How to Order" },
            { label: "How to Track" },
            { label: "How to Confirm" },
          ]}
        />

        {/* Company Info */}
        <FooterLinkGroup
          title="Company Info"
          links={[
            { label: "About Us" },
            { label: "Our Blog", href: "/blogs" },
            { label: "Careers" },
            { label: "Store Location" },
            { label: "Testimonial" },
          ]}
        />

        {/* Customer Care */}
        <FooterLinkGroup
          title="Customer Care"
          links={[
            { label: "FAQ", href: "/faq" },
            { label: "Terms Of Service" },
            { label: "Privacy Policy" },
            { label: "Contact Us", href: "/contact-us" },
            { label: "Gift Card" },
          ]}
        />
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-8 border-t border-white pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
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
          {[1, 2, 3, 4].map((_, i) => (
            <Image
              key={i}
              src="/global/pay.png"
              alt="App Store"
              width={62}
              height={32}
              className="rounded"
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
