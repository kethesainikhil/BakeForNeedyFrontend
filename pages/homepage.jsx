import React from 'react'
import { LampDemo } from './components/LampDemo'
import { FloatingNavDemo } from './components/FloatingDemo'
import HeroSection from './components/HeroSeciton'
import { CarouselWithContent } from './components/Carousel'
import ProgressDots from './components/ProgressDots'
import { CardComponent } from './components/CardComponent'
import MidHero from './components/MidHero'
import Testimonial from './components/Testimonial'

const HomePage = () => {
  return (
    <div className='bg-black' >
        <FloatingNavDemo />
        {/* <CarouselWithContent /> */}
        <HeroSection />
<div className='h-full sm:flex'>
<ProgressDots />
</div>

<div className='sm:mx-auto'>
  < CardComponent/>
</div>
<div>
  <Testimonial />
</div>
    </div>
  )
}

export default HomePage