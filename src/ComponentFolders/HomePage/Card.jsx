import React from 'react';

function Card({ image, title, content, price, ticket, button }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <p>{content}</p>
      <h2>{ticket}</h2>
      <h2>{price}</h2>
      <button
        type="button"
        className="rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500"
      >
        {button}
      </button>
    </div>
  );
}

export default Card;
