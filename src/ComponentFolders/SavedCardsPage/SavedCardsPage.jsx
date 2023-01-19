import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../Firebase';
import CreditCard from './CreditCard';

function savedCardPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, 'credit-cards');
      const querySnapshot = await getDocs(collectionRef);
      const dataInfo = querySnapshot.docs.map((docu) => ({
        id: docu.id,
        data: docu.data(),
      }));
      setData(dataInfo);
    };
    fetchData();
  }, ['credit-cards']);

  return (
    <div className="flex flex-col font-poppins lg:mt-20 mt-10">
      <div className="lg:text-5xl md:text-3xl text-xl lg:ml-52 ml-10">
        <h1>YOUR SAVED CARDS</h1>
      </div>
      <div className="lg:text-xl md:text-base text-sm text-SubTexts mt-4 lg:ml-52 ml-10 lg:mr-0 mr-16">
        We only support cards as a payment method at the moment!
      </div>
      <div className="overflow-x-auto flex lg:flex-row md:flex-row flex-col self-center  lg:mt-20 mt-8 lg-ml-0  lg:mr-0 mr-10 ">
        <div id="slider" className="flex flex-col md:flex-row lg:flex-row ">
          {data.length === 0 ? (
            <div className="text-center text-sm md:text-2xl lg:text-3xl opacity-50 pt-24">
              You have no saved cards
            </div>
          ) : (
            data.map((card) => (
              <div className="flex-shrink-0 mx-2">
                <CreditCard
                  key={card.data.index}
                  id={card.id}
                  nameOnCard={card.data.nameOnCard}
                  cardNumber={card.data.cardNumber}
                  expirationDate={card.data.expirationDate}
                  deleteCard="Delete Card -"
                  previewButton
                  setData={setData}
                  data={data}
                />
              </div>
            ))
          )}
        </div>
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
