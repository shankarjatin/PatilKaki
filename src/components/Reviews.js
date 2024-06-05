import React, { useEffect, useRef , useState } from 'react';
import './Reviews.css'
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo5 from '../images/logo5.png'
import logo6 from '../images/logo6.png'
import logo7 from '../images/logo7.png'
import logo8 from '../images/logo8.png'
import img1 from '../images/img-1.jpg'
import img2 from '../images/samosa.jpg';
import img3 from '../images/momo.jpg';
import dp1 from '../images/vanshika_profile.jpg'
import dp2 from '../images/jatin_profile.jpg'
import dp3 from '../images/pratik_profile.jpg'


const cards = [
    {
        description: `D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.`,
        authorPhoto: dp1, // replace with actual image URL
        authorName: 'Vanshika Verma',
        authorTitle: 'Co-founder, Samosa Party',
        cardImage: img2, // replace with actual image URL
        stats: [
            { value: 'upto 95%', label: 'Demand Fulfilment' },
            { value: '< 3%', label: 'Daily Stock-out' },
        ],
    },
    {
        description: `D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.`,
        authorPhoto: dp3, // replace with actual image URL
        authorName: 'Pratik Shankar',
        authorTitle: 'Co-founder, Momo King',
        cardImage: img3, // replace with actual image URL
        stats: [
            { value: 'upto 85%', label: 'Demand Fulfilment' },
            { value: '< 38%', label: 'Daily Stock-out' },
        ],
    },
    {
        description: `D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.`,
        authorPhoto: dp2, // replace with actual image URL
        authorName: 'Jatin Shankar',
        authorTitle: 'Co-founder, Restra Deorians',
        cardImage: img1, // replace with actual image URL
        stats: [
            { value: 'upto 95%', label: 'Demand Fulfilment' },
            { value: '< 1%', label: 'Daily Stock-out' },
        ],
    },
   
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
    <div>
    <div class="overflow-x-hidden">
    <div class="py-12 justify-center animate-marquee grid grid-cols-7 gap-3 whitespace-nowrap ">
        <span class="mx-4 text-4xl"><img src={logo1} className='h-10 w-15' alt='logo'/></span>
        <span class="mx-4 text-4xl"><img src={logo2} className='h-10 w-15' alt='logo'/></span>
        <span class="mx-4 text-4xl"><img src={logo3} className='h-10 w-15' alt='logo'/></span>
        <span class="mx-4 text-4xl"><img src={logo5} className='h-10 w-15' alt='logo'/></span>
        <span class="mx-4 text-4xl"><img src={logo6} className='h-10 w-15' alt='logo'/></span> 
        <span class="mx-4 text-4xl"><img src={logo7} className='h-10 w-15' alt='logo'/></span>
        <span class="mx-4 text-4xl"><img src={logo8} className='h-10 w-15' alt='logo'/></span> 
    </div>
</div>
      
      <div className="container mx-auto py-10">
            <div className="flex flex-col  md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 lg:mx-15 lg:px-20 pt-20">
                    <p className="text-gray-700 mb-4 text-xl  ">{cards[currentCard].description}</p>
                    <div className="flex items-center mb-4 lg:h-10 pt-10 w-fit">
                        <img
                            src={cards[currentCard].authorPhoto}
                            alt={cards[currentCard].authorName}
                            className="w-20 h-20 rounded-full mr-4 my-5 mb-5"
                        />
                        <div>
                            <p className="text-gray-900 font-semibold">{cards[currentCard].authorName}</p>
                            <p className="text-gray-600">{cards[currentCard].authorTitle}</p>
                        </div>
                    </div>
                    <div className="flex justify-start gap-10 my-10 pt-10 text-4xl">
                        <button onClick={prevCard} className="text-purple-500 "><span className='h-100 w-10 '>&lt;</span></button>
                        <button onClick={nextCard} className="text-purple-500">&gt;</button>
                    </div>
                    <div className="flex gap-20 space-x-4">
                        {cards[currentCard].stats.map((stat, index) => (
                            <div key={index} className="text-center rounded-lg px-10 gap-10 bg-purple-100">
                                <p className="text-purple-600 gradient-text text-4xl font-bold">{stat.value}</p>
                                <p className="text-gray-600 pt-3">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-shrink-0 w-full rounded-lg md:w-1/3 bg-gray-100 p-6">
                    <img src={cards[currentCard].cardImage} alt="Samosa Party" className="w-full h-full rounded-3xl object-cover" />
                </div>
            </div>
        </div>
        </div>
  );
};

export default Reviews;