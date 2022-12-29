import React from 'react';
import aboutImg from './Images/man.jpg';


function About() {
  return (
    <div className="w-screen h-screen font-poppins text-black tracking-[-0.01em]">
      <div className="flex flex-grow bg-white flex-col">
        <h2 className="lg:text-5xl text-3xl">HEALING!</h2>
        <h3 className="lg:text-3xl text-xl text-black text-opacity-50">some cool liner !</h3>
        <div className="lg:text-xl text-sm leading-6">
          At Healing, we believe there is a better way to do things. A more
          valuable way where customers are earned rather than bought. We&apos;re
          obsessively passionate about it, and our mission is to help people
          achieve it. We focus on search engine optimization. It&apos;s one of the
          least understood and least transparent aspects of great marketing, and
          we see that as an opportunity. We&apos;re excited to simplify SEO for
          everyone through our software, education, and community.
        </div>
      </div>
      <div className="flex flex-grow flex-col lg:flex-row bg-blue-100 w-full ">
        <div className="self-center">
          <img src={aboutImg} alt="man" className=" sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[23em] lg:h-[19em] rounded-md object-cover  " />
        </div>
         <div className="text-gray-700">
         <h2 className="lg:text-5xl text-3xl ">Our Founding</h2>
        <div className="lg:text-xl text-sm">
          Healing was founded by Ammar Shoail in 2021. It was called Healing
          Online, and started as a blog and an online community where some of
          the world&apos;s therapists shared their research and ideas. We launched
          the Beginner&apos;s Guide to Therapy and our first study, and that hub of
          industry expertise transformed into a small consulting firm and led us
          to create the Online Therapist of today!.
        </div>
         </div>
        
      </div>
    </div>

  );
}

export default About;
