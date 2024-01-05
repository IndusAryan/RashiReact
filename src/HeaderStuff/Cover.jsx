import { useEffect } from "react";
import React from 'react'

function Cover({coverImage, setCoverImage}) {

  useEffect(() => {
  
    const timer = setTimeout(() => {
      setCoverImage('src/assets/suncover.jpg');
    }, 3000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, [setCoverImage]);

  return (
    <div className="cover-container relative overflow-hidden h-48 md:h-80 lg:h-120 m-2 	rounded-lg">
  
    <img
      src={coverImage}
      alt="Cover Image"
      className="w-full h-full"
    />

   
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white">
      <img src="src/assets/weblogo.png"/>
    </div>
  </div>
  )
}

export default Cover