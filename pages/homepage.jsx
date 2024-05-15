import React from 'react'
import { LampDemo } from './components/LampDemo'
import { FloatingNavDemo } from './components/FloatingDemo'
import HeroSection from './components/HeroSeciton'

const HomePage = () => {
  return (
    <div className='bg-black' >
        <FloatingNavDemo />
        <HeroSection />
    </div>
  )
}

export default HomePage