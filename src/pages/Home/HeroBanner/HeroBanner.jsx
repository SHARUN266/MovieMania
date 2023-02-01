import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeroBanner() {
    const nav=useNavigate()
    const [backGround,setBackGround]=useState("")
    const [query,setQuery]=useState("");
    const searchQueryHandler=(event)=>{
        if(event.key=="Enter"&& query.length>0){
            nav(`/search/${query}`)
        }

    }
  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBanner">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies,TV shows and people to discover. Explore now.
          </span>
          <div className="searchIntput">
            <input onChange={(e)=>setQuery(e.target.value)} onKeyUp={(e)=>searchQueryHandler(e)} type="text" placeholder="Search for a movie or tv show..." />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
