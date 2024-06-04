import React, { useState, useEffect } from 'react';
import './KeyMetrics.css';
import styles from "./KeyMetrics.css";

const KeyMetrics = () => {
  const [activeButton, setActiveButton] = useState(1);

  useEffect(() => {
    if (activeButton !== null) {
      load();
    }
  }, [activeButton]);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  function animate(obj, initVal, lastVal, duration) {
    let startTime = null;

    const step = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min((currentTime - startTime) / duration, 1);
      obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }

  const load = () => {
    const text1 = document.getElementById('1');
    const text2 = document.getElementById('2');
    const text3 = document.getElementById('3');

    if (activeButton === 1 && text1) {
      animate(text1, 0, 85, 7000);
    }
    if (activeButton === 2 && text2) {
      animate(text2, 0, 25, 7000);
    }
    if (activeButton === 3 && text3) {
      animate(text3, 0, 15, 7000);
    }
  };

  return (
    <div className="bg text-white font-bold text-xl min-h-screen  justify-center items-center" id='grad4'>
         <div className="absolute inset-0 background-img w-100 h-100">
        
      </div>
        <div className="grid gird-cols-4">
      <div className="col-span-1  grid gird-cols-1 lg:pl-20 pt-20 gap-10 mb-8 ">
      <button
          className={` py-2 px-4 w-fit rounded-full transition-colors duration-300 ${
            activeButton === 1 ? 'border-solid border-2 border-purple-400 rounded-md transition-colors duration-300' : ''
          }`}
          onClick={() => handleButtonClick(1)}
        >
          Stockouts
        </button>

        <button
          className={` w-fit py-2 px-4 rounded-full transition-colors duration-300 ${
            activeButton === 2 ? 'border-solid border-2 border-purple-400 rounded-md transition-colors duration-300' : ''
          }`}
          onClick={() => handleButtonClick(2)}
        >
          Cash recovery cycle
        </button>
        <button
          className={` w-fit py-2 px-4 rounded-full transition-colors duration-300 ${
            activeButton === 3 ? 'border-solid border-2 border-purple-400 rounded-md transition-colors duration-300' : ''
          }`}
          onClick={() => handleButtonClick(3)}
        >
        Revnue
        </button>
      </div>
     



      <div className="col-span-3 items-center">
        {activeButton === 1 && (
          <div className="text-center">
            <h2 className="text-6xl font-extrabold mb-4"><span className='text-9xl gradient-text' id='1'>85</span>%</h2>
            <p className='text-4xl'>Reduction in out-of-stock</p>
          </div>
        )}
        {activeButton === 2 && (
          <div className="text-center ">
            <h2 className="text-6xl font-extrabold mb-4"> <span className='text-9xl gradient-text' id='2'>25 </span>Days</h2>
            <p className='text-4xl'>Reduction in cash recovery time</p>
          </div>
        )}
        {activeButton === 3 && (
          <div className="text-center">
            <h2 className="text-6xl font-extrabold mb-4"> <span  className='text-9xl gradient-text'id='3'>15 </span>%</h2>
            <p className='text-4xl'>Growth in revenue</p>
          </div>
        )}
      </div>
  
    </div>
 
    <div className="bottomBlur ml-250" />
    </div>
  );
};

export default KeyMetrics;