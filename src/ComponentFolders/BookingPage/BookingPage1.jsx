import React from 'react';
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
          question="What type of coumseling are you looking for?"
          first="Individual counseling"
          second="Teen counseling (for my child)"
          button="NEXT"
        />
      </div>
    </div>
  );
}

export default BookingPage1;
