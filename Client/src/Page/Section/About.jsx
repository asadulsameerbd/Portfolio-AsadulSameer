import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import me from "../../assets/me.jpg"; // 👈 তোমার image path

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);

  return (
    <div
      data-aos="fade-up"
      id="about"
      className="w-full  px-4 sm:px-6 lg:px-12 py-20 md:py-12 lg:py-40 space-y-2"
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
      <div className="max-w-7xl py-10 mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* left (text) */}
        <div>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Hello! I’m Asadul Sameer, a passionate Full-Stack Web Developer and
            Designer from Bangladesh. I specialize in building clean, modern,
            and responsive websites and web applications using React, Tailwind
            CSS, Node.js, Express.js, MongoDB, Firebase, and WordPress. I enjoy
            turning ideas into fully functional digital products that are
            intuitive, fast, and impactful.
            <br /> <br />
            Currently, I’m advancing my skills in Full-Stack Development and
            learning to deliver end-to-end web solutions. My experience with
            both frontend and backend technologies allows me to solve problems
            efficiently while focusing on user-first designs.My goal is to
            create meaningful solutions that not only meet client needs but also
            provide value to users. I strongly believe in continuous learning,
            collaboration, and adopting best practices in the ever-evolving web
            industry.
          </p>
        </div>

        {/* right (profile image) */}
        <div className="flex justify-center items-center relative">
          {/* glow ring */}
          <div className="absolute w-60 h-60 md:w-72 md:h-72 rounded-full bg-purple-500 blur-3xl opacity-20"></div>

          {/* profile image */}
          <img
            src={me}
            alt="Profile"
            className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full border-4 border-[#5227FD] shadow-[0_0_40px_#5227FD]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
