import React from "react";


function ChoicesA({question,first, second, third,  button}) {
    return (
      <div>
        <h1 className="text-xl pb-6 md:text-2xl lg:text-3xl lg:flex justify-center">
          {question}
        </h1>
        <div>{first}</div>
        <div>{second}</div>
       <div>{third}</div>
        <div className="flex justify-center md:justify-start lg:justify-start">
          <button
            type="button"
            className="m-6 rounded-md box-border text-xl pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 lg:text-2xl"
          >
            {button}
          </button>
        </div>
      </div>
    );
}

export default ChoicesA;