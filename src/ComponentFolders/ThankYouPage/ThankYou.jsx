import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ThankYou = () => {
  const location = useLocation();
  const propsData = location.state;

  return (
    <div className="flex flex-col lg:mt-24 mt-20 mb-20 lg:ml-24 ml-10 lg:mr-0 mr-6 font-poppins text-black">
      <div className=" text-2xl lg:text-5xl ">THANK YOU!</div>

      <div className="flex mt-6 sm:text-lg  text-lg lg:text-xl leading-9 text-SubTexts">
        {propsData}
      </div>

      <div className='mt-20 mb-40'>
        <Link to="/">
          <button
            type="button"
            className="bg-Buttons hover:bg-cyan-500 rounded-md p-2 lg:pl-10 pl-4 lg:pr-10 pr-4 font-poppins lg:text-2xl text-base leading-9 text-center "
          >
            BACK TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
