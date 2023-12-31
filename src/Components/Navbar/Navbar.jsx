import React, { useState } from 'react';
import "./Navbar.css";

// Import Icons
import {BiLogoMediumOld} from 'react-icons/bi';
import {AiFillCloseCircle} from 'react-icons/ai';
import {PiDotsNineBold} from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // State to check to track and update navbar
    const [navBar, setNavBar] = useState("menu"); 
    // Function to show the navbae
    const showNavBar = () => {
        setNavBar("menu showNavbar")
    }
    // Function to close navbar
    const removeNavbar = () => {
        setNavBar("menu")
    }


  return (
    <div className='navBar'>
        <div className="logoDiv">
            <BiLogoMediumOld className="icon"/>
            <span>MET-Shipping</span>
        </div>

        <div className={navBar}>
            <ul>
                <li className="navList">Destination</li>
                <li className="navList">About Us</li>
                <li className="navList">Testimonial</li>
                <li className="navList">Gallery</li>
            </ul>

            {/* Icon to close navbar */}
            <AiFillCloseCircle className="icon closeIcon" onClick={removeNavbar}/>
        </div>
        <Link to='/signin'>
            <button className='signUpBtn btn'>Sign Up</button>
        </Link>
        {/* Icon to toggle navbar*/}
        <PiDotsNineBold className='icon menuIcon' onClick={showNavBar}/>

    </div>
  )
}

export default Navbar