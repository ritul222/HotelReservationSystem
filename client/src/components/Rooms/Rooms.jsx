import React from "react";
import './Rooms.scss';
import CardSlider from '../CardSlider/CardSlider';
import RoomSlider from '../RoomSlider/RoomSlider';
import Header from '../Header/Header';
import Newsletter from '../Newsletter/Newsletter';
import Footer from '../Footer/Footer';
const Rooms=()=>{
    return(
        <div className="main-rooms">
            <div className="image">
            <Header />
            <div className="rooms-heading">
               <h1>Discover Your Ideal Room</h1> 
            </div>
            <RoomSlider/>
            <RoomSlider/>
            <RoomSlider/>
            </div>
            <Newsletter/>
            <Footer/>
                 
        </div>
    );
}
export default Rooms;