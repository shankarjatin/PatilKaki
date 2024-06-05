import React from 'react';

const Content = ({ selectedItem, imageSrc }) => {
  return (
    <div className="w-3/4 p-4">
      <h1 className="text-2xl font-bold mb-4">{selectedItem}</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* This is where the dynamic content will go */}
        <img src={imageSrc} alt={selectedItem} className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default Content;
