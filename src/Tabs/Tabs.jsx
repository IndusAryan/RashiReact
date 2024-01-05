import React, { useEffect } from 'react';


function Tabs({activeTab, handleTabClick}) {

  useEffect(() => {
    // Define image URLs
    const sunImageUrl = '/assets/sunanim.gif';
    const moonImageUrl = '/assets/moon.gif';

    // Create image objects to preload
    const sunImage = new Image();
    sunImage.src = sunImageUrl;

    const moonImage = new Image();
    moonImage.src = moonImageUrl;

    // Optionally, you can add event listeners to handle image loading events
    sunImage.onload = () => {
      console.log('Sun image loaded');
    };

    moonImage.onload = () => {
      console.log('Moon image loaded');
    };

     /*Clean up the image objects when the component unmounts
     return () => {
      sunImage.onload = null;
      moonImage.onload = null;*/
    }
  /*}, [activeTab]*/);
   
  
    return (
        <div className="flex justify-center mt-4">
        <div
          onClick={() => handleTabClick('sun')}
          className={`${
            activeTab === 'sun'
              ? 'border-b-2 border-blue-500 text-lg text-blue-500'
              : 'text-gray-300 text-lg'
          } px-6 py-3 mx-2 cursor-pointer transition duration-800 ease-in-out`}
        >
          🔅 SunSign
        </div>
        <div
          onClick={() => handleTabClick('moon')}
          className={`${
            activeTab === 'moon'
              ? 'border-b-2 border-blue-500 text-blue-500 text-lg'
              : 'text-gray-300 text-lg'
          } px-6 py-3 mx-2 cursor-pointer transition duration-800 ease-in-out`}
        >
         🌔 MoonSign
        </div>
      </div>
    );
  };
  

export default Tabs;