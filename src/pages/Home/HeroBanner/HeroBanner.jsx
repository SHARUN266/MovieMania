import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

export default function HeroBanner() {
    const nav=useNavigate();
    const {url}=useSelector((state)=>state.home)
    const {error,loading,data}=useFetch("/movie/upcoming")
    const [backGround,setBackGround]=useState("")
    const [query,setQuery]=useState("");
    useEffect(()=>{
       
        const bg=url.backdrop+data?.results[Math.floor(Math.random()*20)]?.backdrop_path;
        setBackGround(bg)
    },[data])
    const searchQueryHandler=(event)=>{
    
        if(event.key=="Enter"&& query.length>0){
            nav(`/search/${query}`)
        }

    }
   
  return (
    <div className="heroBanner">
        <div className="backdrop-img">
            <img src={backGround} alt="" />
        </div>
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
