import React from 'react'


function TeamCards({name, job, photo}) {
  return (
    <div className="w-[20em] bg-[#EAF8F9] rounded-[2em] shadow-md lg:max-w-sm p-[1%]">
    <img
        className="object-cover object-center w-full h-96 rounded-t-[2em]"
        src={photo}
        alt="seyma"
    />
    <div className="p-4 flex flex-col items-center">
        <h4 className="text-2xl font-semibold tracking-tight text-[#424A4F] ">
            {name}
        </h4>
        <p className="text-lg mb-2 leading-normal">
            {job}
        </p>
    </div>
</div>
  )
}

export default TeamCards