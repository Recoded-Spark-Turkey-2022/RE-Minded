import React from 'react'
import aboutImg from './Images/man.jpg';

function ContentB() {
  return (
    <div className='relative w-full bg-lightBlue h-full'>
        <h2 className="absolute font-poppins text-5xl text-gray-700 left-[40%] right-[29.93%] top-[20%]  w-[500px] ">
          Our Founding
        </h2>
       <img
          src={aboutImg}
          alt="img-about"
          className="absolute object-cover sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[23em] lg:h-[19em] lg:left-[13%] lg:top-[7%] rounded-md"
  /> 
        <article className="absolute left-[10%] right-[10%] leading-6 right-[10%] lg:text-xl lg:leading-6 lg:text-gray-700 lg:left-[40%] lg:right-[9%] lg:top-[38%] ">
          Healing was founded by Ammar Shoail in 2021. It was called Healing
          Online, and started as a blog and an online community where some of
          the world&apos;s therapists shared their research and ideas. We
          launched the Beginner&apos;s Guide to Therapy and our first study, and
          that hub of industry expertise transformed into a small consulting
          firm and led us to create the Online Therapist of today!
        </article>

    </div>
  )
}

export default ContentB