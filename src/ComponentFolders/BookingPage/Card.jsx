import React from 'react';


function Card({header, content}) {
  return (
    <div className=" flex flex-col p-14 font-poppins ">
      <h1 className="text-3xl pb-6 md:text-3xl lg:text-5xl">{header}</h1>
      <p className="text-lg  md:text-xl opacity-50 lg:text-3xl lg:pr-40  ">
        {content}
      </p>
    </div>
  );
}

export default Card;