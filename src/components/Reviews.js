import React, { useState } from 'react';
import './Reviews.css';
import logo1 from '../images/asset 34.svg';
import logo2 from '../images/asset 35.svg';
import logo3 from '../images/asset 36.svg';
import logo4 from '../images/asset 37.svg';
import logo5 from '../images/asset 38.svg';
import logo6 from '../images/asset 39.svg';
import logo7 from '../images/asset 40.svg';
import logo8 from '../images/asset 41.svg';
import img1 from '../images/asset 61.webp';
import img2 from '../images/asset 57.webp';
import img3 from '../images/momo.jpg';
import dp1 from '../images/asset 54.webp';
import dp2 from '../images/asset 59.jpeg';
import dp3 from '../images/pratik_profile.jpg';

const cards = [
  {
    description: `D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.`,
    authorPhoto: dp1,
    authorName: 'Vanshika Verma',
    authorTitle: 'Co-founder, Samosa Party',
    cardImage: img1,
    stats: [
      { value: 'upto 95%', label: 'Demand Fulfilment' },
      { value: '< 3%', label: 'Daily Stock-out' },
    ],
  },
  {
    description: `D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.`,
    authorPhoto: dp2,
    authorName: 'Pratik Shankar',
    authorTitle: 'Co-founder, Momo King',
    cardImage: img2,
    stats: [
      { value: 'upto 85%', label: 'Demand Fulfilment' },
      { value: '< 38%', label: 'Daily Stock-out' },
    ],
  },
 
];

const Reviews = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const prevCard = () => {
    setCurrentCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setCurrentCard((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="wrapper">
      <div className="item item1"><img src={logo1}/></div>
      <div className="item item2"><img src={logo2}/></div>
      <div className="item item3"><img src={logo3}/></div>
      <div className="item item4"><img src={logo4}/></div>
      <div className="item item5"><img src={logo5}/></div>
      <div className="item item6"><img src={logo6}/></div>
      <div className="item item7"><img src={logo7}/></div>
      <div className="item item8"><img src={logo8}/></div>
    </div>

      <div className="container mx-auto py-10 px-4 md:px-0">
        <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="md:flex-shrink-0 w-full md:w-1/3 bg-gray-100 p-6">
            <img src={cards[currentCard].cardImage} alt="Samosa Party" className="w-full h-full rounded-3xl object-cover" />
          </div>
          <div className="flex-1 lg:mx-15 lg:px-20 pt-10 md:pt-20">
            <p className="text-gray-700 mb-4 text-xl">{cards[currentCard].description}</p>
            <div className="flex items-center mb-4 ">
              <img
                src={cards[currentCard].authorPhoto}
                alt={cards[currentCard].authorName}
                className="w-20 h-20 rounded-full mr-4  mb-1"
              />
              <div>
                <p className="text-gray-900 font-semibold">{cards[currentCard].authorName}</p>
                <p className="text-gray-600">{cards[currentCard].authorTitle}</p>
              </div>
            </div>
            <div className="flex justify-start gap-10 py-2 text-4xl">
              <button onClick={prevCard} className="text-purple-500">&lt;</button>
              <button onClick={nextCard} className="text-purple-500">&gt;</button>
            </div>
            <div className="flex flex-col md:flex-row gap-4 pb-10">
              {cards[currentCard].stats.map((stat, index) => (
                <div key={index} className="text-center rounded-lg px-10 bg-purple-100">
                  <p className="text-purple-600 gradient-text text-4xl font-bold">{stat.value}</p>
                  <p className="text-gray-600 pt-3">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .flex-row {
            flex-direction: column-reverse;
          }

          .text-xl {
            font-size: 0.875rem;
          }

          .pt-20 {
            padding-top: 1rem;
          }

          .gap-4 {
            gap: 1rem;
          }

          .text-4xl {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Reviews;
