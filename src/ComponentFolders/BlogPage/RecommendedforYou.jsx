import React from "react";
import Image1 from './Images/BottomImage1.svg'
import Image2 from './Images/BottomImage2.svg'


function RecommendedforYou() {
    return (
        <div>
            <div className=" mt-20">
                <h2 className="font-poppins uppercase lg:ml-48 ml-10 md:text-2xl text-xl">Recommended for you</h2>
                <div className=" flex flex-col lg:flex-row mt-6 mb-20 justify-center gap-10 ml-0 lg:ml-[-10em]">
                        <a target="_blank" rel="noreferrer" href="https://www.verywellmind.com/10-ways-to-heal-from-trauma-5206940" ><img src={Image1} alt="Heal" className="self-start lg:ml-0 ml-10" /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.healthline.com/health/anxiety"><img src={Image2} alt="Need" className="self-start lg:ml-0 ml-10"  /></a>
                </div>
            </div>
        </div>
    );
}


export default RecommendedforYou;