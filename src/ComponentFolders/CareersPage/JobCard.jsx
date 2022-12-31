import React from 'react';

function JobCard({ job, description, department }) {
  return (
    <div className="w-full p-4 shadow-md flex flex-row hover:bg-yellow-100 cursor-pointer">
      <div className='basis-3/4 flex flex-col items-stretch'>
        <h3 className="lg:text-2xl text-lg font-medium text-cyan-500 self-start">{job}</h3>
        <p className="text-gray-600 self-start lg:text-base text-sm">{description}</p>
      </div>
      <div className='basis-1/4  flex flex-col items-stretch pl-4'>
        <h3 className='text-cyan-500 lg:text-xl text-base leading-8 self-end'>Engineering</h3>
        <p className="text-gray-600 self-end lg:text-base text-sm">{department}</p>
      </div>
    </div>
  );
}

export default JobCard;
