import { Link } from "react-router";
import { useState } from "react";
import logo from "../assets/logo.png";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#060010] top-0 sticky z-50 border-b border-[#A76FD9]/30">
      <div className="lg:max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex-1">
          <img className="w-10 sm:w-12 md:w-14" src={logo} alt="logo" />
        </Link>

        {/* Desktop Menu (unchanged) */}
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
                className="btn bg-gradient-to-r from-[#AC70DB] to-[#635BC0] hover:bg-[#060010] hover:border hover:border-[#9666E4] rounded-lg"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative">
          <button
            onClick={() => setOpen(!open)}
            className="text-white text-2xl"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-17 left-0 z-20 bg-[#060010] w-full md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-white font-medium">
            <li>
              <Link onClick={() => setOpen(false)}>About</Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)}>Skill</Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)}>Projects</Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)}>Experience</Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
