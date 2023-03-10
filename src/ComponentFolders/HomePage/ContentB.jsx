import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Therapists from './Images/ContentBTherapists.svg';

function ContentB() {
  const loginState = useSelector((state) => state.loginStateHolderSlice);
  const navigate = useNavigate();
  const { t } = useTranslation();

  function clickHolder(state) {
    if (state) {
      navigate('booking1');
    } else {
      // eslint-disable-next-line no-alert
      alert('We need you to login to continue.');
    }
  }

  return (
    <div>
      <div className="bg-amber-200 pb-16 font-poppins">
        <h1 className="tracking-wider lg:text-5xl text-lg font-bold lg:w-7/12 lg:font-poppins lg:pt-20 pt-20 pl-16 sm:p-16 sm:font-poppins">
          {t('home_b.h1')}
        </h1>
        <img
          className="h-3/4 w-3/4 pt-16 pb-16 pl-16"
          src={Therapists}
          alt="therapists"
        />
        <p className="pl-16 pr-16 lg:text-2xl font-poppins text-sm lg:w-8/12 lg:pb-20 sm:pb-16">
          {t('home_b.t1')}
        </p>
        <button
          onClick={() => clickHolder(loginState)}
          type="button"
          className="m-12 text-md md:text-lg ml-16 lg:px-6 rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 "
        >
          {t('home_a.book')}
        </button>
      </div>
    </div>
  );
}

export default ContentB;
