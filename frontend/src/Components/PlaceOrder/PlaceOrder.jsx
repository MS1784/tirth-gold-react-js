import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { Link } from 'react-router-dom';
import { HomeContext } from "../../Context/HomeContext";
import axios from 'axios';

const PlaceOrder = () => {
    const { getTotalCartAmount, all_product, cartItems} = useContext(HomeContext);
    const [orderId, setOrderId] = useState(null);

    const placeOrder = async () => {
        try {
            const response = await axios.post('http://localhost:4000/placeorder', {
                products: all_product,
                subtotal: getTotalCartAmount(),
                shippingFee: 0,
                total: getTotalCartAmount(),
            });
            setOrderId(response.data.orderId);
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };

    return (
      <div className="placeorder">
        <div className="placeorder-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <hr />
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="placeorder-format placeorder-format-main">
                  <img src={e.image} alt="" className="placeorder-product-icon" />
                  <p>{e.name}</p>
                  <p>₹{e.new_price}</p>
                  <button className="placeorder-quantity">{cartItems[e.id]}</button>
                  <p>₹{e.new_price*cartItems[e.id]}</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
        <div className="placeorder-down">
          <div className="placeorder-total">
              <h1>Cart Totals</h1>
              <div>
                  <div className="placeorder-total-item">
                      <p>Subtotal</p>
                      <p>₹{getTotalCartAmount()}</p>
                  </div>
                  <hr />
                  <div className="placeorder-total-item">
                      <p>Shipping Free</p>
                      <p>Free</p>
                  </div>
                  <hr />
                  <div className="placeorder-total-item">
                      <h3>Total</h3>
                      <h3>₹{getTotalCartAmount()}</h3>
                  </div>
              </div>
              <Link to='/OrderConfirm'><button onClick={placeOrder}>PLACE ORDER</button></Link>
              {orderId && <p>Order placed successfully. Order ID: {orderId}</p>}
          </div>
        </div>
      </div>
    );
}

export default PlaceOrder;
