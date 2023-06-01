import React from "react";
import logo from "./images/logo.png";
import bars from "./images/bars.png";

const NavBar = () => {
  return (
    <div class="fixed left-0 top-0 w-full z-10 ease-in duration-300 p-2">
      <div class="flex items-center justify-between">
        <img src={logo} alt="logo" />
        <img src={bars} alt="bars" />
      </div>
    </div>
  );
};

export default NavBar;
