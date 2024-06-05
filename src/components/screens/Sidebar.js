import React from 'react';
import './style.css'

const Sidebar = ({ items, onItemClick, expandedItem }) => {
  return (
    <div className="w-full p-4 bg-white overflow-y-auto">
      <ul>
        {items.map((item, index) => (
          <li key={index} className="my-2">
            <div
              className={`p-2 cursor-pointer ${expandedItem === item.name ? ' gradient-text text-3xl' : 'text-3xl -text-black font-semibold '}`}
              onClick={() => onItemClick(item)}
            >
              {item.name}
            </div>
            {expandedItem === item.name && (
              <div className="pl-4 text-sm text-gray-600">
                {item.description}
              </div>
            )}
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
