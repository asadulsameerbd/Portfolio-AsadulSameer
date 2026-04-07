import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Navbar2 from "../Components/Navbar2";

const SecondLayout = () => {
  return (
    <div>
      <Navbar2 />
      <Outlet />
    </div>
  );
};

export default SecondLayout;
