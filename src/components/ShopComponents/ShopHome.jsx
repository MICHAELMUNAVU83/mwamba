import React from "react";
import shopbg from "../images/shop/shopbg.png";
import shoppic from "../images/shop/shoppic.png";

const ShopHome = () => {
  return (
    <div
      className="h-[100vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${shopbg})`,
      }}
    >
      <div className="h-[100vh] bg-[#1F2024]/50 ">
        <div className="w-[60%] flex items-center h-[80vh]">
          <div
            style={{
              backgroundImage: `url(${shoppic})`,
            }}
            className="w-[60%] h-[80vh] bg-cover bg-center bg-no-repeat"
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
