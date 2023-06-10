import React from "react";
import HomeAbout from "../components/AboutComponents/HomeAbout";
import Honours from "../components/AboutComponents/Honours";
import KeyData from "../components/AboutComponents/KeyData";
import MwambaAt45 from "../components/AboutComponents/MwambaAt45";
import History from "../components/AboutComponents/History";

const About = () => {
  return (
    <div>
      <HomeAbout />
      <Honours />
      <KeyData />
      <History />
      <MwambaAt45 />
    </div>
  );
};

export default About;
