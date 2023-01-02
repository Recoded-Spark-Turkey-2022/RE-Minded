import React from 'react';

function Question({ header, content, button }) {
  return (
    <div className="font-poppins shadow-zinc-300 flex flex-col w-full md:max-w-2xl lg:max-w-6xl my-16 mx-auto px-8 py-4 shadow-md">
      <h1 className="text-xl pb-6 md:text-2xl lg:text-3xl lg:flex justify-center">
        {header}
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl flex justify-center">{content}</p>
      <div className='flex justify-center md:justify-start lg:justify-start'>
        <button
          type="button"
          className="m-6 rounded-md box-border text-xl pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 lg:text-2xl"
        >
          {button}
        </button>
      </div>
    </div>
  );
}

export default Question;
