import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

const projects = [
  {
    title: "Scholarship Management Web App",
    desc: `🚀 Scholarship Management System (Full-Stack Web App)
A modern and fully responsive Scholarship Management System designed to streamline the process of discovering, applying for, and managing scholarships efficiently. This platform supports multi-role access including Students, Moderators, and Admins, ensuring a complete and scalable solution.


✨ Key Features 👇
👨‍🎓 Student Panel:
1. Browse and search available scholarships
2. Apply for scholarships easily
3. Track applications from dashboard
4. Update profile information
5. Add comments & feedback

🛠️ Moderator Panel:
1. Add New scholarship 
2. Monitor student applications
3. View or Delete scholarships
4. Manage personal profile

👑 Admin Panel:
1. Full system control and access
2. Manage scholarships, users, and roles
3. Handle reviews, applications, and comments
4. Add new scholarships
5. Update admin profile`,
    img: "https://i.ibb.co.com/LDm8r35b/Natural-Mockup-Freebie-Lead-Magnet-Facebook-Post.png",
    tech: ["React", "Javascript", "Express js", "MongoDB", "Firebase", "JWT"],
    live: "https://assignment-nine-f1bfd.web.app/",
    github: " https://github.com/asadulsameerbd/Scholarship-Management-Web-App",
  },
  {
    title: "Plant Care Web App",
    desc: `🌱 Plant Tree Management System | Full-Stack Web Application
I developed a full-stack Plant Tree Management System aimed at encouraging environmental awareness and making it easier to track tree plantation activities.
This platform allows users to register, share, and explore tree plantation data, creating a collaborative space for people who care about nature and sustainability.

💡 Project Highlights

Built a full-stack web application with modern technologies
Implemented secure authentication system (Login & Registration)
Designed a user-friendly and responsive interface
Enabled users to contribute and track their own plantation activities
Created a community-driven platform to explore trees added by others

⚙️ Key Features
👤 User Features:
User registration and login system
Add new tree/plant information
View all plants added by other users
Manage and track personal added trees
Simple and clean dashboard experience`,
    img: "https://i.ibb.co.com/DfCBn4qz/Copy-of-Natural-Mockup-Freebie-Lead-Magnet-Facebook-Post-1.png",
    tech: ["React js", "Node js", "Mongo Db", "Express", "Firebase"],
    live: "https://b11-a10-76609.web.app/",
    github: "https://github.com/asadulsameerbd/B11-A10-Mango",
  },

  {
    title: "Tutor Management Web App",
    desc: `Tutor Management Web App using React.
    ⚙️ Key Features
👤 User Features:
User registration and login system
Add new Tutors information
View Tutors added by other users
Manage and track personal added Tutors
Simple and clean dashboard experience
    Feature `,
    img: "https://i.ibb.co.com/fd0G5Nfh/Copy-of-Natural-Mockup-Freebie-Lead-Magnet-Facebook-Post.png",
    tech: ["React js", "Node js", "Mongo Db", "Express", "Firebase"],
    live: "https://b11-a11-ecdf8.web.app/",
    github: "https://github.com/asadulsameerbd/b11-a11",
  },

  {
    title: "Hospital Management Web App",
    desc: `🚀 Hospital Management Web Application Using React js

A modern and user-friendly hospital management system built with React.js that streamlines doctor appointment booking and management. Users can easily browse available doctors, view detailed profiles, and book appointments in just a few clicks. The system also allows users to cancel appointments and manage their bookings efficiently through a dedicated "My Bookings" page, where all appointment details are clearly displayed.

Designed with a clean UI and smooth user experience, this project demonstrates strong front-end development skills, real-world problem solving, and efficient state management using React.js.


⚠️ This is not responsive for tablets or mobiles. This website is for demo purposes only!`,
    img: "https://i.ibb.co.com/SXjwfLXc/Copy-of-Natural-Mockup-Freebie-Lead-Magnet-Facebook-Post-3.png",
    tech: ["React js", "javascript js", "HTML", "CSS", "Tailwind CSS"],
    live: "https://voluble-belekoy-c18e6f.netlify.app/",
    github: "",
  },
];

const FeaturedProject = () => {
  return (
    <div id="projects" className="md:py-20 px-4 bg-[#060010] text-white">
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
                  <a
                    href={project?.live}
                    target="_blank"
                    className="p-3 bg-white text-black rounded-full hover:scale-110 transition"
                  >
                    <FaExternalLinkAlt />
                  </a>

                  {/* github link */}
                  <a
                    href={project?.github || ""}
                    target="_blank"
                    className="p-3 bg-white text-black rounded-full hover:scale-110 transition"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
              {/* content */}
              <div className="p-5 ">
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-400 line-clamp-3 hover:line-clamp-none transition-all duration-300">
                  {project.desc}
                </p>
                {/* tech tags */}

                <div className="flex flex-wrap gap-3 pt-5 ">
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
      <div className="flex justify-center">
        <button className="border border-blue-950 hover:border-[#5F4FFF] btn-soft cursor-pointer flex items-center justify-center px-2 md:px-5 py-2 rounded-sm">
          <HiOutlineDownload />
          View More Project
        </button>
      </div>
    </div>
  );
};

export default FeaturedProject;
