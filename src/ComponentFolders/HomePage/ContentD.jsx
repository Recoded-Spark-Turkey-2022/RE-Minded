import React from 'react';
import Blog1 from './Images/ContentD(Blog1).svg';
import Blog2 from './Images/ContentD(Blog2).svg';
import RightArrow from './Images/RightArrow.svg';
import LeftArrow from './Images/LeftArrow.svg';


function ContentD() {
  return (
    <div className="bg-cyan-50 pb-16 h-max w-screen ">
      <h1 className="p-24 pl-32 font-poppins text-3xl md:text-4xl ">
        RECENT BLOGS
      </h1>
      <div className="lg:flex justify-center pb-32 ">
        <img className="p-3 cursor-pointer" src={LeftArrow} alt="LeftArrow" />
        <img
          className="h-1/4 w-1/4 p-4 cursor-pointer"
          src={Blog1}
          alt="Blog1"
        />
        <img
          className="h-1/4 w-1/4 p-4 cursor-pointer"
          src={Blog2}
          alt="Blog2"
        />
        <img
          className="h-1/4 w-1/4 p-4 cursor-pointer"
          src={Blog1}
          alt="Blog1"
        />
        <img className="p-3 cursor-pointer" src={RightArrow} alt="RightArrow" />
      </div>
    </div>
  );
}

export default ContentD;
