// src/components/SuccessAnimation.jsx
import React from 'react'; // Custom CSS for animation

const SuccessAnimation = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center ">
      <div className="bucket-container relative flex items-center justify-center">
        <div className="bucket relative w-52 h-52 bg-yellow-300 rounded-md overflow-hidden flex items-end justify-center">
          <div className="bucket-inner absolute w-full h-full bg-green-500 opacity-50"></div>
        </div>
        <div className="gift-box absolute top-0 w-16 h-16 bg-green-500 rounded-md flex items-center justify-center text-white">
          🎁
        </div>
      </div>
      <p className="mt-10 text-center sm:text-4xl text-xl font-semibold text-gray-200">
        Thanking you for Your Donation
      </p>
    </div>
  );
};

export default SuccessAnimation;
