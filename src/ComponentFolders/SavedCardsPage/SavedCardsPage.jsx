import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Firebase';

function savedCardPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'credit-cards', '657qPnDjG456dVeiN9jg');
      const docSnap = await getDoc(docRef);
      setData(docSnap.data());
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col font-poppins lg:mt-20 mt-10">
      <div className="lg:text-5xl md:text-3xl text-xl lg:ml-52 ml-10">
        <h1>YOUR SAVED CARDS</h1>
      </div>
      <div className="lg:text-xl md:text-base text-sm text-SubTexts mt-4 lg:ml-52 ml-10 lg:mr-0 mr-16">
        We only support cards as a payment method at the moment!
      </div>
     
      <div>
        {data ? (
          <div>
            <p>{data.nameOnCard}</p>
            <p>{data.cardNumber}</p>
            <p>{data.expirationDate}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
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
