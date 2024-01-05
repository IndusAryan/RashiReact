import  { React, useState, useEffect } from 'react';
import SunCard from '../Result/Loading';
import { getSunSign } from '../utils/GetSunSign';
import RashiResult from '../Result/Rashi';
import Data from '../Data.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../RashiCalc/toast.css';

const SunCalculator = () => {
  const [dob, setDOB] = useState(''); // State to store the date of birth
  const [showSunCard, setShowSunCard] = useState(false); // State to manage the visibility of SunCard
  const [showCard, setShowCard] = useState(false);
  const sunSign = getSunSign(dob);
  
  const handleDOBChange = (e) => {
    setDOB(e.target.value);
    console.log(dob);
   
  };

  const fetchSun = () => {
    
    console.log(`Sun Sign: ${sunSign}`);
   
    if (sunSign !== 'Invalid Date') {
    
    setShowSunCard(true);
    
    setTimeout(() => {
      setShowSunCard(false);
    }, 2000);

    setTimeout(() => {
    
      setShowCard(true);
    }, 2500);
  } else {toast.error('Please enter DOB', {
    position: toast.POSITION.BOTTOM_LEFT,
  });}
}; 

  useEffect(() => {
  
    return () => {
      clearTimeout();
    };
  }, []);

  const resetCard = () => {
    setShowCard(false);
  };

  return (
    <>
    <div>
    {showSunCard && <SunCard />}</div>
    <div>
    <ToastContainer />
    {showCard && (
      <RashiResult
        imageSrc={`src/assets/Rashis/${sunSign}.jpg`}
        description={Data.sunSign[sunSign] || "Not available."}
        
      />
      )}</div>
    <div className="mt-4">
      
      <label className="block text-lg text-slate-300 font-semibold mb-2">Enter your Date of Birth :</label>
      <input
        type="date"
        max="2010-12-31"
        min="1961-01-01"
        value={dob}
        onChange={handleDOBChange}
        className="px-4 py-2 border cursor-text rounded-md focus:outline-none w-48 md:w-80 
        lg:w-120 focus:border-blue-500 hover:border-blue-500 bg-transparent text-slate-50"
      />  
      
        <button className="text-slate-800 px-4 bg-orange-400 rounded-md py-2 m-4 
         hover:bg-orange-500 hover:rounded-lg" onClick={()=> {
          fetchSun(); 
          resetCard();
          }}>Get SunSign</button>
    </div>
    </>
  );
};

export default SunCalculator;
