import React from "react";
import "./Hero.css";
import ads from "../Assets/ads_2.png";
// import ads_img from '../Assets/Ads.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
      <div className="hero-latest-btn">
        <div>Latest Collection</div>
      </div>
    </div>
      <div className="hero-right">
        <img src={ads} alt="" />
      </div>
    </div>
  );
};

export default Hero;
