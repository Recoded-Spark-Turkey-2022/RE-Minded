import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

function ContentA() {

  const { t } = useTranslation();

  return (
    <div>
      <div className="lg:text-5xl md:text-3xl text-2xl leading-6 mt-10 lg:ml-28 ml-10 text-gray-700">
        <h1>{t('careersa.h1')}</h1>
      </div>
      <div className="lg:text-xl text-lg leading-6 mt-4 lg:ml-28 ml-10 text-gray-400">
        <h3>{t('careersa.h2')}</h3>
      </div>
      <div className="lg:text-lg text-base leading-6 lg:mt-24 mt-16 lg:ml-28 ml-10 lg:mr-52 md:mr-20 mr-10 text-gray-700">
      {t('careersa.t1')}
      </div>
      <div className="lg:text-2xl text-lg leading-6 mt-20 lg:ml-28 ml-10 text-gray-700">
        <h3>{t('careersa.h3')}</h3>
      </div>
      <div className="text-xl leading-6 mt-4 lg:ml-12 mb-8">
      <Link to="/careers#openpositions">
        <button
          type="button"
          className="lg:text-xl md:text-base text-sm lg:ml-16 ml-10 lg:px-6 rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 cursor-pointer "
        >
          {t('careersa.btn1')}
        </button></Link>
      </div>
    </div>
  );
}

export default ContentA;