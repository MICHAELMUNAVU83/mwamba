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
        <div className="w-[60%] flex items-center h-[80vh]">
          <div className="flex flex-col poppins-regular justify-center gap-8 text-2xl font-bold h-[80vh] text-white">
            <a
              href="#latestnews"
              className="w-[295px] flex items-center rounded-l-2xl justify-center h-[80px] bg-white text-[#1F2024]"
            >
              Latest News
            </a>
            <a
              href="#standings"
              className="w-[295px] flex items-center rounded-l-2xl  justify-center h-[80px] bg-white text-[#1F2024]"
            >
              Standings
            </a>
          </div>
          <div
            style={{
              backgroundImage: `url(${newspic})`,
            }}
            className="w-[80%] h-[80vh] bg-cover bg-center bg-no-repeat"
          ></div>
        </div>
        <div className="flex h-[20vh]  poppins-bold text-[150px] w-[100%] justify-end p-12 items-center text-white  font-bold">
          News
        </div>
      </div>
    </div>
  );
};

export default NewsHome;
