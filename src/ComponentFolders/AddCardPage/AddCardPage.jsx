import React from "react";
import Card1 from './Images/TopCard.svg';
import Card2 from './Images/BottomCard.svg';

function AddCard () {
    return (
      <div className="p-20 font-poppins">
        <h1 className="text-3xl pb-5">ADD CARD DETAILS</h1>
        <h2 className="text-xl opacity-50">
          Please make sure all of the info you enter are the same as your
          registration info.
        </h2>
        <div className="flex flex-col lg:flex-row lg:space-x-96">
            <div className="pt-12">
                formdfsdfsdfsfasdfsfsdfasdf
            </div>
          <div className="pt-12">
            <img src={Card1} alt="TopCard" />
            <img src={Card2} alt="BottomCard" />
          </div>
        </div>
      </div>
    );
}

export default AddCard;