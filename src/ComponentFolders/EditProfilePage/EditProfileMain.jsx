import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import {
  getAuth,
  updateEmail,
  updatePassword,
  deleteUser,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../Firebase';
import profileIcon from './Images/profileIcon.svg';
import plusIcon from './Images/PlusIcon.svg';
import passwordIcon from './Images/PasswordIcon.svg';

function EditProfileMain({ handleSignout }) {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser.user);
  const [url, setUrl] = useState(null);

  const [uploadID, setUploadID] = useState(null);

  const [profileData, setProfileData] = useState({
    fullname: '',
    educationLevel: '',
    hobby: '',
    familySize: '',
    gender: '',
    birthmonth: '',
    birthday: '',
    birthyear: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirm: '',
  });
  function handleInputChange(e) {
    const { value, name, files } = e.target;
    if (files) {
      return setUploadID(files[0]);
    }
    return setProfileData((prevObj) => {
      return {
        ...prevObj,
        [name]: value,
      };
    });
  }
  const handleOnSubmit = () => {
    /* e.preventDefault(); */

    if (!currentUser) {
      // eslint-disable-next-line no-alert
      alert('Please sign in first');
    }

    const imageRef = ref(
      storage,
      `userImages/${currentUser.userId}/${currentUser.userId}`
    );
    uploadBytes(imageRef, uploadID).then(() => {
      getDownloadURL(imageRef).then((imageUrl) => setUrl(imageUrl));
    });

    // Update user's email
    const auth = getAuth();
    updateEmail(auth.currentUser, profileData.email)
      .then(() => {
        // Email updated!
      })
      .catch((error) => {
        // An error occurred
        return error;
      });
    // Update user's passsword
    const user = auth.currentUser;
    updatePassword(user, profileData.password)
      .then(() => {
        // Update successful.
      })
      .catch((error) => {
        // An error ocurred
        return error;
      });

     
    };

    const handleFormSubmit = () => {
       const addDocs = async () => {
         try {
           await setDoc(doc(db, 'Users' ,'5Rioxd8SfjXokV7eO59d'), {
             fullname: profileData.fullname,
             educationLevel: profileData.educationLevel,
             hobby: profileData.hobby,
             familySize: profileData.familySize,
             gender: profileData.gender,
             birthmonth: profileData.birthmonth,
             birthday: profileData.birthday,
             birthyear: profileData.birthyear,
             email: profileData.email,
             phone: profileData.phone,
             password: profileData.password,
             passwordConfirm: profileData.passwordConfirm,
           });
           return true;
         } catch (error) {
           return error;
         }
       };
       addDocs();
    }
  
  const handleDeleteUser = () => {
    const confirmed =
      // eslint-disable-next-line no-alert
      window.confirm('Are you sure you want to deactivate your account?');
    if (confirmed) {
      const auth = getAuth();
      const user = auth.currentUser;

      deleteUser(user)
        .then(() => {
          // User deleted.
          // eslint-disable-next-line no-alert
          alert('Your account has been deactivated successfully.');
        })
        .catch((error) => {
          // An error ocurred
          // eslint-disable-next-line no-alert
          alert(error);
        });
      handleSignout();
      navigate('/');
    } else {
      // eslint-disable-next-line no-alert
      alert('Deactivation cancelled.');
    }
  };
  useEffect(() => {
    if (currentUser) {
      const imageRef = ref(
        storage,
        `userImages/${currentUser.userId}/${currentUser.userId}`
      );
      getDownloadURL(imageRef)
        .then((imageUrl) => setUrl(imageUrl))
        .catch((error) => {
          if (error.code === 'storage/object-not-found') {
            setUrl(null);
          }
        });
    }
  }, [currentUser]);
  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex flex-col font-poppins lg:items-center"
    >
      <div className="self-center mt-8 lg:text-xl text-sm text-[#FF0000] lg:ml-0 ml-16 lg:mr-0 mr-[-1em]">
        Please fill all the fields with correct and valid details to complete
        your profile.
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className="flex flex-col lg:ml-[-10em] md:ml-[10%] ml-[25%] lg:mr-[0%] md:mr-[30%] mr-[25%]">
          <img
            src={url === null ? profileIcon : url}
            alt="profile"
            className="self-center ml-28 w-80 h-80 rounded-full"
          />
        </div>
        <div className="flex flex-col lg:ml-16 ml-44">
          <div className=" lg:ml-20 ml-[-15em] lg:self-start lg:mr-44 mt-6 ">
            <h1 className="lg:text-5xl text-2xl lg:ml-0 ml-20">PROFILE INFO</h1>
            <div className="flex flex-rows">
              <div className="flex flex-col mt-4 lg:text-xl text-sm gap-9 lg:self-start lg:ml-0 ml-20">
                <div>Full Name</div>
                <div>Education Level</div>
                <div>Hobbies</div>
                <div>Family Size</div>
                <div>Gender</div>
                <div>Birth Date</div>
                <div className="mt-2">Email</div>
                <div>Phone Number</div>
                <div className="mt-2">Upload ID</div>
              </div>
              <div className="flex flex-col gap-7 lg:mt-1 mt-3 ml-6 ">
                <div>
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
                    id="fullname"
                    name="fullname"
                    type="text"
                    value={profileData.fullname}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <div className="relative w-full lg:max-w-sm">
                    <select
                      value={profileData.educationLevel}
                      name="educationLevel"
                      onChange={handleInputChange}
                      className="lg:w-[25em] w-[16em] p-2 ml-6 text-gray-500 bg-white border border-SubTexts rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                    >
                      <option value="" selected="selected" disabled="disabled">
                        -- Select Education --
                      </option>
                      <option value="No formal education">
                        No formal education
                      </option>
                      <option value="Primary education">
                        Primary education
                      </option>
                      <option value="Secondary education">High school</option>
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
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
                    id="hobby"
                    name="hobby"
                    type="text"
                    value={profileData.hobby}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-row">
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block w-[4em] p-0.5"
                    id="familysize"
                    name="familySize"
                    type="text"
                    value={profileData.familySize}
                    onChange={handleInputChange}
                  />
                  <div className="self-center ml-4">Member(s)</div>
                </div>
                <div>
                  <select
                    value={profileData.gender}
                    name="gender"
                    onChange={handleInputChange}
                    className="lg:w-[25em] w-[16em] p-2 ml-6 text-gray-500 bg-white border border-SubTexts rounded-lg shadow-sm outline-none appearance-none focus:border-SubTexts"
                  >
                    <option value="" selected="selected" disabled="disabled">
                      -- Select Gender --
                    </option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                </div>
                <div className="flex flex-row">
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[5em] w-[3em]"
                    id="birthmonth"
                    name="birthmonth"
                    type="text"
                    placeholder="MM"
                    value={profileData.birthmonth}
                    onChange={handleInputChange}
                  />
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-2 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[5em] w-[3em]"
                    id="birthday"
                    name="birthday"
                    type="text"
                    placeholder="DD"
                    value={profileData.birthday}
                    onChange={handleInputChange}
                  />
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-4 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[17em] w-[8.5em]"
                    id="birthyear"
                    name="birthyear"
                    type="text"
                    placeholder="YYYY"
                    value={profileData.birthyear}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
                    id="email"
                    name="email"
                    type="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
                    id="phone"
                    name="phone"
                    type="text"
                    value={profileData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-row">
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
                    id="uploadID"
                    name="uploadID"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={handleInputChange}
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
            <div className="lg:text-5xl text-2xl mt-12">Security</div>
            <div className="flex flex-rows mt-6">
              <div className="flex flex-col mt-4 lg:text-xl text-base gap-9 self-start">
                <div>Password</div>
                <div className="lg:mt-0 mt-[-1em]">Confirm Password</div>
              </div>
              <div className="flex flex-col gap-7 mt-1 lg:ml-0 ml-4">
                <div className="flex flex-row">
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28em] w-[17.5em]"
                    id="password"
                    name="password"
                    type="password"
                    value={profileData.password}
                    onChange={handleInputChange}
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
                    name="confirmPassword"
                    type="password"
                    value={profileData.confirmPassword}
                    onChange={handleInputChange}
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
              disabled={!currentUser}
              type="submit"
              onClick={handleFormSubmit}
              className="rounded-md box-border p-2 pl-6 pr-6 transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
            >
              SAVE CHANGES
            </button>
            <button
              disabled={!currentUser}
              type="button"
              className="rounded-md box-border p-2 pl-6 pr-6 transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
              onClick={handleDeleteUser}
            >
              DELETE ACCOUNT
            </button>
            <button
              disabled={!currentUser}
              type="button"
              className="rounded-md box-border p-2 lg:pl-16 lg:pr-16  pl-8 pr-8 transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
              onClick={() => window.location.reload(false)}
            >
              CANCEL
            </button>
            <button
              disabled={!currentUser}
              type="button"
              className="rounded-md box-border p-2 lg:pl-16 lg:pr-16  pl-8 pr-8 transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
              onClick={handleSignout}
            >
              SIGN OUT
            </button>
          </div>
          <div className="flex flex-col mt-4 lg:ml-20 ml-[-10em] ">
            <div className="lg:text-5xl text-2xl">
              Payment Methods & Tickets
            </div>
            <div className="flex flex-rows gap-10 mt-8 mb-16">
              <div className="flex flex-col ">
                <div className="lg:text-lg text-sm mb-2">3 Cards Added</div>
                <button
                  type="button"
                  className="rounded-md lg:text-base text-sm box-border p-2 pl-8 pr-8 transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
                >
                  SHOW CARDS
                </button>
              </div>
              <div className="flex flex-col">
                <div className="lg:text-lg text-sm mb-2 ">
                  10 Tickets Remaining
                </div>
                <button
                  type="button"
                  className="rounded-md lg:text-base text-sm box-border p-2 pl-10 pr-10 transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
                >
                  BUY TICKETS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
export default EditProfileMain;
