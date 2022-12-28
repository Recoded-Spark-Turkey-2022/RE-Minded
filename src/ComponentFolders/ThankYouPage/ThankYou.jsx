import React from 'react'

const ThankYou = () => {
  return (
    <div>
        <h1 className='absolute w-[300px] h-[75px] top-[156px] left-[84px] font-poppins text-5xl text-black'>
            THANK YOU!
        </h1>
        <div>
            <p className='absolute w-[1273px] h-[36px] top-[251px] left-[84px] font-poppins text-2xl leading-9 text-SubTexts'>
                Your email has been added to the mailing list successfully!
            </p>
        </div>
        <div>
          <button type= "button" className='bg-Buttons absolute w-[300px] h-[60px] top-[343px] left-[84px] rounded-md font-poppins text-2xl font-normal leading-9 tracking-normal text-center '> BACK TO HOME</button>
        </div>
    </div>
  )
}

export default ThankYou