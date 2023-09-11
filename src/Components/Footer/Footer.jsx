import React, { useEffect } from 'react';
import "./Footer.css"
import { BiLogoMedium } from 'react-icons/bi';
import {ImFacebook} from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

// AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

  useEffect(() =>{
    Aos.init({ duration: 2000});
  }, [])
  return (
    <div className='footer'>
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo"  data-aos="fade-down">
            <BiLogoMedium className='icon' />
            <span>OU-Shipping</span>
          </div>
          <div className="socials flex"  data-aos="fade-down">
            <ImFacebook className='icon' />
            <BsTwitter className='icon' />
            <AiFillInstagram className='icon' />
          </div>
        </div>          

        <div className="footerLinks"  data-aos="fade-down">
          <span className="linkTitle">
            Information
          </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div className="footerLinks"  data-aos="fade-down">
          <span className="linkTitle">
            Helpful Links
          </span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>

        </div>

        <div className="footerLinks"  data-aos="fade-down">
          <span className="linkTitle">
            Contact Details
          </span>
          <span className='phone'>+000 111 1222</span>
          <span className="email">techlooop1@gmail.com</span>
        </div>
      </div>
    </div>
  )
}

export default Footer