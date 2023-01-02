import React from 'react';


function Card({header, content}) {
  return (
    <div className=" flex flex-col p-14 font-poppins ">
      <h1 className="text-2xl pb-6 md:text-2xl lg:text-4xl">{header}</h1>
      <p className="text-lg  md:text-xl opacity-50 lg:text-2xl lg:pr-40  ">
        {content}
      </p>
    </div>
  );
}

export default Card;