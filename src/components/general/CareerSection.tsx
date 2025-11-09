"use client";

import Image from "next/image";
import FAQSection from "../FAQ/FAQSection";
import JobCard from "../common/JobCard";

const CareerSection = () => {
  const benefits = [
    "Equal Opportunities",
    "Leaders Support",
    "Transparent Evaluation",
    "Festival Celebration",
    "All Weekends Off",
    "Favorable Working Environment",
    "Learning & Development",
    "Recreational Activities",
    "Canteen Facility",
    "Strong Work Ethics",
  ];
  const jobs = [
    {
      id: 1,
      title: "Angular Developer",
      description:
        "A retail management system is aplatform that Integrated several functions modules including technical modules…A retail management system is aplatform that Integrated several functions modules including technical modules. A retail management system is aplatform that Integrated several functions modules including technical modules.",
      jobType: "Full Time",
      experience: "1-5 Years",
      deadline: "14 November 2023",
      image: "/global/angular.png",
    },
    {
      id: 2,
      title: "React Developer",
      description:
        "A retail management system is aplatform that Integrated several functions modules including technical modules…A retail management system is aplatform that Integrated several functions modules including technical modules. A retail management system is aplatform that Integrated several functions modules including technical modules.",
      jobType: "Full Time",
      experience: "2-4 Years",
      deadline: "20 November 2023",
      image: "/global/angular.png",
    },
    {
      id: 3,
      title: "Backend Developer",
      description:
        "A retail management system is aplatform that Integrated several functions modules including technical modules…A retail management system is aplatform that Integrated several functions modules including technical modules. A retail management system is aplatform that Integrated several functions modules including technical modules.",
      jobType: "Remote",
      experience: "3-6 Years",
      deadline: "25 November 2023",
      image: "/global/angular.png",
    },
  ];

  return (
    <main className="w-full">
      <div className="">
        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-8xl mx-auto px-4 lg:px-28">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Benefits List */}
              <div className="bg-sky-400/5 rounded-3xl shadow-xl p-8 backdrop-blur-[10px] relative xs:translate-y-1/2 md:translate-x-2/10 z-20">
                <h2 className="text-xl font-semibold mb-6">
                  Benefits of working with Rapid
                </h2>
                <ul className="grid sm:grid-cols-2 gap-4 text-base">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border border-[#26ADDF]" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="w-full relative h-[469px] z-0">
                <Image
                  src="/global/career.png"
                  alt="Team"
                  fill
                  className="object-cover rounded-3xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Current Positions */}
        <section className="py-16">
          <div className="max-w-8xl mx-auto px-4 lg:px-28">
            <h2 className="text-3xl font-semibold mb-8">
              Current Open Positions
            </h2>

            <div className="grid grid-cols-1 gap-8">
              {jobs.map((job) => (
                <JobCard
                  key={job.id}
                  title={job.title}
                  description={job.description}
                  jobType={job.jobType}
                  experience={job.experience}
                  deadline={job.deadline}
                  onApply={() => alert(`Applied for ${job.title}`)}
                  image={job.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <div className="max-w-8xl mx-auto px-4 lg:px-28">
          <FAQSection />
        </div>
      </div>
    </main>
  );
};

export default CareerSection;
