import { React, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../Firebase';
import CreditCard from './CreditCard';

function savedCardPage() {
  const [data, setData] = useState([]);
  const carouselRef = useRef(null);

  const handleBack = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, 'credit-cards');
      const querySnapshot = await getDocs(collectionRef);
      const dataInfo = querySnapshot.docs.map((docu) => ({
        id: docu.id,
        data: docu.data(),
      }));
      setData(dataInfo);
    };
    fetchData();
  }, ['credit-cards']);

  return (
    <div className="flex flex-col font-poppins lg:mt-20 mt-10 mb-32">
      <div className="lg:text-5xl md:text-3xl text-xl lg:ml-52 ml-10">
        <h1>YOUR SAVED CARDS</h1>
      </div>
      <div className="lg:text-xl md:text-base text-sm text-SubTexts mt-4 lg:ml-52 ml-10 lg:mr-0 mr-16">
        We only support cards as a payment method at the moment!
      </div>
      <div className="self-center lg:mt-12 mt-8 lg:mb-20 mb-10 pt-12 ">
        <div>
          <div id="slider" className="flex">
            {data.length === 0 ? (
              <div className="text-center text-sm md:text-2 xl lg:text-3xl opacity-50 pt-24">
                You have no saved cards
              </div>
            ) : (
              <Carousel
                ref={carouselRef}
                swipeable
                draggable={false}
                showDots
                responsive={{
                  superLargeDesktop: {
                    breakpoint: { max: 4000, min: 3000 },
                    items: 5,
                  },
                  desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 4,
                  },
                  tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 3,
                  },
                  mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 2,
                  },
                }}
              >
                {data.map((card) => (
                  <CreditCard
                    key={card.data.index}
                    id={card.id}
                    nameOnCard={card.data.nameOnCard}
                    cardNumber={card.data.cardNumber}
                    expirationDate={card.data.expirationDate}
                    deleteCard="Delete Card -"
                    previewButton
                    setData={setData}
                    data={data}
                  />
                ))}
              </Carousel>
            )}
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={handleBack}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-l"
          >
            <FaChevronLeft className="text-2xl" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-r"
          >
            <FaChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="self-center lg:mt-12 mt-8 lg:mb-20 mb-10 pt-12 ">
        <Link to="/addcard">
          <button
            type="button"
            className="rounded-md box-border p-2 lg:pl-6 lg:pr-6 lg:text-lg md:text-base text-sm transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
          >
            ADD NEW CARD +
          </button>
        </Link>
      </div>
    </div>
  );
}

export default savedCardPage;
