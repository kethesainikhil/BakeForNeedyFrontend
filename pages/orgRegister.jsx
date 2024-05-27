import React from 'react'
import OrganizationRegister from '../components/OrganizationRegister'

const registration = () => {
  return (
    <div className='bg-black mt-20 pb-10'>
      <div className='text-center text-slate-300 py-10 text-4xl font-serif '>
        Register your Organization
      </div>
      <OrganizationRegister />
      </div>
  )
}

export default registration