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
const ContactForm = () => (
  <div className="w-full md:col-span-2 p-6 bg-sky-400/5 rounded-2xl shadow-md backdrop-blur-sm flex flex-col gap-4">
    {["Name", "Email", "Mobile Number", "Country"].map((field) => (
      <div key={field} className="flex flex-col gap-2">
        <label className="text-zinc-600 text-lg font-medium font-barlow">
          {field}
        </label>
        <input
          type="text"
          placeholder={field}
          className="h-14 px-4 bg-white rounded-full focus:outline outline-sky-500 text-zinc-500 text-base font-barlow"
        />
      </div>
    ))}
    <PrimaryBtn className="mt-4 font-bold py-3">Submit Now</PrimaryBtn>
  </div>
);

// ---------------------- Contact Info Cards ----------------------
const InfoCard = ({ icon, title, content }: InfoCardProps) => (
  <div className="w-full p-4 bg-sky-400/5 rounded-full border border-sky-400/20 shadow-md flex items-center gap-4">
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
  <div className="flex flex-col gap-6 w-full">
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
    <div className="max-w-7xl mx-auto px-4 flex flex-col">
      <main className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
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
      <section className=" my-10">
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
  );
};

export default ContactPageSection;
