import React from 'react'

function ContentA() {
  return (
    <div className='relative h-full'>
        <h2 className="absolute font-poppins leading-[75px] text-medium lg:text-5xl text-black tracking-[-0.01em] left-[13%] top-[13%]">
          HEALING!
        </h2>
        <h3 className="absolute font-poppins text-black text-opacity-50 text-small lg:text-2xl leading-6 w-[250px] pt-[20px] left-[13%] top-[28%] lg:top-[23%]">
          some cool one liner !
        </h3>
        <div>
          <p className="text-clip absolute font-poppins lg:text-xl text-xsmall leading-6 text-[#424A4F] lg:right-[10%] left-[5%] lg:left-[13%] top-[50%] lg:top-[48%]">
            At Healing, we believe there is a better way to do things. A more
            valuable way where customers are earned rather than bought.
            We&apos;re obsessively passionate about it, and our mission is to
            help people achieve it. We focus on search engine optimization.
            It&apos;s one of the least understood and least transparent aspects
            of great marketing, and we see that as an opportunity. We&apos;re
            excited to simplify SEO for everyone through our software,
            education, and community.
          </p>
        </div>
    </div>
  )
}

export default ContentA