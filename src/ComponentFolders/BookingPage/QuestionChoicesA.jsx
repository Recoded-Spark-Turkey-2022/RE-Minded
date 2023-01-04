import React from 'react';

function ChoicesA({ question, first, second, third, showThird, button }) {
  return (
    <div className="p-10">
      <h1 className="text-xl pb-6 md:text-2xl lg:text-3xl lg:flex justify-center mt-4">
        {question}
      </h1>
      <div className="flex flex-col pl-6 text-md md:text-lg lg:text-xl">
        <div className="shadow-zinc-300 flex flex-col w-full mb-6 mt-12 px-4 py-4 shadow-md hover:bg-cyan-400 cursor-pointer">
          {first}
        </div>
        <div className="shadow-zinc-300 flex flex-col w-full mb-6 px-4 py-4 shadow-md hover:bg-cyan-400 cursor-pointer">
          {second}
        </div>
        {showThird && (
          <div className="shadow-zinc-300 flex flex-col w-full mb-6 px-4 py-4 shadow-md hover:bg-cyan-400 cursor-pointer">
            {third}
          </div>
        )}
      </div>
      <div className="flex justify-center md:justify-start lg:justify-start ">
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

export default ChoicesA;
