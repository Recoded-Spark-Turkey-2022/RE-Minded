import React from 'react';

function ChoicesA({ question, first, second, third, showThird }) {
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
     
    </div>
  );
}

export default ChoicesA;
