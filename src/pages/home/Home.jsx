import React from "react";
import "./home.scss";
import HeroBanner from "../home/heroBanner/HeroBanner";
import Trending from "../home/trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <div className="homepage">
      <HeroBanner />

      <Trending />

      <Popular />

      <TopRated />
      {/* <div className="" style={{ height: 800 }}></div> */}
    </div>
  );
};

export default Home;
