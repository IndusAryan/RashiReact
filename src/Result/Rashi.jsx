import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';

const RashiResult = ({ imageSrc, description }) => {
  const [showCard, setShowCard] = useState(true);
 
  const handleClose = () => {
    setShowCard(false);
  };

  function copy() {

    var copyText = description;
    navigator.clipboard.writeText(copyText);
    toast.success("Copied your charecteristics", {position: toast.POSITION.BOTTOM_LEFT} )
  } 

  return (
    <>
      {showCard && (
        <div className="card fixed inset-0 flex flex-col max-w-2xl mx-auto items-center rounded-xl justify-center z-50 bg-white p-6">

        <img src={imageSrc} alt="Card" className="card-image mx-auto w-full mb-4 h-60 rounded-xl" />
      
        <p className="card-description text-center max-w-full text-gray-800 mb-3 mr-3 ml-3 rounded-lg bg-slate-200 p-4 overflow-x-auto">
          {description}
        </p>

      <div className="flex flex-row">
        <button onClick={handleClose} className="close-button text-slate-800 px-4 bg-orange-400 rounded-md py-2 m-4 hover:bg-orange-500 hover:rounded-lg">
          Close
        </button>
        
        <button onClick={copy} className="close-button text-slate-800 px-4 bg-orange-500 rounded-md py-2 m-4 hover:bg-orange-400 hover:rounded-lg">
          Copy
        </button>
        </div>

      </div>
      )}
    </>
  );
};

export default RashiResult;