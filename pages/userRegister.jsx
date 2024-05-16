import React from 'react'
import UserRegistration from '../components/UserRegistration'

const userRegister = () => {
  return (
    <div className='bg-black mt-20 pb-10'>
       <div className='text-center gradient-text py-10 text-4xl font-serif '>
        Register as a Donor
      </div>
        <UserRegistration />
    </div>
  )
}

export default userRegister