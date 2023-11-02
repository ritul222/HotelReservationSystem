

import React, { useState } from 'react';
import './Booking.scss';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const Booking = () => {
  const areAllFieldsFilled = () => {
    return checkInDate && checkOutDate && numRooms > 0 && numPeople > 0;
  };
  const navigate = useNavigate();
  const [numRooms, setNumRooms] = useState(1);
  const [numPeople, setNumPeople] = useState(1);
  const [services, setServices] = useState({
    massage: false,
    daySpa: false,
    roomClean: false,
  });
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const servicePrices = {
    massage: 350,
    daySpa: 250,
    roomClean: 150,
  };

  const roomCostPerDay = 3999;
  const maxPeoplePerRoom = 2; // Maximum 2 people per room

  const calculateTotal = () => {
    if (!checkInDate || !checkOutDate) {
      return 0;
    }

    const numDays = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    const totalRoomsCost = numRooms * roomCostPerDay * numDays;
    const selectedServicesCost = Object.keys(services)
      .filter(service => services[service])
      .reduce((total, service) => total + servicePrices[service], 0);

    const totalCost = totalRoomsCost + selectedServicesCost;
    return totalCost;
  };

  const handleNumRoomsChange = (value) => {
    setNumRooms(value);
  };

  const handleNumPeopleChange = (value) => {
    // Ensure that the number of people does not exceed 2 per room
    if (value <= numRooms * maxPeoplePerRoom) {
      setNumPeople(value);
    }
  };

  const navigateToCheckout = () => {
    const totalCost = calculateTotal();
    navigate('/checkout', { state: { totalCost } });
  };


return (
  <div>
    <div className="booking">
      <div className="left">
        <h1></h1>
      </div>
      <div className="right">
        <span className="close-icon" onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faTimes} size='2x' />
        </span>
        <span className="heading">
          <h1>Book Your Stay</h1>
        </span>
        <span className="welcome">
          Welcome to Oberoi Hotel. Nestled in the heart of the Pacific Islands resort, on the edge of a tranquil and beautiful Garden Island, Oberoi is a haven of warmth, tranquility, and rejuvenation.
        </span>
        <div className="main-form">
          <h1>Reserve:</h1>
          <div className="check-buttons">
            <div className="in">
              <label htmlFor="Checkin">Check-In</label>
              <input type="date" placeholder="Check-In" onChange={(e) => setCheckInDate(new Date(e.target.value))} />
            </div>
            <div className="out">
              <label htmlFor="CheckOut">Check-Out</label>
              <input type="date" placeholder="Check-Out" onChange={(e) => setCheckOutDate(new Date(e.target.value))} />
            </div>
          </div>
          <div className="rooms-people">
            <div className="rooms">
              <label htmlFor="rooms">Rooms</label>
              <input type="text" value={numRooms} onChange={(e) => handleNumRoomsChange(e.target.value)} />
            </div>
            <div className="people">
              <label htmlFor="people">People(Max 2 per Room)</label>
              <input type="text" value={numPeople} onChange={(e) => handleNumPeopleChange(e.target.value)} />
            </div>
          </div>
          <div className="services">
            <div className="head">
              <h1>Extra Services:</h1>
            </div>
            <div className="service-list">
              {Object.keys(services).map(service => (
                <div className="service" key={service}>
                  <div className="divide">
                    <input
                      type="checkbox"
                      id={service}
                      checked={services[service]}
                      onChange={() => setServices({ ...services, [service]: !services[service] })}
                    />
                    <label htmlFor={service}>{service}</label>
                  </div>
                  <div className="divide2">
                    <span className="price">Rs {servicePrices[service]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="bill">
            <span><h1>Total: Rs {calculateTotal()}</h1></span>
          </div>
          <div className="checkout-button">
            <button onClick={navigateToCheckout} disabled={!areAllFieldsFilled()}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Booking;