import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
	// console.log(props)
  return (
    <div className="cards-container">
    
    {props.cards.map(item => (
    	<Card 
    		headline={item.headline}
    		img={item.img}
    		author={item.author}
    		
    	/>
    ))}

      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

export default Cards;