import React from "react";
import * as Yup from "yup";
import {  useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const thanksProps="Thank you for your interest in working with Healing, we have recieved your application.You will receive an email guiding you for the next steps soon after your information is reviewed."

function TherapistCreatePage() {
  const navigate = useNavigate();
  

  const yupValidation = Yup.object().shape({
    username: Yup.string()
      .required("Please enter username.")
      .min(6, "Add minimum 6 characters"),
    email: Yup.string().required("Email is required").email(),
    city: Yup.string().required("Please enter a city."),
    license: Yup.string().required("Please enter a license number."),
    password: Yup.string()
      .required("Please enter a password.")
      .min(6, "Password must be at least 6 characters"),
    confirm: Yup.string().required("Please confirm password.")
    .oneOf([Yup.ref('password'), null], 'Passwords does not match'),
  });
  const formOptions = { resolver: yupResolver(yupValidation) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    navigate('/thankyou', { replace: true, state: thanksProps })
    return false;
  }
  return (
    <div className=" font-poppins flex flex-col justify-center content-center lg:ml-56 lg:mr-64 ml-10 mr-10 sm:ml-16 sm:mr-16 md:ml-32 md:mr-32 lg:mt-10 mt-20">
      <h1 className="lg:mt-16 mt-4 lg:text-5xl text-xl">CREATE AN ACCOUNT</h1>
      <form className="mb-0 mt-4 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label >
          <span className="lg:text-xl text-sm">User Name</span>
          <input
            name="username"
            type="text"
            className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 p-1  ${errors.username ? "is-invalid" : ""}`}
            {...register("username")}
          /></label>
          <div className="invalid-feedback text-red-400 lg:text-base text-sm">{errors.username?.message}</div>
        </div>

        <div className="form-group">
          <label htmlFor="email">
          <span className="lg:text-xl text-sm">Email</span>
          <input
            name="email"
            type="text"
            className={`form-control bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 p-1 ${errors.email ? "is-invalid" : ""}`}
            {...register("email")}
          /></label>
          <div className="invalid-feedback text-red-400 lg:text-base text-sm">{errors.email?.message}</div>
        </div>

        <div className="form-group">
          <label>
          <span className="lg:text-xl text-sm">City</span>
          <input
            name="city"
            type="text"
            className={`form-control bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 p-1 ${errors.city ? "is-invalid" : ""}`}
            {...register("city")}
          />
          </label>
          
          <div className="invalid-feedback text-red-400 lg:text-base text-sm">{errors.city?.message}</div>
        </div>

        <div className="form-group">
          <label>
          <span className="lg:text-xl text-sm">License Number</span>
          <input
            name="license"
            type="text"
            className={`form-control bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 p-1 ${errors.license ? "is-invalid" : ""}`}
            {...register("license")}
          />
          </label>
          <div className="invalid-feedback text-red-400 lg:text-base text-sm">{errors.license?.message}</div>
        </div>

        <div className="form-group">
          <label>
          <span className="lg:text-xl text-sm">Password</span>
          <input
            name="password"
            type="password"
            className={`form-control bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 p-1 ${errors.password ? "is-invalid" : ""}`}
            {...register("password")}
          />
          </label>
         
          <div className="invalid-feedback text-red-400 lg:text-base text-sm">{errors.password?.message}</div>
        </div>

        <div className="form-group">
          <label>
          <span className="lg:text-xl text-sm">Confirm Password</span>
          <input
            name="confirm"
            type="password"
            className={`form-control bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 p-1 ${errors.confirm ? 'is-invalid' : ''}`}
            {...register('confirm')}
          />
          </label>
          
          <div className="invalid-feedback text-red-400 lg:text-base text-sm">{errors.confirm?.message}</div>
        </div>

        <div className="mt-3">
          <button type="submit" className="rounded-md box-border p-2 lg:pl-10 lg:pr-10 pl-4 pr-4 mb-12 font-bold lg:text-xl text-sm text-gray-800 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 ">
            CREATE
          </button>
        </div>
      </form>
    </div>);
}

export default TherapistCreatePage;
