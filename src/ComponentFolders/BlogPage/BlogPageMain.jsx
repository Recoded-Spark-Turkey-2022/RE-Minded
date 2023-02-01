import React from 'react';
import MainContent from './MainContent';
import Recommended from './RecommendedforYou';
import SignUp from './SignUp';

function Main() {
  window.scrollTo(0, 0);
  return (
    <>
      <MainContent />
      <SignUp />
      <Recommended />
    </>
  );
}

export default Main;
