import React from "react";
import logo from "./images/logo.png";
import bars from "./images/bars.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div class="fixed left-0 top-0 w-full z-10 ease-in duration-300 p-2">
      <div class="flex items-center justify-between">
        <img src={logo} alt="logo" />
        <div className="flex items-center gap-4 text-white text-2xl">
          <Link to="/home">
            Home
          </Link>
          <Link to="/about">
            About
          </Link>
        </div>
        <img src={bars} alt="bars" />
      </div>
    </div>
  );
};

export default NavBar;
