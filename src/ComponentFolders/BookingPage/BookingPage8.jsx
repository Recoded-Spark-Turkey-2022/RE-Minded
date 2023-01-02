import React from 'react';
import Card1 from './Card';
import Question from './Question';

function BookingPage8() {
   return (
     <div className="flex flex-col  p-24">
       <Card1
         header="YOUR REQUEST HAS BEEN SUBMITTED!"
         content="You will receive an email guiding you to book a date and time soon."
       />
       <Question
         header="Request Submitted"
         content="You will receive a confirmation email soon. Please keep an eye on your mail."
         button="BACK TO HOME"
       />
     </div>
   );
}

export default BookingPage8;