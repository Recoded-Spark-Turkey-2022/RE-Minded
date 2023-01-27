
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link  } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../Firebase';
import CreditCard from '../SavedCardsPage/CreditCard';


import { useTranslation } from 'react-i18next';
import yellowCard from './Images/YellowCard.svg';
import pinkCard from './Images/PinkCard.svg';
import blueCard from './Images/BlueCard.svg';
import leftArrow from './Images/LeftArrow.svg';
import rightArrow from './Images/RightArrow.svg';


let ticket;

const thanksProps = "You purchase has been submitted, you should receive an email with the receipt soon."

function TicketPurchasePage() {
  const [pinkCardBtn, setPink] = useState(false);
  const [blueCardBtn, setBlue] = useState(false);
  const [yellowCardBtn, setYellow] = useState(false);

  function handleClick(e) {
    if(e ==="pink") {setPink(!pinkCardBtn); setBlue(false); setYellow(false)}
    else if(e === "blue") {setBlue(!blueCardBtn); setPink(false); setYellow(false) }
    else if(e === "yellow") {setYellow(!yellowCardBtn); setPink(false); setBlue(false)}
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      handleClick();
    }
  }

  const location = useLocation();
  const propsData = location.state;

  if (propsData === '10$') {
    ticket = 5;
  } else if (propsData === '40$') {
    ticket = 25;
  } else if (propsData === '70$') {
    ticket = 50;
  }
  
  const { t } = useTranslation();

  const navigate = useNavigate();

  function checkCardExist(dataExisting){
    if(dataExisting === 0 ){
      // eslint-disable-next-line no-alert
      alert("Please add a card for confirmation")
    }
    else{
      navigate("../thankyou", {state: thanksProps})
    }
  }

  return (
    <div className="flex flex-col font-poppins lg:mt-20 mt-10">
      <div className="lg:text-5xl md:text-3xl text-xl lg:ml-52 ml-10">
        <h1>{t('purchase.h1')}</h1>
      </div>
      <div className="lg:text-xl md:text-base text-sm text-SubTexts mt-4 lg:ml-52 ml-10 lg:mr-0 mr-16">
      {t('purchase.t1')}
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col self-center gap-3 lg:mt-20 mt-8 lg-ml-0 ml-10 lg:mr-0 mr-10">
        <div className="flex lg:space-y-4 self-center">
          <img
            src={leftArrow}
            alt="leftArrow"
            className="lg:rotate-0 md:rotate-0 rotate-90"
          />
        </div>
        <div onClick={() => handleClick("pink")} onKeyDown={()=> handleKeyDown} role="button"
  tabIndex="0">
          <img
            src={pinkCard}
            alt="pinkCard" className={pinkCardBtn ? 'border-8 rounded-lg border-Buttons border-dashed' : 'border-0'}/>
        </div>
        <div onClick={() => handleClick("blue")} onKeyDown={()=> handleKeyDown} role="button"
  tabIndex="0">
          <img src={blueCard} alt="blueCard" className={blueCardBtn ? 'border-8 rounded-lg border-Buttons border-dashed' : 'border-0'} />
        </div>
        <div onClick={() => handleClick("yellow")} onKeyDown={()=> handleKeyDown} role="button"
  tabIndex="0">
          <img src={yellowCard} alt="yellowcard" className={yellowCardBtn ? 'border-8 rounded-lg border-Buttons border-dashed' : 'border-0'}/>
        </div>
        <div className="flex space-y-4 self-center">
          <img
            src={rightArrow}
            alt="rightArrow"
            className="lg:rotate-0 md:rotate-0 rotate-90"
          />
        </div>
      </div>

      <div className="lg:text-2xl md:text-xl text-base lg:mt-20 mt-12 self-center capitalize lg:ml-0 ml-10 lg:mr-0 mr-10">
      {t('purchase.click')} {ticket} {' '}
        {propsData}
      </div>

      <div className='flex lg:flex-row flex-col lg:gap-10 gap-4 justify-center'>
        <div className="self-center lg:mt-12 mt-8 lg:mb-20 mb-2">
          {/* <Link to="/thankyou" state={thanksProps}> */}
            <button
            onClick={() => navigate("../savedcards")}
              type="button"
              className="rounded-md box-border p-2 lg:pl-16 lg:pr-16 lg:text-lg md:text-base text-sm transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
            >
              ADD CARD
            </button>
          {/* </Link> */}
        </div>
        <div className="self-center lg:mt-12 mt-2 lg:mb-20 mb-10">
          {/* <Link to="/thankyou" state={thanksProps}> */}
            <button
            onClick={() => checkCardExist(data.length)}
              type="button"
              className="rounded-md box-border p-2 lg:pl-6 lg:pr-6 lg:text-lg md:text-base text-sm transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
            >
             {t('purchase.confirm')}
            </button>
          {/* </Link> */}
        </div>

      </div>
    </div>
  );
}

export default TicketPurchasePage;