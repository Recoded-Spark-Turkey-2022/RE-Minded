import { React, useState} from 'react';

function ChoicesA({ question, first, second, third, showThird }) {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(() => !isClicked);
  }


  return (
    <div className="p-10">
      <h1 className="text-xl pb-6 md:text-2xl lg:text-3xl lg:flex justify-center mt-4">
        {question}
      </h1>
      <div
        className="flex flex-col pl-6 text-md md:text-lg lg:text-xl"
      >
        <button
          id={1}
          type="button"
          onClick={handleClick}
          className={`shadow-zinc-300 flex flex-col w-full mb-6 mt-12 px-4 py-4 shadow-md hover:bg-cyan-400 ${
            isClicked ? 'bg-red-800' : ''
          }`}
        >
          {first}
        </button>
        <button
          id={1}
          type="button"
          onClick={handleClick}
          className="shadow-zinc-300 flex flex-col w-full mb-6 px-4 py-4 shadow-md hover:bg-cyan-400 "
        >
          {second}
        </button>
        {showThird && (
          <button
            id={1}
            type="button"
            className="shadow-zinc-300 flex flex-col w-full mb-6 px-4 py-4 shadow-md hover:bg-cyan-400 "
          >
            {third}
          </button>
        )}
      </div>
    </div>
  );
}

export default ChoicesA;
