import React from "react";
import HeroBanner from "./HeroBanner/HeroBanner";
import "./Home.scss";
import Popular from "./Popular/Popular";
import Trending from "./Trending/Trending";
export default function Home() {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular/>
    </div>
  );
}
