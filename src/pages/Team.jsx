import React, { useState } from "react";

import Men from "../components/Team/Men";

const Team = () => {
  const [activeComponent, setActiveComponent] = useState("men");
  return (
    <div className="bg-[#1F2024]  md:pt-24 pt-24 px-8">
      <div className="bg-[#1F2024] md:w-[85%]  rounded-xl mx-5 md:mx-32 mt-28 ">
        <div className="flex flex-col md:flex-row justify-between md:border-b md:border-[grey] ">
          <div
            onClick={() => setActiveComponent("men")}
            className="border-b border-[grey] mb-3 md:border-none "
          >
            {activeComponent === "men" ? (
              <h1 className="bg-[#fff] text-[#000] text-xl text-center md:text-left md:text-3xl p-3 md:p-6 rounded-xl uppercase font-bold">
                Men's Team
              </h1>
            ) : (
              <h1 className="text-white p-3 text-center md:p-6 text-xl md:text-3xl font-bold uppercase">
                Men's Team
              </h1>
            )}
          </div>
          <div
            onClick={() => setActiveComponent("women")}
            className="border-b border-[grey] md:border-none"
          >
            {activeComponent === "women" ? (
              <h1 className="bg-[#fff] text-[#000] text-xl text-center md:text-left md:text-3xl p-3 md:p-6 rounded-xl uppercase font-bold">
                Women's Team
              </h1>
            ) : (
              <h1 className="text-white p-3 text-center md:p-6 text-xl md:text-3xl font-bold uppercase">
                Women's Team
              </h1>
            )}
          </div>
        </div>

        {activeComponent === "men" && <Men />}
        {activeComponent === "autocheck" && <Autocheck />}
      </div>
    </div>
  );
};

export default Team;
