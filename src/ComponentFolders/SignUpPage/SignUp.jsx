import React from 'react';
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from '../../Firebase';
import Image from './Images/SofaImage.svg';
import lineImage from './Images/line.svg';
import FacebookLogo from './Images/FacebookLogo.svg';
import GoogleLogo from './Images/GoogleLogo.svg';
import { basicSchema } from '../../schemas/basicSchema';

function SignUp() {

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    const register = async () => {
      try {
        const {user} = await createUserWithEmailAndPassword(
          auth,
          e.userEmail,
          e.userPassword
        );
        await setDoc(doc(db, 'Users', user.uid), {
          firstName: e.userFirstName,
          lastName: e.userLastName,
          email: e.userEmail,
          dayOfBirth: e.dayOfBirth,
          monthOfBirth: e.monthOfBirth,
          yearOfBirth: e.yearOfBirth
        });
        return user
      } catch (error) {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          // eslint-disable-next-line no-alert
          alert('The same email is used, try another one');
        }
        return error;
      }
    };
    register();
    navigate("/")
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        userFirstName: '',
        userLastName: '',
        userEmail: '',
        userConfirmEmail: '',
        userPassword: '',
        userCondirmPassword: '',
        dayOfBirth: '',
        monthOfBirth: '',
        yearOfBirth: '',
      },
      validationSchema: basicSchema,
      onSubmit: handleFormSubmit,
    });

  return (
    <div className="h-screen flex justify-center content-center md:flex-wrap max-[767px]:flex-wrap gap-x-20 mb-32">
      <img src={Image} alt="Sign up" />
      <div className="flex flex-col">
        <h2 className='text-5xl font-["Poppins"] font-normal mb-32 max-[767px]:mt-20 md:mt-20 max-[767px]:mb-10 md:mb-10'>
          SIGNUP NOW
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-rows-3 gap-4 shadow-2xl px-10 py-10 w-[555px] h-[493]"
        >
          {errors.userEmail && touched.userEmail && (
            <li className="text-red-500">{errors.userEmail}</li>
          )}
          {errors.userConfirmEmail && touched.userConfirmEmail && (
            <li className="text-red-500">{errors.userConfirmEmail}</li>
          )}
          {errors.userPassword && touched.userPassword && (
            <li className="text-red-500">{errors.userPassword}</li>
          )}
          {errors.userCondirmPassword && touched.userCondirmPassword && (
            <li className="text-red-500">{errors.userCondirmPassword}</li>
          )}
          <div className="flex gap-x-7">
            <input
              type="text"
              placeholder="   First Name"
              name="userFirstName"
              value={values.userFirstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className="px-3 h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300 focus:outline-none focus:placeholder-white"
            />
            <input
              type="text"
              placeholder="   Last Name"
              name="userLastName"
              value={values.userLastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className="px-3 h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300 focus:outline-none focus:placeholder-white"
            />
          </div>
          <input
            type="email"
            placeholder="   Your Email"
            name="userEmail"
            value={values.userEmail}
            onChange={handleChange}
            onBlur={handleBlur}
            className="px-3 h-14 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300 focus:outline-none focus:placeholder-white"
          />
          <input
            type="email"
            placeholder="   Confirm email"
            name="userConfirmEmail"
            value={values.userConfirmEmail}
            onChange={handleChange}
            onBlur={handleBlur}
            className="px-3 h-14 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300 focus:outline-none focus:placeholder-white"
          />
          <div className="flex gap-x-7">
            <input
              type="password"
              placeholder="   Password"
              name="userPassword"
              value={values.userPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className="px-3 h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300 focus:outline-none focus:placeholder-white"
            />
            <input
              type="password"
              placeholder="   Confirm password"
              name="userCondirmPassword"
              value={values.userCondirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className="px-3 h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300 focus:outline-none focus:placeholder-white"
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="mr-7 ml-7 font-light text-[#9DAFBD]">Birth Date</p>
            <input
              type="number"
              placeholder="  DD"
              name="dayOfBirth"
              value={values.dayOfBirth}
              onChange={handleChange}
              onBlur={handleBlur}
              className="px-3 h-14 w-12 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300 focus:outline-none focus:placeholder-white"
            />
            <input
              type="number"
              placeholder="  MM"
              name="monthOfBirth"
              value={values.monthOfBirth}
              onChange={handleChange}
              onBlur={handleBlur}
              className="px-3 h-14 w-12 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300 focus:outline-none focus:placeholder-white"
            />
            <input
              type="number"
              placeholder="  YYYY"
              name="yearOfYear"
              value={values.yearOfBirth}
              onChange={handleChange}
              onBlur={handleBlur}

              className="px-3 h-14  broder-solid border-2 border-[#D1DBE3] rounded-md w-36 placeholder-gray-300 focus:outline-none focus:placeholder-white"

            />
          </div>
          <div className="flex justify-around py-3 gap-8">
            <button
              type="button"
              className="bg-[#2DD3E3] font-medium text-2xl px-14 py-3 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)]"
              onClick={() => navigate('/login')}
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
          <img
            src={FacebookLogo}
            alt="Facebook logo"
            className="cursor-pointer"
          />
          <img src={GoogleLogo} alt="Google logo" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
