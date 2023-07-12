import React from "react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { BsFillKeyFill } from "react-icons/bs";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  var currentYear = new Date().getFullYear();
  return (
    <div className=" py-8 bg-[#1F2024] text-white">
      <div class="mx-auto  w-[75%]">
        <div class="flex  flex-row justify-between">
          <a
            href="https://www.instagram.com/mwamba_rugby/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="md:text-6xl  text-3xl" />
          </a>
          <a
            href="https://web.facebook.com/MwambaRFC"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook className="md:text-6xl  text-3xl" />
          </a>
          <a
            href="https://twitter.com/MwambaRFC"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter className="md:text-6xl  text-3xl" />
          </a>
          <a href="https://wa.me/254720304147" target="_blank" rel="noreferrer">
            <ImWhatsapp className="md:text-6xl  text-3xl" />
          </a>
          <a href="mailto:mwambarfc@gmail.com" target="_blank" rel="noreferrer">
            <SiGmail className="md:text-6xl  text-3xl" />
          </a>
          >>>>>>> 5c638ec9a01085a35cbb940983f1a83cec9d162e
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
