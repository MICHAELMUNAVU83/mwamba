import React from "react";
import aboutpic from "../images/about/aboutpic.png";

const Benefits = () => {
  return (
    <div class="bg-white flex justify-between">
      <div className="w-[50%] text-3xl mx-auto uppercase flex flex-col justify-center items-center ">
        <ul className="gap-4 w-[630px] list-disc">
          <li>
            Be Part of the <span className="font-bold">Inner Circle</span>{" "}
          </li>
          <li>
            Priority to the{" "}
            <span className="font-bold">Best Seats in the House</span>{" "}
          </li>

          <li>
            Wear Your Pride <span className="font-bold">at a Discount </span>{" "}
          </li>

          <li>
            Stay in the Know,{" "}
            <span className="font-bold"> Ahead of Everyone Else </span>
          </li>
          <li>
            {" "}
            <span className="font-bold"> Connect </span> with the Rugby
            Community
          </li>
          <li>
            <span className="font-bold"> Make a Difference </span>
            in Your Community
          </li>
          <li>
            Get <span className="font-bold"> Up Close and Personal </span> with
            the Stars
          </li>

          <li>
            Unlock Exciting{" "}
            <span className="font-bold"> Partner Discounts </span>{" "}
          </li>
          <li>
            <span className="font-bold"> Have a Voice </span> in Our Club's
            Future Connect Online with Fellow Fans
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
