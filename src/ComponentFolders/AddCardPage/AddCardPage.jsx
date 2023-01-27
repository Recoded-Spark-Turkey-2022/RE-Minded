import { React, useState, useMemo } from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import countryList from 'react-select-country-list';
import Card1 from './Images/TopCard.svg';
import Card2 from './Images/BottomCard.svg';

function AddCard() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');

  const [value, setValue] = useState('');
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = () => {
    setValue(value);
  };
  const { t } = useTranslation();

  return (
    <div className="p-20 font-poppins">
      <h1 className="text-3xl pb-5 md:text-4xl lg:text-5xl">
        {t('addcard.addcarddetails')}
      </h1>
      <h2 className="pb-8 lg:pb-0 text-lg md:text-xl lg:text-2xl opacity-50">
        {t('addcard.h2')}
      </h2>
      <div className="flex flex-col lg:flex-row lg:space-x-96">
        <div className="text-md md:text-lg lg:text-xl items-center flex  flex-col md:flex-col lg:flex-row lg:space-x-52  ">
          <form className="w-full  opacity-50 pt-4 ">
            <label
              htmlFor="card type"
              className="block font-medium text-gray-700 mb-2"
            >
              {t('addcard.supported')}
            </label>
            <div className="flex  pb-6 text-Buttons">
              <div className="text-cyan-200 h-12 px-1 py-2  border-2 border-r-0 w-full  text-center rounded-lg rounded-r-none">
                {t('addcard.visa')}
              </div>
              <div className=" h-12 px-1 py-2  border-2 w-full  text-center rounded-lg rounded-l-none">
                {t('addcard.mastercard')}
              </div>
            </div>

            <label
              htmlFor="card number"
              className="block font-medium text-gray-700 mb-2"
            >
              {t('addcard.cardnumber')}
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <div className="flex  space-x-7">
              <div>
                <label
                  htmlFor="expiry date"
                  className="block font-medium text-gray-700 mb-2 mt-4 "
                >
                  {t('addcard.expiry')}
                </label>
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block font-medium text-gray-700 mb-2 mt-4"
                >
                  {t('addcard.cvv')}
                </label>
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="text"
                  value={cvv}
                  placeholder="***"
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
            </div>
            <label
              htmlFor="name on card"
              className="block font-medium text-gray-700 mb-2 mt-4"
            >
              {t('addcard.name')}
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="text"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
            />
          </form>
          <form className="w-full   opacity-50">
            <label
              htmlFor="country"
              className="block font-medium text-gray-700 mb-2 mt-4 "
            >
              {t('addcard.country')}
            </label>
            <Select
              className="pb-4"
              options={options}
              value={value}
              onChange={changeHandler}
            />
            <label
              htmlFor="zip code"
              className="block font-medium text-gray-700 mb-2 mt-4"
            >
              {t('addcard.zip')}
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            <label
              htmlFor="city"
              className="block font-medium text-gray-700 mb-2 mt-4"
            >
              {t('addcard.city')}
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <label
              htmlFor="address"
              className="block font-medium text-gray-700 mb-2 mt-4"
            >
              {t('addcard.add')}
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </form>

          <div className="pt-12 w-full flex flex-col justify-center">
            <img src={Card1} alt="TopCard" />
            <img src={Card2} alt="BottomCard" />
          </div>
        </div>
      </div>
      <div className="pt-12 lg:pt-0 text-md md:text-lg lg:text-xl flex justify-center lg:justify-start ">
        <button
          type="button"
          className="rounded-md box-border p-2 transition-all duration-250 bg-Buttons"
        >
          {t('addcard.button_add')}
        </button>
      </div>
    </div>
  );
}

export default AddCard;
