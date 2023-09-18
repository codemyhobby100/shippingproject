import React, { useEffect } from 'react';
import './Questions.css'

// Icons
import { BsArrowUpCircle } from 'react-icons/bs';
import { BsArrowDownCircle } from 'react-icons/bs';

// AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Accordion = ({ title, desc, active, setActive }) => {

    useEffect(() =>{
        Aos.init({ duration: 2000});
    }, [])
    
  return (   
    <div className='accordionContainer' data-aos="fade-up">
        <span className={(active === title ? "activeTitle" : "") + " title" + " flex"}>
            {title}
            <span  style={{cursor: "pointer"}}>
                {active === title ? (
                    <BsArrowDownCircle className='icon' onClick={() => setActive("This is somt")}/>
                ) : (                    
                    <BsArrowUpCircle className='icon' onClick={() => setActive(title)}/>
                )}
            </span>            
        </span>
          
        <p className={(active === title ? "show" : "") + " description"}>
            {desc}
        </p>
    </div>
  );
};

export default Accordion