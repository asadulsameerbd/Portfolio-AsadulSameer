import React, { useEffect } from "react";
import { FaCode, FaLaptopCode, FaWordpress } from "react-icons/fa";
import { FcEngineering } from "react-icons/fc";
import "aos/dist/aos.css";
import AOS from "aos";

const timelineData = [
  {
    title: "Diploma in Computer Science & Technology",
    subtitle: "2023 - Present",
    desc: "Currently pursuing a diploma in Computer Science & Technology, building a strong foundation in programming, web development, and software engineering principles.",
    icon: <FcEngineering size={20} />,
  },
  {
    title: "WordPress Developer",
    subtitle: "2023",
    desc: "Completed professional WordPress development training from Mexemy and built multiple real-world projects using modern tools and technologies.",
    icon: <FaLaptopCode />,
  },
  {
    title: "WordPress Developer – Best Ever Group",
    subtitle: "2024",
    desc: "Worked as a WordPress Developer, creating and customizing websites, improving performance, and delivering client-focused solutions.",
    icon: <FaWordpress />,
  },
  {
    title: "MERN Stack Development",
    subtitle: "2025 - Present",
    desc: "Completed MERN Stack development course from Programming Hero and currently building full-stack applications using MongoDB, Express, React, and Node.js.",
    icon: <FaCode />,
  },
];

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div>
      <div className="w-full px-4 sm:px-6 lg:px-12 pt-5 md:py-0 pb-20">
        {/* heading */}
        <p
          id="experience"
          className="text-center text-sm sm:text-base text-[#D366DC]"
        >
          Journey
        </p>

        <h1 className="text-2xl space-grotesk sm:text-3xl md:text-4xl text-center py-4 font-semibold">
          Experience &{" "}
          <span className="bg-gradient-to-r from-[#AC70DB] to-[#635BC0] bg-clip-text text-transparent">
            Education
          </span>
        </h1>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto mt-12">
          {/* center line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-linear-to-b from-[#5227FD] via-[#AC70DB] to-transparent transform -translate-x-1/2"></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-delay={index * 200} // stagger effect
            >
              <div className="hidden md:block md:w-1/2"></div>

              {/* ICON DOT */}
              <div className="z-10 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#AC70DB] to-[#5227FD] rounded-full shadow-lg border-4 border-[#060010] text-white text-lg">
                {item.icon}
              </div>

              {/* content */}
              <div className="w-full md:w-1/2 mt-4 md:mt-0 px-4">
                <div className="bg-[#0B0120] border border-[#2A1B5E] p-5 rounded-2xl shadow-lg hover:shadow-[#5227FD]/30 transition duration-300 hover:-translate-y-1">
                  <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                    {item.icon}
                    {item.title}
                  </h2>
                  <span className="text-sm text-[#AC70DB]">
                    {item.subtitle}
                  </span>
                  <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
