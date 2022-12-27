import React from 'react'
import aboutImg from './Images/man.jpg'

function About() {
  return (
    <div className="md:max-lg:flex">
    <div >
        <h2 className='absolute  font-poppins font-normal leading-[75px] text-5xl text-black tracking-[-0.01em] left-[13.26%] right-[71.88%] top-[12.26%]  '>HEALING!</h2>
        <h3 className='absolute  font-poppins text-black text-opacity-50 text-2xl leading-6 w-[250px] pt-[20px] left-[13.26%] right-[69.58%] top-[21%]'>some cool one liner !</h3>
      <div>
        <article className='absolute  font-poppins text-xl leading-6 text-[#424A4F] left-[13.26%] right-[10.62%] top-[40%] '>
        At Healing, we believe there is a better way to do things. A more valuable way where customers are earned rather than bought. We&apos;re obsessively passionate about it, and our mission is to help people achieve it. We focus on search engine optimization. It&apos;s one of the least understood and least transparent aspects of great marketing, and we see that as an opportunity. We&apos;re excited to simplify SEO for everyone through our software, education, and community.
        </article>
      </div>
        
    </div>
    <div className='absolute left-0 right-0 bg-blue-100 rounded-none top-[90%] h-[400px]' >
        <h2 className='absolute font-poppins text-5xl text-gray-700 left-[44.86%] right-[29.93%] top-[25%]  w-[500px] '>Our Founding</h2>
        <img src={aboutImg} alt="img-about" className=' object-cover w-[400px] h-[320px] left-[8%] right-[58.96%] top-[12%] bottom-[22.15%] absolute rounded-md'/>
        <article className='absolute sm:font-bold text-xl leading-6 text-gray-700 left-[44.86%] right-[10.62%] top-[45%] '>
        Healing was founded by Payam Abubakr in 2021. It was called Healing Online, and started as a blog and an online community where some of the world&apos;s therapists shared their research and ideas. We launched the Beginner&apos;s Guide to Therapy and our first study, and that hub of industry expertise transformed into a small consulting firm and led us to create the Online Therapist of today!
        </article>
    </div>
    </div>
  )
}

export default About