import React from 'react'
import ReactDOM from 'react-dom/client'
import MoonCalculator from './RashiCalc/MoonCalculator.jsx'
import './index.css'
import Header from './HeaderStuff/Header.jsx'
import Cover from './HeaderStuff/Cover.jsx'
import Tabs from './Tabs/Tabs.jsx'
import SunCalculator from './RashiCalc/SunCalculator.jsx'
import { useState } from 'react'

function App() {
    const [activeTab, setActiveTab] = useState('sun'); // 'sun' or 'moon'
    const [coverImage, setCoverImage] = useState('src/assets/cover.jpg');

    const handleTabClick = (tab) => {
      setActiveTab(tab);

      if (tab === 'sun') {
        setCoverImage('src/assets/suncover.jpg');
      } else if (tab === 'moon') {
        setCoverImage('src/assets/mooncover.jpeg');
      }
    };
  
    return (
      <>
        <Header />
        <Cover coverImage={coverImage} setCoverImage={setCoverImage} />
        <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
        {activeTab === 'sun' ? <SunCalculator /> : <MoonCalculator />}
      </>
    );
  }
  
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
