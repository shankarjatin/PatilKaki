// import React from 'react';
// import img1 from './images/img-1.jpg';
// import img2 from './images/samosa.jpg';
// import img3 from './images/momo.jpg';
// const Sidebar = ({ onItemClick }) => {
//   const items = [
//     { name: 'Accurate Demand Forecasting', image: img1 },
//     { name: 'HELIX: Workflow Automation', image: img2 },
//     { name: 'Automated Purchase Planning', image: img3 },
//     { name: 'Automated Distribution Planning', image: img1},
//     { name: 'Easy Integration', image: img2 },
//     { name: 'Custom Dashboards', image: img3 },
//     { name: 'Consensus Planning', image: img1 },
//   ];

//   return (
//     <div className="w-1/4 p-4 bg-white">
//       <ul>
//         {items.map((item, index) => (
//           <li
//             key={index}
//             className="my-2 p-2 cursor-pointer hover:bg-gray-200"
//             onClick={() => onItemClick(item.name, item.image)}
//           >
//             {item.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';

const Sidebar = ({ items, onItemClick, expandedItems }) => {
  return (
    <div className="w-1/4 p-4 bg-white">
      <ul>
        {items.map((item, index) => (
          <li key={index} className="my-2">
            <div
              className={`p-2 cursor-pointer ${expandedItems[item.name] ? 'bg-gray-200 text-purple-700' : 'hover:bg-gray-200'}`}
              onClick={() => onItemClick(item)}
            >
              {item.name}
            </div>
            {expandedItems[item.name] && (
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
