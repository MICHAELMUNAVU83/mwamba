import React from "react";
import aboutpic from "../images/about/aboutpic.png";

const History = () => {
  return (
    <div className="bg-white justify-between flex">
      <div className="w-[630px] p-4 ">
        <p>
          Mwamba Rugby Football Club, famously known as Kulabu, is a Kenyan
          rugby union club based in Nairobi. The club was founded in 1977 with
          the aim of promoting rugby among indigenous Kenyans when the game was
          still dominated by the whites in the country. The club played and
          still plays at the Nairobi Railways Club next to Uhuru Park since its
          formation. It plays in the Kenya Cup, the premier rugby competition in
          Kenya.
        </p>
        <p>
          In the shorter version of the game, Mwamba RFC has also been renowned
          in production of world class players who have gone to play for the
          country and fly the Kenyan flag high. They include:
        </p>
        <ul className="p-4">
        <li></li>

Edward Rombo (Former Kenya international who has also played professional rugby in the UK)

Mwangi Muthee (Former Kenya international and KRU president)

Manuel Okoth (Former Kenya international and former Kenya 15s coach)John Onyango Mbai (Former Kenya XV and VII international, former Kenya 7s Team Manager and former Mwamba RFC head coach)

Humphrey Kayange (Kenya Sevens player and Anti-doping Global Ambassador)

Collins Injera (Kenya Sevens players and current top try scorer in the World Series)

Lavin Asego (Kenya Sevens player and 10th all-time points scorer in the World Series)

Sinaida Aura (Kenya Women Sevens player)

Catherine Abila (Kenya Sevens women captain)

Camilyne Awuor (Kenya Sevens Women Team Manager)And many more.



        </ul>
      </div>
      <div className="w-[40%] flex flex-col items-center  justify-center">
        <img src={aboutpic} alt="" className="w-full h-[799px] object-cover" />
        <p className="text-[#1F2024] font-bold text-7xl py-4">History</p>
      </div>
    </div>
  );
};

export default History;
