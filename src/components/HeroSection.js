import React, { useState } from 'react';
import './HeroSection.css'; // Import custom CSS for additional styles
import grid from '../images/grid.png';
import background from '../images/hero.svg';

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="hero-section relative text-white flex flex-col lg:flex-row lg:items-center">
      <div className="absolute inset-0">
        <img src={grid} alt="Grid Background" className="background-img w-100 h-100" />
      </div>
      <nav className="navbar sticky top-0 w-full py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold">CleverBooks</div>
        <div className="navbar-items hidden lg:block flex space-x-6">
          <a href="#product" className="hover:text-gray-400">Product</a>
          <a href="#pricing" className="hover:text-gray-400">Pricing</a>
          <a href="#industry" className="hover:text-gray-400">Industry</a>
          <a href="#customer-stories" className="hover:text-gray-400">Customer Stories</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#blog" className="hover:text-gray-400">Blog</a>
        </div>
        <div className="flex hidden lg:bloc space-x-4 items-center">
          <a href="#login" className="hover:text-gray-400">Login</a>
          <a href="#talk" className="cta-button bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-md">Talk to Us</a>
        </div>
        <div className={`hamburger lg:hidden ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <a href="#product" className="hover:text-gray-400" onClick={toggleMenu}>Product</a>
          <a href="#pricing" className="hover:text-gray-400" onClick={toggleMenu}>Pricing</a>
          <a href="#industry" className="hover:text-gray-400" onClick={toggleMenu}>Industry</a>
          <a href="#customer-stories" className="hover:text-gray-400" onClick={toggleMenu}>Customer Stories</a>
          <a href="#about" className="hover:text-gray-400" onClick={toggleMenu}>About</a>
          <a href="#blog" className="hover:text-gray-400" onClick={toggleMenu}>Blog</a>
          <a href="#login" className="hover:text-gray-400" onClick={toggleMenu}>Login</a>
          <a href="#talk" className="cta-button bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-md" onClick={toggleMenu}>Talk to Us</a>
        </div>
      </nav>
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center px-6 py-12 relative z-10 mt-5 lg:mt-0 pt-10">
        <div className="lg:w-1/2 lg:mr-6 hero-content">
          <div className="text-left mb-8">
            <div>
              <h1 className="text-5xl font-bold leading-tight">
                Every order <span className="gradient-text">fulfilled,</span> on <span className="gradient-text">time.</span>
              </h1>
              <p className="text-gray-400 mt-4 max-w-lg lg:max-w-xl">
                Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.
              </p>
              <div className="mt-8 relative">
                <div className="arrow-text mt-4">
                  <svg className="arrow rotated-arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                  <span className="gradient-text">Integrate your logistics stack with Crest in just two days</span>
                </div>
                <a href="#get-started" className="cta-button bg-gradient-to-r from-purple-400 to-pink-500 text-white px-6 py-3 rounded-full inline-flex items-center">
                  Get started with Crest
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <img src={background} alt="Illustration" className="hero-illustration w-full h-auto max-w-md" />
        </div>
      </div>
      <svg className="wavy-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fillOpacity="1" d="M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,272C672,288,768,288,864,250.7C960,213,1056,139,1152,101.3C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </section>
  );
}

export default HeroSection;
