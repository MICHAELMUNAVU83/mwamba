import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import team1 from "../images/team/team1.png";
import team2 from "../images/team/team2.png";
import team3 from "../images/team/team3.png";
import team4 from "../images/team/team4.png";
import team5 from "../images/team/team5.png";
import team6 from "../images/team/team6.png";
import team7 from "../images/team/team7.png";
import team8 from "../images/team/team8.png";
import team9 from "../images/team/team9.png";
import team10 from "../images/team/team10.png";
import team11 from "../images/team/team11.png";
import team12 from "../images/team/team12.png";
import team13 from "../images/team/team13.png";
import team14 from "../images/team/team14.png";
import team15 from "../images/team/team15.png";
import team16 from "../images/team/team16.png";
import team17 from "../images/team/team17.png";
import team18 from "../images/team/team18.png";
import team19 from "../images/team/team19.png";
import team20 from "../images/team/team20.png";
import team21 from "../images/team/team21.png";
import team22 from "../images/team/team22.png";
import team23 from "../images/team/team23.png";
import team24 from "../images/team/team24.png";
import team25 from "../images/team/team25.png";
import team26 from "../images/team/team26.png";
import team27 from "../images/team/team27.png";
import team28 from "../images/team/team28.png";
import team29 from "../images/team/team29.png";
import team30 from "../images/team/team30.png";
import team31 from "../images/team/team31.png";
import team32 from "../images/team/team32.png";
import team33 from "../images/team/team33.png";
import team34 from "../images/team/team34.png";
import team35 from "../images/team/team35.png";

const Men = () => {
  const team_members = [
    {
      id: 1,
      image: team1,
      name: "Paul Opiyo",
      position: "Prop",
    },
    {
      id: 2,
      image: team2,
      name: "Ambrose Mbare",
      position: "Flanker",
    },
    {
      id: 3,
      image: team3,
      name: "Gerald Ogutu",
      position: "Scrum Half",
    },
    {
      id: 4,
      image: team4,
      name: "Daniel Taabu",
      position: "Full Back",
    },
    {
      id: 5,
      image: team5,
      name: "Humphrey Wambui",
      position: "Flanker",
    },
    {
      id: 6,
      image: team6,
      name: "Mike Okello",
      position: "Flanker",
    },
    {
      id: 7,
      image: team7,
      name: "Lucas Opal",
      position: "Fly half",
    },
    {
      id: 8,
      image: team8,
      name: "Jeffrey Lumbugu",
      position: "Hooker",
    },
    {
      id: 9,
      image: team9,
      name: "Billy Kipchirchir",
      position: "Wing",
    },
    {
      id: 10,
      image: team10,
      name: "Apolo Owino",
      position: "Center",
    },
    {
      id: 11,
      image: team11,
      name: "Eugene Sudi",
      position: "Prop",
    },
    {
      id: 12,
      image: team12,
      name: "Collins Odhiambo",
      position: "Flanker",
    },
    {
      id: 13,
      image: team13,
      name: "Charles Chege",
      position: "Scrum Half",
    },
    {
      id: 14,
      image: team14,
      name: "Ian Wamalwa",
      position: "Second Row",
    },
    // {
    //   id: 15,
    //   image: team15,
    //   name: "Paul Opiyo",
    //   position: "Team Manager",
    // },
    // {
    //   id: 16,
    //   image: team16,
    //   name: "Paul Opiyo",
    //   position: "Team Manager",
    // },
    // {
    //   id: 17,
    //   image: team17,
    //   name: "Paul Opiyo",
    //   position: "Team Manager",
    // },
    {
      id: 18,
      image: team18,
      name: "Brain Kahura",
      position: "Hooker",
    },
    {
      id: 19,
      image: team19,
      name: "Felix Otieno",
      position: "Eigth Man",
    },
    {
      id: 20,
      image: team20,
      name: "Christopher Asira",
      position: "Second Row",
    },
    {
      id: 21,
      image: team21,
      name: "Jason Braganza",
      position: "Club Chairman",
    },
    {
      id: 22,
      image: team22,
      name: "Gideon Mbithi",
      position: "Eigth Man",
    },
    {
      id: 23,
      image: team23,
      name: "Salaton Muturi",
      position: "Hooker",
    },
    {
      id: 24,
      image: team24,
      name: "Austin Injene",
      position: "Scrum Half",
    },
    {
      id: 25,
      image: team25,
      name: "Gilbery Nyang'or",
      position: "Club Honorary Secretary",
    },
    {
      id: 26,
      image: team26,
      name: "Samuel Mbeche",
      position: "Winger",
    },
    {
      id: 27,
      image: team27,
      name: "James Ondienge",
      position: "Team Doctor",
    },
    {
      id: 28,
      image: team28,
      name: "Jennifer Githae",
      position: "Director of Women Rugby",
    },
    {
      id: 29,
      image: team29,
      name: "Fahad Adil",
      position: "Director of Rugby",
    },
    {
      id: 30,
      image: team30,
      name: "Alphonse Mwachia",
      position: "Team Manager",
    },
    {
      id: 31,
      image: team31,
      name: "Kerry Opiyo",
      position: "Full Back",
    },
    {
      id: 32,
      image: team32,
      name: "Yahya Hussein",
      position: "Flanker",
    },
    {
      id: 33,
      image: team33,
      name: "Chrispin Omondi",
      position: "Winger",
    },
    {
      id: 34,
      image: team34,
      name: "Michael Ochieng",
      position: "Fly Half",
    },
    {
      id: 35,
      image: team35,
      name: "Alex Aturo",
      position: "Flanker",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(team_members.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTeamMembers = team_members.slice(startIndex, endIndex);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    scroll.scrollToTop({
      smooth: true,
      duration: 500,
    });
  };

  return (
    <>
      <h1 className="my-4 text-white md:text-7xl text-5xl poppins-bold">
        Men's Team
      </h1>
      <div className="grid md:grid-cols-4 gap-[30px]">
        {currentTeamMembers.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out items-center bg-white  text-[#1F2024]"
          >
            <img
              src={item.image}
              alt=""
              className="w-[100%] h-[300px] object-cover"
            />
            <p className="text-2xl poppins-regular font-bold">{item.name}</p>
            <p className="text-xl poppins-light">{item.position}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => goToPage(pageNumber)}
              className={`mx-1 px-4 py-2 rounded-lg ${
                currentPage === pageNumber ? "bg-gray-400" : "bg-gray-200"
              }`}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </>
  );
};

export default Men;
