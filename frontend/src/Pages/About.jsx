import React from 'react'
import './CSS/About.css'
import AboutTop from '../Components/AboutTop/AboutTop'
import AboutTwo from '../Components/AboutTwo/AboutTwo'
import OurTeam from '../Components/OurTeam/OurTeam'

const About = () => {
  return (
    <div className='about'>
      <AboutTop />
      <AboutTwo />
      <OurTeam/>
    </div>
  )
}

export default About
