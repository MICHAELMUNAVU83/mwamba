import React from "react";
import newsbg from "../images/news/newsbg.png";
import newspic from "../images/news/newspic.png";

const NewsHome = () => {
  return (
    <div
      className="h-[100vh] bg-cover bg-top-left bg-no-repeat"
      style={{
        backgroundImage: `url(${newsbg})`,
      }}
    >
      <div className="h-[100vh] flex flex-col justify-end items-end bg-[#1F2024]/50 ">
        <div className="w-[60%] hidden md:flex items-center h-[80vh]">
          <div className="w-[80%] h-[80vh] bg-cover bg-center bg-no-repeat"></div>
        </div>
        <div className="flex md:h-[20vh] h-[100vh] poppins-bold  text-[100px]  md:justify-start justify-center items-end p-12 md:items-center text-white  font-bold">
          News
        </div>
      </div>
    </div>
  );
};

export default NewsHome;
