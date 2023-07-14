import React from "react";
import aboutpic from "../images/about/aboutpic.png";

const Benefits = () => {
  return (
    <div
      id="membershipbenefits"
      class="bg-white flex flex-col-reverse md:flex-row justify-between"
    >
      <div className="md:w-[50%] w-[100%] md:text-xl mx-auto uppercase flex flex-col justify-center items-center ">
        <ul className="gap-8 poppins-light space-y-2 md:w-[630px] p-4 md:p-0 list-disc">
          <li>
            We are waiving the membership fee for{" "}
            <span className="font-bold poppins-regular"> ALL members</span> for
            the season 2023-24 only;
          </li>
          <li>
            Only the Annual Subscription fee is payable for membership to be
            considered{" "}
            <span className="font-bold poppins-regular">
              renewed and updated;{" "}
            </span>
          </li>

          <li>
            We are introducing a{" "}
            <span className="font-bold poppins-regular"> Lipa Pole Pole </span>{" "}
            Option to accommodate the prevailing economic conditions
          </li>

          <li>
            As a paid up member, you will be entitled to a{" "}
            <span className="font-bold poppins-regular">
              Mwamba RFC Replica Jersey{" "}
            </span>{" "}
            to be delivered at the 2023 Kabeberi 7s.
          </li>
          <li>
            As a paid up member, you will receive a{" "}
            <span className="font-bold poppins-regular">massive discount </span>{" "}
            on our Digital Membership
          </li>
          <li>
            All paid up members will receive discounted ticket prizes to our{" "}
            <span className="font-bold poppins-regular">
              {" "}
              home matches, to Kabeberi 7s, and to all other club events.
            </span>
          </li>
        </ul>
      </div>

      <div class="md:w-[40%] w-[100%] flex flex-col justify-center items-center ">
        <p className="text-7xl py-4 poppins-bold font-bold">Benefits</p>
        <img src={aboutpic} alt="" class="w-[100%] h-[80vh] object-cover" />
      </div>
    </div>
  );
};

export default Benefits;
