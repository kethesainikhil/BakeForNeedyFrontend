import { useState, useEffect, useRef } from 'react';

const ProgressDots = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressBarRef = useRef(null);
  const details = [
    {
        "title": "Donate",
        "Info":"Click On Donate button at the top of the page",
        "color":"cyan"
    },
    {
        "title": "Form",
        "Info":"Fill Up the Form & don't forget to choose self delivery or pickup",

        "color":"red"
    },
    {
        "title": "Sit and Relax",
        "Info":"Our Algorithm will Map your donation to the nearest NGO / Social Welfare Center",
        "color":"yellow"
    },
    {
        "title": "Completed",
        "Info":"Your Donation will be reaching to one of the needy people. Thank You!",
        "color":"green"
    },
  ]
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Change this value based on your preference
      }
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setProgress(prevProgress => (prevProgress + 25) % 100); // Increase progress by 25% each time, reset to 0 after reaching 100%
      }, 2000); // Change every 2 seconds

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div className="progress-bar   mx-auto" ref={progressBarRef}>
      <div className="segment " style={{ width: `${progress}%`, animation: isVisible ? 'progressBarAnimation 8s infinite' : 'none' }}>
      </div>
      <div className="text w-1/4  h-40 hidden border-4 border-gray-400  rounded-md sm:flex sm:flex-col absolute mt-2 text-gray-400  items-center text-center px-4 py-2  " style={
        { left: `${progress}%` 
        
        }
        
        }>
        <h1 className={`text-lg `}>Step {progress / 25 + 1}</h1>
        <p className='text-xl font-bold gradient-text '>{details[progress / 25].title}</p>
        <p>{details[progress / 25].Info}</p>
      
      </div>
      <div className=" h-32 px-2 mx-2  sm:hidden md:hidden lg:hidden xl:hidden rounded-md  flex flex-col border-2 border-gray-500  mt-2   absolute text-white  text-center  " >
        <h1 className={`text-lg `}>Step {progress / 25 + 1}</h1>
        <p className='text-lg font-bold text-pink-500 '>{details[progress / 25].title}</p>
        <p>{details[progress / 25].Info}</p>
      
      </div>

    </div>
  );
};

export default ProgressDots;
