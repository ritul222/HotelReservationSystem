
import React from 'react';
import Header from '../Header/Header'; // Import your Header component
import Footer from '../Footer/Footer'; // Import your Footer component
import NewsLetter from '../Newsletter/Newsletter';
import Content from '../Content/Content';
import './UserS.scss';
import SignUp from '../SignUp/SignUp';
const User = () => {
  return (

    <div className='main-signup'>
        <div className="signup-image">
            <Header />
           <Content />
        </div>
      
       <SignUp />
       <NewsLetter />
      <Footer />
      
    </div>
  );
};

export default User;


