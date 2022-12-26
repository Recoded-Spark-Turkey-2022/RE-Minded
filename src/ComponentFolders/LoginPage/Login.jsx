import React from 'react';
import Image from "./Images/Login(sofa).svg"

function Login() {
    return (
        <div className='flex justify-center my-10 gap-x-9'>
            
            <div>
            <h2 className='text-3xl font-poppins font-normal mb-10'>LOGIN</h2>
            <form className='grid grid-rows-3 gap-4 shadow-2xl px-10 py-10'>
                <input type="text" placeholder='Your Email' className='w-72 h-20'/>
                <input type="text" placeholder='Your Password' className='w-72 h-20'/>
                <div className='flex justify-around'>
                    <button type='submit'>Login</button>
                    <button type='submit'>Signup</button>
                </div>
            </form>

            </div>
            <div>
                <img src={Image} alt='Login'/>
            </div>
        </div>
    );
}

export default Login;