import React from 'react';

function JobCard({ job, description, department }) {
  return (
    <div className="w-full p-4 shadow-md flex flex-rows">
      <div >
        <h3 className="text-2xl font-semibold text-teal-400">{job}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div>
        <h3 className='text-teal-400 text-2xl leading-8'>Engineering</h3>
        <p className="text-gray-600">{department}</p>
      </div>
    </div>
  );
}

export default JobCard;
