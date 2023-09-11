import React, { useEffect, useState } from 'react';
import "./Questions.css";
import Accordion from './Accordion';

// AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Questions = () => {

    useEffect(() =>{
      Aos.init({ duration: 2000});
  }, [])

  const [active, setActive] = useState(
    "How do I choose the right travel destinstion for me?"
    );

  return (
    <div className='questions section container'>
      <div className="secHeading">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="secContainer grid">
        
        <div className="accordion grid">
          <Accordion
            title="How do I choose the right travel destinstion for me?"
            desc="Consider your interest, budget, desired experiences, and the type of environment you enjoy.
            Research desitnations that align with your peferences and offer attractions or activities you find appealing."
            active={active}
            setActive={setActive}
          />

          <Accordion
            title="What are the right places to visit"
            desc="Consider your interest, budget, desired experiences, and the type of environment you enjoy.
            Research desitnations that align with your peferences and offer attractions or activities you find appealing."
            active={active}
            setActive={setActive}
           />

          <Accordion
            title="Why yoy should visit these places"
            desc="Consider your interest, budget, desired experiences, and the type of environment you enjoy.
            Research desitnations that align with your peferences and offer attractions or activities you find appealing."
            active={active}
            setActive={setActive}
           /> 

          <Accordion
            title="Our Pricing plan"
            desc="Consider your interest, budget, desired experiences, and the type of environment you enjoy.
            Research desitnations that align with your peferences and offer attractions or activities you find appealing."
            active={active}
            setActive={setActive}
           />
        </div>

        <div className="form">
          <div className="secHeadimg">
            <h4 data-aos="fade-up">Do you have any specific question?</h4>
            <p data-aos="fade-up">
              Please fill the form below and our dedicated team will get intouch with you as soon as possible.
            </p>
          </div>

          <div className="formContent grid">
            <input type="email" placeholder='Enter email address' data-aos="fade-up"/>
            <textarea placeholder="Enter your question here" data-aos="fade-up"></textarea>
            <button className="btn" data-aos="fade-up">Submit Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Questions