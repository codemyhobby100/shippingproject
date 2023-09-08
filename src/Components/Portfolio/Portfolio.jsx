import React from 'react';
import "./Portfolio.css"

// Imported Assets
import icon1 from '../../assets/support.png';
import icon2 from '../../assets/package.png';
import icon3 from '../../assets/location.png';
import image from '../../assets/about-banner.png'

const Portfolio = () => {
  return (
    <div className='portfolio section container'>
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3>Why Should You Choose Us</h3>
            <p>We have extensive knowledege and experience in the travel industry.</p>
          </div>
          <div className="grid">
            <div className="singlePortfolio flex">
              <div className="iconDiv">
                <img src={icon1} alt="Icon Img" />
              </div>

              <div className="infor">
                <h4>24/7 customer support</h4>
                <p>
                  our top priority is the safety and well-being of our clients.
                  We maintain high safety standards and have emergency support available during the trip
                </p>
              </div>
            </div>

            <div className="singlePortfolio flex">
              <div className="iconDiv">
                <img src={icon2} alt="Icon Img" />
              </div>

              <div className="infor">
                <h4>Safety and support</h4>
                <p>
                  our top priority is the safety and well-being of our clients.
                  We maintain high safety standards and have emergency support available during the trip
                </p>
              </div>
            </div>

            <div className="singlePortfolio flex">
              <div className="iconDiv">
                <img src={icon3} alt="Icon Img" />
              </div>

              <div className="infor">
                <h4>Safety and support</h4>
                <p>
                  our top priority is the safety and well-being of our clients.
                  We maintain high safety standards and have emergency support available during the trip
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightContent">
          <img src={image} alt="Image" />
        </div>
      </div>
    </div>
  )
}

export default Portfolio