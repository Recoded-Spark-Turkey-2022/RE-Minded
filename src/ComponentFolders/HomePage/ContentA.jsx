import React from "react";
import Background from './Images/Background.svg';
import Sofa from './Images/ContentA(sofa).svg';

function ContentA () {
    return (
        <>
        <img className="absolute inset-0" src={Background} alt='Background'/> 
        <div className="relative flex justify-between">
        <div>
        <p> WE ARE HERE TO</p>
        <p>HELP</p> 
        <button type="button" className=" rounded-md box-border p-3 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 "> BOOK AN APPOINTMENT </button>
        </div>
        <img className="h-2/5 w-2/5" src={Sofa} alt='Sofa'/>
        </div>
        </>
    )
}

export default ContentA;