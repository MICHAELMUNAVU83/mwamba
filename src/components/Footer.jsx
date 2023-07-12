import React from "react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { BsFillKeyFill } from "react-icons/bs";
import logo from "./images/logo.png";
const Footer = () => {
  var currentYear = new Date().getFullYear();
  return (
    <div className=" py-8 bg-[#1F2024] text-white">
      <div class="mx-auto  w-[75%]">
        <div class="flex  flex-row justify-between">
          <BsInstagram className="md:text-6xl  text-3xl" />
          <BsFacebook className="md:text-6xl  text-3xl" />
          <BsTwitter className="md:text-6xl  text-3xl" />
          <ImWhatsapp className="md:text-6xl  text-3xl" />
          <BsFillKeyFill className="md:text-6xl  text-3xl" />
          <SiGmail className="md:text-6xl  text-3xl" />
        </div>
        <p className="bg-white h-[2px] w-[100%] my-4" />
        <div className="flex uppercase my-4 justify-between items-center">
          <p>Privacy Policy</p>
          <img src={logo} alt="logo" className="object-cover w-[100px] " />

          <p>Cookie Policy</p>
        </div>
        <p className="text-center flex flex-col md:flex-row md:text-md text-xs justify-center items-center">
          © COPYRIGHT{""}
          <p className="mx-2">
            {currentYear} | MWAMBA RUGBY FOOTBALL CLUB | ALL RIGHTS RESERVED
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
