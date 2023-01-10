import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ThankYou = () => {
  const location = useLocation();
  const propsData = location.state;

  return (
    <div className="flex flex-col w-screen h-screen font-poppins text-black tracking-[-0.01em]">
      <h1 className="absolute flex flex-wrap w-[300px] h-[75px] top-[156px] left-[84px]  text-3xl lg:text-5xl ">
        THANK YOU!
      </h1>
      <div>
        <div className="absolute flex flex-wrap w-[1273px] h-[36px] top-[251px] left-[84px] sm:text-lg leading-6 text-2xl lg:text-3xl leading-9 text-SubTexts">
          {propsData}
        </div>
      </div>

      <div>
        <Link to="/">
        <button
          type="button"
          className="bg-Buttons absolute w-[200px] md:[250px] lg:w-[300px] h-[60px] top-[343px] left-[84px]  rounded-md font-poppins text-2xl font-normal leading-9 tracking-normal text-center "
        >
          BACK TO HOME
        </button></Link>
      </div>
    </div>
  );
};

export default ThankYou;
