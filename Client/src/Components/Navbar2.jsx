import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import logo from "../assets/logo.png";

const Navbar2 = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll effect
    });
  }, [pathname]);

  return (
    <div className="w-full bg-[#060010] shadow-md sticky top-0 z-50 border-b border-[#A9A5A6]/30 ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img className="w-10 sm:w-12 md:w-14" src={logo} alt="logo" />
          <span className="hidden sm:block font-semibold text-lg text-purple-600">
            Sameer
          </span>
        </Link>

        {/* Go Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline btn-sm border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white transition"
        >
          ⬅ Go Back
        </button>
      </div>
    </div>
  );
};

export default Navbar2;
