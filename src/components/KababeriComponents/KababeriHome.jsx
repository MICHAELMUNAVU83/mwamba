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
        <div className="w-[60%] hidden md:flex  items-center h-[80vh]">
          <div className="w-[80%] h-[80vh]">
            <img
              src={kababeripic}
              alt=""
              className="w-[100%] object-fill h-[100%]"
            />
          </div>
          <div className="flex flex-col poppins-regular justify-center gap-8 text-2xl font-bold h-[80vh] text-white">
            <a
              href="#kababerihistory"
              className="w-[295px] flex items-center rounded-r-2xl justify-center h-[80px] bg-white text-[#1F2024] "
            >
              History
            </a>
            <a
              href="#kababeritheevent"
              className="w-[295px] flex items-center rounded-r-2xl  justify-center h-[80px] bg-white text-[#1F2024]"
            >
              The event
            </a>
            <a
              href="#kababerivending"
              className="w-[295px] flex items-center rounded-r-2xl justify-center h-[80px] bg-white text-[#1F2024]"
            >
              Opportunities
            </a>

            <a
              href="#kababerivending"
              className="w-[295px] flex items-center rounded-r-2xl justify-center h-[80px] bg-white text-[#1F2024]"
            >
              Buy Tickets
            </a>
          </div>
        </div>
        <div className="flex md:h-[20vh] h-[100vh] poppins-bold  md:text-[100px] text-[80px]  md:justify-start justify-center items-end p-12 md:items-center text-white  font-bold">
          Kabeberi Sevens
        </div>
      </div>
    </div>
  );
};

export default KababeriHome;
