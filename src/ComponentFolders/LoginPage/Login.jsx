import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Image from './Images/LoginSofa.svg';
import lineImage from './Images/line.svg';
import FacebookLogo from './Images/FacebookLogo.svg';
import GoogleLogo from './Images/GoogleLogo.svg';
import { signInWithGoogle, signInWithFacebook, auth } from '../../Firebase';

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    userEmail: '',
    userPassword: '',
  });

  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginData.userEmail,
        loginData.userPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

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
    <div className="h-screen flex justify-center content-center md:flex-wrap max-[767px]:flex-wrap gap-x-20">
      <div>
        <h2 className='text-5xl font-["Poppins"] font-normal mb-44 max-[767px]:mt-20 md:mt-20 max-[767px]:mb-10 md:mb-10'>
          LOGIN
        </h2>
        <form className="grid grid-rows-3 gap-12 shadow-2xl px-10 py-10">
          <input
            type="text"
            placeholder="   Your Email"
            name="userEmail"
            onChange={(e) => handleOnClick(e)}
            className="h-20 broder-solid border-2 border-[#D1DBE3] rounded-md focus:outline-none focus:placeholder-white"
            value={loginData.userEmail}
          />
          <input
            type="password"
            placeholder="   Your Password"
            name="userPassword"
            onChange={(e) => handleOnClick(e)}
            className="h-20 broder-solid border-2 border-[#D1DBE3] rounded-md focus:outline-none focus:placeholder-white"
            value={loginData.userPassword}
          />
          <div className="flex justify-around py-3 gap-8">
            <button
              type="submit"
              className="bg-[#2DD3E3] font-medium text-2xl px-14 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)]"
              onClick={(e) => login(e)}
            >
              Login
            </button>
            <button
              type="button"
              className="broder-solid border-2 border-[#2DD3E3] font-medium text-2xl px-14 rounded-md"
              onClick={() => navigate('/signup')}
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
          <button type="button" onClick={signInWithFacebook}>
            <img
              src={FacebookLogo}
              alt="Facebook logo"
              className="cursor-pointer"
            />
          </button>

          <button type="button" onClick={signInWithGoogle}>
            <img
              src={GoogleLogo}
              alt="Google logo"
              className="cursor-pointer"
            />
          </button>
        </div>
      </div>

      <img src={Image} alt="Login" className="max-[767px]:mt-20 md:mt-20" />
    </div>
  );
}

export default Login;
