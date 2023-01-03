import React from "react";
import Image1 from './Images/BottomImage1.svg'
import Image2 from './Images/BottomImage2.svg'


function Bottom() {
    return (
        <div>
            <div className="  inline-block  mt-32 mx-40 ">
                <h2 className=" font-semibold font-sans text-start uppercase md:text-2xl text-xl">Recommended for you</h2>
                <div className=" flex justify-between justify-items-start mt-10">
                        <img src={Image1} alt="Heal" className=" mr-10 h-64 w-96" />
                        <img src={Image2} alt="Need" className=" h-64 w-96" />
                </div>
            </div>
        </div>
    );
}


export default Bottom;