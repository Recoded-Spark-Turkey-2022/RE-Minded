import React from 'react';

function Card({ cards }) {
  return (
    <div>
      {cards.map((card) => (
        <div key={card.title}>
          <h2>{card.title}</h2>
          <img src={card.image} alt="call" />
          <p>{card.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
