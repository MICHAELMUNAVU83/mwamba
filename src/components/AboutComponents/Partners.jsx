import React from "react";
import partner1 from "../images/about/partner1.png";
import partner2 from "../images/about/partner2.png";

const Partners = () => {
  return (
    <div id="partnersabout" className="bg-[#1F2024] ">
      <div className="flex justify-between items-center w-[90%] mx-auto">
        <img
          src={partner1}
          alt=""
          className="w-[109px] h-[109px] object-cover"
        />
        <img
          src={partner2}
          alt=""
          className=" w-[132px] h-[53px] object-cover"
        />

        <img
          src={partner1}
          alt=""
          className="w-[109px] h-[109px] object-cover"
        />
        <img
          src={partner2}
          alt=""
          className=" w-[132px] h-[53px] object-cover"
        />
        <img
          src={partner1}
          alt=""
          className="w-[109px] h-[109px] object-cover"
        />
        <img
          src={partner2}
          alt=""
          className=" w-[132px] h-[53px] object-cover"
        />
      </div>
    </div>
  );
};

export default Partners;
