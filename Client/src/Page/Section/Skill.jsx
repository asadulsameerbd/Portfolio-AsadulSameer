import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// skill images import
import reactImg from "../../assets/skill/react.png";
import jsImg from "../../assets/skill/js.webp";
import htmlImg from "../../assets/skill/html.png";
import tailwindImg from "../../assets/skill/tailwind.png";
import nodeImg from "../../assets/skill/node.png";
import mongoImg from "../../assets/skill/mongodb.png";
import wpImg from "../../assets/skill/wordpress.png";
import css from "../../assets/skill/css3.png";
import express from "../../assets/skill/express.png";
import tanstack from "../../assets/skill/tanstack.png";
import jwt from "../../assets/skill/jwt.svg";
import woocommerce from "../../assets/skill/woocommerce.png";
import github from "../../assets/skill/github.png";
import elementor from "../../assets/skill/elementor.png";

// skills data
const skills = [
  { name: "HTML", img: htmlImg },
  { name: "CSS", img: css },
  { name: "JavaScript", img: jsImg },
  { name: "Tailwind CSS", img: tailwindImg },
  { name: "React JS", img: reactImg },
  { name: "Node.js", img: nodeImg },
  { name: "MongoDB", img: mongoImg },
  { name: "WordPress", img: wpImg },
  { name: "Express js", img: express },
  { name: "Tanstack Query", img: tanstack },
  { name: "jwt", img: jwt },
  { name: "Woocommerce", img: woocommerce },
  { name: "Github", img: github },
  { name: "Elementor", img: elementor },
];

const Skill = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);

  return (
    <div id="skill" className="pt-10 md:pt-0 pb-10">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        {/* heading */}
        <p className="text-center text-sm sm:text-base text-[#D366DC]">
          Skills
        </p>

        <h1 className="text-2xl space-grotesk sm:text-3xl md:text-4xl text-center py-4 font-semibold">
          My{" "}
          <span className="bg-gradient-to-r from-[#AC70DB] to-[#635BC0] bg-clip-text text-transparent">
            tech stack
          </span>
        </h1>

        {/* skills grid */}
        <div
          data-aos="fade-up"
          className="max-w-5xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                group
                backdrop-blur-lg
                bg-white/5
                border border-white/10
                rounded-2xl
                p-6
                flex flex-col items-center justify-center
                transition-all duration-300
                hover:bg-white/10
                hover:scale-105
                hover:border-purple-400/40
                hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
              "
            >
              {/* icon */}
              <img
                src={skill.img}
                alt={skill.name}
                className="w-14 h-14 object-contain mb-3 transition duration-300 group-hover:scale-110"
              />

              {/* text */}
              <p className="text-white text-sm tracking-wide group-hover:text-purple-300 transition">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
