import React from 'react';
import ContentA from './ContentA';
import ContentB from './ContentB';
import ContentC from './ContentC';

function CareersPageMain() {
  return (
    <div>
      <div className='flex flex-col font-poppins'>
        <div className='bg-blue-500 '>
             <ContentA />
            
        </div>
        <div className='bg-pink-500 '>
            <ContentB />
        </div>
      </div>
      <div className='flex flex-col '>
        <div className='bg-yellow-500'>
            <ContentC />
        </div>
        
      </div>
    </div>
  );
}

export default CareersPageMain;
