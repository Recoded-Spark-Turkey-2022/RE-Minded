import React from "react";
import Background from './Images/Background.svg';
import Sofa from './Images/ContentA(sofa).svg';

function ContentA () {
    return (
        <>
        <img className="absolute inset-0" src={Background} alt='Background'/> 
        <div className="relative flex lg:justify-between lg:m-56">
        <div className=" flex flex-col">
        <div className="pt-30">
        <p className="lg:text-3xl  pl-5"> WE ARE HERE TO</p>
        <p className="lg:text-8xl  pl-5">HELP</p> 
        </div>
        <button type="button" className="rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 "> BOOK AN APPOINTMENT </button>
        </div>
        <img className="h-3/5 w-3/5" src={Sofa} alt='Sofa'/>
        </div>
        </>
    )
}

export default ContentA;