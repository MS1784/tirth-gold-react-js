import React from 'react'
import './CollectionsButton.css'
import men_img from '../Assets/men-home.png'
import women_img from '../Assets/women-home.png'
import { Link } from 'react-router-dom'


const CollectionsButton = () => {
  return (
    <div className='collections-button'>
      <div className='collections-men'>
        <Link to='/mens'><button><img src={men_img} alt="" />JWELLERY FOR MAN</button></Link>
      </div>
      <div className='collections-women'>
        <Link to='/womens'><button><img src={women_img} alt="" />JWELLERY FOR WOMAN</button></Link>
      </div>
    </div>
  )
}

export default CollectionsButton
