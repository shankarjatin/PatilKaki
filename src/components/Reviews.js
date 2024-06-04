import React, { useEffect, useRef , useState } from 'react';
import './Reviews.css'
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo5 from '../images/logo5.png'
import logo6 from '../images/logo6.png'
import logo7 from '../images/logo5.png'

const cards = [
    {
        description: `D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.`,
        authorPhoto: 'https://via.placeholder.com/150', // replace with actual image URL
        authorName: 'Diksha Pande',
        authorTitle: 'Co-founder, Samosa Party',
        cardImage: 'https://via.placeholder.com/300', // replace with actual image URL
        stats: [
            { value: 'upto 95%', label: 'Demand Fulfilment' },
            { value: '< 3%', label: 'Daily Stock-out' },
        ],
    },
    {
        description: `equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.`,
        authorPhoto: 'https://via.placeholder.com/150', // replace with actual image URL
        authorName: 'Diksha Pande',
        authorTitle: 'Co-founder, Samosa Party',
        cardImage: 'https://via.placeholder.com/300', // replace with actual image URL
        stats: [
            { value: 'upto 95%', label: 'Demand Fulfilment' },
            { value: '< 3%', label: 'Daily Stock-out' },
        ],
    },
    {
        description: `D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.`,
        authorPhoto: 'https://via.placeholder.com/150', // replace with actual image URL
        authorName: 'Diksha Pande',
        authorTitle: 'Co-founder, Samosa Party',
        cardImage: 'https://via.placeholder.com/300', // replace with actual image URL
        stats: [
            { value: 'upto 95%', label: 'Demand Fulfilment' },
            { value: '< 3%', label: 'Daily Stock-out' },
        ],
    }
    // Add more cards here if needed
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
    <div className="logos md-10" >
      <div className=" wrapper ">
        <img src={logo1} alt="3M Logo" className="item item1" />
        <img src={logo2} alt="3M Logo" className="item item2" />
        <img src={logo3} alt="3M Logo" className="item item3" />
        <img src={logo5} alt="3M Logo" className="item item4" />
        <img src={logo6} alt="3M Logo" className="item item5" />
        <img src={logo7} alt="3M Logo" className="item item6" />
      </div>
      <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 p-6">
                    <p className="text-gray-700 mb-4">{cards[currentCard].description}</p>
                    <div className="flex items-center mb-4">
                        <img
                            src={cards[currentCard].authorPhoto}
                            alt={cards[currentCard].authorName}
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                            <p className="text-gray-900 font-semibold">{cards[currentCard].authorName}</p>
                            <p className="text-gray-600">{cards[currentCard].authorTitle}</p>
                        </div>
                    </div>
                    <div className="flex justify-between mb-4">
                        <button onClick={prevCard} className="text-purple-500">&lt;</button>
                        <button onClick={nextCard} className="text-purple-500">&gt;</button>
                    </div>
                    <div className="flex space-x-4">
                        {cards[currentCard].stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <p className="text-purple-600 text-xl font-semibold">{stat.value}</p>
                                <p className="text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/3 bg-gray-100 p-6">
                    <img src={cards[currentCard].cardImage} alt="Samosa Party" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Reviews;