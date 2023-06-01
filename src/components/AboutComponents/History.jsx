import React from "react";
import aboutpic from "../images/about/aboutpic.png";

const History = () => {
  return (
    <div className="bg-[#1F2024] flex">
      <div className="w-[60%] bg-red-500">tvybhnujm</div>
      <div className="w-[40%] bg-blue-500">
        <img src={aboutpic} alt="" className="w-full h-[799px] object-cover" />
      </div>
    </div>
  );
};

export default History;
