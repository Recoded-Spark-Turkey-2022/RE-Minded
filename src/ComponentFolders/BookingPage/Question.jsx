import React from 'react';

function Question({ header, content, button }) {
  return (
    <div className="font-poppins shadow-zinc-300 flex flex-col w-full md:max-w-md lg:max-w-2xl my-16 mx-auto px-8 py-4 shadow-md">
      <h1 className="text-2xl pb-6 md:text-3xl lg:text-4xl lg:flex justify-center">{header}</h1>
      <p className="text-lg md:text-xl lg:text-2xl">{content}</p>
      <button
        type="button"
        className="m-6 rounded-md box-border text-2xl pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 "
      >
        {button}
      </button>
    </div>
  );
}

export default Question;
