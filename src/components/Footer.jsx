import React from "react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { BsArrowDownCircleFill, BsArrowUpCircleFill } from "react-icons/bs";
import logo from "./images/logo.png";

const Footer = () => {
  var currentYear = new Date().getFullYear();
  return (
    <div className=" py-8 bg-[#1F2024] text-white">
      <div class="mx-auto  w-[75%]">
        <div class="flex flex-col md:flex-row justify-between">
          <BsInstagram className="text-6xl" />
          <BsFacebook className="text-6xl" />
          <BsTwitter className="text-6xl" />
          <ImWhatsapp className="text-6xl" />
          <BsArrowDownCircleFill className="text-6xl" />
          <BsArrowUpCircleFill className="text-6xl" />
          <SiGmail className="text-6xl" />
        </div>
        <p className="bg-white h-[2px] w-[100%] my-4" />
        <div className="flex uppercase my-4 justify-between items-center">
          <p>Privacy Policy</p>
          <img src={logo} alt="logo" className="object-cover w-[100px] " />

          <p>Cookie Policy</p>
        </div>
        <p className="text-center flex justify-center items-center">
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
