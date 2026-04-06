import React from "react";
import About from "../Page/Section/About";
import Skill from "../Page/Section/Skill";
import FeaturedProject from "../Page/Section/FeaturedProject";
import Experience from "../Page/Section/Experience";
import Contact from "../Page/Section/Contact";

const HomeLayout = () => {
  return (
    <div>
      <About />
      <Skill />
      <FeaturedProject />
      <Experience />
      <Contact />
    </div>
  );
};

export default HomeLayout;
