import React from 'react'
import yellowCard from './Images/YellowCard.svg'
import pinkCard from './Images/PinkCard.svg'
import blueCard from './Images/BlueCard.svg'
import leftArrow from './Images/LeftArrow.svg'
import rightArrow from './Images/RightArrow.svg'


function TicketPurchasePage() {
  return (
    <div className='flex flex-col font-poppins'>
        <div className='lg:text-5xl md:text-3xl text-xl'>
            <h1>SELECT CARD</h1>
        </div>
        <div className='lg:text-xl md:text-base text-sm text-blue-800'>
            Please select the card you want to buy the tickets with
        </div>
        <div>
        <img src={leftArrow} alt="leftArrow" />
        </div>
        <div>
            <img src={pinkCard} alt="pinkCard" />
        </div>
        <div>
            <img src={blueCard} alt="blueCard" />
        </div>
        <div>
            <img src={yellowCard} alt="yellowcard" />
        </div>
        <div>
        <img src={rightArrow} alt="rightArrow" />
        </div>
        <div>Click confirm to use the selected card to purchase 5 tickets for 10$</div>
        <div>button here</div>
    </div>
  )
}

export default TicketPurchasePage