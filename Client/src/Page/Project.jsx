import React from "react";

const projectData = [
  {
    id: "1",
    title: "Real Estate Commercial Website",
    img: "https://i.ibb.co/9kFWxm0T/Copy-of-Natural-Mockup-Freebie-Lead-Magnet-Facebook-Post-4.png",
    description:
      "The website name is Best Ever Group. This is a real estate website built with WordPress, Elementor, and many more plugins.",
    view: "https://drive.google.com/drive/u/3/folders/18gOE8bJnTDUhLAtBC337OSNzGlJ3FDSv",
    tech: ["WordPress", "Elementor"],
  },
  {
    id: "2",
    title: "Blogging Website",
    img: "https://i.ibb.co/XrtyvV30/Copy-of-Natural-Mockup-Freebie-Lead-Magnet-Facebook-Post-4.png",
    description:
      "This is a Blogging website built with WordPress, Elementor, and many more plugins.",
    view: "https://drive.google.com/drive/u/3/folders/1-uK3pdP6-70lidwFqq_9ff1wiLg22luO",
    video:
      "https://drive.google.com/file/d/1Qwvi72EDl2YPq0gTK4Ogq_uv-sm9PNCh/view",
    tech: ["WordPress", "Elementor"],
  },
  {
    id: "3",
    title: "Restaurant Website",
    img: "https://i.ibb.co/HyrxdGw/Copy-of-Natural-Mockup-Freebie-Lead-Magnet-Facebook-Post-4.png",
    description:
      "This is a Restaurant website built with WordPress, Elementor, and many more plugins.",
    view: "https://drive.google.com/drive/u/3/folders/1Dhs_2WMe2N20Rn-bPIE8qkmmVZyAcTKE",
    video:
      "https://drive.google.com/file/d/1oFbQ1WMEjeGdbg3eRE4583I-Ego1dKFr/view",
    tech: ["WordPress", "Elementor"],
  },
  {
    id: "4",
    title: "Ecommerce Website",
    img: "https://i.ibb.co/bRrhk90s/Copy-of-Natural-Mockup-Freebie-Lead-Magnet-Facebook-Post-4.png",
    description:
      "This is an Ecommerce website built with WordPress, WooCommerce, Elementor, Fluent Forms and many more plugins.",
    view: "https://drive.google.com/drive/u/3/folders/1bfu7eNaF_0xRSFmu_T_UvDghB4V00wFP",
    video:
      "https://drive.google.com/file/d/1Gh6CZ0FcgPNsTthqDL0yMmPRpis20FKB/view",
    tech: ["WordPress", "WooCommerce", "Elementor", "Fluent Forms"],
  },
  {
    id: "5",
    title: "Ecommerce Website",
    img: "https://i.ibb.co.com/MxsJ7MK5/Copy-of-Natural-Mockup-Freebie-Lead-Magnet-Facebook-Post.png",
    description:
      "This is an Ecommerce website built with WordPress, WooCommerce, Elementor, Fluent Forms and many more plugins.",
    view: "https://almarjahan.com/",
    video: "https://youtu.be/i-l1uo2BE8M",
    tech: ["WordPress", "WooCommerce", "Elementor", "Fluent Forms"],
  },
  {
    id: "6",
    title: "Ecommerce Website",
    img: "https://i.ibb.co.com/TqDCzzVX/Copy-of-Natural-Mockup-Freebie-Lead-Magnet-Facebook-Post-1.png",
    description:
      "This is an Ecommerce website built with WordPress, WooCommerce, Elementor, Fluent Forms and many more plugins.",
    view: "https://drive.google.com/drive/folders/10Z3GQ3NVC76ZoUDXimwRFli8yGrHC2r-?usp=drive_link",
    video: "",
    tech: ["WordPress", "WooCommerce", "Elementor", "Fluent Forms"],
  },
  {
    id: "7",
    title: "Portfolio Website",
    img: "https://i.ibb.co/Xrh373xL/Copy-of-Natural-Mockup-Freebie-Lead-Magnet-Facebook-Post-4.png",
    description:
      "This is a Portfolio website built with WordPress, Elementor, Fluent Forms and many more plugins.",
    view: "https://drive.google.com/drive/u/3/folders/1KKyGGTL7wLv2jVMfC_BW7WGBqdfbHAok",
    video:
      "https://drive.google.com/file/d/1F4p3B9C0M6DO8KfItf9SFldgThqTFvqm/view",
    tech: ["WordPress", "Elementor", "Fluent Forms"],
  },
  {
    id: "8",
    title: "Ecommerce Website",
    img: "https://i.ibb.co/PpZ8dyn/Copy-of-Natural-Mockup-Freebie-Lead-Magnet-Facebook-Post-4.png",
    description:
      "This is an Ecommerce website built with WordPress, WooCommerce, Elementor, Fluent Forms and many more plugins.",
    view: "https://drive.google.com/drive/u/3/folders/19PRIw88rQzQOMzwGUZroF2Us9dmBQUMg",
    video:
      "https://drive.google.com/file/d/1PnZqNVqgwwbfiE7hKgH5d07alwufQueX/view",
    tech: ["WordPress", "WooCommerce", "Elementor", "Fluent Forms"],
  },
  {
    id: "9",
    title: "Client Ecommerce Website",
    img: "https://i.ibb.co/chJqGdrC/Copy-of-Natural-Mockup-Freebie-Lead-Magnet-Facebook-Post-4.png",
    description:
      "This is a Client Ecommerce website built with WordPress, WooCommerce, Elementor, Fluent Forms.",
    view: "https://rafihana.com/",
    tech: ["WordPress", "WooCommerce", "Elementor"],
  },
  {
    id: "10",
    title: "Hospital Website",
    img: "https://i.ibb.co/sd1fY7xR/Copy-of-Natural-Mockup-Freebie-Lead-Magnet-Facebook-Post-4.png",
    description:
      "This is a Hospital website built with WordPress, Elementor, Fluent Forms.",
    view: "https://drive.google.com/drive/u/3/folders/12vLkGckcM-Ee82XNw-Lc1Wnq5gApimnq",
    video:
      "https://drive.google.com/file/d/17d7BMyfXoGiSOWp0k4vr71NzMi1q342g/view",
    tech: ["WordPress", "Elementor", "Fluent Forms"],
  },
  {
    id: "11",
    title: "Portfolio Website",
    img: "https://i.ibb.co/6JT5QRZg/Copy-of-Natural-Mockup-Freebie-Lead-Magnet-Facebook-Post-4.png",
    description:
      "This is a Portfolio website built with WordPress, Elementor, Fluent Forms.",
    view: "https://drive.google.com/drive/u/3/folders/1bffeDZfku7tp4FAJKnQMX1iaxFrFlMCn",
    video:
      "https://drive.google.com/file/d/1zxL9z69nuDT_Yv4Jh8t3D7Y2Fh-Per2N/view",
    tech: ["WordPress", "Elementor", "Fluent Forms"],
  },
  {
    id: "12",
    title: "Portfolio Website",
    img: "https://i.ibb.co/ycpX9qV4/Copy-of-Natural-Mockup-Freebie-Lead-Magnet-Facebook-Post-4.png",
    description:
      "This is a Portfolio website built with WordPress, Elementor, Fluent Forms.",
    video:
      "https://drive.google.com/file/d/10ktJIxyKiUrpvx0pObxjzY2Cbs_UKW1x/view",
    tech: ["WordPress", "Elementor", "Fluent Forms"],
  },
];

const Project = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-purple-600 mb-12">
        My Projects
      </h1>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="card bg-white shadow-lg hover:shadow-2xl transition duration-300 rounded-xl overflow-hidden group"
          >
            {/* Image */}
            <figure className="h-60 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </figure>

            {/* Content */}
            <div className="card-body">
              <h2 className="card-title text-xl font-semibold text-purple-700">
                {project.title}
              </h2>

              <p className="text-gray-600 text-sm">{project.description}</p>

              {/* 🔥 Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="card-actions mt-4 flex flex-wrap gap-2">
                {project.view && (
                  <a
                    href={project.view}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    View Project
                  </a>
                )}

                {project.video && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    Watch Video
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
