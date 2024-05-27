import React from 'react'
import Donar from '../components/Donar'

const donarpage = () => {
  return (
    <div className='bg-black mt-20 mb-20  sm:h-full'>
      <div className=' text-4xl text-slate-300 font-serif py-10 text-center'>
        Wanna Donate!!! Fill UP This
      </div>
        <Donar />
    </div>
  )
}

export default donarpage