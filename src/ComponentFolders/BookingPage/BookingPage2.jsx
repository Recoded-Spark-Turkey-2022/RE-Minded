import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from './Card';
// import ChoicesA from './QuestionChoicesA';

function BookingPage2() {
  const [selected, setSelected] = useState('');
  const navigate = useNavigate();

  function handleButtonClick(e) {
    if (selected === e.target.value) {
      setSelected('');
    } else {
      setSelected(e.target.value);
    }
  }

  function handleNextButtonClick() {
    if (selected === '') {
      alert('Please select one!');
    } else {
      navigate('/booking3');
    }
  }
  return (
    <div className="flex flex-col items-center p-12">
      <Card
        header="LET'S MATCH YOU WITH THE RIGHT THERAPIST"
        content="Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you'd like to deal with in online therapy. It would help us match you with the most suitable therapist for you. "
      />
      <div className="font-poppins shadow-zinc-300 flex flex-col w-full md:max-w-2xl lg:max-w-4xl my-16 mx-auto px-8 py-4 shadow-md">
        <h1 className="text-xl pb-6 md:text-2xl lg:text-3xl lg:flex justify-center mt-4">
          What is your relationship status?
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
            Single
          </button>
          <button
            value="button2"
            onClick={handleButtonClick}
            type="button"
            className={`shadow-zinc-300 flex flex-col w-full mb-6 mt-12 px-4 py-4 shadow-md hover:bg-cyan-400 ${
              selected === 'button2' ? 'bg-cyan-400' : ' '
            }`}
          >
            Married
          </button>
          <button
            value="button3"
            onClick={handleButtonClick}
            type="button"
            className={`shadow-zinc-300 flex flex-col w-full mb-6 mt-12 px-4 py-4 shadow-md hover:bg-cyan-400 ${
              selected === 'button3' ? 'bg-cyan-400' : ' '
            }`}
          >
            Divorced
          </button>
        </form>
        <div className="flex justify-center md:justify-between lg:justify-between ">
          <Link to="/booking1">
            <button
              type="button"
              className="m-6 rounded-md box-border text-xl pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 lg:text-2xl"
            >
              PREVIOUS
            </button>
          </Link>

          <button
            type="button"
            onClick={handleNextButtonClick}
            className="m-6 rounded-md box-border text-xl pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 lg:text-2xl"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingPage2;
