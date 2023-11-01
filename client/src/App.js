
import {useState,useEffect}from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Axios from "axios";
import User from './components/User/User';
import Booking from './components/Booking/Booking';
import  Home from './components/Home/Home';
import SignUp from './components/UserSignup/UserS';
import Checkout from './components/Checkout/Checkout';
import Rooms from './components/Rooms/Rooms';
import Success from './components/Success/Success';

function App() {
   const [data,setData]=useState("");

  const getData = async () => {
    try {
      const response = await Axios.get("http://localhost:5000/getData");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(()=>{
    getData() 
  },[]);
  return (
    // <div>{data}</div>
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} /> 
          <Route path="/user" element={<User />} /> 
          <Route path="/userS" element={<SignUp />} /> 
          <Route path="/booking" element={<Booking />} />
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/rooms" element={<Rooms/>}/>
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
