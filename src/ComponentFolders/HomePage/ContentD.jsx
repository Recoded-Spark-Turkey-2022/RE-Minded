import React from 'react';
import Blogs from './Images/ContentD(Blogs).svg';
import RightArrow from './Images/RightArrow.svg';
import LeftArrow from './Images/LeftArrow.svg';


function ContentD() {
  return (
    <div className="bg-cyan-50 pb-16 pt-8">
      <h1 className="flex justify-center pt-5">RECENT BLOGS</h1>
      <div className="flex justify-center p-6 ">
        <img className="p-3 cursor-pointer" src={LeftArrow} alt="LeftArrow" />
        <img className="h-4/5 w-4/5 cursor-pointer" src={Blogs} alt="Blogs" />
        <img className="p-3 cursor-pointer" src={RightArrow} alt="RightArrow" />
      </div>
    </div>
  );
}

export default ContentD;
