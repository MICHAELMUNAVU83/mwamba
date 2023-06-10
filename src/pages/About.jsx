import React from "react";
import HomeAbout from "../components/AboutComponents/HomeAbout";
import Honours from "../components/AboutComponents/Honours";
import KeyData from "../components/AboutComponents/KeyData";
import Partners from "../components/AboutComponents/Partners";
import History from "../components/AboutComponents/History";

const About = () => {
  return (
    <div>
      <HomeAbout />
      <Honours />
      <KeyData />
      <History />
      
    </div>
  );
};

export default About;
