import { React, useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { useFormik } from 'formik';
// import { collection, addDoc } from 'firebase/firestore';
// import { db } from '../../Firebase';
import Card1 from './Images/TopCard.svg';
import Card2 from './Images/BottomCard.svg';

function AddCard() {
  // const navigate = useNavigate();
  const [value, setValue] = useState('');
  const options = useMemo(() => countryList().getData(), []);

  // const creditCardCollectionRef = collection(db, "creditCards");

  // const handleFormSubmit = () => {
  //   addDoc(creditCardCollectionRef,{
  //     cardNumber: cardNumber,
  //     expirationDate: expirationDate,
  //     cvv: cvv,
  //     nameOnCard: nameOnCard,
  //     zipCode: zipCode,
  //     city: city,
  //     address: address
  //   })
  // }

  const formik  = useFormik({
    initialValues: {
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      nameOnCard: '',
      zipCode: '',
      city: '',
      address: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.cardNumber) {
        errors.cardNumber = 'Please do not leave this field empty!';
      } else if (!/^\d{16}$/.test(values.cardNumber)) {
        errors.cardNumber = 'Invalid card number';
      }

      if (!values.expirationDate) {
        errors.expirationDate = 'Please do not leave this field empty!';
      } else if (!/^\d{2}\/\d{2}$/.test(values.expirationDate)) {
        errors.expirationDate = 'Invalid expiration date';
      }

      if (!values.cvv) {
        errors.cvv = 'Please do not leave this field empty!';
      } else if (!/^\d{3}$/.test(values.cvv)) {
        errors.cvv = 'Invalid CVV';
      }
      if (!values.nameOnCard) {
        errors.nameOnCard = 'Please do not leave this field empty!';
      } else if (!/^[a-zA-Z ]+$/.test(values.nameOnCard)) {
        errors.nameOnCard = 'Invalid name';
      }

      if (!values.zipCode) {
        errors.zipCode = 'Please do not leave this field empty!';
      } else if (!/^\d{5}$/.test(values.zipCode)) {
        errors.zipCode = 'Invalid zip code';
      }

      if (!values.city) {
        errors.city = 'Please do not leave this field empty!';
      }

      if (!values.address) {
        errors.address = 'Please do not leave this field empty!';
      }

      return errors;
    },
  });

  const changeHandler = () => {
    setValue(value);
  };

  return (
    <div className="p-20 font-poppins">
      <h1 className="text-3xl pb-5 md:text-4xl lg:text-5xl">
        ADD CARD DETAILS
      </h1>
      <h2 className="pb-8 lg:pb-0 text-lg md:text-xl lg:text-2xl opacity-50">
        Please make sure all of the info you enter are the same as your
        registration info.
      </h2>
      <div className="flex flex-col lg:flex-row lg:space-x-96">
        <div className="text-md md:text-lg lg:text-xl items-center flex  flex-col md:flex-col lg:flex-row lg:space-x-52  ">
          <form
            className="w-full  opacity-50 pt-4 "
            onSubmit={formik.handleSubmit}
          >
            <label
              htmlFor="card type"
              className="block font-medium text-gray-700 mb-2"
            >
              Supported Card types
            </label>
            <div className="flex  pb-6 text-Buttons">
              <div className="text-cyan-200 h-12 px-1 py-2  border-2 border-r-0 w-full  text-center rounded-lg rounded-r-none">
                Visa
              </div>
              <div className=" h-12 px-1 py-2  border-2 w-full  text-center rounded-lg rounded-l-none">
                MasterCard
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
              id="cardNumber"
              name="cardNumber"
              value={values.cardNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formik.errors.cardNumber && formik.touched.cardNumber ? (
              <div className=" text-sm text-red-500 ">
                {formik.errors.cardNumber}
              </div>
            ) : null}
            <div className="flex  space-x-7">
              <div>
                <label
                  htmlFor="expiry date"
                  className="block font-medium text-gray-700 mb-2 mt-4 "
                >
                  Expiry Date
                </label>
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="text"
                  placeholder="MM/YY"
                  id="expirationDate"
                  name="expirationDate"
                  value={values.expirationDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {formik.errors.expirationDate &&
                formik.touched.expirationDate ? (
                  <div className="text-sm text-red-500">
                    {formik.errors.expirationDate}
                  </div>
                ) : null}
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
                  placeholder="***"
                  id="cvv"
                  name="cvv"
                  value={values.cvv}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {formik.errors.cvv && formik.touched.cvv ? (
                  <div className="text-sm text-red-500">
                    {formik.errors.cvv}
                  </div>
                ) : null}
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
              id="nameOnCard"
              name="nameOnCard"
              value={values.nameOnCard}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formik.errors.nameOnCard && formik.touched.nameOnCard ? (
              <div className="text-sm text-red-500">
                {formik.errors.nameOnCard}
              </div>
            ) : null}
          </form>
          <form className="w-full   opacity-50">
            <label
              htmlFor="country"
              className="block font-medium text-gray-700 mb-2 mt-4 "
            >
              Country
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
              ZIP Code
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="text"
              id="zipCode"
              name="zipCode"
              value={values.zipCode}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formik.errors.zipCode && formik.touched.zipCode ? (
              <div className="text-sm text-red-500">
                {formik.errors.zipCode}
              </div>
            ) : null}
            <label
              htmlFor="city"
              className="block font-medium text-gray-700 mb-2 mt-4"
            >
              City
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="text"
              id="city"
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formik.errors.city && formik.touched.city ? (
              <div className="text-sm text-red-500">{formik.errors.city}</div>
            ) : null}
            <label
              htmlFor="address"
              className="block font-medium text-gray-700 mb-2 mt-4"
            >
              Address
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="text"
              id="address"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formik.errors.address && formik.touched.address ? (
              <div className="text-sm text-red-500">
                {formik.errors.address}
              </div>
            ) : null}
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
          onClick={handleFormSubmit}
        >
          ADD CARD
        </button>
      </div>
    </div>
  );
}

export default AddCard;
