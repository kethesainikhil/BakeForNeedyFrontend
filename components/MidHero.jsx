import React from 'react'
import { CardComponent } from './CardComponent'

const MidHero = () => {
  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-4'>
        <CardComponent />
      </div>
      <div className='col-span-1 flex items-center justify-center flex-col text-white mx-auto text-center'>
        <h1>
          Calling Out all NGO's / Social Welfare Centers 
        </h1>
        <p>Easy Onboarding Process Click Below to Join</p>
        <button className='bg-cyan-300 rounded-xl p-2'>Join</button>
      </div>
    </div>
  )
}

export default MidHero