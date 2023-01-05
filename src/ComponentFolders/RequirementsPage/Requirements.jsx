import React from 'react';
// import { Link } from "react-router-dom";
import requirementPageImg from './Images/LaptopImage.svg';

function Requirements() {
  return (
    <div className="flex lg:flex-row flex-col w-screen h-screen font-poppins mb-56">
      <div className="basis-3/5 lg:ml-28 ml-10 lg:pr-36 md:pr-20 pr-10">
        <div className="lg:text-5xl md:text-3xl text-2xl leading-6 lg:mt-20 mt-14">
          <h1>WHY WORK WITH HEALING?</h1>
        </div>
        <div>
          <h3 className="lg:text-xl text-lg lg:mt-10 mt-8 font-semibold">
            RELIABLE INCOME
          </h3>
          <div className="capitalize lg:text-lg text-base lg:mt-4 mt-2 text-gray-600">
            Over 10,000 people sign up on BetterHelp every day looking for a
            counselor to help with life&apos;s challenges. BetterHelp can be
            your main source of income (&quot;full time&quot;) or a supplement
            to your current work.
          </div>
        </div>

        <div>
          <h3 className="lg:text-xl text-lg lg:mt-10 mt-8 font-semibold">
            FOCUS ON COUNSELING
          </h3>
          <div className="capitalize lg:text-lg text-base lg:mt-4 mt-2 text-gray-600">
            No need to worry about costs from acquiring clients, billing,
            support or operations. Let us handle the fees and paperwork so you
            can focus on what you do best!
          </div>
        </div>

        <div>
          <h3 className="lg:text-xl text-lg lg:mt-10 mt-8 font-semibold">
            FOCUS ON COUNSELING
          </h3>
          <div className="capitalize lg:text-lg text-base lg:mt-4 mt-2 text-gray-600">
            No need to worry about costs from acquiring clients, billing,
            support or operations. Let us handle the fees and paperwork so you
            can focus on what you do best!
          </div>
        </div>

        <div>
          <h1 className="lg:text-3xl text-2xl lg:mt-20 mt-16 font-semibold">
            REQUIREMENTS
          </h1>
          <div className="capitalize lg:text-lg text-base mt-4 text-gray-600 ml-6">
            <ul className="list-disc marker:text-black lg:eading-9 leading-6">
              <li>Licensed by a State Board to provide counseling</li>
              <li>
                Experience in counseling for adults, couples, and/or teens
              </li>
              <li>Excellent writing skills</li>
              <li>Reliable Internet connection</li>
              <li>Currently residing in the US</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="button"
            className="lg:text-xl md:text-base text-sm lg:ml-0 ml-10 lg:mb-10 lg:px-6 rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 cursor-pointer "
          >
            GET STARTED
          </button>
        </div>
      </div>

      <div className="basis-2/5 lg:mt-32 lg:pr-16 lg:ml-0 md:ml-40 ml-10 mt-12 mr-10">
        <img src={requirementPageImg} alt="laptopImg" className="mb-10" />
      </div>
    </div>
  );
}

export default Requirements;
