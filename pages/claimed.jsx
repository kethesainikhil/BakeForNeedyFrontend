'use client'
import React, { useEffect } from 'react'

const claimed = () => {
  return (
    <div className='h-screen flex-col flex items-center justify-center'>
      <h1 className='text-center flex flex-col items-center justify-center text-green-500 text-3xl '>Successfully claimed</h1>
      <div className="relative text-white rounded-lg mt-16 px-6  py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-purple-500 w-32  flex mx-auto justify-center">
      <button className="rounded-lg" onClick={() => router.push("/")}>
        Home
      </button>
    </div>
    </div>
  )
}

export default claimed