import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();

  return (
    <div className="flex flex-col w-screen pb-24 font-poppins">
      <div className="lg:ml-28 ml-10 lg:pr-36 md:pr-20 pr-10">
        <div className="lg:text-5xl md:text-3xl text-2xl leading-6 lg:mt-20 mt-14">
          <h1>{t('contact.h1')}</h1>
          <div className="w-full lg:text-2xl text-lg leading-8 mt-4 lg:ml-0 lg:mr-0 text-SubTexts">
            <h3>
            {t('contact.t1')}
            </h3>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:ml-28 ">
        <div className="basis-1/2 mt-4">
          <h3 className="lg:text-xl text-lg lg:mt-10 mt-8 lg:ml-0 ml-4 lg:mr-0 font-semibold">
          {t('contact.h2')}
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
                {t('contact.r1')}
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
                {t('contact.r2')}
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
                {t('contact.r3')}
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
                {t('contact.r4')}
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
                <span className="ml-2">{t('contact.r5')}</span>
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
                {t('contact.r6')}
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
                <span className="ml-2">{t('contact.r7')}</span>
              </label>
            </li>
          </ul>
          {error && radio.length <= 0 ? (
            <p className="text-red-600">{t('contact.error1')}</p>
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
                  {t('contact.name1')}
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="fullname"
                    placeholder={t('contact.name2')}
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
                <p className="text-red-600">{t('contact.error2')} </p>
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
                    placeholder={t('contact.email')}
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
                <p className=" text-red-600"> {t('contact.error3')} </p>
              ) : (
                ''
              )}
              <div>
                <label
                  htmlFor="message"
                  className="inline-block lg:w-[70%] mt-2 mb-2"
                >
                  {t('contact.details')}
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
                    placeholder={t('contact.details2')}
                  />
                </label>
              </div>
              {error && details <= 0 ? (
                <p className=" text-red-600">{t('contact.error4')}</p>
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
                    {t('contact.submit')}
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
                <h3 className="font-medium text-lg mb-3">{t('contact.findus')}</h3>
                <p className="text-[#0000008A] font-medium text-lg">
                  {' '}
                  {t('contact.a1')}{' '}
                </p>
                <p className="text-[#0000008A] font-medium text-lg">
                  {' '}
                  {t('contact.a2')}{' '}
                </p>
                <p className="text-[#0000008A] font-medium text-lg">
                  {' '}
                  {t('contact.a3')}{' '}
                </p>
                <p className="text-[#0000008A] font-medium text-lg">
                  {' '}
                  {t('contact.a4')}{' '}
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
