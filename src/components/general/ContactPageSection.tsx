"use client";

import React from "react";
import { PrimaryBtn } from "../common/PrimaryBtn";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { CiClock1 } from "react-icons/ci";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

// ---------------------- Contact Form ----------------------
const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
  });
  const [focusedField, setFocusedField] = React.useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const fields = [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "mobile", label: "Mobile Number", type: "tel" },
    { name: "country", label: "Country", type: "text" },
  ];

  return (
    <div className="w-full md:col-span-2 p-6 bg-white rounded-2xl shadow-lg backdrop-blur-sm flex flex-col gap-6">
      {fields.map((field) => (
        <div key={field.name} className="relative">
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name as keyof typeof formData]}
            onChange={handleChange}
            onFocus={() => setFocusedField(field.name)}
            onBlur={() => setFocusedField(null)}
            placeholder=" "
            className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 text-gray-900 text-base font-normal font-barlow focus:outline-none focus:border-sky-500 transition-all peer placeholder-transparent h-14"
          />
          <label
            className={`absolute left-3 top-0 bg-white px-1 transition-all duration-200 pointer-events-none font-barlow ${
              formData[field.name as keyof typeof formData] ||
              focusedField === field.name
                ? "-translate-y-1/2 text-xs text-sky-500"
                : "translate-y-3.5 text-base text-gray-500"
            }`}
          >
            {field.label}
          </label>
        </div>
      ))}
      <PrimaryBtn className="mt-4 font-bold py-3 px-6 self-start w-fit">
        Submit Now
      </PrimaryBtn>
    </div>
  );
};

// ---------------------- Contact Info Cards ----------------------
const InfoCard = ({ icon, title, content }: InfoCardProps) => (
  <div className="w-full p-3 bg-white rounded-full border border-sky-400/20 shadow-md flex items-center gap-4 hover:bg-sky-200 transition-all duration-300">
    <div className="w-12 h-12 flex items-center justify-center bg-sky-500 text-white rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="text-2xl font-semibold font-barlow text-neutral-900">
        {title}
      </h3>
      <p className="text-base font-barlow text-neutral-900">{content}</p>
    </div>
  </div>
);

const ContactInfoCards = () => (
  <div className="flex flex-col gap-9 w-full">
    <InfoCard
      title="Email"
      content="rapidcomputer@gmail.com"
      icon={<TfiEmail size={20} />}
    />
    <InfoCard
      title="Phone"
      content="+971 4 439 7277"
      icon={<MdOutlinePhoneInTalk size={20} />}
    />
    <InfoCard
      title="Address"
      content="Jumeirah Lake Towers - Dubai"
      icon={<SlLocationPin size={20} />}
    />
    <InfoCard
      title="Opening Hours"
      content="9 am - 6 pm | Closed: Sunday"
      icon={<CiClock1 size={20} />}
    />
  </div>
);

// ---------------------- Page ----------------------
const ContactPageSection = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 lg:px-28">
      <div className=" flex flex-col">
        <main className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10 items-center">
          <ContactForm />
          <ContactInfoCards />
        </main>

        {/* <section className="px-28 my-10">
        <Image
          src="https://placehold.co/1200x500"
          width={1200}
          height={500}
          alt="Map"
          className="rounded-3xl w-full"
        />
      </section> */}
        <section className=" my-10 shadow-xl overflow-hidden rounded-3xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1157622.503320046!2d54.568041327437584!3d25.0745656650172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sbd!4v1757139579930!5m2!1sen!2sbd"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            className="rounded-3xl w-full"
          ></iframe>
        </section>
      </div>
    </div>
  );
};

export default ContactPageSection;
