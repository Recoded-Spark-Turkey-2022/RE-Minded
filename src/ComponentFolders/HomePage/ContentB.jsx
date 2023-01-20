import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Therapists from './Images/ContentBTherapists.svg';

function ContentB() {
  const { t } = useTranslation();

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
        <Link to="booking1">
          <button
            type="button"
            className="m-12 text-md md:text-lg ml-16 lg:px-6 rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 "
          >
            {t('home_a.book')}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ContentB;
