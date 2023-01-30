import React from 'react';
import { useTranslation } from 'react-i18next';
import VideoCall from './Images/ContentCVideoCall.svg';
import VoiceCall from './Images/ContentCVoiceCall.svg';
import Chat from './Images/ContentCChat.svg';
import Card from './Card';

function ContentC() {
  const { t } = useTranslation();

  return (
    <div className="font-poppins p-12 mb-16 mt-4  flex flex-col justify-evenly ">
      <h1 className=" text-2xl md:text-4xl xl:text-4xl p-16 mb-2 lg:ml-0">
        {t('home_c.h1')}
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-evenly ">
        <Card
          image={VideoCall}
          title={t('home_c.videocall')}
          content={t('home_c.content1')}
          buttonPreview={false}
          imagePreview
          contentPreview
          titlePreview
        />

        <Card
          image={Chat}
          title={t('home_c.chat')}
          content={t('home_c.content2')}
          buttonPreview={false}
          imagePreview
          contentPreview
          titlePreview
        />

        <Card
          image={VoiceCall}
          title={t('home_c.voicecall')}
          content={t('home_c.content3')}
          buttonPreview={false}
          imagePreview
          contentPreview
          titlePreview
        />
      </div>
    </div>
  );
}

export default ContentC;
