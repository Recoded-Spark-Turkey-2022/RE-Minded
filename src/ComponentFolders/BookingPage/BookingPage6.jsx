import React from 'react';
import Card1 from './Card';


function BookingPage6() {
   return (
     <div className="flex flex-col items-center p-12">
       <Card1
         header="WHAT BRINGS YOU HERE?"
         content="Please specify (in a few sentences) why you'd like counseling.This will give your counselor a good understanding of where to start."
       />
       <div className="font-poppins shadow-zinc-300 flex flex-col w-full md:max-w-2xl lg:max-w-6xl my-16 mx-auto px-8 py-4 shadow-md">
         <input  />
       </div>
     </div>
   );
}

export default BookingPage6;