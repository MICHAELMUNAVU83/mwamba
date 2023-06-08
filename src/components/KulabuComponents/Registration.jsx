import React, { useState } from "react";
import aboutpic from "../images/about/aboutpic.png";

const Registration = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [date_of_birth, setDateOfBirth] = useState("");
  const [county, setCounty] = useState("");
  const [sub_county, setSubCounty] = useState("");
  const [membership_tier, setMembershipTier] = useState("");

  return (
    <div className="flex justify-between">
      <div className="w-[60%] flex flex-col  pt-24 items-center">
        <div className="w-[90%] mx-auto flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="First Name"
              className="w-[48%] h-[50px] focus:outline-none text-white bg-[#1F2024] rounded-lg px-4"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-[48%] h-[50px] focus:outline-none text-white bg-[#1F2024] rounded-lg px-4"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="w-[100%] h-[50px] focus:outline-none text-white bg-[#1F2024] rounded-lg px-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-end">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-[48%] h-[50px] focus:outline-none text-white bg-[#1F2024] rounded-lg px-4"
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div className="flex w-[48%] flex-col">
              <label>Date of Birth</label>
              <input
                type="date"
                className="w-[100%] h-[50px] text-white placeholder-white bg-[#1F2024] rounded-lg px-4"
                value={date_of_birth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="County"
              className="w-[48%] h-[50px] focus:outline-none text-white bg-[#1F2024] rounded-lg px-4"
              value={county}
              onChange={(e) => setCounty(e.target.value)}
            />
            <input
              type="text"
              placeholder="Sub County"
              className="w-[48%] h-[50px] focus:outline-none text-white bg-[#1F2024] rounded-lg px-4"
              value={sub_county}
              onChange={(e) => setSubCounty(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label>Membership Tier</label>
            <select
              className="w-[100%] h-[50px] bg-[#1F2024] text-white  rounded-lg px-4"
              value={membership_tier}
              onChange={(e) => setMembershipTier(e.target.value)}
            >
              <option className="text-white" value="bronze">
                Bronze
              </option>

              <option className="text-white" value="silver">
                Silver
              </option>
              <option className="text-white" value="gold">
                Gold
              </option>
            </select>
          </div>

          <button className="w-[100%] h-[57px] shadow-xl mt-8 uppercase font-bold shadow-gray-400 rounded-lg px-4 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
            Register
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
