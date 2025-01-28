// src/BackToTop.js

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
            {isVisible && (
        <div className="floating-buttons">
          <div>
          <button
            onClick={scrollToTop}
            className="back-to-top"
            aria-label="Back to Top"
          >
            <FaArrowUp />
          </button>
          </div>
          <div>
          <a
            href="https://wa.link/kx6pck"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            aria-label="Contact on WhatsApp"
          >
            <IoLogoWhatsapp />
          </a>
          </div>
          
        </div>
      )}
    </div>
  );
}

export default BackToTop;
