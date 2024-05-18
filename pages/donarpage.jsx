import React from 'react'
import Donar from '../components/Donar'

const donarpage = () => {
  return (
    <div className='bg-black mt-20  sm:h-screen'>
      <div className=' text-4xl text-purple-500 font-serif py-10 text-center'>
        Wanna Donate!!! Fill UP This
      </div>
        <Donar />
    </div>
  )
}

export default donarpage