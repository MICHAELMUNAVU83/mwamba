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
        <div className="w-[60%]  hidden md:flex items-center h-[80vh]">
          <div className="w-[80%] h-[80vh] bg-cover bg-center bg-no-repeat"></div>
        </div>
        <div className="flex md:h-[20vh] h-[100vh] poppins-bold  text-[100px]  md:justify-start justify-center items-end p-12 md:items-center text-white  font-bold">
          Join the Kulabu
        </div>
      </div>
    </div>
  );
};

export default KulabuHome;
