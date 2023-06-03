import React from "react";
import aboutbg from "../images/about/aboutbg.png";
import aboutpic from "../images/about/aboutpic.png";

const KulabuHome = () => {
  return (
    <div
      className="h-[100vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${aboutbg})`,
      }}
    >
      <div className="h-[100vh] bg-black/50 ">
        <div className="w-[60%] flex items-center h-[80vh]">
          <div
            style={{
              backgroundImage: `url(${aboutpic})`,
            }}
            className="w-[80%] h-[80vh] bg-cover bg-center bg-no-repeat"
          ></div>
          <div className="flex flex-col justify-evenly text-2xl font-bold h-[80vh] text-white">
            <p className="w-[295px] flex items-center rounded-r-2xl justify-center h-[80px] bg-white text-[#1F2024]">
              Membership Benefits
            </p>
            <p className="w-[295px] flex items-center rounded-r-2xl  justify-center h-[80px] bg-white text-[#1F2024]">
              Membership Tiers
            </p>
            <p className="w-[295px] flex items-center rounded-r-2xl justify-center h-[80px] bg-white text-[#1F2024]">
              Registration
            </p>
            <p className="w-[295px] flex items-center rounded-r-2xl justify-center h-[80px] bg-white text-[#1F2024]">
              Testimonials
            </p>
          </div>
        </div>
        <div className="flex h-[20vh] text-[100px] w-[50%] justify-center p-12 items-center text-white  font-bold">
          Join the Kulabu
        </div>
      </div>
    </div>
  );
};

export default KulabuHome;