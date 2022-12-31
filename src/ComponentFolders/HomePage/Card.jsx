import React from 'react';

function Card({
  image,
  title,
  content,
  price,
  ticket,
  button,
  buttonPreview,
  imagePreview,
  contentPreview,
  titlePreview,
}) {
  return (
    <div className="shadow-zinc-300 h-full w-full my-4 flex flex-col items-center justify-evenly shadow-lg rounded-lg md:w-1/4 p-4">
      {imagePreview && (
        <img className="flex-initial mb-4" src={image} alt={title} />
      )}
      {titlePreview && (
        <h1 className="text-center text-xl lg:text-3xl 2xl:text-title pb-1 ">
          {title}
        </h1>
      )}
      {contentPreview && (
        <p className="text-opacity-50 text-black text-center text-sm md:text-md lg:text-paragraph py-4">
          {content}
        </p>
      )}
        <h2 className="text-2xl">{ticket}</h2>
        <h2 className="text-2xl flex justify-center p-6">{price}</h2>
        {buttonPreview && (
          <button
            type="button"
            className="font-poppins rounded-md box-border p-2 mb-4 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500"
          >
            {button}
          </button>
        )}
      </div>
    
  );
}

export default Card;
