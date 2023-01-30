import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Card from './Card';
// import ChoicesA from './QuestionChoicesA';

function BookingPage2() {
  const [selected, setSelected] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  function handleButtonClick(e) {
    if (selected === e.target.value) {
      setSelected('');
    } else {
      setSelected(e.target.value);
    }
  }

  function handleNextButtonClick() {
    if (selected === '') {
      // eslint-disable-next-line no-alert
      alert('Please select one!');
    } else {
      navigate('/booking3');
    }
  }

  return (
    <div className="flex flex-col items-center p-12">
      <Card header={t('booking.header')} content={t('booking.content')} />
      <div className="font-poppins shadow-zinc-300 flex flex-col w-full md:max-w-2xl lg:max-w-4xl my-16 mx-auto px-8 py-4 shadow-md">
        <h1 className="text-xl pb-6 md:text-2xl lg:text-3xl lg:flex justify-center mt-4">
          {t('booking2.h1')}
        </h1>
        <form>
          <button
            value="button1"
            onClick={handleButtonClick}
            type="button"
            className={`shadow-zinc-300 flex flex-col w-full mb-6 mt-12 px-4 py-4 shadow-md hover:bg-cyan-400 ${
              selected === 'button1' ? 'bg-cyan-400' : ' '
            }`}
          >
            {t('booking2.b1')}
          </button>
          <button
            value="button2"
            onClick={handleButtonClick}
            type="button"
            className={`shadow-zinc-300 flex flex-col w-full mb-6 mt-12 px-4 py-4 shadow-md hover:bg-cyan-400 ${
              selected === 'button2' ? 'bg-cyan-400' : ' '
            }`}
          >
            {t('booking2.b2')}
          </button>
          <button
            value="button3"
            onClick={handleButtonClick}
            type="button"
            className={`shadow-zinc-300 flex flex-col w-full mb-6 mt-12 px-4 py-4 shadow-md hover:bg-cyan-400 ${
              selected === 'button3' ? 'bg-cyan-400' : ' '
            }`}
          >
            {t('booking2.b3')}
          </button>
        </form>
        <div className="flex justify-center md:justify-between lg:justify-between ">
          <Link to="/booking1">
            <button
              type="button"
              className="m-6 rounded-md box-border text-xl pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 lg:text-2xl"
            >
              {t('booking.previous')}
            </button>
          </Link>

          <button
            type="button"
            onClick={handleNextButtonClick}
            className="m-6 rounded-md box-border text-xl pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 lg:text-2xl"
          >
            {t('booking.next')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingPage2;
