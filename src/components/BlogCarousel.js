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
      <h2 className="text-4xl font-bold mb-4">Delivered: The Crest blog</h2>
      <p className="mb-6">
        Insights from years of working in various supply-chain roles (and an itch to write). We hope you find these posts interesting!
      </p>

      <div className="flex items-center">
        <div className="flex flex-col space-y-2">
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

        <div
          ref={scrollContainer}
          className="flex overflow-x-scroll space-x-4 scrollbar-hide mx-4"
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
          ].map((post, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white rounded-lg shadow-lg p-4"
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

      <div className="flex justify-center mt-4">
        <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full">
          View all blogs
        </button>
      </div>
    </div>
  );
};

export default BlogCarousel;
