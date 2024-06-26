import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import donate from '../public/donation.jpg'
import ngo from '../public/ngo.png'
import delivery from '../public/delivery.png'
import bridge from "../public/bridge.png"
import connection from "../public/connecting.png"


export default function Testimonial() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollInterval = null;

    // Function to start the scrolling animation
    const startScroll = () => {
      scrollInterval = setInterval(() => {
        container.scrollLeft += 1; // Adjust this value to control the scrolling speed
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 1;
        }
      },1);// Adjust the interval for smoother or faster scrolling
    };

    // Function to stop the scrolling animation
    const stopScroll = () => {
      clearInterval(scrollInterval);
    };

    // Start scrolling when the mouse enters the container
    container.addEventListener('mouseenter', stopScroll);

    // Resume scrolling when the mouse leaves the container
    container.addEventListener('mouseleave', startScroll);

    // Initial call to start scrolling
    startScroll();

    // Cleanup function to remove event listeners and clear the interval
    return () => {
      container.removeEventListener('mouseenter', stopScroll);
      container.removeEventListener('mouseleave', startScroll);
      clearInterval(scrollInterval);
    };
  }, []);


  return (
    <section className="py-12 md:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl text-center text-purple-500 font-bold tracking-tight md:text-3xl lg:text-4xl">What We Do</h2>
        </div>
        <div className="overflow-x-hidden -mx-4 md:-mx-6" ref={containerRef}>
          <div className="inline-flex gap-4 md:gap-6 lg:gap-8 relative">
          <Card src={connection} title="Connecting Ngo's" info="Connects NGOS to the People who are in Needy" />
            <Card  src={donate} title="Connecting SWC's" info="Connects Social Welfare Centers to the Needy People" />
            {/* Your original card components */}
            <Card src={delivery} title="Delivering Donations" info="Deliver Donations to the Needy People" />
            <Card src={bridge} title="Brdige the Gap" info="Bridge between Common People and Needy People"/>
            <Card  src={ngo} title="Food Collections" info="Provides Food by Collecting from varios Places" />
            {/* Duplicate card components */}
            <Card src={connection} title="Connecting Ngo's" info="Connects NGOS to the People who are in Needy" />
            <Card  src={donate} title="Connecting SWC's" info="Connects Social Welfare Centers to the Needy People" />
            {/* Your original card components */}
            <Card src={delivery} title="Delivering Donations" info="Deliver Donations to the Needy People" />
            <Card src={bridge} title="Brdige the Gap" info="Bridge between Common People and Needy People"/>
            <Card  src={ngo} title="Food Collections" info="Provides Food by Collecting from varios Places" />

          </div>
        </div>
      </div>
    </section>
  );
}

function Card(props) {
    const{title,info,src} = props
  return (
    <div className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[360px] card">
      <div className=" custom-component rounded-lg overflow-hidden shadow-lg">
        
      <div className="custom-component dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <Image
                  alt="Service 2"
                  className="w-full h-45 object-cover"
                  height="180"
                  src={src}
                  style={{
                    aspectRatio: "360/180",
                    objectFit: "cover",
                  }}
                  width="360"
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-lg text-pink-500 font-semibold mb-2">{title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                    {info}
                  </p>
                </div>
              </div>
      </div>
    </div>
  );
}
