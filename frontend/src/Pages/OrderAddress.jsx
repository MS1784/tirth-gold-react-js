import React, { useState } from 'react';
import './CSS/OrderAddress.css';
import axios from 'axios'; // Import Axios for making HTTP requests
import { Link } from 'react-router-dom';

const OrderAddress = () => {
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:4000/order', {
        email,
        city,
        state,
        pincode
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting address:', error);
    }
  };

  return (
    <div className='orderAdderss'>
      <div className="orderAdderss-container">
        <h1>DELIVERY ADDRESS</h1>
        <div className="orderAdderss-fields">
          <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder='Enter City' value={city} onChange={(e) => setCity(e.target.value)} />
          <input type="text" placeholder='Enter State' value={state} onChange={(e) => setState(e.target.value)} />
          <input type="number" placeholder='Enter PinCode' value={pincode} onChange={(e) => setPincode(e.target.value)} />
        </div>
        <Link to='/PaymentMethod'><button onClick={handleSubmit}>CONTINUE</button></Link>
      </div>
    </div>
  );
};

export default OrderAddress;
