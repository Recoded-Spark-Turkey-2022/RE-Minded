import React from "react";
import { useTranslation } from 'react-i18next';
import Image1 from './Images/BottomImage1.svg'
import Image2 from './Images/BottomImage2.svg'


function RecommendedforYou() {
    const { t } = useTranslation();
    
    return (
        <div>
            <div className="lg:ml-48 ml-10 mt-20">
                <h2 className="font-poppins uppercase md:text-2xl text-xl"> {t('recommend.h1')} </h2>
                <div className=" flex flex-col md:flex-col lg:flex-row mt-6 mb-20">
                        <img src={Image1} alt="Heal" className=" mr-10 w-96" />
                        <img src={Image2} alt="Need" className=" h-64 w-96" />
                </div>
            </div>
        </div>
    );
}


export default RecommendedforYou;