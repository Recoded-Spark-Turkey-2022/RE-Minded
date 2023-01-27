import React from 'react';
import { useTranslation } from 'react-i18next';
import blogImage from './Images/TopImage.svg';

function MainConntent() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col font-poppins uppercase self-center w-full gap-16 ">
      <div className="self-center pt-14 pl-10 pr-10">
        <img src={blogImage} alt="blog" />
      </div>

      <div className='self-center flex flex-col lg:gap-20 gap-10 lg:pl-48 pl-12 lg:pr-72 pr-16 lg:pt-6 pt-2'>
        <div className="flex flex-col gap-8">
          <div className="lg:text-5xl text-3xl">{t('blog_main.h1')}</div>
          <div className="lg:text-lg text-base">
          {t('blog_main.t1')}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="lg:text-3xl text-xl">
          {t('blog_main.h2')}
          </div>
          <div className="lg:text-lg text-base">
          {t('blog_main.t2')}
          </div>
          <div className="lg:text-lg text-base">
          {t('blog_main.t3')}
          </div>
          <div className="lg:text-lg text-base">
          {t('blog_main.t4')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainConntent;