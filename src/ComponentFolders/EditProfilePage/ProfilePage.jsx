import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth';
import { getDocs, collection } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../Firebase';
import profileIcon from './Images/profileIcon.svg';

function ProfilePage() {
  const [data, setData] = useState([]);
  const currentUser = useSelector((state) => state.currentUser.user);
  const [url, setUrl] = useState(null);
  const auth = getAuth();
  const user = auth.currentUser;

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

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, 'Users', user.uid ,'Profile-input');
      const querySnapshot = await getDocs(collectionRef);
      const dataInfo = querySnapshot.docs.map((docu) => ({
        id: docu.id,
        data: docu.data(),
      }));
      setData(dataInfo);
    };
    fetchData();
  }, ['Profile-input']);

  return (
    <form className="flex flex-col font-poppins lg:items-center pt-12">
      <div className="flex lg:flex-row flex-col">
        <div className="flex flex-col items-center lg:ml-[-10em] md:ml-[10%]  lg:mr-[0%] md:mr-[30%] mr-[25%]">
          <img
            src={url === null ? profileIcon : url}
            alt="profile"
            className="self-center ml-28 w-80 h-80 rounded-full"
          />
          <Link to="/editprofile">
            <button
              type="button"
              className="mt-12 ml-24 rounded-md lg:text-base text-sm box-border p-2 pl-10 pr-10 transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
            >
              EDIT PROFILE
            </button>
          </Link>
        </div>
        <div className="flex flex-col lg:ml-16 ml-44">
          <div className=" lg:ml-20 ml-[-15em] lg:self-start lg:mr-44 mt-6 ">
            <h1 className="lg:text-5xl text-2xl lg:ml-0 ml-20 pb-12">
              PROFILE
            </h1>
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
              </div>
              {data.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-7 lg:mt-1 mt-3 ml-6 "
                >
                  <div>
                    <div className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]">
                      {' '}
                      {item.data.fullname}
                    </div>
                  </div>
                  <div>
                    <div className="relative w-full lg:max-w-sm">
                      <div className="lg:w-[25em] w-[16em] p-2 ml-6 text-gray-500 bg-white border border-SubTexts rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                        {item.data.educationLevel}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]">
                      {' '}
                      {item.data.hobby}
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className=" bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block w-[4em] p-0.5">
                      {' '}
                      {item.data.familySize}
                    </div>
                    <div className="self-center ml-4">Member(s)</div>
                  </div>
                  <div>
                    <div className="lg:w-[25em] w-[16em] p-2 ml-6 text-gray-500 bg-white border border-SubTexts rounded-lg shadow-sm outline-none appearance-none focus:border-SubTexts">
                      {item.data.gender}
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]">
                      {' '}
                      {item.data.birthday}/{item.data.birthmonth}/
                      {item.data.birthyear}
                    </div>
                  </div>
                  <div>
                    <div className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]">
                      {' '}
                      {item.data.email}
                    </div>
                  </div>
                  <div>
                    <div className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]">
                      {' '}
                      {item.data.phone}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col mt-4 lg:ml-20 ml-[-10em] ">
            <div className="lg:text-5xl text-2xl pt-10">
              Payment Methods & Tickets
            </div>
            <div className="flex flex-rows gap-10 mt-8 mb-16">
              <div className="flex flex-col ">
                <div className="lg:text-lg text-sm mb-2">3 Cards Added</div>
                <Link to="/savedcards">
                  <button
                    type="button"
                    className="rounded-md lg:text-base text-sm box-border p-2 pl-8 pr-8 transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
                  >
                    SHOW CARDS
                  </button>
                </Link>
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

export default ProfilePage;
