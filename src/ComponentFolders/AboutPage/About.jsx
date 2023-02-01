import React from 'react';
import { useTranslation } from 'react-i18next';
import aboutImg from './Images/man.jpg';

function About() {
  window.scrollTo(0, 0);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-screen font-poppins text-black tracking-[-0.01em]">
      <div className="flex flex-grow bg-white flex-col lg:mb-[0%] mb-[5%] ml-[10%] mt-[5%] mr-[8%]">
        <h2 className="lg:text-5xl text-3xl">HEALING</h2>
        <h3 className="lg:text-3xl text-xl text-black text-opacity-50">
          {t('about.help')}
        </h3>
        <div className="md:text-lg text-sm leading-6 mt-[5%] mb-20">
          {t('about.text1')}
        </div>
      </div>
      <div className="flex items-center flex-grow flex-col lg:flex-row pb-16 bg-cyan-50 w-full ">
        <div className="self-center lg:ml-[10%] lg:mt-[0%] mt-[2%] pt-8 pb-8">
          <img
            src={aboutImg}
            alt="man"
            className=" sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[65em] lg:h-[15em] rounded-md object-cover"
          />
        </div>
        <div className="text-gray-700 ml-[10%] lg:ml-[5%] mr-[8%] lg:mt-[0%] mt-[5%] lg:mb-[0%] mb-10 ">
          <h2 className="lg:text-4xl text-2xl ">{t('about.founding')}</h2>
          <div className="md:text-lg text-sm lg:mt-[2%] mt-[4%]">
            {t('about.text2')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
