import React from 'react'
import order_confirm_img from "../Assets/order-confirmation.png"
import "./OrderConfirm.css";
import { Link } from 'react-router-dom'


const OrderConfirm = () => {
  return (
    <div className='orderconfirm'>
      <div className="orderconfirm-img">
        <img src={order_confirm_img} alt="" />
        <h1>Your Order is Confirmed!!!  </h1>
      </div>
      <div className="orderconfirm-btn">
        <Link to='/'><button>CONTINUE TO SHOPPING</button></Link>
      </div>
    </div>
  )
}

export default OrderConfirm

