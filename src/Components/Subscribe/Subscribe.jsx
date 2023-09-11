import React, { useEffect } from 'react';
import "./Subscribe.css";

import Image from '../../assets/perfil.png'

// AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Subscribe = () => {

  useEffect(() =>{
    Aos.init({ duration: 2000});
  }, [])

  return (
    <div className='subscribe section container'>
      <div className="secContainer grid">
        <img src={Image} alt=""  data-aos="fade-down"/>

        <div className="textDiv">
          <h4 data-aos="fadu-up">Best Way To Start Your Journey!</h4>
          <p data-aos="fadu-up">We offer personalized itineraries tailored to individual preferences and interests</p>
          <button className='btn' data-aos="fadu-up">Start Here</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe