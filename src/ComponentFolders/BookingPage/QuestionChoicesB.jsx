import { React } from 'react';

function ChoicesB({
  one,
  two,
  three,
  four,
  five,
  six,
  question,
  showSix,
}) {
  return (
    <div className="p-10">
      <h1 className="text-xl pb-6 md:text-2xl lg:text-3xl lg:flex justify-center mt-4 ">
        {question}
      </h1>
      <div className="flex flex-col pl-6 text-md md:text-lg  lg:text-xl">
        <label htmlFor="one">
          <input type="radio" className="m-2 mb-6 mt-12" />
          {one}
        </label>
        <label htmlFor="two">
          <input type="radio" className="m-2 mb-6" />
          {two}
        </label>
        <label htmlFor="three">
          <input type="radio" className="m-2 mb-6" />
          {three}
        </label>
        <label htmlFor="four">
          <input type="radio" className="m-2 mb-6" />
          {four}
        </label>
        <label htmlFor="five">
          <input type="radio" className="m-2 mb-6" />
          {five}
        </label>
        {showSix && (
          <label htmlFor="six">
            <input type="radio" className="m-2 mb-4" />
            {six}
          </label>
        )}
      </div>
      
    </div>
  );
}

export default ChoicesB;
