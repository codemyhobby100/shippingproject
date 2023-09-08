import React, { useState } from 'react';
import "./Questions.css";
import Accordion from './Accordion';

const Questions = () => {
  const [active, setActive] = useState(
    "How do I choose the right travel destinstion for me?"
    );

  return (
    <div className='questions section container'>
      <div className="secHeading">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="secContainer grid">
        {/* Imported a component from a different file */}
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
            title="What are the right places to visit"
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
        </div>

        <div className="form">
          <div className="secHeadimg">
            <h4>Do you have any specific question?</h4>
            <p>
              Please fill the form below and our dedicated team will get intouch with you as soon as possible.
            </p>
          </div>

          <div className="formContent grid">
            <input type="email" placeholder='Enter email address'/>
            <textarea name="Enter your question here"></textarea>
            <button className="btn">Submit Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Questions