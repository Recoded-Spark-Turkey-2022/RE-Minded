import React from 'react'
import TeamCards from './TeamCards'
import menar from './Images/Menar Selamet_Turkey_2022.jpg'
import sohail  from './Images/Sohail Ahmed_Turkey_2022.jpeg'
import seyma from './Images/Seyma Demir_Turkey_2022.jpeg'
import selvi from './Images/Selvi Ece Dugan_Turkey_2022.jpg'
import ammar from './Images/Ammar Eldik_Turkey_2022.jpg'


// name and jobs for pass data to card with props
// do we need to show team trainer?
const names = ["Menar Selamet", "Sohail Ahmed", "Seyma Demir", "Selvi Ece Dugan", "Ammar Eldik"]
const jobs = ["Lead Engineer", "Frontend Developer"]
const photos = [menar, sohail, seyma, selvi, ammar]

function TeamPageMain() {
  return (
    <div className='flex flex-col'>
        <div className='font-poppins flex-grow-2'>WE ARE HEALING, NICE TO MEET YOU!</div>
        <div className='font-poppins flex felx-rows flex-grows'>
            {names.map((name, index) => {
                return <TeamCards name={name} job={jobs[1]} photo={photos[index]} />
            })}
        </div>
    </div>
  )
}

export default TeamPageMain