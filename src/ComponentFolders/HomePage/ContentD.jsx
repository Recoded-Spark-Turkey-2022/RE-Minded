import React from 'react';
import { useTranslation } from 'react-i18next';
import Blog1 from './Images/ContentDBlog1.svg';
import Blog2 from './Images/ContentDBlog2.svg';
import RightArrow from './Images/RightArrow.svg';
import LeftArrow from './Images/LeftArrow.svg';

function ContentD() {
  const { t } = useTranslation();

  return (
    <div className="bg-cyan-50 pb-16 w-full h-max ">
      <h1 className="font-bold lg:text-start p-24 pl-32 font-poppins text-3xl md:text-4xl  ">
        {t('home_d.recent')}
      </h1>
      <div className="flex flex-col p-0 lg:flex-row md:flex-col items-center justify-around w-full lg:h-1/3 pb-24 ">
        <img
          className="p-3 cursor-pointer rotate-90 lg:rotate-0 "
          src={LeftArrow}
          alt="LeftArrow"
        />
        <img className="p-1 cursor-pointer  " src={Blog1} alt="Blog1" />
        <img className="p-1 cursor-pointer" src={Blog2} alt="Blog2" />
        <img className="cursor-pointer" src={Blog1} alt="Blog1" />
        <img
          className="p-3 cursor-pointer rotate-90 lg:rotate-0 "
          src={RightArrow}
          alt="RightArrow"
        />
      </div>
    </div>
  );
}

export default ContentD;
