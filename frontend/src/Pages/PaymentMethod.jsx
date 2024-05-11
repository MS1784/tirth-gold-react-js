import React from "react";
import "./CSS/PaymentMethod.css";
import { Link } from 'react-router-dom'


const PaymentMethod = () => {
  return (
    <div className="paymentmethod">
        <div className="paymentmethod-container">
            <h1>SELECT PAYMENT METHOD</h1>
          {/* <form> */}
          <div className="paymentmethod-radio">
            <label>
              <input type="radio" value="option1" checked={true} />
              Cash On Delivery
            </label>
          </div>
          <Link to='/PlaceOrder'><button>CONTINUE</button></Link>
        </div>
      </div>
  );
};

export default PaymentMethod;
