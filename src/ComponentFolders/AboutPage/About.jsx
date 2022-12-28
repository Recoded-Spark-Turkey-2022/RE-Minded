import React from 'react';
import ContentA from './ContentA';
import ContentB from './ContentB';


function About() {
  return (
    <section>
      <div className='w-screen h-screen grid grid-rows-2'>
          <div className=' w-full h-full'>
          <ContentA />
          </div>

          {/* page 2 */}
          <div className='w-full h-full bg-blue'>
          <ContentB/>
          </div>
      </div>
    </section>

  );
}

export default About;
