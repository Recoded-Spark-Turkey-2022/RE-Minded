import React from 'react';

function TherapistCreatePage() {
  return (
    <div className=" font-poppins h-screen flex flex-col justify-center content-center lg:ml-56 lg:mr-64 ml-10 mr-10 sm:ml-16 sm:mr-16 md:ml-32 md:mr-32 lg:mt-10 mt-20">
      <h1 className='lg:mt-16 mt-4 lg:text-5xl text-xl'>CREATE AN ACCOUNT</h1>

      <form className="mb-0 mt-4 space-y-6" action="#" method="POST">
        <div>
          <label htmlFor="username">
            <span className='lg:text-xl text-sm'>User Name</span>
            <input
              id="username"
              name="username"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 p-1 "
            />
          </label>
        </div>

        <div>
          <label htmlFor="email">
            <span className='lg:text-xl text-sm'>Email</span>
            <input
              id="email"
              name="email"
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 p-1 "
            />
          </label>
        </div>

        <div>
          <label htmlFor="city">
            <span className='lg:text-xl text-sm'>City</span>
            <input
              id="city"
              name="city"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 p-1 "
            />
          </label>
        </div>

        <div>
          <label htmlFor="licensenumber">
            <span className='lg:text-xl text-sm'>License Number</span>
            <input
              id="licensenumber"
              name="licensenumber"
              type="text" // number?
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 p-1"
            />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            <span className='lg:text-xl text-sm'>Create Password</span>
            <input
              id="password"
              name="password"
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 p-1"
            />
          </label>
        </div>

        <div>
          <label htmlFor="confirm">
            <span className='lg:text-xl text-sm'>Confirm Password</span>
            <input
              id="confirm"
              name="confirm"
              type="confirm-password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 p-1 "
            />
          </label>
        </div>

        <div>
          <button
            type="button"
            className="rounded-md box-border p-2 lg:pl-10 lg:pr-10 pl-4 pr-4 mb-12 font-bold lg:text-xl text-sm text-gray-800 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 "
          >
            CREATE
          </button>
        </div>
      </form>
    </div>
  );
}

export default TherapistCreatePage;
