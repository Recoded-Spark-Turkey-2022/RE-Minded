import React from 'react';
import Background from './Images/Background.svg';
import Sofa from './Images/ContentA(sofa).svg';
import './main.css';

function ContentA() {
  return (
    <>
      <img
        className="absolute top-0 left-0 z-0"
        src={Background}
        alt="Background"
      />

      <div className="flex lg:flex-row flex-col lg:justify-between lg:m-56 relative z-0">
        <div className="pb-28 flex flex-col lg:translate-y-0 transform translate-y-40">
          <p className="lg:text-4xl text-base pl-4"> WE ARE HERE TO</p>
          <p className="lg:text-9xl  text-6xl pl-4">HELP</p>
          <button
            type="button"
            className="rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 "
          >
            BOOK AN APPOINTMENT
          </button>
        </div>
        <div className="transform -translate-y-72 w-64 lg:-translate-y-0 lg:w-auto lg:ml-0 ml-16">
          <img src={Sofa} alt="Sofa" />
        </div>
      </div>
    </>
  );
}

export default ContentA;
