import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const BlogCarousel = () => {
  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollContainer.current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      scrollContainer.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">

      <div className="grid grid-cols-4 mt-6 mb-6">
        <div className='col-span-1 lg:pl-10 lg:pr-4'>
      <h2 className="text-4xl font-bold mb-4">Delivered: The Crest blog</h2>
      <p className="mb-6 lg:py-8">
        Insights from years of working in various supply-chain roles (and an itch to write). We hope you find these posts interesting!
      </p>

      <div className="flex items-center">
        <div className="flex flex-row space-y-2 gap-4">
          <button
            onClick={() => scroll('left')}
            className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white"
          >
            <FaChevronRight />
          </button>
        </div>
        </div>
        <div className="flex  mt-16">
        <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full">
          View all blogs
        </button>
       
      </div>
        </div>
        <div className='col-span-3'>
        <div
          ref={scrollContainer}
          className="flex overflow-x-hidden space-x-4 scrollbar-hide mx-4 "
        >
          {[
            {
              title: 'Impact of RPA (Robotic Process Automation) in Supply Chain',
              date: 'Oct 12, 2023',
              img: '/path_to_image_1', // Update the image path
            },
            {
              title: 'Creating an Impact with Inventory Planning: The QSR Edition',
              date: 'Aug 28, 2023',
              img: '/path_to_image_2', // Update the image path
            },
            {
              title: 'The Ultimate Guide to Supply Chain Success',
              date: 'Aug 4, 2023',
              img: '/path_to_image_3', // Update the image path
            },
            {
              title: 'The Ultimate Guide to Supply Chain Success',
              date: 'Aug 4, 2023',
              img: '/path_to_image_3', // Update the image path
            },
            {
              title: 'The Ultimate Guide to Supply Chain Success',
              date: 'Aug 4, 2023',
              img: '/path_to_image_3', // Update the image path
            },
          ].map((post, index) => (
            <div
              key={index}
              className="min-w-[400px] bg-white rounded-lg shadow-lg p-4"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{post.title}</h3>
              <p className="text-gray-500 mt-2">{post.date}</p>
            </div>
          ))}
        </div>
        </div>
      
      </div>

     
    </div>
  );
};

export default BlogCarousel;
