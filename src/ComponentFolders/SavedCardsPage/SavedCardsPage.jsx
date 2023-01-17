import { React, useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import { db } from '../../Firebase';

// import yellowCard from './Images/YellowCard.svg';
// import pinkCard from './Images/PinkCard.svg';
// import blueCard from './Images/BlueCard.svg';
// import leftArrow from './Images/LeftArrow.svg';
// import rightArrow from './Images/RightArrow.svg';

function savedCardPage() {

const [data, setData] = useState([]);


 useEffect(() => {
   
   const fetchData = async () => {
     try {
       const snapshot = await db.collection('credit-cards').get();
       const docs = snapshot.docs.map((doc) => doc.data());
       setData(docs);
     } catch (error) {
       console.error('Error getting documents', error);
     }
   };

   fetchData();
 }, []);

  return (
    <div className="flex flex-col font-poppins lg:mt-20 mt-10">
      {/* <div className="lg:text-5xl md:text-3xl text-xl lg:ml-52 ml-10">
        <h1>YOUR SAVED CARDS</h1>
      </div>
      <div className="lg:text-xl md:text-base text-sm text-SubTexts mt-4 lg:ml-52 ml-10 lg:mr-0 mr-16">
        We only support cards as a payment method at the moment!
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col self-center gap-3 lg:mt-20 mt-8 lg-ml-0 ml-10 lg:mr-0 mr-10">
        <div className="flex lg:space-y-4 self-center">
          <img
            src={leftArrow}
            alt="leftArrow"
            className="lg:rotate-0 md:rotate-0 rotate-90"
          />
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
        <div className="flex space-y-4 self-center">
          <img
            src={rightArrow}
            alt="rightArrow"
            className="lg:rotate-0 md:rotate-0 rotate-90"
          />
        </div>
      </div> */}
      <div>
        {data.map((item) => (
          <div key={item.id}>
            CVV: {item.cvv}
            <br />
            Card Number: {item.cardNumber}
          </div>
        ))}
      </div>

      <div className="self-center lg:mt-12 mt-8 lg:mb-20 mb-10 pt-12 ">
        <Link to="/addcard">
          <button
            type="button"
            className="rounded-md box-border p-2 lg:pl-6 lg:pr-6 lg:text-lg md:text-base text-sm transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
          >
            ADD NEW CARD +
          </button>
        </Link>
      </div>
    </div>
  );
}

export default savedCardPage;
