import React from 'react';
import { Link } from 'react-router-dom';
import Card1 from './Card';

function BookingPage7() {
  return (
    <div className="flex flex-col  p-24">
      <Card1
        header="SUBMIT YOUR APPOINTMENT"
        content="Click Submit if you are sure of all your choices."
      />
      <div className="font-poppins shadow-zinc-300 flex flex-col items-center lg:max-w-4xl my-16 mx-auto px-16 py-24 shadow-md">
        <h1 className="text-xl pb-12 md:text-2xl lg:text-3xl lg:flex justify-center">
          Submit Appointment?
        </h1>
        <h2 className="text-md pb-10 md:text-lg lg:text-xl lg:flex justify-center">
          Please Be Aware That This Action Will Cost You A Ticket!
        </h2>
        <div className="flex justify-center">
          <button
            type="button"
            className="m-6 rounded-md box-border text-md md:text-lg pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 lg:text-2xl"
          >
            <Link to="/BookingPage8"> SUBMIT </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingPage7;
