import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Tiers = () => {
  const tiers = [
    {
      id: 1,
      name: "Category 1",
      description: [
        <p>
          Former Players and Management{" "}
          <span className="font-bold poppins-bold">KES 5,000</span>{" "}
        </p>,
        <p>
          {" "}
          Life members{" "}
          <span className="font-bold poppins-bold">KES 10,000</span>{" "}
        </p>,
      ],

      benefits: [
        "We are waiving the membership fee for ALL members for the season 2023-24 only",
        " Only the Annual Subscription fee is payable for membership to be considered renewed and updated;",

        "We are introducing a “Lipa Pole Pole” Option to accommodate the prevailing economic conditions.",
        " All paid up members will be entitled to a Mwamba RFC Replica Jersey to be delivered at Kabeberi 7s",
      ],
    },
    {
      id: 2,
      name: "Category 2",
      description: [
        <p>
          Fans <span> KES 4,000 </span>{" "}
        </p>,
        <p>
          {" "}
          Players under 25 years old{" "}
          <span className="font-bold poppins-bold"> KES 10,000 </span>{" "}
        </p>,
        <p className="text-sm">
          Players over 25 years old + 2 years active playing{" "}
          <span className="font-bold poppins-bold"> KES 1,500 </span>
        </p>,
      ],

      benefits: [
        "We are waiving the membership fee for ALL members for the season 2023-24 only",
        " Only the Annual Subscription fee is payable for membership to be considered renewed and updated;",

        "We are introducing a “Lipa Pole Pole” Option to accommodate the prevailing economic conditions.",
        " All paid up members will be entitled to a Mwamba RFC Replica Jersey to be delivered at Kabeberi 7s",
      ],
    },
    {
      id: 3,
      name: "Category 3",
      description: [
        <p>
          Digital membership <span className="font-bold"> KES 500</span>
        </p>,
      ],

      benefits: [
        " Access to content on Mwamba TV Youtube channel",
        "Access to livestreams of Mwamba matches on Mwamba TV Youtube channel for a subsidized fee",
      ],
    },
  ];

  return (
    <div id="membershiptiers" className="bg-[#1E1E1E] py-24">
      <div className="flex flex-col md:flex-row justify-center items-center gap-[40px]">
        {tiers.map((tier) => (
          <div className="w-[315px] cursor-pointer shadow-md transition-all duration-500 ease-in-out  hover:shadow-gray-300 p-8 h-[573px] bg-white  flex justify-between flex-col items-center">
            <div className="bg-[#F1F1F1] poppins-bold w-[239px] font-bold uppercase h-[35px] flex justify-center items-center">
              {tier.name}
            </div>
            <ul className="w-[215.58px] list-disc  poppins-light text-center text-md">
              {tier.description.map((desc) => (
                <li className="my-1">{desc}</li>
              ))}
            </ul>

            <h1 className="text-2xl font-bold">Benefits</h1>

            <div className="flex poppins-light flex-col gap-2">
              {tier.benefits.map((benefit) => (
                <div className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#1E1E1E] w-[5%] text-md" />
                  <p className="text-xs w-[90%]">{benefit}</p>
                </div>
              ))}
            </div>

            <a
              href="#membershipregistration"
              className="uppercase poppins-bold w-[238px] bg-[#1F2024] text-white h-[31px] flex justify-center items-center"
            >
              Join Now
            </a>
          </div>
        ))}
      </div>

      <p className="p-8 font-bold poppins-bold text-white md:text-7xl text-5xl">
        Membership Tiers
      </p>
    </div>
  );
};

export default Tiers;
