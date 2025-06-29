import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FrontPage from './FrontPage'


function App() {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <div className="w-full h-screen">
      {!videoEnded ? (
        <div className="relative w-full h-screen overflow-hidden">
          <video
            src="/AK.mp4"
            autoPlay
            muted
            className="w-full h-full object-cover"
            onEnded={handleVideoEnd}
          />
          <div className="absolute inset-0 flex items-center justify-center pt-170 bg-black/30">
            <h1 className="text-white text-5xl font-bold">Anushka <span className='text-purple-600'>Katole</span> </h1>
          </div>
        </div>
      ) : (
        <FrontPage />
      )}
    </div>
  );
}

export default App;
