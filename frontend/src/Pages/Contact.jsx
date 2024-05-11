import React, { useState } from "react";
// import contact_img from '../Components/Assets/contact-img.png'
import "./CSS/Contact.css";
import axios  from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:4000/contect", {
      name,  
      email,
        message,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting contect:", error);
    }
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-fields">
          <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="email" placeholder="Enter email address " value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="textz" placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)}/>
        </div>
        <div className="contact-img">
          {/* <img src={contact_img} alt="" /> */}
        </div>
        <button onClick={handleSubmit}>SUBMIT</button>
      </div>
    </div>
  );
};

export default Contact;
