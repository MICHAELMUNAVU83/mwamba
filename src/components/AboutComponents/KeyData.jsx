import React from "react";
import aboutpic from "../images/about/aboutpic.png";

const KeyData = () => {
  const data = [
    {
      id: 1,
      name: "Full Name",
      value: "Mwamba Rugby Football Club",
    },
    {
      id: 2,
      name: "Union",
      value: "Keny Rugby Union",
    },
    {
      id: 2,
      name: "Year Founded",
      value: "1977",
    },
    {
      id: 4,
      name: "Location",
      value: "Nairobi, Kenya",
    },
    {
      id: 1,
      name: "Region",
      value: "Nairobi County",
    },
    {
      id: 1,
      name: "Grounds",
      value: "Nairobi Railway Club",
    },
    {
      id: 1,
      name: "Chairman",
      value: "George Mbaye",
    },
    {
      id: 1,
      name: "Coaches",
      value: "Kevin Wambua",
    },
    {
      id: 1,
      name: "Captains",
      value: "Patrick Ruhiu",
    },
    {
      id: 1,
      name: "Leagues",
      value: "Kenya Cup, Eric Shirley Shield,  KRU Womens League",
    },
  ];

  return (
    <div
      id="keydataabout"
      className="bg-[#1F2024] text-white text-2xl font-bold "
    >
      <div className="flex    items-center">
        <div className="flex w-[50%]  flex-col  items-center ">
          <img
            src={aboutpic}
            alt=""
            className="w-[100%] h-[80vh] object-cover"
          />
          <p className="h-[17vh] text-7xl flex justify-center items-center  ">
            Key Data
          </p>
        </div>
        <div className="flex w-[50%] px-8 flex-col gap-2">
          {data.map((item) => (
            <div className="flex justify-around   items-center">
              <p className="uppercase text-md w-[100%]">{item.name}:</p>
              <p className="font-normal w-[100%] uppercase text-sm">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyData;
