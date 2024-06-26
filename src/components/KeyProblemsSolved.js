import React from 'react';
import item1 from '../images/item1.svg'
import item2 from '../images/item2.svg'
import item3 from '../images/item3.svg'
import item4 from '../images/item4.svg'
const KeyProblemsSolved = () => {
  const questions = [
    {
      icon: '📄',
      title: 'What to order',
      description:
        'Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.',
    },
    {
      icon: '🛍️',
      title: 'When to order',
      description:
        'Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you\'re never left guessing.',
    },
    {
      icon: '📦',
      title: 'How much to stock',
      description:
        'Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.',
    },
    {
      icon: '🏠',
      title: 'Where to place',
      description:
        'Our tool suggests how to move stock within your supply chain. So youll always have products available across cities.',
    }
  ];

  return (
    <div className="main flex px-10 mx-0 py-10">
      <div className="w-4xl">
        <div className="text-center items-center py-10 pb-4 mb-10">
          <h1 className="text-5xl items-center font-bold mb-8 self-center">Four key questions answered by Crest</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-8 gap-4 items-center justify-start">
          {questions.map((question, index) => (
            <div
              key={index}
              className="bg-purple-100 rounded-lg p-4 flex flex-col items-start"
            > 
              <span className="text-7xl mb-2">{question.icon}</span>
              <h2 className="text-3xl font-semibold mb-2">{question.title}</h2>
              <p className="text-l py-6 ">{question.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyProblemsSolved;
