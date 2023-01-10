import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

const thanksProps="Thank you for your interest in working with Healing, we have recieved your application.You will receive an email guiding you for the next steps soon after your information is reviewed."

function TherapistCreatePage() {

  const navigate = useNavigate();

  const {
    register,getValues,
    formState: { errors },
  } = useForm();


  return (
    <div className=" font-poppins flex flex-col justify-center content-center lg:ml-56 lg:mr-64 ml-10 mr-10 sm:ml-16 sm:mr-16 md:ml-32 md:mr-32 lg:mt-10 mt-20">
      <h1 className="lg:mt-16 mt-4 lg:text-5xl text-xl">CREATE AN ACCOUNT</h1>

      <form className="mb-0 mt-4 space-y-6" onSubmit={() =>  navigate('/thankyou', { replace: true, state: thanksProps })}>
        <div>
          <label htmlFor="username">
            <span className="lg:text-xl text-sm">User Name</span>
            <input
            {...register("username", {required: true, maxLength: 80})}
              id="username"
              name="username"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 p-1 "
            />
          </label>
          {errors.username && errors.username.type === "required" && (
            <p className="errorMsg text-red-400 lg:text-base text-sm">User name is required.</p>
          )}
        </div>

        <div>
          <label htmlFor="email">
            <span className="lg:text-xl text-sm">Email</span>
            <input
             {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
            })}
              id="email"
              name="email"
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 p-1 "
            />
          </label>
          {errors.email && errors.email.type === "required" && (
            <p className="errorMsg text-red-400 lg:text-base text-sm">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg text-red-400 lg:text-base text-sm">Email is not valid.</p>
          )}
        </div>

        <div>
          <label htmlFor="city">
            <span className="lg:text-xl text-sm">City</span>
            <input
            {...register("city", {required: true, maxLength: 80})}
              id="city"
              name="city"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 p-1 "
            />
          </label>
          {errors.city && errors.city.type === "required" && (
            <p className="errorMsg text-red-400 lg:text-base text-sm">City is required.</p>
          )}
        </div>

        <div>
          <label htmlFor="licensenumber">
            <span className="lg:text-xl text-sm">License Number</span>
            <input
            {...register("licensenumber", {required: true, maxLength: 80})}
              id="licensenumber"
              name="licensenumber"
              type="text" // number?
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 p-1"
            />
          </label>
          {errors.licensenumber && errors.licensenumber.type === "required" && (
            <p className="errorMsg text-red-400 lg:text-base text-sm">License number is required.</p>
          )}
        </div>

        <div>
          <label htmlFor="password">
            <span className="lg:text-xl text-sm">Create Password</span>
            <input
            
             {...register("password", {
              required: true,
              minLength: 6
            })}
              id="password"
              name="password"
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 p-1"
            />
          </label>
          {errors.password && errors.password.type === "required" && (
            <p className="errorMsg text-red-400 lg:text-base text-sm">Password is required.</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="errorMsg text-red-400 lg:text-base text-sm">
              Password should be at-least 6 characters.
            </p>
          )}
        </div>

        <div>
          <label htmlFor="confirm">
            <span className="lg:text-xl text-sm">Confirm Password</span>
            <input
             {...register("confirm", {
              checkPsd: value => value === getValues().password,
              required: true,
            })}
              id="confirm"
              name="confirm"
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 p-1 "
            />
          </label>
          {errors.confirm && errors.confirm.type === "required" && (
            <p className="errorMsg text-red-400 lg:text-base text-sm">Confirm password</p>
          )}
          {errors.confirm && errors.confirm.type === "checkPsd" && (
            <p className="errorMsg text-red-400 lg:text-base text-sm">
              Password confirm does not match
            </p>
          )} 
        </div>

        <div>
          <button
            type="submit"
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
