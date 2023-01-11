import React from 'react';
import Background from './Images/Background.svg';
import Sofa from './Images/ContentAsofa.svg';

function ContentA() {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        height: '100vh',
        width: '100vw',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        top: 0,
      }}
    >
      <div className="flex flex-col pt-16  items-center md:flex-col   lg:flex-row    lg:justify-evenly lg:items-center md:items-center lg:pt-52  md:pt-28">
        <div className=" flex flex-col items-center   md:flex-col md:items-center  lg:items-center ">
          <p className="text-3xl md:text-4xl lg:text-5xl"> WE ARE HERE TO</p>
          <p className="text-5xl  md:text-7xl lg:text-9xl ">HELP</p>
          <button
            type="button"
            className="text-md mb-8 rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 md:text-2xl"
          >
            BOOK AN APPOINTMENT
          </button>
        </div>

        <img
          className="h-2/3 w-2/3 md:h-1/3 md:w-1/3 lg:h-1/3 lg:w-1/3"
          src={Sofa}
          alt="Sofa"
        />
      </div>
    </div>
  );
}

export default ContentA;
