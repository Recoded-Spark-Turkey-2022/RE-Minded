import React from 'react';

function JobCard({ job, description, department }) {
  return (
    <div className="w-full p-4 shadow-md flex flex-row hover:bg-yellow-100 cursor-pointer">
      <div className='basis-3/4 flex flex-col items-stretch'>
        <h3 className="text-2xl font-medium text-cyan-500 self-start">{job}</h3>
        <p className="text-gray-600 self-start text-base">{description}</p>
      </div>
      <div className='basis-1/4  flex flex-col items-stretch'>
        <h3 className='text-cyan-500 text-xl leading-8 self-end'>Engineering</h3>
        <p className="text-gray-600 self-end text-base">{department}</p>
      </div>
    </div>
  );
}

export default JobCard;
