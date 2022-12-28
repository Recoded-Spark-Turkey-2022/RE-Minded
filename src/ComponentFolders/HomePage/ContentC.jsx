import React from 'react';
import VideoCall from './Images/ContentC(VideoCall).svg';
import VoiceCall from './Images/ContentC(VoiceCall).svg';
import Chat from './Images/ContentC(Chat).svg';
import Card from './Card';

function ContentC() {


  return (
    <>
      <h1 className='flex justify-center'> WE CAN COMMUNICATE THROUGH </h1>
      <div className='flex'>
        <Card
          image={VideoCall}
          title="Video Call"
          content="For better experience therapists recommend video calls, but always remember that its a choice!"
        />

        <Card
          image={Chat}
          title="Chat"
          content="Need to talk to someone?Come have a chat with your therapist!"
        />

        <Card
          image={VoiceCall}
          title="Voice Call"
          content="Feeling ready to start a conversation? Give your therapist a voice call and talk your heart out!"
        />
      </div>
      
    </>
  );
}

export default ContentC;
