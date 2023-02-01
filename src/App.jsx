import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguratoin } from './store/homeSlice'
import { fetchDataFromApi } from './Utils/api'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';
import { Route, Routes } from 'react-router-dom';
function App() {
  const {url}=useSelector((state)=>state.home)
  const dispatch=useDispatch()
 useEffect(()=>{
  fetchApiConfig()
  
 },[])

 const fetchApiConfig=()=>{
  fetchDataFromApi("/configuration").then((res)=>{
    const url={
      backdrop:res.images.secure_base_url+"original",
      poster:res.images.secure_base_url+"original",
      profile:res.images.secure_base_url+"original"
    }
    
    dispatch(getApiConfiguratoin(url))})

 }

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:mediaType/:id" element={<Details/>}/>
      <Route path="/search/:query" element={<SearchResult/>}/>
      <Route path="/explore/:mediaType" element={<Explore/>}/>
      <Route path="*" element={<PageNotFound/>}/>




    </Routes>
    <Footer/>
    </>

    
   
  )
}

export default App
