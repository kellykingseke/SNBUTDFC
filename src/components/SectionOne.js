import React, { useState } from 'react'
import { Aboutdata } from "../Api/Aboutdata";


function SectionOne() {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleBtn = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <div className="sectionOneContainer">
      <div className="background-container">
        <div className="overlay">
          <h1>About us</h1>
          <p>
            <p>
              
              {isExpanded
                ? `${Aboutdata.content}`
                : `${Aboutdata.content.substring(0, 300)}...`}{" "}
            </p>
            
          </p>
          <button className="readmore">
            <a href="/about">Read more</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SectionOne