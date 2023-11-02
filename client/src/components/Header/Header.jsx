import {useEffect,useContext,useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.scss';
 import { BiUserCircle } from 'react-icons/bi';

import { useNavigate } from 'react-router-dom';

const Header = () =>{
    const navigate = useNavigate();

  const navigateToUser = () => {
   
    navigate('/user');
  };
  const handleHome=()=>{
    navigate('/');
  }
  const handleRooms=()=>{
    navigate('/rooms');

  }
  const handleContactUs=()=>{
    navigate('/')
  }
  
  const navigateToBook=()=>
  {
    navigate('/booking');
  }
    return (
        
        <div className="main-header">
            <div className="header-content">
                <div className="left">
                    <li onClick={handleHome}>Home</li>
                    <li onClick={handleRooms}>Rooms</li>
                    <li onClick={handleContactUs}>Contact Us</li>
                </div>
                <div className="center">
                    Oberoi
                </div>
                <div className="right">
                    <div className="user-and-button">
                    <button onClick={navigateToBook}>Book Now</button>
                    
                      {/* <BiUserCircle style={{ fontSize: '40px' }} /> */}
                    
                
                <BiUserCircle style={{ fontSize: '40px', cursor: 'pointer' }} onClick={navigateToUser}/>
                    
                    </div>
                   
                </div>
            </div>
        </div>
    );
}
export default Header;




