import { React } from "react";
import image4 from './Images/SubscribeArrow.svg'


function SignUp (){

    return(
        <div className=" inline-block items-center ">
        <h2 className=" mt-10 mx-40 font-semibold font-sans text-start uppercase md:text-2xl text-xl">Sign up for The Healing blog</h2>
        <p className=" mt-2 text-start md:text-sm text-xs uppercase mx-40">A weekly, ad-free Blog that helps you stay in the know.</p>
        <div className='md:flex'> 
          <div className=' mt-7 mx-40 flex justify-start mb-4 w-[300px] h-[50px] box-border rounded-md border-2 border-[#718096]'>
            <input className=' w-3/4 h-auto rounded-l-lg text-SubTexts font-normal ' type="email" placeholder='  Enter your e-mail' />
                <button type="button" className='bg-Buttons bg-sky-500 rounded-r-lg w-1/4 h-auto'>
                    <img className='w-[24px] h-[24px] top-[18px] left-[310px] items-center mx-auto' src={image4} alt='Arrow' />
                </button>
          </div>
        </div>
        </div>
    )
}


export default SignUp;