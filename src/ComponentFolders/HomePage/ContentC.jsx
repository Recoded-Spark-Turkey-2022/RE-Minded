import React from 'react';
import VideoCall from './Images/ContentC(VideoCall).svg';
import VoiceCall from './Images/ContentC(VoiceCall).svg';
import Chat from './Images/ContentC(Chat).svg';
import Card from './Card';

function ContentC() {
  return (
    <div className="h-5/6 w-5/6 mt-4 lg:mt-0 md:h-section flex flex-col justify-center  font-poppins pl-40 pb-16">
      <h1 className="sm:text-xl md:text-4xl xl:text-4xl p-16 mb-2">
        WE CAN COMMUNICATE THROUGH
      </h1>
      <div className=" flex flex-col md:flex-row items-center md:items-start md:justify-around pb-14">
        <Card
          image={VideoCall}
          title="Video Call"
          content="For better experience therapists recommend video calls, but always remember that its a choice!"
          buttonPreview={false}
        />

        <Card
          image={Chat}
          title="Chat"
          content="Need to talk to someone? Come have a chat with your therapist!"
          buttonPreview={false}
        />

        <Card
          image={VoiceCall}
          title="Voice Call"
          content="Feeling ready to start a conversation? Give your therapist a voice call and talk your heart out!"
          buttonPreview={false}
        />
      </div>
    </div>
  );
}

export default ContentC;
