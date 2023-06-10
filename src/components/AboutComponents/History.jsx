import React from "react";
import historypic from "../images/about/historypic.png";

const History = () => {
  return (
    <div id="historyabout" className="bg-white justify-between flex">
      <div className="w-[45%] poppins-light p-8 ">
        <p>
          Mwamba Rugby Football Club, famously known as Kulabu, is a Kenyan
          rugby union club based in Nairobi. The club was founded in 1977 with
          the aim of promoting rugby among indigenous Kenyans when the game was
          still dominated by the whites in the country. The club played at the
          Nairobi Railways Club next to Uhuru Park since its formation. It plays
          in the Kenya Cup, the premier rugby competition in Kenya.
        </p>
        <p>
          In the shorter version of the game, Mwamba RFC has also been renowned
          in production of world class players who have gone to play for the
          country and fly the Kenyan flag high. They include:
        </p>
        <ul className="p-4 list-disc">
          <li>
            <span className="font-bold poppins-regular">Edward Rombo</span>{" "}
            (Former Kenya international who has also played professional rugby
            in the UK)
          </li>
          <li>
            <span className="font-bold poppins-regular">Mwangi Muthee</span>
            (Former Kenya international and KRU president)
          </li>
          <li>
            <span className="font-bold poppins-regular">Manuel Okoth</span>
            (Former Kenya international and former Kenya 15s coach)John Onyango
            Mbai (Former Kenya XV and VII international, former Kenya 7s Team
            Manager and former Mwamba RFC head coach)
          </li>
          <li>
            <span className="font-bold poppins-regular">Humphrey Kayange</span>
            (Kenya Sevens player and Anti-doping Global Ambassador)
          </li>
          <li>
            <span className="font-bold poppins-regular">Collins Injera</span>
            (Kenya Sevens players and current top try scorer in the World
            Series)
          </li>
          <li>
            <span className="font-bold poppins-regular">Lavin Asego</span>
            (Kenya Sevens player and 10th all-time points scorer in the World
            Series)
          </li>
          <li>
            <span className="font-bold poppins-regular"> Sinaida Aura</span>
            (Kenya Women Sevens player)
          </li>
          <li>
            <span className="font-bold">Catherine Abila</span>
            (Kenya Sevens women captain)
          </li>
          <li>
            <span className="font-bold">Camilyne Awuor</span>
            (Kenya Sevens Women Team Manager)And many more.
          </li>
        </ul>
      </div>
      <div className="w-[50%] flex flex-col items-center  justify-center">
        <img
          src={historypic}
          alt=""
          className="w-full h-[799px] object-cover"
        />
        <p className="text-[#1F2024] font-bold poppins-bold text-7xl py-4">
          History
        </p>
      </div>
    </div>
  );
};

export default History;
