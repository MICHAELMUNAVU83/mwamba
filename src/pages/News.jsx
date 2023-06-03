import React from "react";
import LatestNews from "../components/NewsComponents/LatestNews";
import NewsHome from "../components/NewsComponents/NewsHome";
import Standings from "../components/NewsComponents/Standings";
const News = () => {
  return (
    <div>
      <NewsHome />

      <LatestNews />
      <Standings />
    </div>
  );
};

export default News;
