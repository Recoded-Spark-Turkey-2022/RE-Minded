import React, { useState } from 'react';
import Image from './Images/SofaImage.svg';
import lineImage from './Images/line.svg';
import FacebookLogo from './Images/FacebookLogo.svg';
import GoogleLogo from './Images/GoogleLogo.svg';

function SignUp() {
  const [signUpData, setSignUpData] = useState({
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    userConfirmEmail: '',
    userPassword: '',
    userCondirmPassword: '',
    dayOfBirth: '',
    monthOfBirth: '',
    yearOfYear: '',
  });

  function handleOnClick(e) {
    const { value, name } = e.target;
    return setSignUpData((prevObj) => {
      return {
        ...prevObj,
        [name]: value,
      };
    });
  }

  return (
    <div className="h-screen flex justify-center content-center md:flex-wrap max-[767px]:flex-wrap gap-x-20">
      <img src={Image} alt="Sign up" />
      <div className="flex flex-col">
        <h2 className='text-5xl font-["Poppins"] font-normal mb-32 max-[767px]:mt-20 md:mt-20 max-[767px]:mb-10 md:mb-10'>
          SIGNUP NOW
        </h2>
        <form className="grid grid-rows-3 gap-4 shadow-2xl px-10 py-10 w-[555px] h-[493]">
          <div className="flex gap-x-7">
            <input
              type="text"
              placeholder="   First Name"
              name="userFirstName"
              onChange={(e) => handleOnClick(e)}
              className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
              value={signUpData.userFirstName}
            />
            <input
              type="text"
              placeholder="   Last Name"
              name="userLastName"
              onChange={(e) => handleOnClick(e)}
              className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
              value={signUpData.userLastName}
            />
          </div>
          <input
            type="text"
            placeholder="   Your Email"
            name="userEmail"
            onChange={(e) => handleOnClick(e)}
            className="h-14 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
            value={signUpData.userEmail}
          />
          <input
            type="text"
            placeholder="   Confirm email"
            name="userConfirmEmail"
            onChange={(e) => handleOnClick(e)}
            className="h-14 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
            value={signUpData.userConfirmEmail}
          />
          <div className="flex gap-x-7">
            <input
              type="password"
              placeholder="   Password"
              name="userPassword"
              onChange={(e) => handleOnClick(e)}
              className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
              value={signUpData.userPassword}
            />
            <input
              type="password"
              placeholder="   Confirm password"
              name="userCondirmPassword"
              onChange={(e) => handleOnClick(e)}
              className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
              value={signUpData.userCondirmPassword}
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="mr-7 ml-7 font-light text-[#9DAFBD]">Birth Date</p>
            <input
              type="text"
              placeholder="  DD"
              name="dayOfBirth"
              onChange={(e) => handleOnClick(e)}
              className="h-14 w-12 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
              value={signUpData.dayOfBirth}
            />
            <input
              type="text"
              placeholder="  MM"
              name="monthOfBirth"
              onChange={(e) => handleOnClick(e)}
              className="h-14 w-12 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
              value={signUpData.monthOfBirth}
            />
            <input
              type="text"
              placeholder="  YYYY"
              name="yearOfYear"
              onChange={(e) => handleOnClick(e)}
              className="h-14 w-12 broder-solid border-2 border-[#D1DBE3] rounded-md w-36 placeholder-gray-300"
              value={signUpData.yearOfYear}
            />
          </div>
          <div className="flex justify-around py-3 gap-8">
            <button
              type="submit"
              className="bg-[#2DD3E3] font-medium text-2xl px-14 py-3 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)]"
            >
              Login
            </button>
            <button
              type="submit"
              className="broder-solid border-2 border-[#2DD3E3] font-medium text-2xl px-14 rounded-md"
            >
              Signup
            </button>
          </div>
        </form>
        <div className="flex justify-around my-6">
          <img src={lineImage} alt="A line" />
          <p>Or</p>
          <img src={lineImage} alt="A line" />
        </div>
        <div className="flex justify-center my-6 gap-x-20">
          <img src={FacebookLogo} alt="Facebook logo" className='cursor-pointer'/>
          <img src={GoogleLogo} alt="Google logo" className='cursor-pointer'/>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
