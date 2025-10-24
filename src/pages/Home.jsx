import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import IconSections from '../components/IconSections'
import Services from '../components/Services'

function Home() {
  return (
    <div>
        <HeroSection/>
        <AboutUs/>
        <IconSections/>
        <Services/>
    </div>
  )
}

export default Home