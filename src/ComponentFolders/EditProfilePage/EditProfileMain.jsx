import React from 'react';
import profilePhoto from './Images/ProfilePhoto.svg';

function EditProfileMain() {
  return (
    <div className="flex flex-col font-poppins">
      <div className="self-center mt-8 text-xl text-[#FF0000]">
        Please fill all the fields with correct and valid details to complete
        your profile.
      </div>
      <div className="flex flex-row">
        <div>
          <img src={profilePhoto} alt="profile" className="self-center ml-36" />
        </div>
        <div className="flex flex-col ml-10">
          <div className=" ml-20 self-start mr-44 mt-6 ">
            <h1 className="text-5xl">PROFILE INFO</h1>
            <div className="flex flex-rows">
              <div className="flex flex-col mt-4 text-xl gap-9 self-start">
                <div>Full Name</div>
                <div>Education Level</div>
                <div>Hobbies</div>
                <div>Family Size</div>
                <div>Gender</div>
                <div>Birth Date</div>
                <div>Email</div>
                <div>Phone Number</div>
                <div>Upload ID</div>
              </div>
              <div className="flex flex-col gap-7 mt-1 ml-4 ">
                <div>
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 w-[28em]"
                    id="fullname"
                    name="fullname"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block  lg:p-2 p-1 w-[28em]"
                    id="education"
                    name="education"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 w-[28em]"
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
                  <div className="self-center ml-4">Member(s)</div>
                </div>
                <div>
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 w-[28em]"
                    id="gender"
                    name="gender"
                    type="text"
                  />
                </div>
                <div className="flex flex-row">
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 w-[5em]"
                    id="birthmonth"
                    name="birthmonth"
                    type="text"
                    placeholder="MM"
                  />
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-2 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 w-[5em]"
                    id="birthday"
                    name="birthday"
                    type="text"
                    placeholder="DD"
                  />
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-4 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 w-[16em]"
                    id="birthyear"
                    name="birthyear"
                    type="text"
                    placeholder="YYYY"
                  />
                </div>
                <div>
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 w-[28em]"
                    id="email"
                    name="email"
                    type="email"
                  />
                </div>
                <div>
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 w-[28em]"
                    id="phone"
                    name="phone"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 w-[28em]"
                    id="uploadID"
                    name="uploadID"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ml-20">
            <div className="text-5xl mt-6">Security</div>
            <div className="flex flex-rows mt-6">
              <div className="flex flex-col mt-4 text-xl gap-9 self-start">
                <div>Password</div>
                <div>Confirm Password</div>
              </div>
              <div className="flex flex-col gap-7 mt-1">
                <div>
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 w-[28em]"
                    id="password"
                    name="password"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block  lg:p-2 p-1 w-[28em]"
                    id="confirmpassword"
                    name="confirmpassword"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-rows gap-8 mt-10 ml-20">
            <button
              type="button"
              className="rounded-md box-border p-2 pl-6 pr-6 transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
            >
              SAVE CHANGES
            </button>
            <button
              type="button"
              className="rounded-md box-border p-2 pl-6 pr-6 transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
            >
              DELETE ACCOUNT
            </button>
            <button
              type="button"
              className="rounded-md box-border p-2 pl-16 pr-16   transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
            >
              CANCEL
            </button>
          </div>
          <div className="flex flex-col mt-4 ml-20 mt-10">
            <div className="text-5xl">Payment Methods & Tickets</div>
            <div className="flex flex-rows gap-10 mt-8 mb-10">
              <div className="flex flex-col">
                <div className='text-lg mb-2'>3 Cards Added</div>
                <button
                  type="button"
                  className="rounded-md box-border p-2 pl-8 pr-8 transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
                >
                  SHOW CARDS
                </button>
              </div>
              <div className="flex flex-col">
                <div className='text-lg mb-2'>10 Tickets Remaining</div>
                <button
                  type="button"
                  className="rounded-md box-border p-2 pl-10 pr-10 transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
                >
                  BUY TICKETS
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
