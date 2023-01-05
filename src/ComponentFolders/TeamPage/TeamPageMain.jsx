import React from 'react';
import TeamCards from './TeamCards';
import menar from './Images/Menar Selamet_Turkey_2022.jpg';
import sohail from './Images/SohailAhmed.jpeg';
import seyma from './Images/Seyma Demir_Turkey_2022.jpg';
import selvi from './Images/Selvi Ece Dugan_Turkey_2022.jpg';
import ammar from './Images/Ammar Eldik_Turkey_2022.jpg';

// name and jobs for pass data to card with props
// do we need to show team trainer?
const names = [
  'Menar Selamet',
  'Sohail Ahmed',
  'Şeyma Demir',
  'Selvi Ece Dugan',
  'Ammar Eldik',
];
const jobs = ['Lead Engineer', 'Frontend Developer'];
const photos = [menar, sohail, seyma, selvi, ammar];

function TeamPageMain() {
  return (
    <div className="flex flex-col text-[#424A4F] ">
      <div className=" font-poppins lg:text-5xl text-3xl leading-10">
        <h1 className="lg:ml-44 lg:mt-20 ml-10 sm:mr-10 md:mr-10 mt-10 text-black">
          WE ARE HEALING, NICE TO MEET YOU!
        </h1>
      </div>
      <div className="text-3xl leading-10">
        <h3 className="lg:ml-44 lg:mt-28 ml-10 mt-8">Meet the Team!</h3>
      </div>
      <div className=" ml-36 mt-[4em] mr-36">
        <div className="font-poppins flex flex-rows justify-items-center justify-evenly flex-wrap -m-6">
          {names.map((name, index) => {
            return (
              <TeamCards name={name} job={jobs[1]} photo={photos[index]} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TeamPageMain;
