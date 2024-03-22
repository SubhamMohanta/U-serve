import React from 'react'
import NavBar from './NavBar'
import HeroContent from './HeroContent.jsx'
import HomeContent from './HomeContent.jsx'
import TopEvents from './TopEvents.jsx'

const Home = () => {
  return(
    <>
    <NavBar/>
    <HeroContent/>
    <TopEvents/>
    <HomeContent/>
    </>
  )
}

export default Home
