import React from 'react';
import "./Home.css"

// import assets
import Video from '../../Assets/video2.mp4';
import image1 from '../../assets/ship1.jpg';
import image2 from '../../assets/ship2.jpg';
import image3 from '../../assets/ship3.jpg';
import image4 from '../../assets/ship4.jpg';

// Icon
import {AiOutlineSwapRight} from 'react-icons/ai'

const Home = () => {
  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1>Unlock Your Travel Dreams With Us!</h1>
        <p>Discover the world's most adventurous nature, life is sho short for a trip.</p>
        <button className='btn flex'>GET STARTED  <AiOutlineSwapRight className="icon"/></button>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3>Popular Places</h3>
          <div className="images flex">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home