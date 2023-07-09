import React from "react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  var currentYear = new Date().getFullYear();
  return (
    <div className=" py-8 bg-[#1F2024] text-white">
      <div class="mx-auto  w-[75%]">
        <div class="flex  flex-row justify-between">
          <Link to="https://www.instagram.com/mwamba_rugby/">
            <BsInstagram className="md:text-6xl  text-3xl" />
          </Link>
          <Link to="https://www.facebook.com/MwambaRFC/photos/bc.AbrE_7MD4-cJ5VEw5RYpA__fRcLBQZsrrYsIlShKoabImEjNDEBe8zhVVAuCeTxKIyzuI7iQhVhHc7pGHOOk1IGnWj6W08wz-zucK2h0OOkpSLATEwZkC7LXpglX6gQMt-iCQTBZ755uCE2uyLbPgV8f/3280890065296702/?opaqueCursor=AbreUXgUOkiqWJa4QDzKB9muQLqQqbTNwkLBPdqtlDpK46mHW3b-iJurVjmnXUG62haJfqqD0QjPpv25POcSo50Un2b7KzkhJRNk8rVBHtQEWhwp2fEJg2XnqKIACoKQDa98DsPwWxlnBPtnpsuUpxORdTbF4SxQLiVB__eGj3XPScnZ9R-nHdonRrvbjz4o4ae2wNG63ubUx3kxLX8zbEcgebZXfCkbUtdColnnB1fBsHCJZ5t-11yxmc13wK6fibLcoWdM6CcFL2jVkNXS3Q5PHAP_qVNIzho0RV_BPHALEDlrR8eSmFpUHsKH9-I6QgXF7d3nufaSQhB4I7e6txfPax04KwpLMIg4k-gwMSSNKWZMpKoaVBaKoisQaU2U1ex9fDpugLitEorp4Mt-uV3Ai8YdgvEp5d6mYm_8pLIugeoqvrmH93c5aMKb6xbh5YqRNgDQnEm6qCEjUH-qH-WsNQ2wq7a_CQP6ZO6_VdiFY8zrc1x3aGl_6H8LcdUcTVo5tKpFtU1EkgX5xNDNaG3ZSd8xQ5ft85FPQHJMiLo8Rcxq-jT2VoUJCr9AIdRXrjBsvNqBFiS-0kquusP921Dz&_rdc=1&_rdr">
            <BsFacebook className="md:text-6xl  text-3xl" />
          </Link>

          <Link to="https://twitter.com/MwambaRFC">
            <BsTwitter className="md:text-6xl  text-3xl" />
          </Link>

          <Link to="https://wa.me/254720304147">
            <ImWhatsapp className="md:text-6xl  text-3xl" />
          </Link>
          <Link href="mailto:kiprotichkimutai01@gmail.com">
            <SiGmail className="md:text-6xl  text-3xl" />
          </Link>
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
