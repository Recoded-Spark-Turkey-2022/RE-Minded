import React from 'react';
import yellowCard from './Images/YellowCard.svg';
import pinkCard from './Images/PinkCard.svg';
import blueCard from './Images/BlueCard.svg';
import leftArrow from './Images/LeftArrow.svg';
import rightArrow from './Images/RightArrow.svg';

function TicketPurchasePage() {
  return (
    <div className="flex flex-col font-poppins mt-20">
      <div className="lg:text-5xl md:text-3xl text-xl ml-52">
        <h1>SELECT CARD</h1>
      </div>
      <div className="lg:text-xl md:text-base text-sm text-SubTexts mt-4 ml-52">
        Please select the card you want to buy the tickets with
      </div>
      <div className='flex lg:flex-row md:flex-row flex-col self-center gap-3 mt-20'>
        <div className='flex space-y-4'>
          <img src={leftArrow} alt="leftArrow" className='lg:rotate-0 md:rotate-0 rotate-90'/>
        </div>
        <div >
          <img src={pinkCard} alt="pinkCard" />
        </div>
        <div>
          <img src={blueCard} alt="blueCard" />
        </div>
        <div>
          <img src={yellowCard} alt="yellowcard" />
        </div>
        <div className='flex space-y-4 '>
          <img src={rightArrow} alt="rightArrow" className='lg:rotate-0 md:rotate-0 rotate-90'/>
        </div>
      </div>

      <div className="lg:text-2xl md:text-xl text-base mt-20 self-center capitalize">
        Click confirm to use the selected card to purchase 5 tickets for 10$
      </div>
      <div className='self-center mt-12 mb-20'>
        <button
          type="button"
          className="rounded-md box-border p-2 lg:pl-6 lg:pr-6 text-lg transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
        >
          CONFIRM PURCHASE
        </button>
      </div>
    </div>
  );
}

export default TicketPurchasePage;
