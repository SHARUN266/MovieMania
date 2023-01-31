import { useEffect, useState } from 'react'
import { fetchDataFromApi } from './Utils/api'

function App() {
 useEffect(()=>{
   fetchDataFromApi("/movie/popular").then((res)=>console.log(res))
 },[])

  return (
    <div className="App">
      App
    </div>
  )
}

export default App
