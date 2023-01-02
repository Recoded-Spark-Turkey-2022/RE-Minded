import React from 'react';
import Card1 from './Card';
import Question from './Question';

function BookingPage3() {
   return (
     <div className="flex flex-col items-center p-12">
       <Card1
         header="LET'S MATCH YOU WITH THE RIGHT THERAPIST"
         content="Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you'd like to deal with in online therapy. It would help us match you with the most suitable therapist for you. "
       />
       <Question
         header="Have you ever been in therspy before?"
         content="Choices"
         button="Next"
       />
     </div>
   );
}

export default BookingPage3;