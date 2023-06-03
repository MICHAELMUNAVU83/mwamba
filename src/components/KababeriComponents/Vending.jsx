import React from "react";
import aboutpic from "../images/about/aboutpic.png";

const Vending = () => {
  return (
    <div className="flex bg-white  justify-between items-center">
      <div className="w-[48%] p-4 flex flex-col gap-4 justify-center items-start ">
        <div className="flex flex-col justify-center items-start">
          <p>Interested in Vending and Branding Opportunities at The Event?</p>
          <p>Fill the Form Below</p>
        </div>
        <div className="flex w-[100%] justify-between items-center">
          <input
            type="text"
            placeholder="First Name"
            className="w-[48%] h-[50px] bg-[#1F2024] rounded-lg px-4"
          />
          <input
            type="text"
            placeholder="First Name"
            className="w-[48%] h-[50px] bg-[#1F2024] rounded-lg px-4"
          />
        </div>
        <div className="flex w-[100%] justify-between items-center">
          <input
            type="text"
            placeholder="First Name"
            className="w-[100%] h-[50px] bg-[#1F2024] rounded-lg px-4"
          />
        </div>
        <div className="flex w-[100%] justify-between items-center">
          <textarea
            placeholder="First Name"
            className="w-[100%]  bg-[#1F2024] rounded-lg p-4"
            rows="10     "
            cols="20"
          />
        </div>

        <button className="w-[100%] h-[50px] uppercase bg-white font-bold shadow-2xl shadow-gray-300 rounded-lg px-4 ">
         Make Inquiry
        </button>
      </div>
      <div className="w-[48%] flex flex-col justify-center items-center">
        <img
          src={aboutpic}
          alt=""
          className="w-[100%] object-cover h-[664px] "
        />
        <p className="text-7xl py-4 font-bold">Opportunities </p>
      </div>
    </div>
  );
};

export default Vending;
