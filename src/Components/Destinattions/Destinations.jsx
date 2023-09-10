import React from 'react'
import './Destinations.css'
import {MdLocationPin} from 'react-icons/md';
import {BiSearchAlt} from 'react-icons/bi';
import {BsFillCreditCard2BackFill, BsFillCalendarDateFill} from "react-icons/bs"
import {TiLocation} from "react-icons/ti"

//images
import image1 from '../../assets/ship1.jpg'
import image2 from '../../assets/ship2.jpg'
import image3 from '../../assets/ship3.jpg'
import image4 from '../../assets/ship4.jpg'
import image5 from '../../assets/ship1.jpg'
import image6 from '../../assets/ship2.jpg'
import image7 from '../../assets/ship3.jpg'
import image8 from '../../assets/ship4.jpg'

const destination = [
  {
    id: 1,
    img: image1,
    name: 'Seychelles Island',
    location:'Saint Lucia',
    rating: 4.7
  },
  
  {
    id: 2,
    img: image2,
    name: 'Seychelles Island',
    location:'Saint Lucia',
    rating: 4.7
  },

  {
    id: 3,
    img: image3,
    name: 'Seychelles Island',
    location:'Saint Lucia',
    rating: 4.7
  },

  {
    id: 4,
    img: image4,
    name: 'Seychelles Island',
    location:'Saint Lucia',
    rating: 4.7
  },

  {
    id: 5,
    img: image5,
    name: 'Seychelles Island',
    location:'Saint Lucia',
    rating: 4.7
  },

  {
    id: 6,
    img: image6,
    name: 'Seychelles Island',
    location:'Saint Lucia',
    rating: 4.7
  },

  {
    id: 7,
    img: image7,
    name: 'Seychelles Island',
    location:'Saint Lucia',
    rating: 4.7
  },

  {
    id: 8,
    img: image8,
    name: 'Seychelles Island',
    location:'Saint Lucia',
    rating: 4.7
  }
]

const Destinations = () => {
  return (
    <div className='destination section container'>
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText">EXPLORE NOW</span>
          <h3 className='why'>Find Your Dream Destination</h3>
          <p>Fill in the fields below to find the best spot for your next tour</p>
        </div>

        <div className="searchField grid">
          <div className="inputField flex">
            <MdLocationPin className="icon"/>
            <input type="text" placeholder='Location'/>
          </div>

          <div className="inputField flex">
            <BsFillCreditCard2BackFill className="icon"/>
            <input type="text" placeholder='Budget'/>
          </div>

          <div className="inputField flex">
            <BsFillCalendarDateFill className="icon"/>
            <input type="text" placeholder='Date'/>
          </div>

          <button className="btn flex"><BiSearchAlt className="icon"/>Search</button>
        </div>

        <div className="secMenu">
          <ul className="flex">
            <li className='active'>All</li>
            <li>Recommendated</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>
        
        <div className="destinationContainer grid">
          {destination.map(destination => {
            return(
              <div className="singleDestination" key={destination.id}>
                <div className="imgDiv">
                  <img src={destination.img} alt="Ship Image" />
    
                  <div className="descInfo flex">
                    <div className="text">
                      <span className="name">{destination.name}</span>
                      <p className="flex">
                        <TiLocation className="icon"/>
                        {destination.location}
                      </p>
                    </div>
                    <span className='rating'>
                      {destination.rating}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Destinations