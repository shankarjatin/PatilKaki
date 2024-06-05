import React, { useState, useEffect } from 'react';
import './carousal.css'; // Custom CSS for smooth transition
import dp1 from '../images/back2.svg';
import dp2 from '../images/back3.png';
import dp3 from '../images/back4.svg';

const cards = [
  {
    id: 1,
    title: 'A focus on KPIs that matter',
    content: 'Our tools help you make decisions to grow your business. Everything works towards improving cash flow and product availability.',
    image: dp1
  },
  {
    id: 2,
    title: 'A focus on KPIs that matter',
    content: 'Our tools help you make decisions to grow your business. Everything works towards improving cash flow and product availability.',
    image: dp2
  },
  {
    id: 3,
    title: 'A focus on KPIs that matter',
    content: 'Our tools help you make decisions to grow your business. Everything works towards improving cash flow and product availability.',
    image: dp3
  },
  // Add more cards as needed
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const isMobile = window.innerWidth <= 768;

  const nextCard = () => {
    setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const prevCard = () => {
    setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        nextCard();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <div className="relative w-full h-screen overflow-hidden mt-10">
      <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
        {cards.map((card) => (
          <div key={card.id} className="min-w-full bg-purple-100 flex items-center justify-center h-full p-4">
            <div className="w-full max-w-screen-lg bg-gray-100 h-250 bg-custom-blue rounded-3xl flex mx-8 flex-col md:flex-row">
              <div className="w-1-2 flex w-full h-full items-center justify-center p-4">
                <img src={card.image} alt="Profile" className="w-100 h-100 rounded-3xl" />
              </div>
              <div className="w-1-2 flex flex-col justify-center p-6">
                <h1 className="text-2xl font-semibold mb-4">{card.title}</h1>
                <p className="text-lg">{card.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevCard} className="carousel-button absolute w-20 h-20 left-20 top-1-3 transform -translate-y-1/2 bg-gray-100 text-white ml-8 border-purple-400 border-2 rounded-full">
        <span className='text-2xl text-purple-400'>&lt;</span>
      </button>
      <button onClick={nextCard} className="carousel-button absolute w-20 h-20 right-20 top-1-3 transform -translate-y-1/2 bg-gray-100 text-white mr-8 border-purple-400 border-2 rounded-full">
        <span className='text-2xl text-purple-400'>&gt;</span>
      </button>
    </div>
  );
};

export default Carousel;
