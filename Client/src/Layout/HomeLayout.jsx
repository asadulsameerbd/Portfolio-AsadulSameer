import React from "react";
import About from "../Page/Section/About";
import Skill from "../Page/Section/Skill";
import FeaturedProject from "../Page/Section/FeaturedProject";
import Experience from "../Page/Section/Experience";
import Contact from "../Page/Section/Contact";
import Home from "../Page/Home/Home";

const HomeLayout = () => {
  return (
    <div>
      <Home />
      <div className="md:max-w-7xl mx-auto">
        <About />
        <Skill />
        <FeaturedProject />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default HomeLayout;
