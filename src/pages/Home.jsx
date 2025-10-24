import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import IconSections from '../components/IconSections'
import Services from '../components/Services'
import Specialization from '../components/Specialization'

function Home() {
  return (
    <div>
        <HeroSection/>
        <AboutUs/>
        <IconSections/>
        <Services/>
        <Specialization/>
    </div>
  )
}

export default Home