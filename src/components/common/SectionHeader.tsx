import React from "react";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="flex justify-between items-end">
      <h2 className="text-4xl font-bold font-poppins text-black">{title}</h2>
    </div>
  );
};

export default SectionHeader;
