import {useEffect,useContext,useState} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';
import MiddleContent from '../MiddleContent/MiddleContent';
import NewsLetter from '../Newsletter/Newsletter';
import './Success.scss';
import { FaHandshake } from 'react-icons/fa';
const Success=()=>{
    return(
        <div className="success-main-page">
              
            <div className="success-image">
            <Header />
            <div className="success-content">
                <div className="success-main-content">
                <h1>Thankyou!!</h1>
                <p>Your Reseravation Is Successful.</p>
                <FaHandshake size={150}/>
                </div>
                
                

            </div>
            </div>
           
           
           
            
            <Footer />
        </div>
    );
}
export default Success;