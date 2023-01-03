import React from 'react';
import profilePhoto from './Images/ProfilePhoto.svg';
import profileIcon from './Images/profileIcon.svg'

function EditProfileMain() {
  return (
    <div className="flex flex-col font-poppins items-center">
      <div className="self-center mt-8 text-xl text-[#FF0000]">
        Please fill all the fields with correct and valid details to complete
        your profile.
      </div>
      <div className="flex flex-row">
        <div className='flex flex-col ml-[-10em]'>
          <img src={profilePhoto} alt="profile" className="self-center ml-28" />
          <img src={profileIcon} alt="profileIcon" className='w-16 ml-32 self-center mt-[-4em]'/>
        </div>
        <div className="flex flex-col ml-16">
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
              <div className="flex flex-col gap-7 mt-1 ml-6 ">
                <div>
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 w-[28.5em]"
                    id="fullname"
                    name="fullname"
                    type="text"
                  />
                </div>
                <div>
                  <div className="relative w-full lg:max-w-sm">
                    <select className="w-[25em] p-2 ml-6 text-gray-500 bg-white border border-SubTexts rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                      <option value="" selected="selected" disabled="disabled">
                        -- Select Education --
                      </option>
                      <option value="No formal education">
                        No formal education
                      </option>
                      <option value="Primary education">
                        Primary education
                      </option>
                      <option value="Secondary education">
                        Secondary education or high school
                      </option>
                      <option value="GED">GED</option>
                      <option value="Vocational qualification">
                        Vocational qualification
                      </option>
                      <option value="Bachelor's degree">
                        Bachelor&apos;s degree
                      </option>
                      <option value="Master's degree">
                        Master&apos;s degree
                      </option>
                      <option value="Doctorate or higher">
                        Doctorate or higher
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 w-[28.5em]"
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
                  <select className="w-[25em] p-2 ml-6 text-gray-500 bg-white border border-SubTexts rounded-lg shadow-sm outline-none appearance-none focus:border-SubTexts">
                    <option value="" selected="selected" disabled="disabled">
                      -- Select Gender --
                    </option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
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
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-4 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 w-[17em]"
                    id="birthyear"
                    name="birthyear"
                    type="text"
                    placeholder="YYYY"
                  />
                </div>
                <div>
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 w-[28.5em]"
                    id="email"
                    name="email"
                    type="email"
                  />
                </div>
                <div>
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 w-[28.5em]"
                    id="phone"
                    name="phone"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 w-[28.5em]"
                    id="uploadID"
                    name="uploadID"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ml-20">
            <div className="text-5xl mt-12">Security</div>
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
          <div className="flex flex-col mt-4 ml-20 mt-16">
            <div className="text-5xl">Payment Methods & Tickets</div>
            <div className="flex flex-rows gap-10 mt-8 mb-16">
              <div className="flex flex-col">
                <div className="text-lg mb-2">3 Cards Added</div>
                <button
                  type="button"
                  className="rounded-md box-border p-2 pl-8 pr-8 transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
                >
                  SHOW CARDS
                </button>
              </div>
              <div className="flex flex-col">
                <div className="text-lg mb-2">10 Tickets Remaining</div>
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
