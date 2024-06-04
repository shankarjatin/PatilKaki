import React, { useEffect, useRef } from 'react';
import './Reviews.css'
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo5 from '../images/logo5.png'
import logo6 from '../images/logo6.png'
import logo7 from '../images/logo5.png'
const Reviews = () => {
 

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
    </div>
  );
};

export default Reviews;