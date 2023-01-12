import { React, useState, useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Card1 from './Images/TopCard.svg';
import Card2 from './Images/BottomCard.svg';

const thanksProps =
  'Your new payment method is under review, you will receive an email soon when your card is confirmed.Otherwise you will get a notification telling you what went wrong and how to add a new card. .';

function AddCard() {

  const navigate = useNavigate();

  const yupValidation = Yup.object().shape({
    cardNumber: Yup.string()
      .required('Please enter Card Number.')
      .min(16, 'Add minimum 16 characters'),
    expiryDate: Yup.string().required('Expiry Date is required'),
    cvv: Yup.string().required('Please enter a CVV Code.'),
    nameOnCard: Yup.string().required('Please enter a Valid Name.'),
    zipCode: Yup.string().required('Zip Code is required'),
    city: Yup.string().required('City is required'),
    Address: Yup.string().required('Address is required'),
  });
  const formOptions = { resolver: yupResolver(yupValidation) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    navigate('/thankyou', { replace: true, state: thanksProps });
    return false;
  }

  const [value, setValue] = useState('');
  const options = useMemo(() => countryList().getData(), []);

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
          <form className="w-full  opacity-50 pt-4 ">
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
            <input
              className={`w-full border border-gray-400 p-2 rounded-lg ${
                errors.username ? 'is-invalid' : ''
              }`}
              {...register('cardNumber')}
              type="text"
              name="cardNumber"
              />
              </label>
            <div className="invalid-feedback text-red-400 lg:text-base text-sm">
              {errors.cardNumber?.message}
            </div>
            <div className="flex  space-x-7">
              <div>
                <label
                  htmlFor="expiry date"
                  className="block font-medium text-gray-700 mb-2 mt-4 "
                >
                  Expiry Date
                <input
                  className={`w-full border border-gray-400 p-2 rounded-lg ${
                    errors.email ? 'is-invalid' : ''
                  }`}
                  {...register('expiryDate')}
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  />
                  </label>
                <div className="invalid-feedback text-red-400 lg:text-base text-sm">
                  {errors.expiryDate?.message}
                </div>
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block font-medium text-gray-700 mb-2 mt-4"
                >
                  CVV Code
                <input
                  className={`w-full border border-gray-400 p-2 rounded-lg ${
                    errors.cvv? 'is-invalid' : ''
                  }`}
                  {...register('city')}
                  type="text"
                  name="cvv"
                  />
                  </label>
                <div className="invalid-feedback text-red-400 lg:text-base text-sm">
                  {errors.cvv?.message}
                </div>
              </div>
            </div>
            <label
              htmlFor="name on card"
              className="block font-medium text-gray-700 mb-2 mt-4"
            >
              Name on Card
            </label>
            <input
              className={`w-full border border-gray-400 p-2 rounded-lg ${
                errors.license ? 'is-invalid' : ''
              }`}
              {...register('nameOnCard')}
              type="text"
              name="nameOnCard"
            />
            <div className="invalid-feedback text-red-400 lg:text-base text-sm">
              {errors.nameOnCard?.message}
            </div>
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
              className={`w-full border border-gray-400 p-2 rounded-lg  ${
                errors.license ? 'is-invalid' : ''
              }`}
              {...register('zipCode')}
              type="text"
              name="zipCode"
            />
            <div className="invalid-feedback text-red-400 lg:text-base text-sm">
              {errors.zipCode?.message}
            </div>
            <label
              htmlFor="city"
              className="block font-medium text-gray-700 mb-2 mt-4"
            >
              City
            </label>
            <input
              className={`w-full border border-gray-400 p-2 rounded-lg  ${
                errors.license ? 'is-invalid' : ''
              }`}
              {...register('city')}
              type="text"
              name="city"
            />
            <div className="invalid-feedback text-red-400 lg:text-base text-sm">
              {errors.city?.message}
            </div>
            <label
              htmlFor="address"
              className="block font-medium text-gray-700 mb-2 mt-4"
            >
              Address
            </label>
            <input
              className={`w-full border border-gray-400 p-2 rounded-lg ${
                errors.license ? 'is-invalid' : ''
              }`}
              {...register('Address')}
              type="text"
              name="Address"
            />
            <div className="invalid-feedback text-red-400 lg:text-base text-sm">
              {errors.Address?.message}
            </div>
          </form>

          <div className="pt-12 w-full flex flex-col justify-center">
            <img src={Card1} alt="TopCard" />
            <img src={Card2} alt="BottomCard" />
          </div>
        </div>
      </div>
      <div className="pt-12 lg:pt-0 text-md md:text-lg lg:text-xl flex justify-center lg:justify-start ">
        <button
          type="submit"
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-md box-border p-2 transition-all duration-250 bg-Buttons"
        >
          ADD CARD
        </button>
      </div>
    </div>
  );
}

export default AddCard;
