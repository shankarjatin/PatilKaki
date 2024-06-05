import React from 'react';

const Content = ({ selectedItem, imageSrc }) => {
  return (
    <div className="w-3/4 h-full p-4 flex flex-col justify-center items-center overflow-hidden">
      <h1 className="text-2xl font-bold mb-4">{selectedItem}</h1>
      <div className="bg-white p-4 rounded-lg shadow-md w-full h-full flex flex-col justify-center items-center">
        <img src={imageSrc} alt={selectedItem} className="w-auto h-full max-h-full rounded-lg object-contain" />
      </div>
    </div>
  );
};

export default Content;
