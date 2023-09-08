import React from 'react';
import "./Middle.css";

const Middle = () => {
  return (
    <div className="middle section"> 
      <div className="secContainer container">
        <div className="grid">
          <span className="flex">
            <h1>10</h1>
            <p>World Of Experiences</p>
          </span>
          
          <span className="flex">
            <h1>2k+</h1>
            <p>Trusted Customers</p>
          </span>

          <span className="flex">
            <h1>1k+</h1>
            <p>Customer Reviews</p>
          </span>

          <span className="flex">
            <h1>4.8</h1>
            <p>Overall Rating</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Middle