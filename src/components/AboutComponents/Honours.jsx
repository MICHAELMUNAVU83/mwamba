import React from "react";
import honourspic from "../images/about/honourspic.png";
import kenyacuppic from "../images/about/kenyacuppic.png";
import enterprisecuppic from "../images/about/enterprisecuppic.png";
import national7spic from "../images/about/national7spic.png";

const Honours = () => {
  return (
    <div id="honoursabout" className="flex  pb-8 justify-between ">
      <div className="flex w-[50%] justify-center  items-center  ">
        <div className="flex  gap-[50px] items-start">
          <div className="flex flex-col justify-center items-center">
            <div className="text-3xl font-bold  mb-8 poppins-bold uppercase">
              Men
            </div>
            <div className="flex  poppins-light gap-[50px] items-start">
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
                  1983
                </p>
              </div>
              <div className="flex flex-col  gap-2 text-center justify-center items-center">
                <div>
                  <img
                    src={enterprisecuppic}
                    alt=""
                    className="w-[85px] object-cover h-[74px]"
                  />
                  <p>Enterprise</p>
                  <p>Cup</p>
                </div>

                <p className="w-[85px] bg-black flex justify-center items-center text-white h-[47px]">
                  1985
                </p>
                <p className="w-[85px] bg-black flex justify-center items-center text-white h-[47px]">
                  1986
                </p>
                <p className="w-[85px] bg-black flex justify-center items-center text-white h-[47px]">
                  2006
                </p>
                <p className="w-[85px] bg-black flex justify-center items-center text-white h-[47px]">
                  2013
                </p>
              </div>
              <div className="flex flex-col  gap-2 text-center justify-center items-center">
                <div>
                  <img
                    src={national7spic}
                    alt=""
                    className="w-[85px] object-cover h-[74px]"
                  />
                  <p>National</p>
                  <p>Sevens</p>
                  <p>Circuit</p>
                </div>

                <p className="w-[85px] bg-black flex justify-center items-center text-white h-[47px]">
                  2003
                </p>
                <p className="w-[85px] bg-black flex justify-center items-center text-white h-[47px]">
                  2007
                </p>
                <p className="w-[85px] bg-black flex justify-center items-center text-white h-[47px]">
                  2008
                </p>
                <p className="w-[85px] bg-black flex justify-center items-center text-white h-[47px]">
                  2010
                </p>
                <p className="w-[85px] bg-black flex justify-center items-center text-white h-[47px]">
                  2011
                </p>
              </div>
            </div>
          </div>
          <p className="w-[2px] h-[500px] bg-black " />
          <div className="flex flex-col justify-center items-center">
            <div className="text-3xl mb-8 poppins-bold font-bold uppercase">
              Women
            </div>
            <div className="flex poppins-light  gap-[50px] items-start">
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
                  2022
                </p>
                <p className="w-[85px] bg-black flex justify-center items-center text-white h-[47px]">
                  2023
                </p>
              </div>
              <div className="flex flex-col  gap-2 text-center justify-center items-center">
                <div>
                  <img
                    src={national7spic}
                    alt=""
                    className="w-[85px] object-cover h-[74px]"
                  />
                  <p>National</p>
                  <p>Sevens</p>
                  <p>Circuit</p>
                </div>

                <p className="w-[85px] bg-black flex justify-center items-center text-white h-[47px]">
                  2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[48%]">
        <img
          src={honourspic}
          alt=""
          className="w-[100%] object-cover h-[530px]"
        />
        <p className="text-7xl poppins-bold py-4 uppercase font-bold text-center text-[#1F2024]">
          Honours
        </p>
      </div>
    </div>
  );
};

export default Honours;
