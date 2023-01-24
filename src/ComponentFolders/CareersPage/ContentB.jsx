import React from 'react';
import { useTranslation } from 'react-i18next';

function ContentB() {

  const { t } = useTranslation();

  return (
    <div className="text-gray-700">
      <div className="lg:text-5xl md:text-3xl text-2xl leading-6 mt-10 lg:ml-28 ml-10">
        <h1>{t('careersb.h1')}</h1>
      </div>
      <div className="lg:text-lg text-base leading-6 mt-6 lg:ml-28 ml-10 lg:mr-52 md:mr-20 mr-10 mb-8">
      {t('careersb.t1')}
      </div>
    </div>
  );
}

export default ContentB;
