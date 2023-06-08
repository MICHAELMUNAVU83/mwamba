import React, { useState } from "react";
import logo from "./images/logo.png";
import bars from "./images/bars.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [show, setShow] = useState(false);
  return (
    <div class="fixed top-0 w-full z-10 ease-in duration-300 p-2">
      <div class="flex items-center justify-between">
        <img src={logo} alt="logo" />

        <img
          src={bars}
          alt="bars"
          onClick={() => setShow(!show)}
          className={show ? `hidden` : `flex`}
        />
      </div>
      <div
        className={
          show
            ? `absolute top-0 right-0  transition-all duration-500 ease-in-out flex justify-start p-8 flex-col  items-end gap-4 text-black bg-white/70 z-20 w-[420px] h-[100vh] text-2xl `
            : `absolute top-0 -right-56  transition-all duration-500 ease-in-out `
        }
      >
        <div
          className={show ? `flex  justify-end items-center gap-4` : `hidden`}
        >
          <img src={bars} alt="bars" onClick={() => setShow(!show)} />
        </div>
        <div
          className={
            show
              ? `flex flex-col justify-between uppercase h-[100%] font-bold text-end p-12 `
              : `hidden`
          }
          onClick={() => setShow(!show)}
        >
          <Link
            to="/home"
            className="  hover:underline transition-all duration-500 ease-in-out cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="  hover:underline transition-all duration-500 ease-in-out cursor-pointer"
          >
            About
          </Link>
          <Link
            to="/kulabu"
            className="  hover:underline transition-all duration-500 ease-in-out cursor-pointer"
          >
            Join The Kulabu
          </Link>
          <Link
            to="/kababeri"
            className="  hover:underline transition-all duration-500 ease-in-out cursor-pointer"
          >
            Kababeri Sevens
          </Link>
          <Link
            to="/kababeri"
            className="  hover:underline transition-all duration-500 ease-in-out cursor-pointer"
          >
            Mwamba at 45
          </Link>
          <Link
            to="/news "
            className="  hover:underline transition-all duration-500 ease-in-out cursor-pointer"
          >
            News
          </Link>
          <Link
            to="/shop"
            className="  hover:underline transition-all duration-500 ease-in-out cursor-pointer"
          >
            Shop
          </Link>
          <Link
            to="/"
            className="  hover:underline transition-all duration-500 ease-in-out cursor-pointer"
          >
            Mwamba TV
          </Link>
          <Link
            to="/"
            className="  hover:underline transition-all duration-500 ease-in-out cursor-pointer"
          >
            Contact US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
