import React from 'react';
import Therapists from './Images/ContentB(Therapists).svg';

function ContentB() {
  return (
    <div>
      <div className="bg-amber-200 pb-16 font-poppins">
        <h1 className="lg:text-5xl text-lg font-bold lg:w-7/12 lg:font-normal lg:pt-20 pt-20 pl-16">
          PROFESSIONAL, LICENSED, AND VETTED THERAPISTS THAT YOU CAN TRUST
        </h1>
        <img className="pt-16 pb-16 pl-16" src={Therapists} alt="therapists" />
        <p className="pl-16 lg:text-xl text-sm lg:w-8/12 lg:pb-20">
          Tap into the worlds largest network of licensed, accredited, and
          experienced therapists who can help you with a range of issues
          including depression, anxiety, relationships, trauma, grief, and more.
          with our therapists, you get the same professionalism and quality you
          would expect from an in-office therapist, but with the ability to
          communicate whenever and however you want.
        </p>
        <button
          type="button"
          className=" ml-16 lg:px-6 rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 "
        >
          BOOK AN APPOINTMENT
        </button>
      </div>
    </div>
  );
}

export default ContentB;
