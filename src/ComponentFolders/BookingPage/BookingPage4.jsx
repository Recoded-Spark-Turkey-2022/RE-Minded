import { React } from 'react';
import { Link } from 'react-router-dom';
import Card1 from './Card';
import ChoicesB from './QuestionChoicesB';

function BookingPage4() {
  return (
    <div className="flex flex-col items-center p-12">
      <Card1
        header="LET'S MATCH YOU WITH THE RIGHT THERAPIST"
        content="Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you'd like to deal with in online therapy. It would help us match you with the most suitable therapist for you. "
      />
      <div className="font-poppins shadow-zinc-300 flex flex-col w-full md:max-w-2xl lg:max-w-4xl my-16 mx-auto px-8 py-4 shadow-md">
        <ChoicesB
          question="Are there any specific qualities that you'd like in a counselor?"
          one="I prefer a male counselor"
          two="I prefer a female counselor"
          three="I prefer an older counselor (45+)"
          four="I prefer a non-religious counselor"
        />

        <div className="flex justify-center md:justify-between lg:justify-between ">
          <Link to="/booking3">
            <button
              type="button"
              className="m-6 rounded-md box-border text-xl pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 lg:text-2xl"
            >
              PREVIOUS
            </button>
          </Link>
          <Link to="/booking5">
            <button
              type="button"
              className="m-6 rounded-md box-border text-xl pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 lg:text-2xl"
            >
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookingPage4;
