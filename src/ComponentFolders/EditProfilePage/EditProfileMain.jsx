import React from 'react';
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import profilePhoto from './Images/ProfilePhoto.svg';
import profileIcon from './Images/profileIcon.svg';
import plusIcon from './Images/PlusIcon.svg';
import passwordIcon from './Images/PasswordIcon.svg';

function EditProfileMain() {
  
  const { t } = useTranslation();

  return (
    <div className="flex flex-col font-poppins lg:items-center">
      <div className="self-center mt-8 lg:text-xl text-sm text-[#FF0000] lg:ml-0 ml-16 lg:mr-0 mr-[-1em]">
      {t('editprofile.top')}
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className="flex flex-col lg:ml-[-10em] md:ml-[10%] ml-[25%] lg:mr-[0%] md:mr-[30%] mr-[25%]">
          <img src={profilePhoto} alt="profile" className="self-center ml-28" />
          <img
            src={profileIcon}
            alt="profileIcon"
            className="lg:w-16 w-14 ml-32 self-center lg:mt-[-4em] mt-[-3em]"
          />
        </div>
        <div className="flex flex-col lg:ml-16 ml-44">
          <div className=" lg:ml-20 ml-[-15em] lg:self-start lg:mr-44 mt-6 ">
            <h1 className="lg:text-5xl text-2xl lg:ml-0 ml-20">{t('editprofile.h1')}</h1>
            <div className="flex flex-rows">
              <div className="flex flex-col mt-4 lg:text-xl text-sm gap-9 lg:self-start lg:ml-0 ml-20">
                <div>{t('editprofile.name')}</div>
                <div>{t('editprofile.edu')}</div>
                <div>{t('editprofile.hobi')}</div>
                <div>{t('editprofile.fam')}</div>
                <div>{t('editprofile.gen')}</div>
                <div>{t('editprofile.birth')}</div>
                <div className="mt-2">{t('editprofile.mail')}</div>
                <div>{t('editprofile.phone')}</div>
                <div className="mt-2">{t('editprofile.id')}</div>
              </div>
              <div className="flex flex-col gap-7 lg:mt-1 mt-3 ml-6 ">
                <div>
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
                    id="fullname"
                    name="fullname"
                    type="text"
                  />
                </div>
                <div>
                  <div className="relative w-full lg:max-w-sm">
                    <select className="lg:w-[25em] w-[16em] p-2 ml-6 text-gray-500 bg-white border border-SubTexts rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                      <option value="" selected="selected" disabled="disabled">
                      {t('editprofile.eduopt')}
                      </option>
                      <option value="No formal education">
                      {t('editprofile.opt1')}
                      </option>
                      <option value="Primary education">
                      {t('editprofile.opt2')}
                      </option>
                      <option value="Secondary education">{t('editprofile.opt3')}</option>
                      <option value="GED">{t('editprofile.opt4')}</option>
                      <option value="Vocational qualification">
                      {t('editprofile.opt5')}
                      </option>
                      <option value="Bachelor's degree">
                      {t('editprofile.opt6')}
                      </option>
                      <option value="Master's degree">
                      {t('editprofile.opt7')}
                      </option>
                      <option value="Doctorate or higher">
                      {t('editprofile.opt8')}
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
                    id="hobby"
                    name="hobby"
                    type="text"
                  />
                </div>
                <div className="flex flex-row">
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block w-[4em] p-0.5"
                    id="familysize"
                    name="familysize"
                    type="text"
                  />
                  <div className="self-center ml-4">{t('editprofile.member')}</div>
                </div>
                <div>
                  <select className="lg:w-[25em] w-[16em] p-2 ml-6 text-gray-500 bg-white border border-SubTexts rounded-lg shadow-sm outline-none appearance-none focus:border-SubTexts">
                    <option value="" selected="selected" disabled="disabled">
                    {t('editprofile.genopt')}
                    </option>
                    <option value="female">{t('editprofile.female')}</option>
                    <option value="male">{t('editprofile.male')}</option>
                  </select>
                </div>
                <div className="flex flex-row">
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[5em] w-[3em]"
                    id="birthmonth"
                    name="birthmonth"
                    type="text"
                    placeholder={t('editprofile.month')}
                  />
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-2 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[5em] w-[3em]"
                    id="birthday"
                    name="birthday"
                    type="text"
                    placeholder={t('editprofile.day')}
                  />
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-4 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[17em] w-[8.5em]"
                    id="birthyear"
                    name="birthyear"
                    type="text"
                    placeholder={t('editprofile.year')}
                  />
                </div>
                <div>
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
                    id="email"
                    name="email"
                    type="email"
                  />
                </div>
                <div>
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
                    id="phone"
                    name="phone"
                    type="text"
                  />
                </div>
                <div className="flex flex-row">
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
                    id="uploadID"
                    name="uploadID"
                    type="text"
                  />
                  <img
                    src={plusIcon}
                    alt="plusIcon"
                    className="w-6 ml-[-2em]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:ml-20 ml-[-10em]">
            <div className="lg:text-5xl text-2xl mt-12">{t('editprofile.h2')}</div>
            <div className="flex flex-rows mt-6">
              <div className="flex flex-col mt-4 lg:text-xl text-base gap-9 self-start">
                <div>{t('editprofile.password')}</div>
                <div className="lg:mt-0 mt-[-1em]">{t('editprofile.confirm')}</div>
              </div>
              <div className="flex flex-col gap-7 mt-1 lg:ml-0 ml-4">
                <div className="flex flex-row">
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28em] w-[17.5em]"
                    id="password"
                    name="password"
                    type="text"
                  />
                  <img
                    src={passwordIcon}
                    alt="passwordIcon"
                    className="w-6 ml-[-2em]"
                  />
                </div>
                <div className="flex flex-row">
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block  lg:p-2 p-1 lg:w-[28em] w-[17.5em]"
                    id="confirmpassword"
                    name="confirmpassword"
                    type="text"
                  />
                  <img
                    src={passwordIcon}
                    alt="passwordIcon"
                    className="w-6 ml-[-2em]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-rows lg:gap-8 gap-3 mt-10 lg:ml-20 ml-[-12em] lg:text-base text-sm">
            <button
              type="button"
              className="rounded-md box-border p-2 pl-6 pr-6 transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
            >
              {t('editprofile.button1')}
            </button>
            <button
              type="button"
              className="rounded-md box-border p-2 pl-6 pr-6 transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
            >
              {t('editprofile.button2')}
            </button>
            <button
              type="button"
              className="rounded-md box-border p-2 lg:pl-16 lg:pr-16  pl-8 pr-8 transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
            >
              {t('editprofile.button3')}
            </button>
          </div>
          <div className="flex flex-col mt-4 lg:ml-20 ml-[-10em] mt-16">
            <div className="lg:text-5xl text-2xl">
            {t('editprofile.payment')}
            </div>
            <div className="flex flex-rows gap-10 mt-8 mb-16">
              <div className="flex flex-col ">
                <div className="lg:text-lg text-sm mb-2">{t('editprofile.3')}</div>
                <Link to="/savedcards">
                  <button
                    type="button"
                    className="rounded-md lg:text-base text-sm box-border p-2 pl-8 pr-8 transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
                  >
                    {t('editprofile.show')}
                  </button>
                </Link>
              </div>
              <div className="flex flex-col">
                <div className="lg:text-lg text-sm mb-2 ">
                {t('editprofile.10')}
                </div>
                <button
                  type="button"
                  className="rounded-md lg:text-base text-sm box-border p-2 pl-10 pr-10 transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
                >
                  {t('editprofile.buy')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfileMain;