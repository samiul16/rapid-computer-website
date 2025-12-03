"use client";

import Image from "next/image";
import FAQSection from "../FAQ/FAQSection";
import JobCard from "../common/JobCard";

const CareerSection = () => {
  const benefits = [
    "Equal Opportunities",
    "Supportive Leadership",
    "Transparent Evaluations",
    "Festival Celebrations",
    "Weekends Off",
    "Positive Work Environment",
    "Learning & Development",
    "Recreational Activities",
    "Canteen Facility",
    "Strong Work Ethics",
  ];

  const jobs = [
    {
      id: 1,
      title: "Software Developer",
      location: "Remote, Dubai",
      jobType: "Full-Time, Remote",
      experience: "Mid-Level/Senior-Level",
      deadline: "30 Jan 2025",
      description: `
      Develop and maintain high-quality ERP software solutions.
      Collaborate with cross-functional teams to design and implement new features.
      Debug issues, write clean and maintainable code, and ensure performance and security standards.
      `,
      details: {
        jobTitle: "Software Developer",
        salary: "Competitive and based on experience",
        responsibilities: [
          "Develop and maintain high-quality ERP software solutions.",
          "Collaborate with cross-functional teams on new feature development.",
          "Write clean, efficient, maintainable code.",
          "Debug and troubleshoot software issues.",
          "Participate in code reviews.",
          "Ensure performance, scalability, and security.",
        ],
        qualifications: [
          "Bachelor's degree in Computer Science or related field.",
          "Experience in ERP or enterprise software development.",
          "Strong programming skills (Python, Java, C#, etc.).",
          "Database skills (SQL, MySQL, PostgreSQL).",
          "Experience with cloud platforms and APIs (bonus).",
          "Strong problem-solving skills.",
        ],
        applyEmail: "careers@rapidworld.com",
      },
      image: "/global/career.png",
    },

    {
      id: 2,
      title: "UI/UX Designer",
      location: "Remote, Dubai",
      jobType: "Full-Time, Remote",
      experience: "Mid-Level/Senior-Level",
      deadline: "30 Jan 2025",
      description: `
      Design user-friendly interfaces, create wireframes, prototypes, and collaborate with development teams.
      Maintain design systems and ensure consistent user experiences.
      `,
      details: {
        jobTitle: "UI/UX Designer",
        salary: "Competitive and based on experience",
        responsibilities: [
          "Design intuitive user interfaces and experiences.",
          "Create wireframes, prototypes, and user flows.",
          "Conduct usability testing and user research.",
          "Collaborate with teams to implement UI/UX improvements.",
          "Manage and update design systems.",
        ],
        qualifications: [
          "Bachelor’s degree in Design or related field.",
          "Proficiency in Adobe XD, Figma, Sketch, Photoshop.",
          "Knowledge of HTML/CSS/JS (bonus).",
          "2–6 years of experience in UI/UX roles.",
          "Strong design portfolio.",
        ],
        applyEmail: "careers@rapidworld.com",
      },
      image: "/global/career.png",
    },

    {
      id: 3,
      title: "React Developer",
      location: "Remote, Dubai",
      jobType: "Full-Time, Remote",
      experience: "Mid-Level/Senior-Level",
      deadline: "30 Jan 2025",
      description: `
      Develop modern front-end applications using React.js, optimize performance, and collaborate with backend teams.
      `,
      details: {
        jobTitle: "React Developer",
        salary: "Competitive and based on experience",
        responsibilities: [
          "Build high-quality React.js applications.",
          "Work with RESTful APIs and asynchronous programming.",
          "Use state management tools like Redux/Context.",
          "Optimize front-end performance.",
          "Collaborate with backend and design teams.",
        ],
        qualifications: [
          "Bachelor’s degree in CS or related field.",
          "2+ years experience with React.js.",
          "Strong understanding of React principles.",
          "Experience with Redux/Context/MobX.",
          "Familiarity with Next.js (bonus).",
        ],
        applyEmail: "careers@rapidworld.com",
      },
      image: "/global/career.png",
    },

    {
      id: 4,
      title: "PHP Laravel Developer",
      location: "Remote, Dubai",
      jobType: "Full-Time, Remote",
      experience: "Mid-Level/Senior-Level",
      deadline: "30 Jan 2025",
      description: `
      Build and maintain Laravel-based applications, optimize databases, and collaborate with cross-functional teams.
      `,
      details: {
        jobTitle: "PHP Laravel Developer",
        salary: "Competitive and based on experience",
        responsibilities: [
          "Develop and maintain Laravel applications.",
          "Optimize MySQL databases.",
          "Work with REST APIs and backend logic.",
          "Collaborate with front-end and cloud teams.",
          "Manage deployment processes.",
        ],
        qualifications: [
          "Bachelor’s degree in CS or related field.",
          "2+ years experience with Laravel.",
          "Knowledge of HTML, CSS, JS.",
          "Experience with Docker/AWS is a plus.",
          "Understanding of OAuth/JWT.",
        ],
        applyEmail: "careers@rapidworld.com",
      },
      image: "/global/career.png",
    },
  ];

  return (
    <main className="w-full">
      <div>
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

              {/* Right Image */}
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

        {/* Current Open Positions */}
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
                  location={job.location}
                  onApply={() =>
                    (window.location.href = `mailto:${job.details.applyEmail}`)
                  }
                  image={job.image}
                  jobId={job.id}
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
