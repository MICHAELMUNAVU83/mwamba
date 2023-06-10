import React from "react";
import keydata from "../images/about/keydata.png";

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
      value: "Kenya Rugby Union",
    },
    {
      id: 3,
      name: "Year Founded",
      value: "1977",
    },
    {
      id: 4,
      name: "Location",
      value: "Nairobi, Kenya",
    },
    {
      id: 5,
      name: "Region",
      value: "Nairobi County",
    },

    {
      id: 6,
      name: "Leagues",
      value: "Kenya Cup, Eric Shirley Shield,   Womens Kenya Cup ",
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
            src={keydata}
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
              <p className="uppercase text-3xl w-[100%]">{item.name}:</p>
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
