import React from 'react';
import ContentA from './ContentA';
import ContentB from './ContentB';
import ContentC from './ContentC';

function CareersPageMain() {
  return (
    <div className='h-screen w-screen'>
      <div className='flex flex-col font-poppins w-screen '>
        <div >
             <ContentA />
            
        </div>
        <div className='bg-yellow-300'>
            <ContentB />
        </div>
      </div>
      <div className='flex flex-col w-screen font-poppins'>
        <div >
            <ContentC />
        </div>
        
      </div>
    </div>
  );
}

export default CareersPageMain;
