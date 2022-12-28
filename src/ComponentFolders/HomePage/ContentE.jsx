import React from 'react';

function ContentE() {
  return (
    <>
      <h1>PURCHASE TICKETS</h1>
      <h3>PURCHASE TICKETS THAT CAN BE USED TO BOOK APPOINTMENTS!</h3>
      <div>tickets</div>
      <div className="flex flex-col justify-around items-center p-4 rounded-lgshadow-2xl px-10 py-10 h-20 broder-solid border-2 border-[#D1DBE3] rounded-md">
        <h1>ARE YOU A COUNSELOR?</h1>
        <p>
          Interested in joining our mental health platform? You decide your
          schedule and how much you want to work, well take care of the client
          referrals and billing details!
        </p>
        <button
          type="button"
          className="rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500">
          LEARN MORE
        </button>
      </div>
    </>
  );
}

export default ContentE;
