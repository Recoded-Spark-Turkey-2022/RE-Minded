import { React, useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth';
import { useTranslation } from 'react-i18next';
import countryList from 'react-select-country-list';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { doc, setDoc, collection } from 'firebase/firestore';
import { db } from '../../Firebase';
import Card1 from './Images/TopCard.svg';
import Card2 from './Images/BottomCard.svg';

const thanksProps =
  'Your new payment method is under review, you will receive an email soon when your card is confirmed.Otherwise you will get a notification telling you what went wrong and how to add a new card.';

function AddCard() {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const options = useMemo(() => countryList().getData(), []);
  const [selected, setSelected] = useState('');
  const { t } = useTranslation();
  const auth = getAuth();
  const user = auth.currentUser;
  const currentUser = useSelector((state) => state.currentUser.user);
  const userCollectionRef = collection(db, 'Users', user.uid , 'credit-cards');

  function handleButtonClick(e) {
    if (selected === e.target.value) {
      setSelected('');
    } else {
      setSelected(e.target.value);
    }
  }

  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      nameOnCard: '',
      zipCode: '',
      city: '',
      address: '',
      type: 'Visa',
    },
    validationSchema: Yup.object({
      nameOnCard: Yup.string()
        .matches(/^[a-zA-Z ]+$/, 'Name on card should only contain alphabets')
        .required('Please do not leave this field empty!'),
      cardNumber: Yup.string()
        .matches(/^[0-9]{16}$/, 'Invalid Card Number')
        .required('Please do not leave this field empty!'),
      expirationDate: Yup.string()
        .matches(/^\d{2}\/\d{2}$/, 'Invalid Expiration Date')
        .required('Please do not leave this field empty!'),
      cvv: Yup.string()
        .required('Please do not leave this field empty!')
        .min(3, 'Invalid CVV'),
      city: Yup.string()
        .matches(/^[a-zA-Z ]+$/, 'Invalid City name')
        .required('Please do not leave this field empty!'),
      address: Yup.string().required('Please do not leave this field empty!'),
      zipCode: Yup.string()
        .matches(/^[0-9]{5}$/, 'Invalid ZipCode')
        .required('Please do not leave this field empty!'),
    }),
  });

  const changeHandler = (country) => {
    setValue(country);
  };

  const handleFormSubmit = async () => {
    if (
      !formik.values.cardNumber ||
      !formik.values.expirationDate ||
      !formik.values.cvv ||
      !formik.values.nameOnCard ||
      !formik.values.city ||
      !formik.values.zipCode ||
      !formik.values.address ||
      !formik.values.type ||
      !value
    ) {
      // eslint-disable-next-line no-alert
      alert('Please fill in all fields before submitting!');
    } else {
    setDoc(
        doc(userCollectionRef),
        {
          cardNumber: formik.values.cardNumber,
          expirationDate: formik.values.expirationDate,
          cvv: formik.values.cvv,
          nameOnCard: formik.values.nameOnCard,
          city: formik.values.cvv,
          zipCode: formik.values.zipCode,
          address: formik.values.address,
          type: formik.values.type,
          contry: value.label,
        },
        navigate('/thankyou', { replace: true, state: thanksProps })
      );
    }
  };

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
          <form
            className="w-full  opacity-50 pt-4 "
            onSubmit={formik.handleSubmit}
          >
            <label
              htmlFor="card type"
              className="block font-medium text-gray-700 mb-2"
            >
              {t('addcard.supported')}
            </label>
            <div className="flex  pb-6 text-Buttons">
              <button
                type="button"
                value="button1"
                onClick={handleButtonClick}
                className={`text-cyan-500 h-12 px-1 py-2  border-2  w-full  text-center rounded-lg  ${
                  selected === 'button1' ? 'bg-slate-200 border-zinc-600' : ' '
                }`}
              >
                {t('addcard.visa')}
              </button>
              <button
                type="button"
                value="button2"
                onClick={handleButtonClick}
                className={`text-cyan-500 h-12 px-1 py-2  border-2  w-full  text-center rounded-lg  ${
                  selected === 'button2' ? 'bg-slate-200 border-zinc-600' : ' '
                }`}
              >
                {t('addcard.mastercard')}
              </button>
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
              id="cardNumber"
              name="cardNumber"
              placeholder="XXXX XXXX XXXX XXXX"
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
                  {t('addcard.expiry')}
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
                  {t('addcard.cvv')}
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
              {t('addcard.name')}
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
              {t('addcard.city')}
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
              {t('addcard.add')}
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
          disabled={!currentUser}
          type="button"
          onClick={handleFormSubmit}
          className="rounded-md box-border p-2 pl-4 pr-4 transition-all duration-250 bg-Buttons"
        >
          {t('addcard.button_add')}
        </button>
      </div>
    </div>
  );
}
export default AddCard;
