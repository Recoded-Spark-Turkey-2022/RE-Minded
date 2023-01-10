import { React, useState } from 'react';
import Card1 from './Images/TopCard.svg';
import Card2 from './Images/BottomCard.svg';

function AddCard() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');

  return (
    <div className="p-20 font-poppins">
      <h1 className="text-3xl pb-5 md:text-4xl lg:text-5xl">
        ADD CARD DETAILS
      </h1>
      <h2 className="text-lg md:text-xl lg:text-2xl opacity-50">
        Please make sure all of the info you enter are the same as your
        registration info.
      </h2>
      <div className="flex flex-col lg:flex-row lg:space-x-96">
        <div className=" items-center flex flex-col md:flex-col lg:flex-row lg:space-x-80 ">
          <form className="">
            <label
              htmlFor="card number"
              className="block font-medium text-gray-700 mb-2"
            >
              Supported Card types
            </label>
            <div className="flex">
              <div className="leading-snug h-12 px-1 py-2 text-paragraph text-blue-dark border-2 border-r-0 border-blue-dark w-36 text-center rounded-lg rounded-r-none">
                MasterCard
              </div>
              <div className="leading-snug h-12 px-1 py-2 text-paragraph text-blue-dark border-2 border-blue-dark w-36 text-center rounded-lg rounded-l-none">
                Visa
              </div>
            </div>

            <label
              htmlFor="card number"
              className="block font-medium text-gray-700 mb-2"
            >
              Card Number
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <div className='flex space-x-7'>
              <div>
                <label
                  htmlFor="expiry date"
                  className="block font-medium text-gray-700 mb-2 mt-4"
                >
                  Expiry Date
                </label>
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block font-medium text-gray-700 mb-2 mt-4"
                >
                  CVV Code
                </label>
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
            </div>
            <label
              htmlFor="name on card"
              className="block font-medium text-gray-700 mb-2 mt-4"
            >
              Name on Card
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="text"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
            />
          </form>
          <form className="">
            

            <label
              htmlFor="card number"
              className="block font-medium text-gray-700 mb-2"
            >
             Country
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <label
              htmlFor="expiry date"
              className="block font-medium text-gray-700 mb-2 mt-4"
            >
              ZIP Code
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
            <label
              htmlFor="cvv"
              className="block font-medium text-gray-700 mb-2 mt-4"
            >
              City
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
            <label
              htmlFor="name on card"
              className="block font-medium text-gray-700 mb-2 mt-4"
            >
              Address
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="text"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
            />
          </form>

          <div className="pt-12">
            <img src={Card1} alt="TopCard" />
            <img src={Card2} alt="BottomCard" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCard;
