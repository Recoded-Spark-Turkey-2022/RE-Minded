import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Card1 from './Card';

function BookingPage6() {
  window.scrollTo(0, 0);
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  function handleTextareaChange(event) {
    setValue(event.target.value);
  }

  function handleClick() {
    if (value.trim().length > 0) {
      navigate('/booking7');
    } else {
      // eslint-disable-next-line no-alert
      alert('Warning: Textarea should not be left empty!');
    }
  }

  return (
    <div>
      <div className="flex flex-col items-center p-12">
        <Card1 header={t('booking6.header')} content={t('booking6.content')} />

        <textarea
          onChange={handleTextareaChange}
          className="font-poppins pb-72 p-8 shadow-zinc-300  box-border h-600 w-4/5 md:max-w-2xl lg:max-w-4xl  shadow-md"
        />
      </div>
      <div className="flex justify-center md:justify-evenly lg:justify-evenly pb-24 ">
        <Link to="/booking5">
          <button
            type="button"
            className="m-6 rounded-md box-border text-xl pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 lg:text-2xl"
          >
            {t('booking.previous')}
          </button>
        </Link>
        <button
          type="button"
          onClick={handleClick}
          className="m-6 rounded-md box-border text-xl pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 lg:text-2xl"
        >
          {t('booking.next')}
        </button>
      </div>
    </div>
  );
}

export default BookingPage6;
