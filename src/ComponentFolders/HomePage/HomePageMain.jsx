import React from 'react';
import ContentA from './ContentA';
import ContentB from './ContentB';
import ContentC from './ContentC';
import ContentD from './ContentD';
import ContentE from './ContentE';

function HomePageMain() {
  window.scrollTo(0, 0);
  return (
    <>
      <ContentA />
      <ContentB />
      <ContentC />
      <ContentD />
      <ContentE />
    </>
  );
}

export default HomePageMain;
