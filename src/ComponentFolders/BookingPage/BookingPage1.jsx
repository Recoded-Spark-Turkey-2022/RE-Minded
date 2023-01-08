import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import ChoicesA from './QuestionChoicesA';

function BookingPage1() {
  return (
    <div className="flex flex-col items-center p-12">
      <Card
        header="LET'S MATCH YOU WITH THE RIGHT THERAPIST"
        content="Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you'd like to deal with in online therapy. It would help us match you with the most suitable therapist for you. "
      />
      <div className="font-poppins shadow-zinc-300 flex flex-col w-full md:max-w-2xl lg:max-w-4xl my-16 mx-auto px-8 py-4 shadow-md">
        <ChoicesA
          question="What type of counseling are you looking for?"
          first="Individual counseling"
          second="Teen counseling (for my child)"
        />
        <div className="flex justify-center md:justify-start lg:justify-start ">
          <Link to="booking2">
            <button
              type="button"
              className="m-6 rounded-md box-border text-xl pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 lg:text-2xl"
            >
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookingPage1;
