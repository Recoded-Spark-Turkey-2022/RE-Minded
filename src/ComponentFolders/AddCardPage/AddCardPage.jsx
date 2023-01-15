import { React, useState, useMemo } from 'react';
// import { useNavigate } from 'react-router';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Firebase';
import Card1 from './Images/TopCard.svg';
import Card2 from './Images/BottomCard.svg';

function AddCard() {
  // const navigate = useNavigate();
  const [value, setValue] = useState('');
  const options = useMemo(() => countryList().getData(), []);

  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      nameOnCard: '',
      zipCode: '',
      city: '',
      address: '',
    },
    validationSchema: Yup.object({
      nameOnCard: Yup.string().required(
        'Please do not leave this field empty!'
      ),
      cardNumber: Yup.string()
        .required('Please do not leave this field empty!')
        .min(16, 'Invalid card number'),
      expirationDate: Yup.string().required(
        'Please do not leave this field empty!'
      ),
      cvv: Yup.string()
        .required('Please do not leave this field empty!')
        .min(3, 'Invalid CVV'),
      city: Yup.string().required('Please do not leave this field empty!'),
      address: Yup.string().required('Please do not leave this field empty!'),
      zipCode: Yup.string().required('Please do not leave this field empty!'),
    }),
    onSubmit: (values) => {
      const firestore = db.firestore();
      firestore.collection('credit-card').add(values);
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cardNumber}
            />
            {formik.touched.cardNumber && formik.errors.cardNumber ? (
              <div className="text-sm text-red-500">
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.expirationDate}
                />
                {formik.touched.expirationDate &&
                formik.errors.expirationDate ? (
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cvv}
                />
                {formik.touched.cvv && formik.errors.cvv ? (
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nameOnCard}
            />
            {formik.touched.nameOnCard && formik.errors.nameOnCard ? (
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.zipCode}
            />
            {formik.touched.zipCode && formik.errors.zipCode ? (
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            />
            {formik.touched.city && formik.errors.city ? (
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address ? (
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
        >
          ADD CARD
        </button>
      </div>
    </div>
  );
}

export default AddCard;
