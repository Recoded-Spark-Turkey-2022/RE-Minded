import React from 'react';
import Blogs from './Images/ContentD(Blogs).svg';
import RightArrow from './Images/RightArrow.svg';
import LeftArrow from './Images/LeftArrow.svg';


function ContentD() {
  return (
    <>
      <h1>RECENT BLOGS</h1>
      <div className='flex'>
      <img src={LeftArrow} alt="LeftArrow" />
      <img src={Blogs} alt="Blogs" />
      <img src={RightArrow} alt="RightArrow" />
      </div>
    </>
  );
}

export default ContentD;
