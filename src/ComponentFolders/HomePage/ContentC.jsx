import React from 'react';
import VoiceCall from './Images/ContentC(VoiceCall).svg';
import VideoCall from './Images/ContentC(VideoCall).svg';
import Chat from './Images/ContentC(Chat).svg';

function ContentC() {
  return (
    <>
      <h1 className="sm:text-xl md:text-4xl xl:text-title pb-2 mb-2">
        WE CAN COMMUNICATE THROUGH
      </h1>
      <div>
        <div>
          <img src={VoiceCall} alt="voice call" />
          <h3> Voice Call </h3>
          <p>
            Feeling ready to start a conversation? Give your therapist a voice
            call and talk your heart out!
          </p>
        </div>
        <div>
          <img src={Chat} alt="chat" />
          <h3> Chat </h3>
          <p>Need to talk to someone? Come have a chat with your therapist!</p>
        </div>
        <div>
          <img src={VideoCall} alt="video call" />
          <h3> Video Call </h3>
          <p>
            For better experience therapists recommend video calls, but always
            remember that its a choice!
          </p>
        </div>
      </div>
    </>
  );
}

export default ContentC;
