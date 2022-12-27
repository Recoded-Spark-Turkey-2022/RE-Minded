import React, { useState } from 'react';
import Image from './Images/LoginSofa.svg';
import lineImage from './Images/line.svg';
import FacebookLogo from './Images/FacebookLogo.svg';
import GoogleLogo from './Images/GoogleLogo.svg';

function Login() {
  const [loginData, setLoginData] = useState({
    userEmail: '',
    userPassword: '',
  });
  function handleOnClick(e) {
    const { value, name } = e.target;
    return setLoginData((prevObj) => {
      return {
        ...prevObj,
        [name]: value,
      };
    });
  }

  return (
    <div className="flex justify-center my-10">
      <div>
        <h2 className='text-5xl font-["Poppins"] font-normal mb-28'>LOGIN</h2>
        <form className="grid grid-rows-3 gap-12 shadow-2xl px-10 py-10">
          <input
            type="text"
            placeholder="   Your Email"
            name="userEmail"
            onChange={(e) => handleOnClick(e)}
            className="h-20 broder-solid border-2 border-[#D1DBE3] rounded-md"
            value={loginData.userEmail}
          />
          <input
            type="text"
            placeholder="   Your Password"
            name="userPassword"
            onChange={(e) => handleOnClick(e)}
            className="h-20 broder-solid border-2 border-[#D1DBE3] rounded-md"
            value={loginData.userPassword}
          />
          <div className="flex justify-around py-3 gap-8">
            <button
              type="submit"
              className="bg-[#2DD3E3] font-medium text-2xl px-14 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)]"
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
          <img src={FacebookLogo} alt="Facebook logo" />
          <img src={GoogleLogo} alt="Google logo" />
        </div>
      </div>

      <img src={Image} alt="Login" className="m-[150px]" />
    </div>
  );
}

export default Login;
