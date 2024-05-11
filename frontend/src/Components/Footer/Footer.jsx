import React from "react";
import "./Footer.css";
import call_us from "../Assets/call_us.png";
import location from "../Assets/location.png";
import hours from "../Assets/hours.png";

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="footer-logo">
            <img src='' alt='' />
            <p>SHOPPER</p>
        </div>
      <ul className="footer-link">
         <li><img src={call_us} alt="" />CALL US</li>
            <li><img src={location} alt=""/>LOCATION</li>
            <li><img src={hours} alt=""/>HOURS</li>
            <li>About</li>
            <li>Contact</li>
      </ul> */}
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={call_us} alt="" />
          <hr />
          <div>
            <h3>CALL US</h3>
            <p>+91 9878562356</p>
            <p>+91 7889423564</p>
          </div>
        </div>
        <div className="footer-icons-container">
          <img src={location} alt="" />
          <hr />
          <div>
            <h3>LOCATION</h3>
            <p>Address: Rajkot, 360020</p>
          </div>
        </div>
        <div className="footer-icons-container">
          <img src={hours} alt="" />
          <hr />
          <div>
            <h3>HOURS</h3>
            <p>Mon - Fri__11 am - 8 pm</p>
            <p>Sat- Sun__8 am - 8 pm</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
