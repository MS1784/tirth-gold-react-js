import React from 'react'
import './Offers.css'
import ads from '../Assets/ads_2.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className='offers-right'>
        <img src={ads} alt="" />
      </div>
    </div>
  )
}

export default Offers
