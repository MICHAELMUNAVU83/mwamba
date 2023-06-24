import React from "react";
import kulabubg from "../images/kulabu/kulabubg.png";
import kulabupic from "../images/kulabu/kulabupic.png";

const ShopHome = () => {
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
          <div className="flex poppins-regular flex-col justify-evenly text-2xl font-bold h-[80vh] text-white"></div>
        </div>
        <div className="flex poppins-bold h-[20vh] text-[100px] w-[100%] justify-start p-12 items-center text-white  font-bold">
         The Shop
        </div>
      </div>
    </div>
  );
};

export default ShopHome;
