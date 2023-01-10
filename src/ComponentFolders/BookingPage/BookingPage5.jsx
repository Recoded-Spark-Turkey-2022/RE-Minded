import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card1 from './Card';
// import ChoicesB from './QuestionChoicesB';

function BookingPage5() {
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
  });
  const navigate = useNavigate();

  function handleCheckboxChange(event) {
    const { name, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    });
  }

  function handleClick() {
    if (Object.values(checkboxes).some((val) => val === true)) {
      navigate('/booking6');
    } else {
      alert('Please select at least one!');
    }
  }

  return (
    <div className="flex flex-col items-center p-12">
      <Card1
        header="LET'S MATCH YOU WITH THE RIGHT THERAPIST"
        content="Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you'd like to deal with in online therapy. It would help us match you with the most suitable therapist for you. "
      />
      <div className="font-poppins shadow-zinc-300 flex flex-col w-full md:max-w-2xl lg:max-w-4xl my-16 mx-auto px-8 py-4 shadow-md">
        <h1 className="text-xl pb-6 md:text-2xl lg:text-3xl lg:flex justify-center mt-4">
          Are there any issues you would like to focus on?
        </h1>
        <form className="flex flex-col pl-6 text-md md:text-lg  lg:text-xl">
          <label htmlFor="one">
            <input
              type="checkbox"
              className="m-2 mb-6 mt-12"
              name="option1"
              checked={checkboxes.option1}
              onChange={handleCheckboxChange}
            />
            Depression
          </label>
          <label htmlFor="two">
            <input
              type="checkbox"
              className="m-2 mb-6"
              name="option2"
              checked={checkboxes.option2}
              onChange={handleCheckboxChange}
            />
            Stress and Anxiety
          </label>
          <label htmlFor="three">
            <input
              type="checkbox"
              className="m-2 mb-6"
              name="option3"
              checked={checkboxes.option3}
              onChange={handleCheckboxChange}
            />
            Relationship issues
          </label>
          <label htmlFor="four">
            <input
              type="checkbox"
              className="m-2 mb-6"
              name="option4"
              checked={checkboxes.option4}
              onChange={handleCheckboxChange}
            />
            Family conflicts
          </label>
          <label htmlFor="five">
            <input
              type="checkbox"
              className="m-2 mb-6"
              name="option5"
              checked={checkboxes.option4}
              onChange={handleCheckboxChange}
            />
            Trauma and abuse
          </label>
          <label htmlFor="six">
            <input
              type="checkbox"
              className="m-2 mb-6"
              name="option6"
              checked={checkboxes.option4}
              onChange={handleCheckboxChange}
            />
            Eating disorders
          </label>
        </form>
        <div className="flex justify-center md:justify-between lg:justify-between ">
          <Link to="/booking4">
            <button
              type="button"
              className="m-6 rounded-md box-border text-xl pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 lg:text-2xl"
            >
              PREVIOUS
            </button>
          </Link>
          <button
            type="button"
            onClick={handleClick}
            className="m-6 rounded-md box-border text-xl pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 lg:text-2xl"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingPage5;
