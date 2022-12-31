import React from 'react'
import requirementPageImg from './Images/LaptopImage.svg'

function Requirements() {
  return (
    <div className='flex lg:flex-row flex-col w-screen h-screen'>
        <div >
            <h1>Why work with Healing?</h1>
            <h3>Reliable Income</h3>
            <div>Over 10,000 people sign up on BetterHelp every day looking for a counselor to help with life’s challenges. BetterHelp can be your main source of income (&quot;full time&quot;) or a supplement to your current work.</div>
            <h3>Focus on Counseling</h3>
            <div>No need to worry about costs from acquiring clients, billing, support or operations. Let us handle the fees and paperwork so you can focus on what you do best!</div>
            <h3>Focus on Counseling</h3>
            <div>No need to worry about costs from acquiring clients, billing, support or operations. Let us handle the fees and paperwork so you can focus on what you do best!</div>
            <h1>Requirements</h1>
            <p>Licensed by a State Board to provide counseling</p>
            <p>Experience in counseling for adults, couples, and/or teens</p>
            <p>Excellent writing skills</p>
            <p>Reliable Internet connection</p>
            <p>Currently residing in the US</p>
            <h1>BUTTON HERE</h1>
        </div>
        <div>
            <div>
                <img src={requirementPageImg} alt="laptopImg"/>
            </div>
        </div>

    </div>
  )
}

export default Requirements