import { Link } from "react-router";
import { useState } from "react";
import logo from "../assets/logo.png";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#060010] sticky top-0 z-50 border-b border-[#A76FD9]/30">
      <div className="lg:max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex-1">
          <img className="w-10 sm:w-12 md:w-14" src={logo} alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex gap-10 items-center text-white font-medium">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skill">Skill</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a
                href="https://wa.me/8801933200699"
                className="px-4 py-2 bg-gradient-to-r from-[#AC70DB] to-[#635BC0] rounded-lg"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setOpen(!open)}
            className="text-white text-2xl"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-16 left-0 w-full bg-[#060010] md:hidden px-4 py-5 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-3 text-white font-medium">
          <li>
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="block w-full px-4 py-3 rounded-md hover:bg-[#1a1230] transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skill"
              onClick={() => setOpen(false)}
              className="block w-full px-4 py-3 rounded-md hover:bg-[#1a1230] transition"
            >
              Skill
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="block w-full px-4 py-3 rounded-md hover:bg-[#1a1230] transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#experience"
              onClick={() => setOpen(false)}
              className="block w-full px-4 py-3 rounded-md hover:bg-[#1a1230] transition"
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block w-full px-4 py-3 rounded-md hover:bg-[#1a1230] transition"
            >
              Contact
            </a>
          </li>

          {/* Button */}
          <li className="pt-2">
            <a
              href="https://wa.me/8801933200699"
              onClick={() => setOpen(false)}
              className="block w-full text-center py-3 bg-gradient-to-r from-[#AC70DB] to-[#635BC0] rounded-lg"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
