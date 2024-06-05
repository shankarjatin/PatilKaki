import React from 'react';

const Content = ({ selectedItem, imageSrc }) => {
  return (
    <div className="container w-full lg:w-3/4 md:w-full sm:w-full lg:rounded-l-3xl md:rounded-l-3xl sm:rounded-3xl lg:ml-4 md:ml-4 sm:mx-4 h-full p-4 bg-gradient-to-r from-purple-400 to-pink-500 flex flex-col justify-center items-center overflow-hidden">
      <div className="p-4 bg-gradient-to-r from-purple-400 to-pink-500 w-full h-full flex flex-col justify-center items-center">
        <img src={imageSrc} alt={selectedItem} className="w-auto h-full max-h-full object-contain rounded-lg" />
      </div>
    </div>
  );
};

export default Content;
