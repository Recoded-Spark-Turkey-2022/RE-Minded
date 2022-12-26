import React from 'react';
import Image from "./Images/Login(sofa).svg"

function Login() {
    return (
        <div className='flex justify-center my-10'>

            <div>
            <h2 className='text-5xl font-["Poppins"] font-normal mb-28'>LOGIN</h2>
            <form className='grid grid-rows-3 gap-12 shadow-2xl px-10 py-10'>
                <input type="text" placeholder='   Your Email' className='h-20 broder-solid border-2 border-[#D1DBE3] rounded-md'/>
                <input type="text" placeholder='   Your Password' className='h-20 broder-solid border-2 border-[#D1DBE3] rounded-md'/>
                <div className='flex justify-around py-3 gap-8'>
                    <button type='submit' className='bg-[#2DD3E3] font-medium text-2xl px-14 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)]'>Login</button>
                    <button type='submit' className='broder-solid border-2 border-[#2DD3E3] font-medium text-2xl px-14 rounded-md'>Signup</button>
                </div>
            </form>

            </div>
            
            <img src={Image} alt='Login'className='m-[150px]'/>
            
        </div>
    );
}

export default Login;