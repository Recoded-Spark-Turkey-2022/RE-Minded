import React from 'react'


function TeamCards({name, job, photo}) {
  return (
    <div className="w-full rounded-lg shadow-md lg:max-w-sm p-[1%]">
    <img
        className="object-cover object-center w-full h-96"
        src={photo}
        alt="seyma"
    />
    <div className="p-4">
        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
            {name}
        </h4>
        <p className="mb-2 leading-normal">
            {job}
        </p>
        {/* <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
            Read more
        </button> */}
    </div>
</div>
  )
}

export default TeamCards