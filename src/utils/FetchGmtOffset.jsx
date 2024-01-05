import cityTimezones from 'city-timezones';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../RashiCalc/toast.css';

const fetchGMTOffset = async (cityName, setGmtOffset) => {
  const cityLookup = cityTimezones.lookupViaCity(cityName);

  if (cityLookup.length > 0) {
    const { lat, lng } = cityLookup[0];
    const timestamp = Math.floor(Date.now() / 1000);
    const apiKey = atob("RUM5S0hQTVVJWUc1");

    const apiUrl = `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lng}&time=${timestamp}`;

    try {
      const response = await axios.get(apiUrl);
      const gmtOffset = response.data.gmtOffset;

      // Convert gmtOffset to the required format like "-05:00"
      const formattedOffset =
        (gmtOffset < 0 ? '-' : '+') +
        Math.abs(gmtOffset / 3600).toString().padStart(2, '0') +
        ':00';

      setGmtOffset(formattedOffset);
      return true //to stop fetching if not true
    } catch (error) {
      console.error('Error fetching data from TimezoneDB:', error.message);
      toast.error("Error fetching timezone, Try again or enter relevant city",{position: toast.POSITION.BOTTOM_LEFT});
  
    }
  } else {
    console.log('City not found');
    toast.error("City not found, enter relevant or popular city",{position: toast.POSITION.BOTTOM_LEFT});
  
  }
};

export default fetchGMTOffset;