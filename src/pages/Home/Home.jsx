import React from 'react'
import HeroBanner from './HeroBanner/HeroBanner'
import "./Home.scss"
import Trending from './Trending/Trending'
export default function Home() {
  return (
    <div className='homePage'>
        <HeroBanner/>
        <Trending/>
        
    </div>
  )
}
