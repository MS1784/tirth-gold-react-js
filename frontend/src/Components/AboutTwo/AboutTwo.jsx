import React from "react";
import "./AboutTwo.css";
import about_two_img from "../Assets/About-Two-img.png";
import add_icon from "../Assets/Add_Cart_icon.png";
import service_icon from "../Assets/service_icon.png";
import payment_icon from "../Assets/payment_icon.png";
import delievery_icon from "../Assets/delievery_icon.png";

const AboutTwo = () => {
  return (
    <div className="about-two">
      <div className="about-two-left">
        <img src={about_two_img} alt="" />
      </div>
      <div className="about-two-right">
        <div>
          <h1>JEWELRY BRINGS OUT YOUR INNER SPARKLE & REFLECTS YOUR STYLE</h1>
          <p>
            “Introducing our Golden Elegance Bridal Necklace, a mesmerizing
            symbol of love and beauty. Handcrafted with 18-karat gold and
            adorned with dazzling diamonds, it exudes opulence and luxury. As it
            gracefully drapes around the bride’s neck, its intricate design and
            shimmering diamonds reflect the promises made and the radiant joy of
            the wedding day”
          </p>
        </div>
        <div className="about-two-sarvice">
            <div className="aobut-two-icon">
                <img src={add_icon} alt="" />
                <p>Free Shipping</p>
            </div>
            <div className="aobut-two-icon">
                <img src={service_icon} alt="" />
                <p>24 x 7 Customer Support</p>
            </div>
            <div className="aobut-two-icon">
                <img src={payment_icon} alt="" />
                <p>Safe Payment</p>
            </div>
            <div className="aobut-two-icon">
                <img src={delievery_icon} alt="" />
                <p>On Time Delivery</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
