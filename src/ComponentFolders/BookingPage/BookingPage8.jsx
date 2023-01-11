import React from 'react';
import Card from './Card';

function BookingPage8() {
  return (
    <div className="flex flex-col  p-24">
      <Card
        header="YOUR REQUEST HAS BEEN SUBMITTED!"
        content="You will receive an email guiding you to book a date and time soon."
      />
      <div className="font-poppins shadow-zinc-300 flex flex-col items-center my-16 mx-auto px-16 py-24 shadow-md">
        <h1 className="text-xl pb-12 md:text-2xl lg:text-3xl lg:flex justify-center">
          Request Submitted
        </h1>
        <h2 className="text-md pb-10 md:text-lg lg:text-xl lg:flex justify-center">
          You Will Receive A Confirmation Email Soon Please Keep An Eye On Your
          Mail.
        </h2>
        <div className="flex justify-center">
          <button
            type="button"
            className="m-6 rounded-md box-border text-md md:text-lg  pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 lg:text-2xl"
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingPage8;
