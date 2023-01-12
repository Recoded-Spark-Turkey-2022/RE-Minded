import { React } from 'react';
import image4 from './Images/SubscribeArrow.svg';

function SignUp() {
  return (
    <div className="lg:pl-48 pl-10">
      <h2 className=" mt-10 uppercase lg:text-2xl text-lg">
        Sign up for The Healing blog
      </h2>
      <p className=" mt-2 text-start md:text-sm text-xs uppercase">
        A weekly, ad-free Blog that helps you stay in the know.
      </p>
      <div className="md:flex">
        <div className=" mt-7 flex justify-start mb-4 w-[300px] h-[50px] box-border rounded-md border-2 border-[#718096]">
          <input
            className=" w-3/4 h-auto rounded-l-lg text-SubTexts "
            type="email"
            placeholder="  Enter your e-mail"
          />
          <button
            type="button"
            className="bg-Buttons bg-sky-500 rounded-r-lg w-1/4 h-auto"
          >
            <img
              className="w-[24px] h-[24px] top-[18px] left-[310px] items-center mx-auto"
              src={image4}
              alt="Arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
