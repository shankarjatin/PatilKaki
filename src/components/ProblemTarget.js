import React, { useState } from 'react';
import Sidebar from './screens/Sidebar';
import Content from './screens/Content';
import img1 from '../images/img-1.jpg';
import img2 from '../images/samosa.jpg';
import img3 from '../images/momo.jpg';

const items = [
  { name: 'Accurate Demand Forecasting', image: img1, description: 'Description for Accurate Demand Forecasting' },
  { name: 'HELIX: Workflow Automation', image: img2, description: 'Description for HELIX: Workflow Automation' },
  { name: 'Automated Purchase Planning', image: img3, description: 'Description for Automated Purchase Planning' },
  { name: 'Automated Distribution Planning', image: img1, description: 'Description for Automated Distribution Planning' },
  { name: 'Easy Integration', image: img2, description: 'Description for Easy Integration' },
  { name: 'Custom Dashboards', image: img3, description: 'Description for Custom Dashboards' },
  { name: 'Consensus Planning', image: img1, description: 'Description for Consensus Planning' },
];

const ProblemTarget = () => {
  const [selectedItem, setSelectedItem] = useState(items[0].name);
  const [imageSrc, setImageSrc] = useState(items[0].image);
  const [description, setDescription] = useState(items[0].description);
  const [expandedItems, setExpandedItems] = useState({});

  const handleItemClick = (item) => {
    setSelectedItem(item.name);
    setImageSrc(item.image);
    setDescription(item.description);
    setExpandedItems((prevState) => ({
      ...prevState,
      [item.name]: !prevState[item.name],
    }));
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-purple-100 to-pink-100">
      <Sidebar items={items} onItemClick={handleItemClick} expandedItems={expandedItems} />
      <Content selectedItem={selectedItem} imageSrc={imageSrc} />
    </div>
  );
};

export default ProblemTarget;
