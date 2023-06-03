import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Tiers = () => {
  const tiers = [
    {
      id: 1,
      name: "Bronze",
      description:
        "For all individuals and starters who  are starting out with Mwamba.",
      rate: "Kes 12,000",
      more_info: "Per member, per Month",
      benefits: [
        "Access to all home matches during the regular season.",
        "Exclusive discounts on official club merchandise.",

        "Quarterly newsletters with club updates",
        " behind-the-scenes insights.",
        "Job board access",
        "Upgrade to earn certificates",
      ],
    },
    {
      id: 2,
      name: "Bronze",
      description:
        "For all individuals and starters who  are starting out with Mwamba.",
      rate: "Kes 12,000",
      more_info: "Per member, per Month",
      benefits: [
        "Access to all home matches during the regular season.",
        "Exclusive discounts on official club merchandise.",
        "Quarterly newsletters with club updates",
        " behind-the-scenes insights.",
        "Job board access",
        "Upgrade to earn certificates",
      ],
    },
    {
      id: 3,
      name: "Bronze",
      description:
        "For all individuals and starters who  are starting out with Mwamba.",
      rate: "Kes 12,000",
      more_info: "Per member, per Month",
      benefits: [
        "Access to all home matches during the regular season.",
        "Exclusive discounts on official club merchandise.",
        "Quarterly newsletters with club updates",
        " behind-the-scenes insights.",
        "Job board access",
        "Upgrade to earn certificates",
      ],
    },
  ];

  return (
    <div className="bg-[#1E1E1E] py-24">
      <div className="flex justify-center items-center gap-[40px]">
        {tiers.map((tier) => (
          <div className="w-[315px] p-8 h-[573px] bg-white flex flex-col items-center">
            <div className="bg-[#F1F1F1] w-[239px] font-bold uppercase h-[35px] flex justify-center items-center">
              {tier.name}
            </div>
            <p className="w-[215.58px] text-center text-xs">
              {tier.description}
            </p>
            <p>
              <span className="text-4xl font-bold">{tier.rate}</span>
            </p>
            <p className="text-xs">{tier.more_info}</p>
            <div className="flex flex-col gap-2">
              {tier.benefits.map((benefit) => (
                <div className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#1E1E1E] text-md" />
                  <p className="text-md">{benefit}</p>
                </div>
              ))}
            </div>

            <button className="uppercase w-[238px] bg-black text-white h-[31px] flex justify-center items-center">
              Register
            </button>
          </div>
        ))}
          </div>
          
          <p className="p-8 font-bold text-white text-7xl">
              Membership Tiers
          </p>
    </div>
  );
};

export default Tiers;
