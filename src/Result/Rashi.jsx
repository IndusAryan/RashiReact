import React, { useState } from 'react';

const RashiResult = ({ imageSrc, description }) => {
  const [showCard, setShowCard] = useState(true);

  const handleClose = () => {
    setShowCard(false);
  };

  return (
    <>
      {showCard && (
        <div className=
        "card fixed inset-0 flex max-w-2xl mt-6 mb-6 mx-auto flex-col items-center rounded-xl justify-center z-50 bg-white p-6">
          
          <div className='flex justify-center items-start'>
          <img src={imageSrc} alt="Card" className="card-image mx-auto w-full mb-10 mt-0 h-60 rounded-xl" />
      
          </div>
          <p className="card-description text-center max-w-full text-gray-800 mb-3 mr-3 ml-3 rounded-lg bg-slate-200 p-4">
    {description}
  </p>
          <button className="close-button text-slate-800 px-4 bg-orange-400 rounded-md py-2 m-4 
         hover:bg-orange-500 hover:rounded-lg" onClick={handleClose}>
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default RashiResult;