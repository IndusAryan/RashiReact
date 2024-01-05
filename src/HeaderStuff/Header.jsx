import React from 'react';

function Header() {
    return (
      <header className="bg-[#004daa] p-1 flex justify-between items-center rounded-b-lg">
       
        <div className="flex items-center">
          <img
            src="/assets/GuruVM(1).png"
            alt="Your Logo"
            className="h-14 w-17"
          />
          <span className="text-white text-lg font-italic">𝓐𝓼𝓽𝓻𝓸𝓥𝓜</span>
        </div>
  
        <div className="flex items-center  m-3">
          <a
            href="https://github.com/IndusAryan/RashiReact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mr-4 bg-[#003d88] p-1.5 rounded-lg hover:text-gray-300"
          >
            GitHub Repo
          </a>
          <a
            href="https://github.com/IndusAryan" 
            className="text-white bg-[#003d88] p-1.5 rounded-lg hover:text-gray-300"
          >
            By IndusAryan 🚩
          </a>
        </div>
      </header>
    
    );
  };
  
  export default Header;