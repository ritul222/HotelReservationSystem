import React from 'react';
import Header from '../Header/Header'; // Import your Header component
import Footer from '../Footer/Footer'; // Import your Footer component
import NewsLetter from '../Newsletter/Newsletter';
import Content from '../Content/Content';
import Login from '../Login/Login';
import './User.scss'
const User = () => {
  return (

   
      <div className="login-main-page">
        <div className="login-image">
           <Header />
           <Content />
        </div>
           
           <Login />
          <NewsLetter />
         <Footer />
      </div>
     
      
  
  );
};

export default User;


