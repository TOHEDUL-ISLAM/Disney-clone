import { useState, useEffect } from 'react';

const DisNiLogo = ({ size }) => {
  const [glitch, setGlitch] = useState(false);
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 600);
    }, 5000);
    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="inline-flex items-center group">
      <h1 className={`font-black tracking-tight transition-all duration-300 ${size} ${glitch ? 'skew-x-12' : ''}`}>
        <span className=" font-thin font-sans text-white hover:text-zinc-600 transition-colors">
          D
        </span>
        <span className=" font-thin font-sans  text-white hover:text-zinc-600 transition-colors">
            is
        </span>
        <span className="relative">
          <span className={`bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text ${glitch ? 'opacity-90' : ''}`}>
            NI
          </span>
          <span className={`absolute top-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text transition-opacity ${glitch ? 'opacity-70 translate-x-1' : 'opacity-0'}`}>
            NI
          </span>
          <span className={`absolute top-0 left-0 bg-gradient-to-r from-rose-500 to-red-500 text-transparent bg-clip-text transition-opacity ${glitch ? 'opacity-70 -translate-x-1' : 'opacity-0'}`}>
            NI
          </span>
        </span>
      </h1>
    </div>
  );
};

export default DisNiLogo;
