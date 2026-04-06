import React, { useEffect, useState } from "react";
import me from "../../assets/me.jpg";

const skills = [
  { name: "React JS", level: 92, color: "from-blue-400 to-blue-600" },
  { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-600" },
  { name: "HTML & CSS", level: 95, color: "from-orange-400 to-pink-500" },
  { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-blue-500" },
  { name: "Node.js", level: 75, color: "from-green-400 to-green-600" },
  { name: "MongoDB", level: 85, color: "from-emerald-400 to-green-700" },
  { name: "WordPress", level: 95, color: "from-indigo-400 to-indigo-700" },
];

const Skill = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(true); // component load হলে animation start
  }, []);

  return (
    <div id="skill" className=" md:mt-0">
      <div className="w-full px-4 sm:px-6 lg:px-12 py-20 ">
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

        {/* container */}
        <div className="flex flex-col md:flex-row -z-50 ">
          {/* me */}
          <div className="flex-1 flex justify-center items-start top-10 md:top-19 relative">
            {/* Animated ring */}
            <div className="absolute w-65 h-65 top-10  sm:h-70 md:w-75 md:h-75 rounded-full border-4 border-purple-500 opacity-50 animate-ping"></div>

            {/* Shadow circle */}
            <div className="absolute w-63 h-63  sm:h-70 md:w-73 md:h-73 top-9 md:top-13 rounded-full shadow-[0_0_50px_#5227FD]"></div>

            {/* Your image */}
            <img
              className="w-65 h-65 top-9 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover relative "
              src={me}
              alt="Me"
            />
          </div>

          {/* skills */}
          <div className="flex-1 w-full md:max-w-3xl mx-auto mt-50 md:mt-10 space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                {/* name */}
                <div className="flex justify-between mb-2">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>

                {/* progress */}
                <div className="w-full h-3 bg-[#1a1230] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{
                      width: start ? `${skill.level}%` : "0%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
