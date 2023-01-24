import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Card from './Card';

function BookingPage8() {

  const { t } = useTranslation();

  return (
    <div className="flex flex-col  p-24">
      <Card
        header={t('booking8.header')}
        content={t('booking8.content')}
      />
      <div className="font-poppins shadow-zinc-300 flex flex-col items-center my-16 mx-auto px-16 py-24 shadow-md">
        <h1 className="text-xl pb-12 md:text-2xl lg:text-3xl lg:flex justify-center">
        {t('booking8.h1')}
        </h1>
        <h2 className="text-md pb-10 md:text-lg lg:text-xl lg:flex justify-center">
        {t('booking8.h2')}
        </h2>
        <div className="flex justify-center">
          <Link to="/">
            <button
              type="button"
              className="m-6 rounded-md box-border text-md md:text-lg  pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 lg:text-2xl"
            >
              {t('booking8.btn')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookingPage8;
