import React from 'react';
import HeroSection from './components/HeroSection.js';
import KeyProblemsSolved from './components/KeyProblemsSolved';
import KeyMetrics from './components/KeyMetrics';
import Reviews from './components/Reviews';
import ProblemTarget from './components/ProblemTarget';
import Carousel from './components/Carousel';
import BlogCarousel from './components/BlogCarousel'; 
// import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css'; // Optional: Add global styling here
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="app">
      <HeroSection />
      <KeyProblemsSolved />
       <KeyMetrics />
      <Reviews />
      <ProblemTarget />
      <Carousel />
      <BlogCarousel/>
       {/* <CTA /> */}
      <Footer />    
    </div>
  );
}

export default App;

