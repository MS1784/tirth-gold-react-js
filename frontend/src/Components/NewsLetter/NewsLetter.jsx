import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>DO YOU NEED MORE TIPS ?</h1>
      <p>Signup free and get the latest tips.</p>
      <div>
        <input type="email" placeholder='Your Email...' />
        <button>YES I WANT</button>
      </div>
    </div>
  )
}

export default NewsLetter
