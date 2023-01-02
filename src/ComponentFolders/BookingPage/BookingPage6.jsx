import React from 'react';
import Card1 from './Card';
// import Question from './Question';

function BookingPage6() {
   return (
     <div className="flex flex-col items-center p-12">
       <Card1
         header="WHAT BRINGS YOU HERE?"
         content="Please specify (in a few sentences) why you'd like counseling.This will give your counselor a good understanding of where to start."
       />
       <input className="font-poppins shadow-zinc-300 flex flex-col justify-between w-full md:max-w-md lg:max-w-2xl my-16 mx-auto px-8 py-4 shadow-md" />
     </div>
   );
}

export default BookingPage6;