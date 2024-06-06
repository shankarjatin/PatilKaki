import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import blog1 from '../images/asset 86.png';
import blog2 from '../images/asset 87.png';
import blog3 from '../images/asset 88.jpeg';
import blog4 from '../images/asset 89.png';
import blog5 from '../images/asset 90.png';
import blog6 from '../images/asset 91.png';

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
      <div className="grid sm:grid-cols-4 lg:grid-cols-4 sm:mt-2 mt-6 mb-6 ">
        <div className="sm:col-span-4 sm:pl-10 lg:col-span-1 lg:pl-10 lg:pr-4">
          <h2 className="text-4xl font-bold mb-4 ">Delivered: The Crest blog</h2>
          <p className="mb-6 lg:py-8">
            Insights from years of working in various supply-chain roles (and an itch to write). We hope you find these posts interesting!
          </p>

          <div className="flex items-center">
            <div className="flex flex-row  gap-4">
              <button
                onClick={() => scroll('left')}
                className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white"
              >
                <FaChevronLeft className='h-6 w-5'/>
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white"
              >
                <FaChevronRight className='h-6 w-5'/>
              </button>
            </div>
          </div>
          <div className="flex self-end mt-14">
            <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full">
              View all blogs
            </button>
          </div>
        </div>
        <div className="sm:col-span-4 lg:col-span-3">
          <div
            ref={scrollContainer}
            className="flex overflow-x-hidden sm:overflow-x-hidden space-x-4 scrollbar-hide mx-4"
          >
            {[
              {
                title: 'Impact of RPA (Robotic Process Automation) in Supply Chain',
                date: 'Oct 12, 2023',
                img: blog1,
              },
              {
                title: 'Creating an Impact with Inventory Planning: The QSR Edition',
                date: 'Aug 28, 2023',
                img: blog2,
              },
              {
                title: 'The Ultimate Guide to Supply Chain Success',
                date: 'Aug 4, 2023',
                img: blog3,
              },
              {
                title: 'The Ultimate Guide to Supply Chain Success',
                date: 'Aug 4, 2023',
                img: blog4,
              },
              {
                title: 'The Ultimate Guide to Supply Chain Success',
                date: 'Aug 4, 2023',
                img: blog5,
              },
            ].map((post, index) => (
              <div
                key={index}
                className="min-w-[250px] sm:min-w-[300px] lg:min-w-[400px] min-h-[500px] bg-purple-100 rounded-lg shadow-lg p-4 m-4"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-60 object-cover rounded-t-lg"
                />
                <h3 className="text-xl font-semibold mt-4 py-4">{post.title}</h3>
                <p className="text-gray-500 mb-2 pt-12">{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;
