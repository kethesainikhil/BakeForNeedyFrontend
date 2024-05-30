import { useRouter } from 'next/router'
import React from 'react'

const WaitingComponent = () => {
  const router = useRouter();
  return (
    <div className="flex h-screen flex-col px-6 items-center justify-center">
        <h1 className='text-purple-400 font-semibold sm:text-3xl text-xl'>Please wait 24 hours</h1>
        <div className="animate-bounce mt-4">
            <svg
              className="mx-auto h-16 w-16 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
            <h1 className='text-red-500'>pending</h1>
          </div>
          <p className='text-slate-300 sm:text-xl text-md '>Once Your Organization is verified You will get Informed to your Email</p>
          <div className="relative text-white rounded-lg mt-16 px-6  py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-purple-500 w-32  flex mx-auto justify-center">
      <button className="rounded-lg" onClick={() => router.push("/")}>
        Home
      </button>
    </div>
    </div>
  )
}

export default WaitingComponent