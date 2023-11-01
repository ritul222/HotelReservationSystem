

import React from 'react';
import './CardSlider.scss';
import bed1 from '../../assets/bed1.jpg';
// Define the Card component
const Card = (props) => (
  <div className="card">
    <img src={props.imgUrl} alt={props.alt || 'Image'} />
    <div className="card-content">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  </div>
);

// Define the CardContainer component
const CardContainer = (props) => (
  <div className="cards-container">
    {props.cards.map((card) => (
      <Card
        title={card.title}
        content={card.content}
        imgUrl={card.imgUrl}
        key={card.id} // Don't forget to add a unique key when mapping over components
      />
    ))}
  </div>
);

// Define the CardSlider component
class CardSlider extends React.Component {
  render() {
    const cardsData = [
      { id: 1, title: 'Elegant Suite',  imgUrl: require('../../assets/bed1.jpg') },
      { id: 2, title: 'Cozy Retreats',  imgUrl: require('../../assets/bed2.jpg') },
      { id: 3, title: 'Family Friendly Rooms',  imgUrl: require('../../assets/bed3.jpg') },
      { id: 4, title: 'Tropical Lagoon Pool',  imgUrl: require('../../assets/loc1.jpg') },
     { id: 5, title: 'Coastal Breeze Lagoon',  imgUrl: require('../../assets/loc2.jpg') },
     { id: 6, title: 'Sunset Shores', imgUrl: require('../../assets/loc3.jpg') },
     { id: 7, title: 'The Tipsy Tiki Hut',  imgUrl: require('../../assets/serv1.jpg') },
     { id: 8, title: 'Dinner Delights ',  imgUrl: require('../../assets/serv2.jpg') },
     { id: 9, title: 'Sunrise Serenade ',   imgUrl: require('../../assets/serv3.jpg') },
     
      
    ];

    return (
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>
        </h1>
        <CardContainer cards={cardsData} />
      </div>
    );
  }
}

export default CardSlider;

