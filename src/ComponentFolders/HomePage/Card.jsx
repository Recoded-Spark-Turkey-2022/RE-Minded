import React from 'react';

function Card({ image, title, content, price, ticket, button, buttonPreview }) {
  return (
    <div className="shadow-zinc-300 space-x-4 box-border h-96 w-80  my-4 flex flex-col items-center justify-evenly shadow-md  rounded-3xl md:w-1/4 p-4">
      <img className="p-8 " src={image} alt={title} />
      <h1 className=" text-center text-xl lg:text-3xl 2xl:text-4xl pb-4">
        {title}
      </h1>
      <p className="lg:text-xl p-2 md:text-sm flex justify-center pb-8 text-gray-500">
        {content}
      </p>
      <h2 className="text-3xl pb-4">{ticket}</h2>
      <h2 className="text-2xl flex justify-center pb-4">{price}</h2>
      {buttonPreview && (
        <button
          type="button"
          className="font-poppins rounded-md box-border p-2 m-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500"
        >
          {button}
        </button>
      )}
    </div>
  );
}

export default Card;


