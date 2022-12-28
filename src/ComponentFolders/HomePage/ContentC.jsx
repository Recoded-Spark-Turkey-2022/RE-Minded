import { React, useState } from 'react';
import VideoCall from './Images/ContentC(VideoCall).svg';
import VoiceCall from './Images/ContentC(VoiceCall).svg';
import Chat from './Images/ContentC(Chat).svg';
import Card from './Card';

function ContentC() {
  const [cards, setCards] = useState([
    {
      title: 'Video Call',
      image: { VideoCall },
      content:
        'For better experience therapists recommend video calls, but always remember that its a choice!',
    },
    {
      title: 'Chat',
      image: { Chat },
      content: 'Need to talk to someone?Come have a chat with your therapist!',
    },
    {
      title: 'Voice Call',
      image: { VoiceCall },
      content:
        'Feeling ready to start a conversation? Give your therapist a voice call and talk your heart out!',
    },
  ]);

  return (
    <>
      <h1> WE CAN COMMUNICATE THROUGH </h1>
      <img src={Chat} alt="vv" />
      <Card
        cards={cards}
        setCards={setCards}
      />
    </>
  );
}

export default ContentC;
