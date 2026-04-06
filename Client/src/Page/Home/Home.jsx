import React from "react";
import DotGrid from "../../Components/DotGrid";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router";
import { HiOutlineDownload } from "react-icons/hi";
import { TbArrowDownRhombusFilled } from "react-icons/tb";

const Home = () => {
  return (
    <div className="w-full h-145 md:h-215 relative bg-[#060010]">
      {/* DotGrid Background */}
      <div className="absolute inset-0">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-6">
        {/* Status Badge */}
        <div className="flex items-center gap-3 backdrop-blur-md bg-white/10 border px-3 py-1.5 rounded-full border-[#5227FE]/40 shadow-lg">
          <div className="relative">
            <div className="absolute w-3 h-3 bg-[#5227FE] rounded-full animate-ping"></div>
            <div className="w-3 h-3 bg-[#5227FE] rounded-full"></div>
          </div>
          <p className="text-sm">Available For Freelance Work</p>
        </div>

        {/* Heading */}
        <h1 className="text-xl md:text-4xl lg:text-6xl space-grotesk  font-bold text-center leading-tight">
          HI, {""}
          {/* Gradient + Typing */}
          <span className="bg-gradient-to-r from-[#AC70DB] to-[#635BC0] bg-clip-text text-transparent drop-shadow-lg">
            <Typewriter
              words={[
                "I'M ASADUL SAMEER",
                "A MERN STACK DEVELOPER",
                "A WORDPRESS DEVELOPER",
                "A FRONTEND DEVELOPER",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </span>
        </h1>

        {/* description  */}
        <p className="text-center text-gray-500 text-sm md:text-lg lg:text-xl md:w-195">
          Full Stack Web Developer crafting performant, beautiful digital
          experiences with modern technologies. Hire Me
        </p>

        {/* hire & view project btn */}
        <div className="flex items-center gap-5  md:mx-0">
          <div>
            <a
              href="#contact"
              className="relative inline-flex items-center justify-start inline-block px-5 md:px-10 py-2 overflow-hidden font-bold rounded-sm group"
            >
              <span className="md:w-32 md:h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                Hire Me
              </span>
              <span className="absolute inset-0 border-2 border-white rounded-sm"></span>
            </a>
          </div>

          {/* view project */}
          <div>
            <a
              href="/resume.pdf"
              target="_blank"
              className="border border-blue-950 hover:border-[#5F4FFF] btn-soft cursor-pointer flex items-center justify-center px-2 md:px-5 py-2 rounded-sm"
            >
              <HiOutlineDownload />
              Resume
            </a>
          </div>
        </div>
        {/* scroll */}
        <div className="mt-20">
          <p className="text-gray-500 text-sm tracking-widest   animate-bounce">
            SCROLL{" "}
            <TbArrowDownRhombusFilled
              className="text-center ml-5 mt-3 "
              color="#5244FF"
              size={20}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
