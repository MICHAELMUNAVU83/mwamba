import React from "react";
import aboutpic from "../images/about/aboutpic.png";

const KeyData = () => {
  const data = [
    {
      id: 1,
      name: "Name",
      value: "Mwamba Rugby Football Club",
    },
    {
      id: 1,
      name: "Name",
      value: "Mwamba Rugby Football Club",
    },
    {
      id: 1,
      name: "Name",
      value: "Mwamba Rugby Football Club",
    },
    {
      id: 1,
      name: "Name",
      value: "Mwamba Rugby Football Club",
    },
    {
      id: 1,
      name: "Name",
      value: "Mwamba Rugby Football Club",
    },
    {
      id: 1,
      name: "Name",
      value: "Mwamba Rugby Football Club",
    },
    {
      id: 1,
      name: "Name",
      value: "Mwamba Rugby Football Club",
    },
  ];

  return (
    <div className="bg-[#1F2024] text-white text-2xl font-bold ">
      <div className="flex   items-center">
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
        <div className="flex px-24 flex-col gap-[5px]">
          {data.map((item) => (
            <div className="flex justify-around gap-[100px] items-center">
              <p className="uppercase">{item.name}:</p>
              <p className="font-normal">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyData;
