import React from 'react';

function Card({ image, title, content, price, ticket, button }) {
  return (
    <div className="shadow-zinc-300 font-poppins h-full w-full my-4 flex flex-col items-center justify-evenly shadow-lg rounded-lg md:w-1/4 p-4">
      <h1 className="text-center text-xl lg:text-3xl 2xl:text-title pb-4">
        {title}
      </h1>
      <img src={image} alt={title} />
      <p>{content}</p>
      <h2 className="text-3xl pb-4">{ticket}</h2>
      <h2 className="text-2xl flex justify-center pb-4">{price}</h2>
      <button
        type="button"
        className="font-poppins rounded-md box-border p-2 m-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500"
      >
        {button}
      </button>
    </div>
  );
}

export default Card;
