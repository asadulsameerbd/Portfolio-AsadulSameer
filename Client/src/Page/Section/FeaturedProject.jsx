import React, { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";

const projects = [
  {
    title: "Scholarship Management Web App",
    desc: `🚀 Scholarship Management System (Full-Stack Web App) ...`,
    img: "https://i.ibb.co.com/LDm8r35b/Natural-Mockup-Freebie-Lead-Magnet-Facebook-Post.png",
    tech: ["React", "Javascript", "Express js", "MongoDB", "Firebase", "JWT"],
    live: "https://assignment-nine-f1bfd.web.app/",
    github: "https://github.com/asadulsameerbd/Scholarship-Management-Web-App",
  },
  {
    title: "Plant Care Web App",
    desc: `🌱 Plant Tree Management System | Full-Stack Web Application ...`,
    img: "https://i.ibb.co.com/DfCBn4qz/Copy-of-Natural-Mockup-Freebie-Lead-Magnet-Facebook-Post-1.png",
    tech: ["React js", "Node js", "Mongo Db", "Express", "Firebase"],
    live: "https://b11-a10-76609.web.app/",
    github: "https://github.com/asadulsameerbd/B11-A10-Mango",
  },
  {
    title: "Tutor Management Web App",
    desc: `Tutor Management Web App using React ...`,
    img: "https://i.ibb.co.com/fd0G5Nfh/Copy-of-Natural-Mockup-Freebie-Lead-Magnet-Facebook-Post.png",
    tech: ["React js", "Node js", "Mongo Db", "Express", "Firebase"],
    live: "https://b11-a11-ecdf8.web.app/",
    github: "https://github.com/asadulsameerbd/b11-a11",
  },
  {
    title: "Hospital Management Web App",
    desc: `🚀 Hospital Management Web Application Using React js ...`,
    img: "https://i.ibb.co.com/SXjwfLXc/Copy-of-Natural-Mockup-Freebie-Lead-Magnet-Facebook-Post-3.png",
    tech: ["React js", "javascript js", "HTML", "CSS", "Tailwind CSS"],
    live: "https://voluble-belekoy-c18e6f.netlify.app/",
    github: "",
  },
];

const FeaturedProject = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);

  return (
    <div id="projects" className="pb-20 lg:py-20 px-4 bg-[#060010] text-white">
      {/* heading */}
      <p className="text-center text-sm sm:text-base text-[#D366DC]">
        Portfolio
      </p>
      <h1 className="text-2xl space-grotesk sm:text-3xl md:text-4xl text-center py-4 font-semibold">
        Featured{" "}
        <span className="bg-gradient-to-r from-[#AC70DB] to-[#635BC0] bg-clip-text text-transparent">
          Projects
        </span>
      </h1>

      {/* cards */}
      <div className="py-20 px-4 bg-[#060010] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-[#0B0223] border border-[#1E0F4A]"
              data-aos={i % 2 === 0 ? "fade-up" : "fade-down"}
              data-aos-delay={i * 200} // stagger animation
            >
              {/* image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.img}
                  alt=""
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* 🔥 hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                  {/* live link */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="p-3 bg-white text-black rounded-full hover:scale-110 transition"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {/* github link */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="p-3 bg-white text-black rounded-full hover:scale-110 transition"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>

              {/* content */}
              <div className="p-5">
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-400 line-clamp-3 hover:line-clamp-none transition-all duration-300">
                  {project.desc}
                </p>

                {/* tech tags */}
                <div className="flex flex-wrap gap-3 pt-5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-[#140A3A] border border-[#2B1B6B] text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View More button */}
      <div className="flex justify-center -my-5">
        <Link
          to={`/projects`}
          className="border border-blue-950 hover:border-[#5F4FFF] btn-soft cursor-pointer flex items-center justify-center px-2 md:px-5 py-2 rounded-sm"
        >
          <HiOutlineDownload />
          View More Project
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProject;
