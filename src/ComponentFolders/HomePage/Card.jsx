import React from 'react';

function Card({ image, title, content }) {
  return (
    <div>
        <h1>{title}</h1>
        <img src={image} alt={title}/>
        <p>{content}</p>
    </div>
  );
}

export default Card;
