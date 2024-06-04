import React, { useState } from 'react';
import './KeyMetrics.css'

const KeyMetrics = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  function animate(obj, initVal, lastVal, duration) {
    let startTime = null;

 //get the current timestamp and assign it to the currentTime variable
 let currentTime = Date.now();

 //pass the current timestamp to the step function
 const step = (currentTime ) => {

 //if the start time is null, assign the current time to startTime
 if (!startTime) {
    startTime = currentTime ;
 }

 //calculate the value to be used in calculating the number to be displayed
 const progress = Math.min((currentTime - startTime)/ duration, 1);

 //calculate what to be displayed using the value gotten above
 obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

 //checking to make sure the counter does not exceed the last value (lastVal)
 if (progress < 1) {
    window.requestAnimationFrame(step);
 } else {
       window.cancelAnimationFrame(window.requestAnimationFrame(step));
    }
 };
 //start animating
    window.requestAnimationFrame(step);
 }
 let text1 = document.getElementById('1');
 let text2 = document.getElementById('2');
 let text3 = document.getElementById('3');
 const load = () => {
    animate(text1, 0, 511, 7000);
    animate(text2, 0, 232, 7000);
    animate(text3, 100, 25, 7000);
 }

  return (
    <div className="bg-black text-white min-h-screen  justify-center items-center">
        <div className="grid gird-cols-4">
      <div className="col-span-1  grid gird-cols-1 lg:pl-20 pt-20 gap-10 mb-8 ">
      <button
          className={` py-2 w-24 rounded-full transition-colors duration-300 ${
            activeButton === 1 ? 'border-solid border-2 border-purple-400 rounded-md transition-colors duration-300' : ''
          }`}
          onClick={() => handleButtonClick(1)}
        >
          Button 1
        </button>

        <button
          className={` py-2 w-24 rounded-full transition-colors duration-300 ${
            activeButton === 2 ? 'border-solid border-2 border-purple-400 rounded-md transition-colors duration-300' : ''
          }`}
          onClick={() => handleButtonClick(2)}
        >
          Button 2
        </button>
        <button
          className={` py-2  w-24 rounded-full transition-colors duration-300 ${
            activeButton === 3 ? 'border-solid border-2 border-purple-400 rounded-md transition-colors duration-300' : ''
          }`}
          onClick={() => handleButtonClick(3)}
        >
          Button 3
        </button>
      </div>


      <div className="col-span-3 items-center">
        {activeButton === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4"><span id='1'>85%</span></h2>
            <p>Reduction in out-of-stock</p>
          </div>
        )}
        {activeButton === 2 && (
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4"> <span id='2'>25 </span>Days</h2>
            <p>Reduction in cash recovery time</p>
          </div>
        )}
        {activeButton === 3 && (
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4"> <span id='3'>15 </span>%</h2>
            <p>Growth in revenue</p>
          </div>
        )}
      </div>

    </div>
    </div>
  );
};

export default KeyMetrics;