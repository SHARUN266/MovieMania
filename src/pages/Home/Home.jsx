import React from "react";
import HeroBanner from "./HeroBanner/HeroBanner";
import "./Home.scss";
import Popular from "./Popular/Popular";
import TopRating from "./TopRating/TopRating";
import Trending from "./Trending/Trending";
export default function Home() {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular/>
      <TopRating/>
    </div>
  );
}
