import React from "react";
import MainContent from "./MainContent";
import Recommended from "./RecommendedforYou";
import SignUp from "./SignUp";

function Main (){
    return(
        <>
        <MainContent /> 
        <SignUp />
        <Recommended />
        </>
    );
}

export default Main;