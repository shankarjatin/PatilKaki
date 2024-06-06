// Footer.js
import React from 'react';
import logo from '../images/asset 0.png'
import './footer.css'

const Footer = () => {
  return (
    <div className='main bg-black w-full h-full text-white  mt-10'>
<div className=" main grid  sm:grid-cols-5 md:grid-cols-5 lg:grid-cols bg-black text-white mt-10">
    <div className='sm:col-span-5 md:col-span-5 lg:col-span-2 sm:pl-2 lg:pl-10'><div className="mb-8 w-50   md:mb-0">
      <div className="flex items-center mb-4">
        <img src={logo} alt="Crest Logo" className="w-30 h-20 mr-2" />
       
      </div>
      <p>
        Crest is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.
      </p>
    </div>
   </div>
    <div className='sm:col-span-5 md:col-span-5 lg:col-span-1'>
    <div className="mb-8 md:mb-0">
      <h4 className="text-lg font-semibold mb-4">Explore</h4>
      <ul>
        <li className="mb-2">
          <a href="#" className="hover:underline">Product</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">Pricing</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">Customer Stories</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">Career</a>
        </li>
      </ul>
    </div>
    </div>
    <div className='sm:col-span-5 md:col-span-5 lg:col-span-1'>
    <div className="mb-8 md:mb-0">
      <h4 className="text-lg font-semibold mb-4">Learn</h4>
      <ul>
        <li className="mb-2">
          <a href="#" className="hover:underline">About us</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">Blog</a>
        </li>
      </ul>
    </div>
    </div>
    <div className='sm:col-span-5 md:col-span-5 lg:col-span-1'>
    <div>
      <h4 className="text-lg font-semibold mb-4">Contact Crest</h4>
      <p>
        <a href="mailto:sales@getcrest.ai" className="hover:underline">sales@getcrest.ai</a>
      </p>
      <p className="mt-4">
        Registered Office:<br />
        1507, Incubex, 11th cross road,<br />
        19th Main Road, Bengaluru, India. 560102
      </p>
      <p className="mt-4">
        Corporate Office:<br />
        291, All Time Space, 4th Floor,<br />
        15th A Cross, Sector - 6,<br />
        HSR Layout, Bengaluru, India. 560102
      </p>
    </div>
  </div>
  <div className="mt-8 text-center md:text-left">
    <div className="flex justify-center md:justify-start mb-4">
      <a href="#" className="text-gray-300 mx-2 hover:text-white">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" className="text-gray-300 mx-2 hover:text-white">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#" className="text-gray-300 mx-2 hover:text-white">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" className="text-gray-300 mx-2 hover:text-white">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
    </div>
    
</div>
<p className="text-gray-500 align-self-center">
      &copy; 2024 Crest | <a href="#" className="hover:underline">Terms of Service</a> | <a href="#" className="hover:underline">Privacy Policy</a>
    </p>
    <p className="text-gray-500">
      Conifer Innovations Private Limited | CIN: U72900KA2022PTC163144
    </p>
</div>


   
  );
}

export default Footer;


