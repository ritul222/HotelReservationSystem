import { useEffect, useContext, useState } from 'react';
import './Footer.scss';
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from '../../assets/payments.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">Address</div>
                    <div className="text">
                        <div className="c-item">
                        <FaLocationArrow />
                        128 Main Street
                        New Delhi, Delhi 110001
                        India
                        </div>
                  
                    </div>
                </div>


                <div className="col">
                    <div className="title">Phone</div>
                    <div className="text">
                        <div className="c-item">
                        <FaMobileAlt />
                       : +91 8992019274
                             
                        </div>
                  
                    </div>
                </div>

                <div className="col">
                    <div className="title">Email</div>
                    <div className="text">
                        <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: Oberoihotels@gmail.com</div>
                        </div>
                  
                    </div>
                </div>


              
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        JSDEVSTORE 2022 CREATED BY JS DEV. PREMIUM E-COMMERCE
                        SOLUTIONS.
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
