import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OfficeImage from './Images/OfficeImage.svg';

const thanksProps =
  'Your request has been sent, a member of the support team will get in contact with you through the email you provided as soon as possible.';

const ContactPageMain = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [radio, setRadio] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      details.length === 0 ||
      radio.length === 0
    ) {
      setError(true);
    }
    if (
      name.length > 0 ||
      email.length > 0 ||
      details.length > 0 ||
      radio.length > 0
    ) {
     navigate('/thankyou', { replace: true, state: thanksProps });
    }
  };
  return (
    <div className="flex flex-col w-screen pb-24 font-poppins">
      <div className="lg:ml-28 ml-10 lg:pr-36 md:pr-20 pr-10">
        <div className="lg:text-5xl md:text-3xl text-2xl leading-6 lg:mt-20 mt-14">
          <h1>SEND US YOUR REQUEST!</h1>
          <div className="w-full lg:text-2xl text-lg leading-8 mt-4 lg:ml-0 lg:mr-0 text-SubTexts">
            <h3>
              Do you have a question, concern, idea, feedback, or problem? If
              you need assistance, please fill out the form below and we would
              be happy to help!
            </h3>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:ml-28 ">
        <div className="basis-1/2 mt-4">
          <h3 className="lg:text-xl text-lg lg:mt-10 mt-8 lg:ml-0 ml-4 lg:mr-0 font-semibold">
            Type of contact
          </h3>
          <ul className="text-sm font-medium mt-4 lg:text-xl lg:mt-5 lg:ml-2 ml-4 lg:mr-0">
            <li className="w-full">
              <label
                htmlFor="list-radio-1"
                className="w-full py-3 text-sm font-medium"
              >
                <input
                  onChange={(e) => setRadio(e.target.value)}
                  id="list-radio-1"
                  type="radio"
                  name="list-radio"
                  className="w-4 h-4"
                />
                <span className="ml-2">
                  I have a question about the service.
                </span>
              </label>
            </li>
            <li className="w-full">
              <label
                htmlFor="list-radio-1"
                className="w-full py-3 text-sm font-medium"
              >
                <input
                  onChange={(e) => setRadio(e.target.value)}
                  id="list-radio-1"
                  type="radio"
                  name="list-radio"
                  className="w-4 h-4"
                />
                <span className="ml-2">
                  I am a registered client and I need support.
                </span>
              </label>
            </li>
            <li className="w-full">
              <label
                htmlFor="list-radio-1"
                className="w-full py-3 text-sm font-medium"
              >
                <input
                  onChange={(e) => setRadio(e.target.value)}
                  id="list-radio-1"
                  type="radio"
                  name="list-radio"
                  className="w-4 h-4"
                />
                <span className="ml-2">
                  I am a counselor interested in joining.
                </span>
              </label>
            </li>
            <li className="w-full">
              <label
                htmlFor="list-radio-1"
                className="w-full py-3 text-sm font-medium"
              >
                <input
                  onChange={(e) => setRadio(e.target.value)}
                  id="list-radio-1"
                  type="radio"
                  name="list-radio"
                  className="w-4 h-4"
                />
                <span className="ml-2">
                  I am a registered counselor and I need support.
                </span>
              </label>
            </li>
            <li className="w-full">
              <label
                htmlFor="list-radio-1"
                className="w-full py-3 text-sm font-medium"
              >
                <input
                  onChange={(e) => setRadio(e.target.value)}
                  id="list-radio-1"
                  type="radio"
                  name="list-radio"
                  className="w-4 h-4"
                />
                <span className="ml-2">I have a business-related inquiry.</span>
              </label>
            </li>
            <li className="w-full">
              <label
                htmlFor="list-radio-1"
                className="w-full py-3 text-sm font-medium"
              >
                <input
                  onChange={(e) => setRadio(e.target.value)}
                  id="list-radio-1"
                  type="radio"
                  name="list-radio"
                  className="w-4 h-4"
                />
                <span className="ml-2">
                  I am interested in Healing Online for my organization.
                </span>
              </label>
            </li>
            <li className="w-full">
              <label
                htmlFor="list-radio-1"
                className="w-full py-3 text-sm font-medium"
              >
                <input
                  onChange={(e) => setRadio(e.target.value)}
                  id="list-radio-1"
                  type="radio"
                  name="list-radio"
                  className="w-4 h-4"
                />
                <span className="ml-2">I have a billing related question.</span>
              </label>
            </li>
          </ul>
          {error && radio.length <= 0 ? (
            <p className="text-red-600">Please chose one of the above!!! </p>
          ) : (
            ''
          )}
        </div>
        <div className="basis-1/2 lg:mt-10 lg:pr-16 lg:ml-0 md:ml-40 ml-10 mt-12 mr-10">
          <img src={OfficeImage} alt="OfficeImg" className="mb-10" />
        </div>
      </div>

      <div>
        <div className="flex lg:flex-row flex-col lg:ml-28 mt-8 ml-10 lg:pr-36 md:pr-20 pr-10">
          <div className="basis-1/2">
            <form className="container" onSubmit={handelSubmit}>
              <div>
                <label
                  htmlFor="fullname"
                  className="inline-block lg:w-[70%] mt-2 mb-2"
                >
                  Full Name:
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="fullname"
                    placeholder="Enter your full name here..."
                    className="
                          w-full
                          px-3
                          py-3
                          text-base 
                          font-normal
                          text-gray-700
                          border-#0000001F
                          border-solid
                          rounded-[10px]
                          drop-shadow-lg
                          shadow-[#AC97971F]"
                  />
                </label>
              </div>
              {error && name.length <= 0 ? (
                <p className="text-red-600">Full Name can not be Empty!!! </p>
              ) : (
                ''
              )}
              <div>
                <label
                  htmlFor="email"
                  className="inline-block lg:w-[70%] mt-2 mb-2"
                >
                  Email:
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    id="email"
                    placeholder="Enter your email address here..."
                    className="
                          w-full
                          px-3
                          py-3
                          text-base 
                          font-normal
                          text-gray-700
                          border-#0000001F
                          border-solid
                          rounded-[10px]
                          drop-shadow-lg
                          shadow-[#AC97971F]"
                  />
                </label>
              </div>
              {error && email.length <= 0 ? (
                <p className=" text-red-600"> The Email can not be Empty!!! </p>
              ) : (
                ''
              )}
              <div>
                <label
                  htmlFor="message"
                  className="inline-block lg:w-[70%] mt-2 mb-2"
                >
                  Details:
                  <textarea
                    onChange={(e) => setDetails(e.target.value)}
                    id="message"
                    rows="4"
                    className="
                        w-full 
                        px-3
                        py-3
                        text-base 
                        font-normal
                        text-gray-700
                        border-#0000001F
                        border-solid
                        rounded-[10px]
                        drop-shadow-lg
                        shadow-[#AC97971F]"
                    placeholder="Enter your details here..."
                  />
                </label>
              </div>
              {error && details <= 0 ? (
                <p className=" text-red-600">The Details can not be Empty!!!</p>
              ) : (
                ''
              )}
              <div className="mt-6">
                <Link to="/ThankYou">
                  <button
                    onClick={handelSubmit}
                    type="submit"
                    className="
                        lg:text-xl md:text-base text-sm 
                        lg:ml-0 lg:mb-10 lg:px-16 
                        px-6 py-3
                        rounded-md box-border 
                        font-semibold 
                        bg-Buttons hover:bg-Background
                        cursor-pointer"
                  >
                    SUBMIT
                  </button>
                </Link>
              </div>
            </form>
          </div>

          <div className="basis-1/2 mt-16 mb-8">
            <div className="items-center">
              <div
                className="max-w-sm p-6
                     bg-[#EAF8F9] 
                        h-[200px] 
                        t-[966px]
                        border-solid 
                        rounded-[35px] 
                        border-[#0000001F]
                        drop-shadow-lg"
              >
                <h3 className="font-medium text-lg mb-3">Find Us At:</h3>
                <p className="text-[#0000008A] font-medium text-lg">
                  {' '}
                  Hello World! Street{' '}
                </p>
                <p className="text-[#0000008A] font-medium text-lg">
                  {' '}
                  Re:Minded Plaza{' '}
                </p>
                <p className="text-[#0000008A] font-medium text-lg">
                  {' '}
                  Re:Coded 01012023{' '}
                </p>
                <p className="text-[#0000008A] font-medium text-lg">
                  {' '}
                  Turkey/World{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageMain;
