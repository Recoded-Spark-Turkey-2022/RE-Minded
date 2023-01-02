import React from 'react';
import Card1 from './Card';
import Question from './Question';

function BookingPage7() {
   return (
     <div className="flex flex-col  p-24">
       <Card1
         header="SUBMIT YOUR APPOINTMENT"
         content="Click Submit if you are sure of all your choices."
       />
       <Question
         header="Are there any issues you'd like to focus on?"
         content="Please be aware that this action will cost you a ticket!"
         button="SUBMIT"
       />
     </div>
   );
}

export default BookingPage7;