import React from 'react';
import {Link} from 'react-router-dom';
import Card1 from './Card';

function BookingPage6() {
  return (
    <div>
      <div className="flex flex-col items-center p-12">
        <Card1
          header="WHAT BRINGS YOU HERE?"
          content="Please specify (in a few sentences) why you'd like counseling.This will give your counselor a good understanding of where to start."
        />

        <textarea className="font-poppins pb-72 p-8 shadow-zinc-300  box-border h-600 w-4/5 md:max-w-2xl lg:max-w-4xl  shadow-md" />
      </div>
      <div className="flex justify-center  ">
        <Link to="booking7">
          <button
            type="button"
            className="m-6 rounded-md box-border text-xl pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 lg:text-2xl"
          >
            NEXT
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BookingPage6;
