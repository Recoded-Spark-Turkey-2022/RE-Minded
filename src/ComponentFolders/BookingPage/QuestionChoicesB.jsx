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
  showFive,
}) {
  return (
    <div className="p-10">
      <h1 className="text-xl pb-6 md:text-2xl lg:text-3xl lg:flex justify-center mt-4 ">
        {question}
      </h1>
      <form className="flex flex-col pl-6 text-md md:text-lg  lg:text-xl">
        <label htmlFor="one">
          <input
            type="checkbox"
            className="m-2 mb-6 mt-12"
            name="checbox1"
            value="checbox1"
          />
          {one}
        </label>
        <label htmlFor="two">
          <input
            type="checkbox"
            className="m-2 mb-6"
            name="checbox2"
            value="checbox2"
          />
          {two}
        </label>
        <label htmlFor="three">
          <input
            type="checkbox"
            className="m-2 mb-6"
            name="checbox3"
            value="checbox3"
          />
          {three}
        </label>
        <label htmlFor="four">
          <input
            type="checkbox"
            className="m-2 mb-6"
            name="checbox4"
            value="checbox4"
          />
          {four}
        </label>
        {showFive && (
          <label htmlFor="five">
            <input
              type="checkbox"
              className="m-2 mb-6"
              name="checbox5"
              value="checbox5"
            />
            {five}
          </label>
        )}
        {showSix && (
          <label htmlFor="six">
            <input
              type="checkbox"
              className="m-2 mb-4"
              name="checbox6"
              value="checbox6"
            />
            {six}
          </label>
        )}
      </form>
    </div>
  );
}

export default ChoicesB;
