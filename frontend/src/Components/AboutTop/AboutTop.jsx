import React from "react";
import "./AboutTop.css";
import about_top_img from "../Assets/About-Top-img.png";

const AboutTop = () => {
  return (
    <div className="abouttop">
      <div className="abouttop-header">
        <h1>About Us</h1>
      </div>
      <div className="abouttop-container">
        <div className="abouttop-left">
          <div className="about-left-description">
            <p className="about-text">Craft Jewelry</p>
            <h1>WE PROVIDE THE BEST AND MOST LUXURIOUS DESIGNER JEWELS</h1>
            <p className="aboutop-text">
              “Indulge in the luxurious allure of our 24K gold-plated necklace,
              meticulously crafted to exude opulence and elevate your style.”
            </p>
            <a href="/">Shop now</a>
          </div>
        </div>
        <div className="about-right">
          <img src={about_top_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutTop;
