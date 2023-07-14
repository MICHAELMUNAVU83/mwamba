import React, { useState } from "react";
import kulaburegistration from "../images/kulabu/kulaburegistration.png";

const Registration = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [date_of_birth, setDateOfBirth] = useState("");
  const [county, setCounty] = useState("");
  const [sub_county, setSubCounty] = useState("");
  const [membership_tier, setMembershipTier] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number,
        email: email,
        date_of_birth: date_of_birth,
        county: county,
        membership_category: membership_tier,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Registration Successful");
      })
      .catch((err) => {
        console.log(err);
        alert("Registration Failed");
      });
  };

  return (
    <div
      id="membershipregistration"
      className="flex md:flex-row items-center flex-col-reverse justify-between"
    >
      <div className="md:w-[60%] w-[100%] flex flex-col py-8  md:pt-24 items-center">
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
            <label>Category</label>
            <select
              className="w-[100%] h-[50px] bg-[#1F2024] text-white  rounded-lg px-4"
              value={membership_tier}
              onChange={(e) => setMembershipTier(e.target.value)}
            >
              <option className="text-white" value="category1">
                Category 1
              </option>

              <option className="text-white" value="category2">
                Category 2
              </option>
              <option className="text-white" value="category3">
                Category 3
              </option>
            </select>
          </div>

          <button
            className="w-[100%] h-[57px] shadow-xl mt-8 uppercase font-bold shadow-gray-400 rounded-lg px-4 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </div>
      <div className="md:w-[40%] w-[100%] flex flex-col justify-center items-center">
        <p className="md:text-7xl  text-5xl md:py-8 py-2 font-bold">
          Registration
        </p>
        <img
          src={kulaburegistration}
          alt=""
          className="w-[100%] h-[80vh] object-cover bg-cover bg-center bg-no-repeat"
        />
      </div>
    </div>
  );
};

export default Registration;
