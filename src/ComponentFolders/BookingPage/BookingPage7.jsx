import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Card1 from './Card';

function BookingPage7() {

  const { t } = useTranslation();

  return (
    <div className="flex flex-col  p-24">
      <Card1
        header={t('booking7.header')}
        content={t('booking7.content')}
      />
      <div className="font-poppins shadow-zinc-300 flex flex-col items-center lg:max-w-4xl my-16 mx-auto px-16 py-24 shadow-md">
        <h1 className="text-xl pb-12 md:text-2xl lg:text-3xl lg:flex justify-center">
        {t('booking7.h1')}
        </h1>
        <h2 className="text-md pb-10 md:text-lg lg:text-xl lg:flex justify-center">
        {t('booking7.h2')}
        </h2>
        <div className="flex justify-center md:justify-between lg:justify-between ">
          <Link to="/booking6">
            <button
              type="button"
              className="m-6 rounded-md box-border text-xl pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 lg:text-2xl"
            >
              {t('booking7.previous')}
            </button>
          </Link>
          <Link to="/booking8">
            <button
              type="submit"
              className="m-6 rounded-md box-border text-xl pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 lg:text-2xl"
            >
              {t('booking7.submit')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookingPage7;