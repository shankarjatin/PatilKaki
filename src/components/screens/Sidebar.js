import React from 'react';
import './style.css';

const Sidebar = ({ items, onItemClick, expandedItem }) => {
  return (
    <div className="lg:w-1/2 sm:w-4/4 md:w-4/4 px-10 mr-10  overflow-y-auto">
      <ul className='justify-evenly'>
        {items.map((item, index) => (
          <li key={index} className="my-2 gap-5">
            <div
              className={`py-3 cursor-pointer ${expandedItem === item.name ? 'gradient-text text-3xl' : 'text-3xl text-black font-semibold'}`}
              onClick={() => onItemClick(item)}
            >
              {item.name}
            </div>
            <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${expandedItem === item.name ? 'max-h-40' : 'max-h-0'}`}>
              <div className=" text-l text-gray-800">
                {item.description}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
