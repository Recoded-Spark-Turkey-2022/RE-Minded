import React from 'react';
import Blog1 from './Images/ContentD(Blog1).svg';
import Blog2 from './Images/ContentD(Blog2).svg';
import RightArrow from './Images/RightArrow.svg';
import LeftArrow from './Images/LeftArrow.svg';


function ContentD() {
  return (
    <div className="bg-cyan-50 pb-16 pt-8 m-4">
      <h1 className="flex justify-center pt-8">RECENT BLOGS</h1>
      <div className="flex p-6 m-16 ">
        <img className="p-3 cursor-pointer" src={LeftArrow} alt="LeftArrow" />
        <img className="h-4/5 w-4/5 cursor-pointer" src={Blog1} alt="Blog1" />
        <img className="h-4/5 w-4/5 cursor-pointer" src={Blog2} alt="Blog2" />
        <img className="h-4/5 w-4/5 cursor-pointer" src={Blog1} alt="Blog1" />
        <img className="p-3 cursor-pointer" src={RightArrow} alt="RightArrow" />
      </div>
    </div>
  );
}

export default ContentD;
