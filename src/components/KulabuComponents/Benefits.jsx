import React from "react";
import aboutpic from "../images/about/aboutpic.png";

const Benefits = () => {
  return (
    <div class="bg-white flex justify-between">
      <div className="w-[50%] text-xl mx-auto uppercase flex flex-col justify-center items-center ">
        <ul className="gap-8 space-y-2 w-[630px] list-disc">
          <li>
            We are waiving the membership fee for{" "}
            <span className="font-bold"> ALL members</span> for the season
            2023-24 only;
          </li>
          <li>
            Only the Annual Subscription fee is payable for membership to be
            considered <span className="font-bold">renewed and updated; </span>
          </li>

          <li>
            We are introducing a{" "}
            <span className="font-bold"> Lipa Pole Pole </span> Option to
            accommodate the prevailing economic conditions
          </li>

          <li>
            As a paid up member, you will be entitled to a{" "}
            <span className="font-bold">Mwamba RFC Replica Jersey </span> to be
            delivered at the 2023 Kabeberi 7s.
          </li>
          <li>
            As a paid up member, you will receive a{" "}
            <span className="font-bold">massive discount </span> on our Digital
            Membership
          </li>
          <li>
            All paid up members will receive discounted ticket prizes to our{" "}
            <span className="font-bold">
              {" "}
              home matches, to Kabeberi 7s, and to all other club events.
            </span>
          </li>
        </ul>
      </div>

      <div class="w-[40%] flex flex-col justify-center items-center ">
        <img src={aboutpic} alt="" class="w-[100%] h-[80vh] object-cover" />
        <p className="text-7xl py-4 font-bold">Benefits</p>
      </div>
    </div>
  );
};

export default Benefits;
