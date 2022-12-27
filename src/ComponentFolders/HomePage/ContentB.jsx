import React from 'react';
import Therapists from './Images/ContentB(Therapists).svg';

function ContentB() {
  return (
    <div>
      <div className="bg-amber-200">
        <h1 className="">
          PROFESSIONAL, LICENSED, AND VETTED THERAPISTS THAT YOU CAN TRUST
        </h1>
        <img src={Therapists} alt="therapists" />
        <p>
          Tap into the worlds largest network of licensed, accredited, and
          experienced therapists who can help you with a range of issues
          including depression, anxiety, relationships, trauma, grief, and more.
          with our therapists, you get the same professionalism and quality you
          would expect from an in-office therapist, but with the ability to
          communicate whenever and however you want.
        </p>
        <button
          type="button"
          className="rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 "
        >
          BOOK AN APPOINTMENT
        </button>
      </div>
    </div>
  );
}

export default ContentB;
