// import React, { useState } from 'react';
// import Sidebar from './screens/Sidebar';
// import Content from './screens/Content';
// import img1 from '../images/dash1.jpg';
// import img2 from '../images/dash2.jpg';
// import img3 from '../images/dash3.jpg';
// import img4 from '../images/dash4.jpg';
// import img5 from '../images/dash5.jpg';

// const items = [
//   { name: 'Accurate Demand Forecasting', image: img1, description: 'Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts dont: trends, real-time market signals, promotional activities, and even logistics disruptions'},
//   { name: 'HELIX: Workflow Automation', image: img2, description: 'Build and automate custom S&OP workflows to enhance productivity and streamline your processes. Crest helps you get a birds eye view of your supply chain, and help you do things a spreadsheet never can.' },
//   { name: 'Automated Purchase Planning', image: img3, description: 'Description for Automated Purchase Planning' },
//   { name: 'Automated Distribution Planning', image: img1, description: 'Description for Automated Distribution Planning' },
//   { name: 'Easy Integration', image: img4, description: 'Never miss an order, and know exactly how much to order, when, and from whom. This is made possible with constant inventory tracking and automated PO generation. Whats more, Crest improves with every planning cycle as the data set gets richer.' },
//   { name: 'Custom Dashboards', image: img5, description: 'Create customised dashboards to identify important trends, patterns, and insights. Tailor them to match the unique requirements of your team, empowering them to extract data in a user-friendly format that can be easily comprehended.' },
//   { name: 'Consensus Planning', image: img1, description: 'Get inputs from all major stakeholders for the forecast numbers with a multi-level approval process. Compare & visualise the impact of the numbers on major KPIs in real time and take informed decisions with Scenario Planning' },
// ];

// const ProblemTarget = () => {
//   const [selectedItem, setSelectedItem] = useState(items[0].name);
//   const [imageSrc, setImageSrc] = useState(items[0].image);
//   const [description, setDescription] = useState(items[0].description);
//   const [expandedItem, setExpandedItem] = useState(null);

//   const handleItemClick = (item) => {
//     setSelectedItem(item.name);
//     setImageSrc(item.image);
//     setDescription(item.description);
//     setExpandedItem((prevItem) => (prevItem === item.name ? null : item.name));
//   };

//   return (
//     <div>
//          <div className="text-center items-center py-10">
//           <h1 className="text-5xl items-center font-bold mb-8 self-center">Things your spreadsheet wishes it could do</h1>
//         </div>
//     <div className="flex  h-screen  overflow-hidden">
//       <Sidebar items={items} onItemClick={handleItemClick} expandedItem={expandedItem} />
//       <Content selectedItem={selectedItem} imageSrc={imageSrc} />
//     </div>
//     </div>
//   );
// };

// export default ProblemTarget;

import React, { useState } from 'react';
import Sidebar from './screens/Sidebar';
import Content from './screens/Content';
import img1 from '../images/dash1.jpg';
import img2 from '../images/dash2.jpg';
import img3 from '../images/dash3.jpg';
import img4 from '../images/dash4.jpg';
import img5 from '../images/dash5.jpg';

const items = [
  { name: 'Accurate Demand Forecasting', image: img1, description: 'Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts dont: trends, real-time market signals, promotional activities, and even logistics disruptions' },
  { name: 'HELIX: Workflow Automation', image: img2, description: 'Build and automate custom S&OP workflows to enhance productivity and streamline your processes. Crest helps you get a birds eye view of your supply chain, and help you do things a spreadsheet never can.' },
  { name: 'Automated Purchase Planning', image: img3, description: 'Description for Automated Purchase Planning' },
  { name: 'Automated Distribution Planning', image: img1, description: 'Description for Automated Distribution Planning' },
  { name: 'Easy Integration', image: img4, description: 'Never miss an order, and know exactly how much to order, when, and from whom. This is made possible with constant inventory tracking and automated PO generation. Whats more, Crest improves with every planning cycle as the data set gets richer.' },
  { name: 'Custom Dashboards', image: img5, description: 'Create customised dashboards to identify important trends, patterns, and insights. Tailor them to match the unique requirements of your team, empowering them to extract data in a user-friendly format that can be easily comprehended.' },
  { name: 'Consensus Planning', image: img1, description: 'Get inputs from all major stakeholders for the forecast numbers with a multi-level approval process. Compare & visualise the impact of the numbers on major KPIs in real time and take informed decisions with Scenario Planning' },
];

const ProblemTarget = () => {
  const [selectedItem, setSelectedItem] = useState(items[0].name);
  const [imageSrc, setImageSrc] = useState(items[0].image);
  const [description, setDescription] = useState(items[0].description);
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item.name);
    setImageSrc(item.image);
    setDescription(item.description);
    setExpandedItem((prevItem) => (prevItem === item.name ? null : item.name));
  };

  return (
    <div>
      <div className="text-center items-center py-10">
        <h1 className="text-5xl font-bold mb-8">Things your spreadsheet wishes it could do</h1>
      </div>
      <div className="flex flex-col-reverse lg:flex-row md:flex-row h-screen overflow-hidden">
        <Sidebar items={items} onItemClick={handleItemClick} expandedItem={expandedItem} />
        <Content selectedItem={selectedItem} imageSrc={imageSrc} />
      </div>
    </div>
  );
};

export default ProblemTarget;
