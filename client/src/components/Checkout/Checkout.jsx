
import React, { useState } from "react";
import './Checkout.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);

  const handleCheckout = async () => {
    // Ensure the form is valid before proceeding
    if (!isFormValid) {
      alert('Please fill in all the required fields.');
      return;
    }

    try {
      const customerInfo = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zip: document.getElementById('zip').value,
        country: document.getElementById('country').value,
        paymentMethod: document.getElementById('payment-method').value,
        cardNumber: document.getElementById('card-number').value,
        cvv: document.getElementById('cvv').value,
        expirationMonth: document.getElementById('expiration-month').value,
        expirationYear: document.getElementById('expiration-year').value,
      };

      await axios.post('http://localhost:5000/checkout', customerInfo);

      navigate('/success'); // Change '/success' to the desired success page
    } catch (error) {
      console.error(error);
    }
  };

  const validateForm = () => {
    const requiredFields = [
      'first-name',
      'last-name',
      'email',
     
      'city',
      'state',
      'zip',
      'payment-method',
      'card-number',
      'cvv',
      'expiration-month',
      'expiration-year'
    ];

    const isFormValid = requiredFields.every((field) =>
      document.getElementById(field).checkValidity()
    );

    setIsFormValid(isFormValid);
  };

  return (
    <div className="main-checkout">
      <span className="close-icon" onClick={() => navigate('/booking')}>
        <FontAwesomeIcon icon={faTimes} size='2x' />
      </span>
      <div className="form">
        <div className="heading">
          <h1>Customer Info</h1>
        </div>
        <div className="info">
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              placeholder="John"
              required
              onChange={validateForm}
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              placeholder="Doe"
              required
              onChange={validateForm}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Johndoe@gmail.com"
              required
              onChange={validateForm}
            />
          </div>
       
          <div className="form-group">
            <label htmlFor="city">Town/City</label>
            <input
              type="text"
              id="city"
              placeholder="Your City"
              required
              onChange={validateForm}
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              placeholder="Your State"
              required
              onChange={validateForm}
            />
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip/Postal</label>
            <input
              type="text"
              id="zip"
              placeholder="Zip/Postal Code"
              required
              onChange={validateForm}
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select id="country">
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="india">India</option>
              <option value="china">China</option>
              <option value="united kingdom">United Kingdom</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="payment">
          <div className="heading">
            <h1>Payment</h1>
          </div>
          <div className="form-group">
            <label htmlFor="payment-method">Payment Method</label>
            <select
              id="payment-method"
              required
              onChange={validateForm}
            >
              <option value="credit-card">Credit Card</option>
              <option value="debit-card">Debit Card</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input
              type="text"
              id="card-number"
              placeholder="1234 5678 9012 3456"
              required
              onChange={validateForm}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              placeholder="123"
              required
              onChange={validateForm}
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiration-month">Expiration Month</label>
            <input
              type="text"
              id="expiration-month"
              placeholder="MM"
              required
              onChange={validateForm}
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiration-year">Expiration Year</label>
            <input
              type="text"
              id="expiration-year"
              placeholder="YYYY"
              required
              onChange={validateForm}
            />
          </div>
        </div>
        <button onClick={handleCheckout} disabled={!isFormValid}>
          Complete Checkout And Pay
        </button>
      </div>
    </div>
  );
};

export default Checkout;
