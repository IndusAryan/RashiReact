import { useState } from 'react';
import axios from 'axios';
import fetchGMTOffset from '../utils/FetchGmtOffset.jsx';
import '../App.css';
import TimePicker from '../utils/TimePicker';
import { MoonLoadingCard } from '../Result/MoonLoading';
import Data from '../Data.json';
import RashiResult from '../Result/Rashi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../RashiCalc/toast.css';

function MoonCalculator() {
   
    const [cityName, setCityName] = useState('');
    const [gmtOffset, setGmtOffset] = useState(null);
    const [hour, setHour] = useState('12');
    const [minute, setMinute] = useState('00');
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [showMoonCard, setShowMoonCard] = useState(false)
    const [showRashiResult, setShowRashiResult] = useState(false);
    const [moonSign, setMoonSign] = useState('');
    const [zodiacSign, setZodiacSign] = useState('');
    const handleHourChange = (e) => {
      setHour(e.target.value);
    };
  
    const handleMinuteChange = (e) => {
      setMinute(e.target.value);
    };
    
      const handleNameChange = (e) => {
        setName(e.target.value);
      };

    const handleDobChange = (e) => {
      setDob(e.target.value);
    };
    
    const showToast = () => {
      toast.error('Please fill complete details', {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    };
  
     async function vedastro() {

       // Split the DOB into day, month, and year
       const dobParts = dob.split('-');
       const day = dobParts[2];
       const month = dobParts[1];
       const year = dobParts[0];

      // Use the GMT offset to construct the time string for the vedastro API
      const vedastroApiUrl = `https://api.vedastro.org/Calculate/AllPlanetData/PlanetName/Moon/Location/${cityName}/Time/${hour}:${minute}/${day}/${month}/${year}/${gmtOffset}`;
   
      try {
        const response = await axios.get(vedastroApiUrl);
        const { Payload } = response.data;
        const { AllPlanetData } = Payload;
        const { PlanetZodiacSign } = AllPlanetData;
        const newZodiacSign = PlanetZodiacSign.Name;
       

        console.log('Hour:', hour);
        console.log('Minute:', minute);
        console.log('City:', cityName);
        console.log('Name', name);
        console.log('DOB:', dob);
        console.log('GMT:', gmtOffset);
        console.log('Planet Zodiac Sign:', newZodiacSign);

      // Set moonSign state for RashiResult component
    
      setMoonSign(zodiacSign);
      setTimeout(()=> {
      setShowRashiResult(true)}, 4000);
      setZodiacSign(newZodiacSign);
      } catch (error) {
        console.error('Error fetching data from vedastro API:', error.message);
        toast.error('Error encountered, Check your connection', {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      }
    };

      const handleInputChange = (e) => {
        setCityName(e.target.value);
      };
    
      const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (cityName && dob) {

        setShowMoonCard(true);
    
        setTimeout(() => {
          setShowMoonCard(false);
        }, 5000);

        
        setShowRashiResult(false);
       

        const cityFound = await fetchGMTOffset(cityName, setGmtOffset);

        if(!cityFound) {} else {
        
          vedastro();}
      } 
      else {showToast(),console.log('Enter Details')}
      };

  return (
    <>

      <div>
    {showMoonCard && <MoonLoadingCard />}</div>
    <ToastContainer />
    <div>{showRashiResult && (
        <RashiResult
          imageSrc={`/assets/Rashis/${zodiacSign}.jpg`}
          description={Data.moonSign[zodiacSign] || "Not available."}
        />
      )}</div>

<form onSubmit={handleFormSubmit} className="flex flex-col justify-center items-center m-0 mt-3 mb-10">
  <div className="mb-4  items-center flex flex-col">
    <label htmlFor="name" className="block text-lg text-slate-300 font-semibold mb-2">
      Name
    </label>
    <input
      className='p-2 border rounded-md w-full sm:w-64 focus:border-blue-500 hover:border-blue-500 bg-transparent text-slate-50'
      type='text'
      id="name"
      placeholder='Your Name'
      value={name}
      onChange={handleNameChange}
    />
  </div>

  <div className="mb-4 flex items-center flex-col">
    <label htmlFor="dob" className="block text-lg text-slate-300 font-semibold mb-2">
      Date of Birth
    </label>
    <input
      className='p-2 border rounded-md w-full sm:w-64 focus:border-blue-500 hover:border-blue-500 bg-transparent text-slate-50'
      type='date'
      id="dob"
      value={dob}
      onChange={handleDobChange}
    />
  </div>

  <TimePicker 
    hour={hour}
    minute={minute}
    onHourChange={handleHourChange}
    onMinuteChange={handleMinuteChange} />

  <div className="mb-4 flex items-center flex-col">
    <label htmlFor="city" className="block text-lg text-slate-300 font-semibold mb-2">
      City Name
    </label>
    <input
      className='p-2 border rounded-md w-full sm:w-64 focus:border-blue-500 hover:border-blue-500 bg-transparent text-slate-50'
      type='text'
      id="city"
      placeholder='City name'
      value={cityName}
      onChange={handleInputChange}
    />
  </div>

  <button className='bg-blue-700 hover:bg-blue-800 text-white font-italic sm:w-auto items-center py-2 px-4 rounded-lg'>
    Calculate MoonSign
  </button>
</form>
   
    </>
  )
}

export default MoonCalculator;

