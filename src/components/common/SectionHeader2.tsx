"use client";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

const SectionHeader2 = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div>
      <h2 className="text-4xl sm:text-4xl font-bold text-sky-500 text-shadow-md">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-gray-600 mt-2">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader2;
