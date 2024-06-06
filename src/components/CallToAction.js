import React from 'react';
import './CallToAction.css'; // Make sure to import the CSS file

const CallToAction = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="animated-gradient text-white p-10 mx-20 rounded-lg min-w-100 h-200 text-center">
        <h1 className="text-6xl font-bold py-10 mb-4">You can grow faster than you think!</h1>
        <p className="mb-10 items-center justify-center px-60">
          Plan with Crest to fulfill your demand today, and dreams tomorrow. We bring the methods and technologies of large global companies to help brands of all sizes scale.
        </p>
        <button className="bg-black text-white mt-10 py-2 px-4 rounded hover:bg-gray-800">
          Get started with Crest
        </button>
      </div>
    </div>
  );
}

export default CallToAction;
