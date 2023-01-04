import React from 'react'
import OfficeImage from './Images/OfficeImage.svg'

const ContactPageMain = () => {
  return (
    <div className='flex flex-col w-screen h-screen font-poppins'>
        <div className='lg:ml-28 ml-10 lg:pr-36 md:pr-20 pr-10'>
            <div className='lg:text-5xl md:text-3xl text-2xl leading-6 lg:mt-20 mt-14'>
                <h1>SEND US YOUR REQUEST!</h1>
                <div className='w-full lg:text-xl text-lg leading-8 mt-4 lg:ml-0 ml-4 lg:mr-0 text-SubTexts'>
                <h3>
                Do you have a question, concern, idea, feedback, or problem?
                If you need assistance, please fill out the form below
                and we would be happy to help!
                </h3>
                </div>
            </div>
        </div>
        <div className='flex lg:flex-row flex-col lg:ml-28'>
            <div className='basis-1/2 mt-4'>
                <h3 className='lg:text-xl text-lg lg:mt-10 mt-8 lg:ml-0 ml-4 lg:mr-0 font-semibold'>
                    Type of contact
                </h3>
                <ul className="text-sm font-medium mt-4 lg:text-xl lg:mt-5 lg:ml-2 ml-4 lg:mr-0">
                    <li className="w-full">
                            <label 
                            htmlFor="list-radio-1" 
                            className="w-full py-3 text-sm font-medium">
                                <input 
                                id="list-radio-1" 
                                type="radio" 
                                name="list-radio" 
                                className="w-4 h-4 focus:ring-blue-500"/>
                                    <span className='ml-2'>
                                        I have a question about the service.
                                    </span> 
                            </label>
                    </li>
                    <li className="w-full">
                            <label 
                            htmlFor="list-radio-1" 
                            className="w-full py-3 text-sm font-medium">
                                <input 
                                id="list-radio-1" 
                                type="radio" 
                                name="list-radio" 
                                className="w-4 h-4 focus:ring-blue-500"/>
                                    <span className='ml-2'>
                                    I am a registered client and I need support.
                                    </span> 
                            </label>
                    </li>
                    <li className="w-full">
                            <label 
                            htmlFor="list-radio-1" 
                            className="w-full py-3 text-sm font-medium">
                                <input 
                                id="list-radio-1" 
                                type="radio" 
                                name="list-radio" 
                                className="w-4 h-4 focus:ring-blue-500"/>
                                    <span className='ml-2'>
                                        I am a counselor interested in joining.
                                    </span> 
                            </label>
                    </li>
                    <li className="w-full">
                            <label 
                            htmlFor="list-radio-1" 
                            className="w-full py-3 text-sm font-medium">
                                <input 
                                id="list-radio-1" 
                                type="radio" 
                                name="list-radio" 
                                className="w-4 h-4 focus:ring-blue-500"/>
                                    <span className='ml-2'>
                                    I am a registered counselor and I need support.
                                    </span> 
                            </label>
                    </li>
                    <li className="w-full">
                            <label 
                            htmlFor="list-radio-1" 
                            className="w-full py-3 text-sm font-medium">
                                <input 
                                id="list-radio-1" 
                                type="radio" 
                                name="list-radio" 
                                className="w-4 h-4 focus:ring-blue-500"/>
                                    <span className='ml-2'>
                                    I have a business-related inquiry.
                                    </span> 
                            </label>
                    </li>
                    <li className="w-full">
                            <label 
                            htmlFor="list-radio-1" 
                            className="w-full py-3 text-sm font-medium">
                                <input 
                                id="list-radio-1" 
                                type="radio" 
                                name="list-radio" 
                                className="w-4 h-4 focus:ring-blue-500"/>
                                    <span className='ml-2'>
                                    I am interested in Healing Online for my organization.
                                    </span> 
                            </label>
                    </li>
                    <li className="w-full">
                            <label 
                            htmlFor="list-radio-1" 
                            className="w-full py-3 text-sm font-medium">
                                <input 
                                id="list-radio-1" 
                                type="radio" 
                                name="list-radio" 
                                className="w-4 h-4 focus:ring-blue-500"/>
                                    <span className='ml-2'>
                                    I have a billing related question.
                                    </span> 
                            </label>
                    </li>
                </ul>
            </div>
            <div className='basis-1/2 lg:mt-10 lg:pr-16 lg:ml-0 md:ml-40 ml-10 mt-12 mr-10'>
        <img src={OfficeImage} alt="OfficeImg" className='mb-10'/>
      </div>
        </div>
        
        
        
    </div>
        
    
  )
}

export default ContactPageMain