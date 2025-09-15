"use client";
import Image from "next/image";
import React from "react";
import VideoPlayer from "./VideoPlayer";

// ✅ Reusable Section Title
const SectionTitle = ({ title }: { title: string }) => (
  <div className="w-full border-b-2 border-slate-600 py-2">
    <h2 className="text-slate-600 text-2xl font-semibold">{title}</h2>
  </div>
);

// ✅ Reusable Key-Value Row (like specification)
const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="grid grid-cols-3 gap-4 border border-stone-300 rounded p-2 text-sm w-full">
    <span className="font-medium text-zinc-900">{label}</span>
    <span className="col-span-2 text-zinc-800">{value}</span>
  </div>
);

// ✅ Reusable Image Block
const ImageBlock = ({ src, alt }: { src: string; alt?: string }) => (
  <div className="w-full h-72 overflow-hidden rounded-lg">
    <Image
      width={600}
      height={470}
      // src={src}
      src="/global/laptop.png"
      alt={alt || "Product image"}
      className="w-full h-full object-cover"
      
    />
  </div>
);

// ✅ Main Component
const DescriptionCardTab = () => {
  return (
    <div className="w-full flex flex-col gap-8 pt-10 border-t border-neutral-200">
      {/* Title */}
      <h1 className="text-xl font-bold text-neutral-800">
        Product descriptions from the supplier
      </h1>

      {/* Video Description */}
      <VideoPlayer url="https://youtu.be/CBxgZxjdJyk?si=uc8QDC4BXIY09qWp" />


      {/* Specifications */}
      <SectionTitle title="Specifications" />
      <div className="grid gap-3 max-w-3xl">
        <InfoRow label="Storage Environment" value="Temperature：-20~60℃" />
        <InfoRow label="Humidity" value="10%~90%RH (No condensation)" />
        <InfoRow
          label="Operating System"
          value="Android 11, multiple languages available"
        />
        <InfoRow label="Default Language" value="Chinese" />
        <InfoRow
          label="Software System"
          value="Based on customer requirements"
        />
        <InfoRow label="Certification" value="CCC" />
      </div>

      {/* Packing & Delivery */}
      <SectionTitle title="Packing & Delivery" />
      <div className="grid md:grid-cols-2 gap-4">
        <ImageBlock src="https://placehold.co/520x389" />
        <ImageBlock src="https://placehold.co/373x280" />
      </div>
      <p className="text-lg text-zinc-950 leading-relaxed max-w-3xl">
        Foam board and carton box are used together to protect the machine. We
        use the most reasonable packing way to protect the machine and save your
        money. We support all shipping methods: by air, by sea, by train.
      </p>

      {/* Company Profile */}
      <SectionTitle title="Company Profile" />
      <div className="flex flex-col gap-4">
        <ImageBlock src="https://placehold.co/750x422" />
        <div className="grid md:grid-cols-2 gap-4">
          <ImageBlock src="https://placehold.co/373x280" />
          <ImageBlock src="https://placehold.co/373x497" />
        </div>
        <p className="text-lg text-zinc-950 leading-relaxed max-w-3xl">
          HeChengDong, founded in August 2018 in Shenzhen, China. It currently
          has 250+ employees, including 50+ R&D technicians. We are a one-stop
          cash register hardware manufacturer, providing OEM/ODM services
          covering product design, development, PCBA & POS machine production,
          quality management, and after-sales service.
        </p>
      </div>

      {/* FAQ */}
      <SectionTitle title="FAQ" />
      <div className="flex flex-col gap-6 max-w-3xl">
        {[
          {
            q: "Are you a manufacturer?",
            a: "Yes, we are a professional manufacturer for POS hardware equipments.",
          },
          {
            q: "What warranty do you offer?",
            a: "Each product comes with a 1-year warranty. We provide online support and free spare parts for bulk orders.",
          },
          {
            q: "Do you support OEM & ODM?",
            a: "Yes, we are a factory and fully support OEM & ODM projects.",
          },
          {
            q: "What payment methods do you accept?",
            a: "We mainly accept Trade Assurance, T/T, and Western Union.",
          },
        ].map((faq, i) => (
          <div key={i}>
            <p className="font-bold text-zinc-950">{`Q${i + 1}: ${faq.q}`}</p>
            <p className="text-zinc-800">{`A: ${faq.a}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescriptionCardTab;
