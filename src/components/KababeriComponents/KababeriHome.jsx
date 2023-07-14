import React from "react";
import kababeribg from "../images/kababeri/kababeribg.png";
import kababeripic from "../images/kababeri/kababeripic.png";

const KababeriHome = () => {
  return (
    <div
      className="h-[100vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${kababeribg})`,
      }}
    >
      <div className="h-[100vh] bg-[#1F2024]/50 ">
        <div className="w-[60%] hidden md:flex  items-center h-[80vh]"></div>
        <div className="flex md:h-[20vh] h-[100vh] poppins-bold  md:text-[100px] text-[80px]  md:justify-start justify-center items-end p-12 md:items-center text-white  font-bold">
          Kabeberi Sevens
        </div>
      </div>
    </div>
  );
};

export default KababeriHome;
