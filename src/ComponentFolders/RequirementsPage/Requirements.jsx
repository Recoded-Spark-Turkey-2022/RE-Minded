import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import requirementPageImg from './Images/LaptopImage.svg';

function Requirements() {

  const { t } = useTranslation();

  return (
    <div className="flex lg:flex-row flex-col w-screen font-poppins mb-20">
      <div className="basis-3/5 lg:ml-28 ml-10 lg:pr-36 md:pr-20 pr-10">
        <div className="lg:text-5xl md:text-3xl text-2xl leading-6 lg:mt-20 mt-14">
          <h1>{t('requirements.h1')}</h1>
        </div>
        <div>
          <h3 className="lg:text-xl text-lg lg:mt-10 mt-8 font-semibold">
          {t('requirements.h2')}
          </h3>
          <div className="capitalize lg:text-lg text-base lg:mt-4 mt-2 text-gray-600">
          {t('requirements.t1')}
          </div>
        </div>

        <div>
          <h3 className="lg:text-xl text-lg lg:mt-10 mt-8 font-semibold">
          {t('requirements.h3')}
          </h3>
          <div className="capitalize lg:text-lg text-base lg:mt-4 mt-2 text-gray-600">
          {t('requirements.t2')}
          </div>
        </div>

        <div>
          <h3 className="lg:text-xl text-lg lg:mt-10 mt-8 font-semibold">
          {t('requirements.h3')}
          </h3>
          <div className="capitalize lg:text-lg text-base lg:mt-4 mt-2 text-gray-600">
          {t('requirements.t2')}
          </div>
        </div>

        <div>
          <h1 className="lg:text-3xl text-2xl lg:mt-20 mt-16 font-semibold">
          {t('requirements.r1')}
          </h1>
          <div className="capitalize lg:text-lg text-base mt-4 text-gray-600 ml-6">
            <ul className="list-disc marker:text-black lg:eading-9 leading-6">
              <li>{t('requirements.li1')}</li>
              <li>{t('requirements.li2')}</li>
              <li>{t('requirements.li3')}</li>
              <li>{t('requirements.li4')}</li>
              <li>{t('requirements.li5')}</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <Link to="/therapistcreate">
            <button
              type="button"
              className="lg:text-xl md:text-base text-sm lg:ml-0 ml-10 lg:mb-10 lg:px-6 rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 cursor-pointer "
            >
              {t('requirements.start')}
            </button>
          </Link>
        </div>
      </div>

      <div className="basis-2/5 lg:mt-32 lg:pr-16 lg:ml-0 md:ml-40 ml-10 mt-12 mr-10">
        <img src={requirementPageImg} alt="laptopImg" className="mb-10" />
      </div>
    </div>
  );
}

export default Requirements;
