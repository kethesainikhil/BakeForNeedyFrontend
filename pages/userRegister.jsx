import React from 'react'
import UserRegistration from '../components/UserRegistration'

const userRegister = () => {
  return (
    <div className='bg-black mt-20 pb-10'>
       <div className='text-center mx-2 text-purple-500 py-10 text-4xl font-serif '>
        Register as a Donor
      </div>
        <UserRegistration />
    </div>
  )
}

export default userRegister