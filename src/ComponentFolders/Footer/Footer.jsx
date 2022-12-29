import React from 'react'
import image1 from './Images/FacebookLogo.svg'
import image2 from './Images/GoogleLogo.svg'
import image3 from './Images/TwitterLogo.svg'
import image4 from './Images/SubscribeArrow.svg'


function Footer() {
  return (
    <div className='grid-cols-3 gap-8 xs:w-full h-[240px] top-[2832px] left-0 bottom-0 rounded-none absolute flex-wrap bg-Footer'>
      <div className='grid-cols-1 p-o gap-6 absolute w-[500px] h-[160px] left-[87px] top-[40px] rounded-none'>
        <div className='items-center flex-col p-o gap-3 w-[500px] h-[78px]'>
          <h1 className='text-4xl font-medium leading-[44xp] tracking-[0.18px] w-[500px] h-[44px] text-BlackTexts'>
            Subscribe
          </h1>
          <p className='text-SubTexts w-[500px] h-[22px] top-[56px] font-normal text-xl leading-5 tracking-[0.075px]'>
            We’ll never spam to you or share your email
          </p>
        </div>
        
        <div className='md:flex'>
          <div className='md:shrink-0'>
          <div className='flex flex-wrap mb-4 w-[300px] h-[50px] box-border rounded-md border-2 border-[#718096]'>
            <input className=' w-3/4 h-auto rounded-l-lg text-SubTexts font-normal ' type="email" placeholder='  Enter your e-mail' />
                <button type="button" className='bg-Buttons rounded-r-lg w-1/4 h-auto '>
                    <img className='w-[24px] h-[24px] top-[18px] left-[310px] items-center mx-auto' src={image4} alt='Arrow' />
                </button>
          </div>
          </div>
        </div>
      </div>
      
      
        <div className='grid grid-cols-4 gap-6 absolute  
              w-[33%] h-[160px] right-[87px] top-[65px]
             text-SubTexts font-normal text-xl leading-5 tracking-[0.075px]'>
          <ul>
            <li>Home</li>
          </ul> 
          <ul>
            <li>Blogs</li>
          </ul>
          <ul>
            <li>About</li>
          </ul>
          <ul>
            <li>Contact</li>
          </ul>

          <div className='justify-center mx-36 w-[200px] h-[78px]'>
            <div className='flex flex-row justify-center mx-8 space-x-10 '>
              <img src={image3} alt='Twitter Logo' />
              <img src={image1} alt='Facebook Logo' />
              <img src={image2} alt='Google Logo' />

            </div>
          </div>
        </div>
      



    </div>



  )
}

export default Footer