import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Home from "../Page/Home/Home";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <div className="lg:max-w-7xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
