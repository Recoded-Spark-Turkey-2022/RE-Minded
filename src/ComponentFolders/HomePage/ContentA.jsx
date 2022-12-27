import React from 'react';
import Background from './Images/Background.svg';
import Sofa from './Images/ContentA(sofa).svg';
import './main.css';

function ContentA() {
  return (
    <>
      <img className="absolute inset-0" src={Background} alt="Background" />
      <div className="">
        <div className="relative flex justify-between m-44 bottom-5">
          <div>
            <p className="text-3xl"> WE ARE HERE TO</p>
            <p className="text-8xl">HELP</p>
            <button
              type="button"
              className="rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 "
            >
              BOOK AN APPOINTMENT
            </button>
          </div>
          <div className=" absolute h-4/6 w-4/6">
            <img className="relative left-72 bottom-16" src={Sofa} alt="Sofa" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentA;
