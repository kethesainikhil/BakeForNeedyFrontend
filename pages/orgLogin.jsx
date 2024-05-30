'use client'
import React from 'react'
import OrgLogin from '../components/OrgLogin'

const userRegister = () => {
  return (
    <div className='bg-black mt-20 pb-10'>
       <div className='text-center mx-2 text-purple-500 py-10 text-4xl font-serif '>
       Organization Login
      </div>
        <OrgLogin />
    </div>
  )
}

export default userRegister