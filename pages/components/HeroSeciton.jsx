import Image from 'next/image'
import React, { useState } from 'react';
import poorboy from "../../public/poorboy.jpeg"
const HeroSection = () => {        
    return (
        <div className='pt-20 font-serif'>

    <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-20">
                <div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">Let's <span className='text-cyan-300'>Unite</span> and <span className='text-cyan-300'>Help</span> Each Other with <span className='text-cyan-300 '>BakeForNeedy</span></h1>
                        <p className="mt-2 text-lg text-white sm:mt-8 font-inter"><span className='text-cyan-300 font-medium  text-xl'>BakeForNeedy</span> <span className='text-xl'>: Join Us in Baking Hope and Sharing Joy!</span> 🌟 <span className='text-cyan-300'>
                          #CommunityBakers
                          </span></p>

                    </div>
                </div>

                <div>
                    <Image
                     className="w-full rounded-lg" src={poorboy} alt="" />
                </div>
            </div>
        </div>
    </section>
</div>

    )
}
export default HeroSection;