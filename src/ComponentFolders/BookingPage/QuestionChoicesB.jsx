import { React } from 'react';

function ChoicesB({
  one,
  two,
  three,
  four,
  five,
  six,
  button,
  question,
  showSix,
}) {
  return (
    <div className="p-10">
      <h1 className="text-xl pb-6 md:text-2xl lg:text-3xl lg:flex justify-center mt-4 ">
        {question}
      </h1>
      <div className="flex flex-col pl-6 text-md md:text-lg  lg:text-xl">
        <label>
          <input type="radio" className="m-2 mb-6 mt-12" />
          {one}
        </label>
        <label>
          <input type="radio" className="m-2 mb-6" />
          {two}
        </label>
        <label>
          <input type="radio" className="m-2 mb-6" />
          {three}
        </label>
        <label>
          <input type="radio" className="m-2 mb-6" />
          {four}
        </label>
        <label>
          <input type="radio" className="m-2 mb-6" />
          {five}
        </label>
        {showSix && (
          <label>
            <input type="radio" className="m-2 mb-4" />
            {six}
          </label>
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

export default ChoicesB;
