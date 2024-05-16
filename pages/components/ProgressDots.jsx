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
    <div className="progress-bar  px-4 mx-auto" ref={progressBarRef}>
      <div className="segment " style={{ width: `${progress}%`, animation: isVisible ? 'progressBarAnimation 8s infinite' : 'none' }}>
      </div>
      <div className="text h-40 mr-2 hidden gradient-border sm:flex sm:flex-col absolute mt-2 text-gray-300 sm:max-w-xs items-center text-center px-4 py-2  " style={
        { left: `${progress}%` 
        
        }
        
        }>
        <h1 className={`text-lg `}>Step {progress / 25 + 1}</h1>
        <p className='text-xl font-bold gradient-text '>{details[progress / 25].title}</p>
        <p>{details[progress / 25].Info}</p>
      
      </div>
      <div className="text sm:hidden md:hidden lg:hidden xl:hidden flex flex-col gradient-border  mt-2 b-2 mr-4  absolute text-white  items-center text-center  " >
        <h1 className={`text-lg `}>Step {progress / 25 + 1}</h1>
        <p className='text-xl font-bold gradient-text '>{details[progress / 25].title}</p>
        <p>{details[progress / 25].Info}</p>
      
      </div>

    </div>
  );
};

export default ProgressDots;
