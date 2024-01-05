import React from 'react';
import { useEffect, useState } from 'react';

export function MoonLoadingCard() {
  const [loadingStage, setLoadingStage] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoadingStage(1); 
    }, 1000);

    return () => clearTimeout(timeoutId); 
  }, []); 

  useEffect(() => {
    if (loadingStage === 1) {
      const timeoutId = setTimeout(() => {
        setLoadingStage(2);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [loadingStage]);

  useEffect(() => {
    if (loadingStage === 2) {
      const timeoutId = setTimeout(() => {
        setLoadingStage(2);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [loadingStage]); 

  return (
    <div className="fixed inset-0 flex items-center rounded-xl justify-center z-50">
      <div className="bg-slate-700 shadow-md rounded-xl p-1 max-w-auto">
        <img
          src="src/assets/moon.gif"
          alt="Animated Moon"
          className="mx-auto mb-4 w-full h-60 rounded-xl"
        />

        <div className="text-center max-w-100% text-gray-100 mb-3 mr-3 ml-3">
          {loadingStage === 0 && "Fetching city's timezone..."}
          {loadingStage === 1 && 'Calculating Longitude & Latitude'}
          {loadingStage === 2 && 'Calculating position of Moon at time of your Birth'}
        </div>
      </div>
    </div>
  );
}

