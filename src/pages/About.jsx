import React from "react";
import HomeAbout from "../components/AboutComponents/HomeAbout";
import Honours from "../components/AboutComponents/Honours";
import KeyData from "../components/AboutComponents/KeyData";
import Partners from "../components/AboutComponents/Partners";

const About = () => {
  return (
    <div>
      <HomeAbout />
      <Honours />
      <KeyData />
      <Partners />
    </div>
  );
};

export default About;
