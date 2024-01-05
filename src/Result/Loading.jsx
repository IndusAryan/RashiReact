import React from 'react';

const SunCard = () => {
  return (
    <div className="fixed inset-0 flex items-center rounded-xl justify-center z-50">
      <div className="bg-slate-700 shadow-md rounded-xl p-1 max-w-auto">
        <img
          src="src/assets/sunanim.gif"
          alt="Animated Sun"
          className="mx-auto mb-4 w-full h-60 rounded-xl"
        />

        <div className="text-center max-w-100% text-gray-100 mb-3 mr-3 ml-3">
          Calculating position of the Sun at the time of your Birth...
        </div>
      </div>
    </div>
  );
};

export default SunCard;