import React from "react";
import aboutpic from "../images/about/aboutpic.png";

const Registration = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[60%] flex flex-col  pt-24 items-center">
        <div className="w-[90%] mx-auto flex flex-col gap-4">
          <div className="flex justify-between items-center">
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
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="w-[100%] h-[50px] bg-[#1F2024] rounded-lg px-4"
            />
          </div>
          <div className="flex justify-between items-center">
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
          <div className="flex justify-between placeholder-white items-center">
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
          <div className="flex justify-between items-center">
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
          <div className="flex flex-col">
            <label>Membershi Tier</label>
            <select className="w-[100%] h-[50px] bg-[#1F2024] rounded-lg px-4">
              <option value="bronze">Bronze</option>

              <option value="silver">Silver</option>
              <option value="gold">Gold</option>
            </select>
          </div>

          <button className="w-[100%] h-[57px] shadow-xl shadow-gray-400 rounded-lg px-4">
            Submit
          </button>
        </div>
      </div>
      <div className="w-[40%] flex flex-col justify-center items-center">
        <img
          src={aboutpic}
          alt=""
          className="w-[100%] h-[80vh] bg-cover bg-center bg-no-repeat"
        />
        <p className="text-7xl py-8 font-bold">Registration</p>
      </div>
    </div>
  );
};

export default Registration;
