import React from "react";
import Card from "./Card";
import Question from "./Question";


function BookingPage1(){
    return (
      <div className="flex flex-col items-center p-12">
        <Card
          header="LET'S MATCH YOU WITH THE RIGHT THERAPIST"
          content="Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you'd like to deal with in online therapy. It would help us match you with the most suitable therapist for you. "
        />
        <Question
          header="What type of coumseling are you looking for?"
          
          button="Next"
        />
      </div>
    );
}

export default BookingPage1;