import React from "react";
import honourspic from "../images/about/honourspic.png";
import kenyacuppic from "../images/about/kenyacuppic.png";
import enterprisecuppic from "../images/about/enterprisecuppic.png";
import national7spic from "../images/about/national7spic.png";

const Honours = () => {
  return (
    <div className="flex  pb-8 justify-between ">
      <div className="flex w-[50%] justify-center  items-center  ">
        <div className="flex  gap-[50px] items-start">
          <div className="flex flex-col  gap-2 text-center justify-center items-center">
            <div>
              <img
                src={kenyacuppic}
                alt=""
                className="w-[85px] object-cover h-[74px]"
              />
              <p>Kenya</p>
              <p>Cup</p>
            </div>

            <p className="w-[85px] bg-black flex justify-center items-center text-white h-[47px]">
              2018
            </p>
          </div>
          <div className="flex flex-col  gap-2 text-center justify-center items-center">
            <div>
              <img
                src={kenyacuppic}
                alt=""
                className="w-[85px] object-cover h-[74px]"
              />
              <p>Kenya</p>
              <p>Cup</p>
            </div>

            <p className="w-[85px] bg-black flex justify-center items-center text-white h-[47px]">
              2018
            </p>
            <p className="w-[85px] bg-black flex justify-center items-center text-white h-[47px]">
              2018
            </p>
            <p className="w-[85px] bg-black flex justify-center items-center text-white h-[47px]">
              2018
            </p>
            <p className="w-[85px] bg-black flex justify-center items-center text-white h-[47px]">
              2018
            </p>
          </div>
          <div className="flex flex-col  gap-2 text-center justify-center items-center">
            <div>
              <img
                src={kenyacuppic}
                alt=""
                className="w-[85px] object-cover h-[74px]"
              />
              <p>Kenya</p>
              <p>Cup</p>
            </div>

            <p className="w-[85px] bg-black flex justify-center items-center text-white h-[47px]">
              2018
            </p>
            <p className="w-[85px] bg-black flex justify-center items-center text-white h-[47px]">
              2018
            </p>
            <p className="w-[85px] bg-black flex justify-center items-center text-white h-[47px]">
              2018
            </p>
            <p className="w-[85px] bg-black flex justify-center items-center text-white h-[47px]">
              2018
            </p>
          </div>
        </div>
      </div>
      <div className="w-[48%]">
        <img
          src={honourspic}
          alt=""
          className="w-[100%] object-cover h-[530px]"
        />
        <p className="text-7xl py-4 font-bold text-center text-[#1F2024]">
          Honours
        </p>
      </div>
    </div>
  );
};

export default Honours;
