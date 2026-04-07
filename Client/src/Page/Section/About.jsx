import React, { useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { MdElectricBolt } from "react-icons/md";
import "aos/dist/aos.css";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration in ms
      once: true, // animation only once
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      id="about"
      className="w-full h-180 px-4 sm:px-6 lg:px-12 py-10 md:py-18 space-y-2"
    >
      {/* heading */}
      <p className="text-center text-sm sm:text-base text-[#D366DC]">
        ABOUT ME
      </p>

      <h1 className="text-2xl space-grotesk sm:text-3xl md:text-4xl text-center py-4 font-semibold leading-snug">
        Passionate about building{" "}
        <span className="bg-gradient-to-r from-[#AC70DB] to-[#635BC0] bg-clip-text text-transparent">
          Digital Products
        </span>
      </h1>

      {/* main content */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* left */}
        <div>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            I'm a full-stack developer with 5+ years of experience building web
            applications. I specialize in React, Node.js, and modern cloud
            architectures. I love turning complex problems into simple,
            beautiful, and intuitive solutions.
            <br /> <br />
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open source, or writing technical articles. I
            believe in continuous learning and pushing the boundaries of what's
            possible on the web.
          </p>
        </div>

        {/* right */}
        <div className="space-y-5">
          {/* card */}
          <div className="flex items-start gap-4 p-4 sm:p-5 border border-blue-950 hover:border-[#5227FE]/40 rounded-2xl transition duration-300 hover:scale-[1.02]">
            <div className="bg-[#0B0A27] p-3 rounded-xl">
              <FaCode size={20} className="text-[#675CC1]" />
            </div>

            <div>
              <h1 className="text-white text-base sm:text-lg font-medium">
                Clean Code
              </h1>
              <p className="text-gray-400 text-sm">
                Writing maintainable, scalable code with best practices.
              </p>
            </div>
          </div>

          {/* card */}
          <div className="flex items-start gap-4 p-4 sm:p-5 border border-blue-950 hover:border-[#5227FE]/40 rounded-2xl transition duration-300 hover:scale-[1.02]">
            <div className="bg-[#0B0A27] p-3 rounded-xl">
              <IoIosColorPalette size={20} className="text-[#675CC1]" />
            </div>

            <div>
              <h1 className="text-white text-base sm:text-lg font-medium">
                UI/UX Design
              </h1>
              <p className="text-gray-400 text-sm">
                Creating intuitive interfaces with stunning visuals.
              </p>
            </div>
          </div>

          {/* card */}
          <div className="flex items-start gap-4 p-4 sm:p-5 border border-blue-950 hover:border-[#5227FE]/40 rounded-2xl transition duration-300 hover:scale-[1.02]">
            <div className="bg-[#0B0A27] p-3 rounded-xl">
              <MdElectricBolt size={20} className="text-[#675CC1]" />
            </div>

            <div>
              <h1 className="text-white text-base sm:text-lg font-medium">
                Performance
              </h1>
              <p className="text-gray-400 text-sm">
                Optimizing for speed, accessibility, and SEO.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
