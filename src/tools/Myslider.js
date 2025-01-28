import React, { useState, useEffect } from 'react';
import './Myslider.css'; // Import your CSS file for styling


const AboutLeaderCarousel = ( {data, intervals}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);


  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };


  // Automatic sliding effect
  useEffect(() => {
    const interval = setInterval(nextSlide, intervals); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="aboutLeader">
      <div className="leaderCard" onClick={toggleInfo}>
        <div className="leaderImage">
          <img src={data[currentIndex].image} alt={data[currentIndex].name} />
        </div>
        <div className="LeaderInfo">
          <div className="LeaderInfoText">
            <h3>{data[currentIndex].name}</h3>
            <a href="#">Read more</a>
          </div>
        </div>
      <div className="carouselControls">
        <p className='gobck'  onClick={prevSlide}>Previous</p>
        <button className='gobck' onClick={nextSlide}>Next</button>
      </div>
      </div>
    </div>
  );
};

export default AboutLeaderCarousel;