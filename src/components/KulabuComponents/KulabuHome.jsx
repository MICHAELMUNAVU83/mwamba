import React from "react";
import kulabubg from "../images/kulabu/kulabubg.png";
import kulabupic from "../images/kulabu/kulabupic.png";

const KulabuHome = () => {
  return (
    <div
      className="h-[100vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${kulabubg})`,
      }}
    >
      <div className="h-[100vh] bg-[#1F2024]/50 ">
        <div className="w-[60%] flex items-center h-[80vh]">
          <div
            style={{
              backgroundImage: `url(${kulabupic})`,
            }}
            className="w-[80%] h-[80vh] bg-cover bg-center bg-no-repeat"
          ></div>
          <div className="flex poppins-regular flex-col justify-evenly text-2xl font-bold h-[80vh] text-white">
            <a
              href="#membershipbenefits"
              className="w-[295px] flex items-center rounded-r-2xl justify-center h-[80px] bg-white text-[#1F2024]"
            >
              Membership Benefits
            </a>
            <a
              href="#membershiptiers"
              className="w-[295px] flex items-center rounded-r-2xl  justify-center h-[80px] bg-white text-[#1F2024]"
            >
              Membership Tiers
            </a>
            <a
              href="#membershipregistration"
              className="w-[295px] flex items-center rounded-r-2xl justify-center h-[80px] bg-white text-[#1F2024]"
            >
              Registration
            </a>
            <a
              href="#membertestimonials"
              className="w-[295px] flex items-center rounded-r-2xl justify-center h-[80px] bg-white text-[#1F2024]"
            >
              Testimonials
            </a>
          </div>
        </div>
        <div className="flex poppins-bold h-[20vh] text-[100px] w-[100%] justify-start p-12 items-center text-white  font-bold">
          Join the Kulabu
        </div>
      </div>
    </div>
  );
};

export default KulabuHome;
