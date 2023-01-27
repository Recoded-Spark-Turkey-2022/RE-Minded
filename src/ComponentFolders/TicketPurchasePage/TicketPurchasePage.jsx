import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../Firebase';
import CreditCard from '../SavedCardsPage/CreditCard';

let ticket;

const thanksProps =
  'You purchase has been submitted, you should receive an email with the receipt soon.';

function TicketPurchasePage() {
  // const [pinkCardBtn, setPink] = useState(false);
  // const [blueCardBtn, setBlue] = useState(false);
  // const [yellowCardBtn, setYellow] = useState(false);
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, 'credit-cards');
      const querySnapshot = await getDocs(collectionRef);
      const dataInfo = querySnapshot.docs.map((doc) => doc.data());
      setData(dataInfo);
    };

    fetchData();
  }, []);

  // function handleClick(e) {
  //   if(e ==="pink") {setPink(!pinkCardBtn); setBlue(false); setYellow(false)}
  //   else if(e === "blue") {setBlue(!blueCardBtn); setPink(false); setYellow(false) }
  //   else if(e === "yellow") {setYellow(!yellowCardBtn); setPink(false); setBlue(false)}
  // }

  // function handleKeyDown(e) {
  //   if (e.keyCode === 13) {
  //     handleClick();
  //   }
  // }

  const location = useLocation();
  const propsData = location.state;
  if (propsData === '10$') {
    ticket = 5;
  } else if (propsData === '40$') {
    ticket = 25;
  } else if (propsData === '70$') {
    ticket = 50;
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
        <div id="slider" className="flex flex-col md:flex-row lg:flex-row ">
          {data.length === 0 ? (
            <div className="text-center text-sm md:text-2xl lg:text-3xl opacity-50 pt-24">
              You have no saved cards
            </div>
          ) : (
            data.map((card) => (
              <CreditCard
                nameOnCard={card.nameOnCard}
                cardNumber={card.cardNumber}
                expirationDate={card.expirationDate}
                deleteCard="-"
                previewButton
              />
            ))
          )}
        </div>
        {/* <div className="flex lg:space-y-4 self-center">
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
        </div> */}
      </div>

      <div className="lg:text-2xl md:text-xl text-base lg:mt-20 mt-12 self-center capitalize lg:ml-0 ml-10 lg:mr-0 mr-10">
        {t('purchase.click')} {ticket} tickets for {propsData}
      </div>
      <div className="self-center lg:mt-12 mt-8 lg:mb-20 mb-10">
        <Link to="/thankyou" state={thanksProps}>
          <button
            type="button"
            className="rounded-md box-border p-2 lg:pl-6 lg:pr-6 lg:text-lg md:text-base text-sm transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
          >
            {t('purchase.confirm')}
          </button>
        </Link>
      </div>
    </div>
  );
}
export default TicketPurchasePage;
