import {useEffect,useContext,useState} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';
import MiddleContent from '../MiddleContent/MiddleContent';
import NewsLetter from '../Newsletter/Newsletter';
import './Home.scss';
const Home=()=>{
    return(
        <div className="main-page">
              
            <div className="image">
            <Header />
            <Content />
            </div>
           
           
            <MiddleContent />
            <NewsLetter />
            <Footer />
        </div>
    );
}
export default Home;