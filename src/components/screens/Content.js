import React from 'react';

const Content = ({ selectedItem, imageSrc }) => {
  return (
    <div className="w-3/4 rounded-l-3xl h-full p-4 bg-gradient-to-r from-purple-400 to-pink-500 flex flex-col justify-center items-center overflow-hidden">
      <div className=" p-4 rounded-lg  bg-gradient-to-r from-purple-400 to-pink-500 w-full h-full flex flex-col justify-center items-center">
        <img src={imageSrc} alt={selectedItem} className="w-auto h-full max-h-full rounded-lg object-contain" />
      </div>
    </div>
  );
};

export default Content;
