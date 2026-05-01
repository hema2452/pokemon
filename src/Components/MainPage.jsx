import React, { useState } from 'react'
import Navabar from './Navabar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import DisplayInfo from './DisplayInfo'

const MainPage = () => {
    const [favorites, setFavorites] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
    <Navabar/>
    <Routes>
      <Route path="/" element={<Home favorites={favorites} setFavorites={setFavorites} isLoaded={isLoaded} setIsLoaded={setIsLoaded}/>}>  </Route>
      <Route path =":id" element = {<DisplayInfo  favorites={favorites} setFavorites={setFavorites}/>}/>
    </Routes>
    </>
  )
}

export default MainPage