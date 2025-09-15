import Image from "next/image";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";

// ✅ Props type for SupplierHeader
interface SupplierHeaderProps {
  logo: string;
  name: string;
  type: string;
  experience: string;
  location: string;
}

// ✅ Props type for SupplierStats
interface StatItem {
  label: string;
  value: string;
}

interface SupplierStatsProps {
  stats: StatItem[];
}

const SupplierHeader: React.FC<SupplierHeaderProps> = ({
  logo,
  name,
  type,
  experience,
  location,
}) => (
  <div className="flex items-start gap-3">
    <Image
      src={logo}
      alt={name}
      width={64}
      height={64}
      className="w-16 h-16 rounded border border-neutral-200"
      
    />
    <div>
      <h3 className="text-sm font-semibold text-neutral-800 underline">
        {name}
      </h3>
      <div className="flex items-center gap-1 text-xs text-neutral-800">
        <span>{type}</span>
        <span>•</span>
        <span>{experience}</span>
      </div>
      <div className="flex items-center gap-1 text-xs text-neutral-800 mt-1">
        <IoLocationOutline className="w-4 h-4" />

        <span>{location}</span>
      </div>
    </div>
  </div>
);

const SupplierButtons: React.FC = () => (
  <div className="flex gap-3 mt-6">
    <button className="px-4 py-2 bg-sky-500 text-white rounded-full text-sm font-medium cursor-pointer">
      Company profile
    </button>
    <button className="px-4 py-2 bg-white border border-neutral-800 text-neutral-800 rounded-full text-sm font-medium cursor-pointer">
      More products
    </button>
  </div>
);

const SupplierStats: React.FC<SupplierStatsProps> = ({ stats }) => (
  <div className="bg-white rounded-lg p-5 mt-6">
    <h4 className="text-base font-bold text-neutral-800 mb-4">
      Online store performance
    </h4>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {stats.map((item, idx) => (
        <div key={idx} className="flex flex-col gap-2 min-w-[140px]">
          <span className="text-sm text-neutral-800">{item.label}</span>
          <span className="text-xl font-semibold text-neutral-800">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const SupplierCard: React.FC = () => {
  const stats: StatItem[] = [
    { label: "On-time delivery rate", value: "100.0%" },
    { label: "Online revenue", value: "US$ 1,000+" },
    { label: "Response Time", value: "≤5h" },
  ];

  return (
    <section className="w-full py-10">
      <h2 className="text-xl font-bold text-neutral-800 mb-4">
        Know your supplier
      </h2>
      <SupplierHeader
        logo="/global/Logo.png"
        name="Shenzhen Hechengdong Technology Co., Ltd"
        type="Manufacturer"
        experience="2 yrs on Alibaba.com"
        location="Located in CN"
      />
      <SupplierStats stats={stats} />
      <SupplierButtons />
    </section>
  );
};

export default SupplierCard;
