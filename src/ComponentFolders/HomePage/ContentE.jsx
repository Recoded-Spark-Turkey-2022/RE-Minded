import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

function ContentE() {
  return (
    <div className="font-poppins p-12 flex flex-col justify-evenly lg:h-section py-8">
      <h1 className="pl-16 font-poppins text-3xl md:text-4xl pb-8 pt-12">
        PURCHASE TICKETS
      </h1>
      <h4 className="pl-16 font-poppins text-xl mb-8 ">
        PURCHASE TICKETS THAT CAN BE USED TO BOOK APPOINTMENTS!
      </h4>
      <div className=" flex flex-col md:flex-row items-center justify-around w-full lg:h-1/3">
        <Card
          ticket="5 TICKETS"
          price="10$"
          button="PURCHASE"
          buttonPreview
          imagePreview={false}
          contentPreview={false}
          titlePreview={false}
        />

        <Card
          ticket="25 TICKETS"
          price="40$"
          button="PURCHASE"
          buttonPreview
          imagePreview={false}
          contentPreview={false}
          titlePreview={false}
        />

        <Card
          ticket="50 TICKETS"
          price="70$"
          button="PURCHASE"
          buttonPreview
          imagePreview={false}
          contentPreview={false}
          titlePreview={false}
        />
      </div>
      <div className=" shadow-zinc-300 font-poppins flex flex-col justify-around items-center p-4 rounded-lg h-1/3 lg:mx-16 my-4  shadow-lg ">
        <h1 className="text-xl lg:text-3xl uppercase text-center py-4 md:text-2xl">
          ARE YOU A COUNSELOR?
        </h1>
        <p className="font-poppins text-xl w-2/4  md:text-md  text-justify md:text-center text-opacity-50">
          Interested in joining our mental health platform? You decide your
          schedule and how much you want to work, well take care of the client
          referrals and billing details!
        </p>
        <Link to="/requirements">
        <button
          type="button"
          className="font-poppins text-center my-8 rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500"
        >
          LEARN MORE
        </button></Link>
      </div>
    </div>
  );
}

export default ContentE;
