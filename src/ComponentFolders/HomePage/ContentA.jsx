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
      <div className="flex flex-col pt-40   items-center md:flex-col   lg:flex-row    lg:justify-evenly lg:items-center md:items-center lg:pt-72  md:pt-40">
        <div className=" p-32 flex flex-col items-center   md:flex-col md:items-center  lg:items-center ">
          <p className="text-3xl md:text-4xl lg:text-5xl"> WE ARE HERE TO</p>
          <p className="text-6xl  md:text-7xl lg:text-9xl ">HELP</p>
          <button
            type="button"
            className="text-xl rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 md:text-2xl"
          >
            BOOK AN APPOINTMENT
          </button>
        </div>
        <div className="">
          <img src={Sofa} alt="Sofa" />
        </div>
      </div>
    </div>
  );
}

export default ContentA;
