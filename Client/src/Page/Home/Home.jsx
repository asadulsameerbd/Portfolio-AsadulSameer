import React from "react";
import DotGrid from "../../Components/DotGrid";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router";
import { HiOutlineDownload } from "react-icons/hi";

const Home = () => {
  return (
    <div className="relative w-full h-full lg:h-200 bg-[#05010a] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-60">
        <DotGrid
          dotSize={4}
          gap={18}
          baseColor="#1f1b2e"
          activeColor="#6C63FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Gradient Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6C63FF] opacity-20 blur-[120px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-20 space-y-8">
        {/* Badge */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 px-4 py-1 rounded-full shadow-lg">
          <p className="text-sm text-gray-300">
            🔵 Available for Freelance & Remote Work
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-3xl lg:text-6xl font-bold leading-tight max-w-4xl">
          Hi, I'm{" "}
          <span className="bg-linear-to-r from-[#a78bfa] to-[#6366f1] bg-clip-text text-transparent">
            Asadul Sameer
          </span>
          <br />
          <span className="text-lg lg:text-3xl font-medium text-gray-300">
            <Typewriter
              words={[
                "I Build Scalable Web Apps",
                "I Help Businesses Grow Online",
                "I Create Modern User Experiences",
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

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-lg max-w-2xl leading-relaxed">
          I build fast, modern and scalable web applications that deliver
          seamless user experiences and help businesses grow in the digital
          world.
        </p>

        {/* Tech Stack */}
        <div className="flex gap-3 flex-wrap justify-center text-xs md:text-sm text-gray-400">
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            React Js
          </span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            Node.js
          </span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            MongoDB
          </span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            Wordpress
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          {/* Primary Button */}
          <a
            href="#projects"
            className="px-8 py-3 mb-3 md:mb-0 rounded-lg bg-gradient-to-r from-[#6C63FF] to-[#8b5cf6] hover:opacity-90 transition font-semibold shadow-lg"
          >
            View My Work
          </a>

          {/* Secondary Button */}
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition font-semibold"
          >
            Hire Me
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-[#6C63FF] text-[#a78bfa] hover:bg-[#6C63FF]/10 transition flex items-center gap-2"
          >
            <HiOutlineDownload />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
