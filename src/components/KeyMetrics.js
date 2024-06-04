import React, { useState } from 'react';

const KeyMetrics = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <div className="flex space-x-4 mb-8">
        <button
          className={`px-4 py-2 rounded-md transition-colors duration-300 ${
            activeButton === 1 ? 'bg-purple-500' : 'bg-gray-700 hover:bg-gray-600'
          }`}
          onClick={() => handleButtonClick(1)}
        >
          Button 1
        </button>
        <button
          className={`px-4 py-2 rounded-md transition-colors duration-300 ${
            activeButton === 2 ? 'bg-purple-500' : 'bg-gray-700 hover:bg-gray-600'
          }`}
          onClick={() => handleButtonClick(2)}
        >
          Button 2
        </button>
        <button
          className={`px-4 py-2 rounded-md transition-colors duration-300 ${
            activeButton === 3 ? 'bg-purple-500' : 'bg-gray-700 hover:bg-gray-600'
          }`}
          onClick={() => handleButtonClick(3)}
        >
          Button 3
        </button>
      </div>
      <div className="flex flex-col items-center">
        {activeButton === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">85%</h2>
            <p>Reduction in out-of-stock</p>
          </div>
        )}
        {activeButton === 2 && (
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">25 Days</h2>
            <p>Reduction in cash recovery time</p>
          </div>
        )}
        {activeButton === 3 && (
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">15%</h2>
            <p>Growth in revenue</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default KeyMetrics;