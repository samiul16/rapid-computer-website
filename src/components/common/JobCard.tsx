"use client";

import Image from "next/image";
import React from "react";
import { PrimaryBtn } from "./PrimaryBtn";

interface JobCardProps {
  title: string;
  description: string;
  jobType: string;
  experience: string;
  deadline: string;
  onApply?: () => void;
  image: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  description,
  jobType,
  experience,
  deadline,
  image,
}) => {
  return (
    <div className="w-full p-6 bg-sky-400/5 rounded-3xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[10px] flex flex-col md:flex-row gap-6 md:gap-4 items-start md:items-center">
      
      {/* Left Icon / Badge */}
      <div className="flex-shrink-0 w-full md:w-44 flex flex-col justify-start items-center gap-3">
        <div className="relative w-24 h-24 md:w-14 md:h-14 rounded-[80px] bg-[#26ADDF] overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover p-3"  />
        </div>
        <div className="text-center text-neutral-900 text-xl md:text-xl font-semibold">
          {title}
        </div>
      </div>

      {/* Middle Description */}
      <div className="flex-1 w-full flex flex-col justify-start items-start gap-4 md:gap-6">
        <div className="text-neutral-900 text-base md:text-base font-normal leading-normal line-clamp-2">
          {description}
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="px-4 py-2 rounded-full outline outline-1 outline-offset-[-1px] outline-neutral-200 flex justify-center items-center">
            <span className="text-neutral-800 text-sm md:text-base font-medium">
              Job Type: {jobType}
            </span>
          </div>
          <div className="px-4 py-2 rounded-full outline outline-1 outline-offset-[-1px] outline-neutral-200 flex justify-center items-center">
            <span className="text-neutral-800 text-sm md:text-base font-medium">
              Experience: {experience}
            </span>
          </div>
          <div className="px-4 py-2 rounded-full outline outline-1 outline-offset-[-1px] outline-neutral-200 flex justify-center items-center">
            <span className="text-neutral-800 text-sm md:text-base font-medium">
              Deadline: {deadline}
            </span>
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
        <PrimaryBtn size="md" className="uppercase font-bold w-full md:w-auto">
          Apply now
        </PrimaryBtn>
      </div>
    </div>
  );
};

export default JobCard;
