import React from "react";
import Background from './Images/Background.svg';
import Sofa from './Images/ContentA(sofa).svg';

function ContentA () {
    return (
        <>
        <img src={Background} alt='Background'/>
        <img src={Sofa} alt='Sofa'/>
        <button type="button"> BOOK AN APPOINTMENT </button>
        </>
    )
}

export default ContentA;