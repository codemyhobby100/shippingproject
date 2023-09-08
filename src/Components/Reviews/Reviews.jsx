import React from 'react';
import "./Review.css"

//import icons
import { AiFillStar } from 'react-icons/ai';

import Image1 from "../../assets/customer.jpg";
import Image2 from "../../assets/customer.jpg";
import Image3 from "../../assets/customer.jpg";
import Image4 from "../../assets/customer.jpg";
import Image5 from "../../assets/customer.jpg";

const Reviews = () => {
  return (
    <div className='review section container'>
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText">FROM OUR CLIENTS</span>
          <h3>Real Travel History From Our Beloved Clients</h3>
          <p>
            By choosing us as their tour agency, customers can expect an enriching and
             enjouable travel experience,
            filled with unforgettable memoried that will last a lifetime
          </p>
          <span className='stars flex'>
            <AiFillStar className="icon"/>
            <AiFillStar className="icon"/>
            <AiFillStar className="icon"/>
            <AiFillStar className="icon"/>
            <AiFillStar className="icon"/>
          </span>

          <div className="clientsImage flex">
            <img src={Image1} alt="Client Image" />
            <img src={Image2} alt="Client Image" />
            <img src={Image3} alt="Client Image" />
            <img src={Image4} alt="Client Image" />
          </div>
        </div>
        <div className="imgDiv">
          <img src={Image5} alt="Div Image" />
        </div>
      </div>
    </div>
  )
}

export default Reviews