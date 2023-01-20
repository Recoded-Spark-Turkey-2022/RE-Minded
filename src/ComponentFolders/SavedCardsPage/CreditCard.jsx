import React from 'react';
import { collection, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../Firebase';
// import masterCard from './Images/mastercard.svg';
import visa from './Images/Visa.svg';
// import PinkCard from './Images/PinkCard.svg';
import BlueCard from './Images/BlueCard.svg';

function CreditCard({
  nameOnCard,
  cardNumber,
  expirationDate,
  deleteCard,
  previewButton,
  id,
  setData,
}) {
  const deleteCardFirebase = async () => {
    const collectionRef = collection(db, 'credit-cards');
    await deleteDoc(doc(collectionRef, id)).then(() => {
      setData((prevData) => prevData.filter((card) => card.id !== id));
    });
  };

  return (
    <div
      className=" box-border rounded-lg h-full w-full font-poppins m-2"
      style={{
        backgroundImage: `url(${BlueCard})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        top: 0,
      }}
    >
      <div className="flex flex-row">
        <div className="pl-12 pt-12  text-white">
          <div className="p-4">{expirationDate}</div>
          <div className="p-4">{cardNumber}</div>
          <div className="p-4">{nameOnCard}</div>
        </div>
        <div className="p-12 pl-28">
          <img src={visa} alt="mastercard" />
        </div>
      </div>
      <div className="p-4 flex justify-end">
        {previewButton && (
          <button
            className=" rounded-md box-border p-2 lg:pl-6 lg:pr-6 lg:text-lg md:text-base text-sm transition-all duration-250 bg-Buttons hover:bg-cyan-500"
            type="button"
            onClick={() => deleteCardFirebase(doc.id)}
          >
            {deleteCard}
          </button>
        )}
      </div>
    </div>
  );
}

export default CreditCard;
