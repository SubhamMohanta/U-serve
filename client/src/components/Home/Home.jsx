import React from 'react'
import NavBar from './NavBar'
import HeroContent from './HeroContent.jsx'
import HomeContent from './HomeContent.jsx'
import TopEvents from './TopEvents.jsx'
import SubNav from './SubNav.jsx'

const Home = () => {
  return(
    <>
    <NavBar/>
    <SubNav tab={"home"}/>
    <HeroContent/>
    <TopEvents/>
    <HomeContent/>
    </>
  )
}

export default Home
