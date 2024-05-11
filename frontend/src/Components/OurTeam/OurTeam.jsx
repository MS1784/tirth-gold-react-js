import React from 'react'
import './OurTeam.css'
import designer_img from '../Assets/designer_img.png'
import manager_img from '../Assets/manager_img.png'
import ceo_img from '../Assets/ceo_img.png'

const OurTeam = () => {
  return (
    <div className='our-team'>
        <div className="our-team-container">
            <h1>MEET OUR TEAM</h1>
        </div>
        <div className="out-team-details">
        <div className="out-team-detail">
            <img src={designer_img} alt="" />
            <h1>Lara</h1>
            <p>Jewel Designer</p>
        </div>
        <div className="out-team-detail">
            <img src={manager_img} alt="" />
            <h1>Ema</h1>
            <p>Manager</p>
        </div>
        <div className="out-team-detail">
            <img src={ceo_img} alt="" />
            <h1>John</h1>
            <p>CEO</p>
        </div>
      </div>
    </div>
  )
}

export default OurTeam
