import React from "react";
import aboutbg from "../images/about/aboutbg.png";
import aboutpic from "../images/about/aboutpic.png";

const HomeAbout = () => {
  return (
    <div
      className="h-[100%] w-[100%] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${aboutbg})`,
      }}
    >
      <div className="h-[100vh]  bg-[#1F2024]/50 ">
        <div className="w-[60%] hidden md:flex items-center h-[80vh]">
          <div className="w-[60%] md:h-[80vh] h-[50vh] bg-cover bg-center bg-no-repeat"></div>
        </div>
        <div className="flex md:h-[20vh] h-[100vh] poppins-bold  text-[100px]  md:justify-start justify-center items-end p-12 md:items-center text-white  font-bold">
          About Us
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
