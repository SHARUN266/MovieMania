import React from 'react'
import HeroBanner from './HeroBanner/HeroBanner'
import "./Home.scss"
export default function Home() {
  return (
    <div className='homePage'>
        <HeroBanner/>
        <div style={{height:"500vh"}}></div>
    </div>
  )
}
