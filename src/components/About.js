import React, { useState } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Aboutdata } from '../Api/Aboutdata'
import AboutLeaderCarousel from '../tools/Myslider'

function About() {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleBtn = () => {
    setIsExpanded(!isExpanded)
  }
  const image = '/bgPlateauJet.jpeg'
  return (
    <div>
    <Nav/>
    <div className="aboutContainer">
      <div className="aboutBg">
    <h1 className='abtheader'>About Us</h1>
    <div className="aboutImg">
      <img src='/bgPlateauJet.jpeg' alt="" />
    </div>
    
      </div>
          <p className='aboutContent'> {
              
             <p> { isExpanded ? `${Aboutdata.content}`: `${Aboutdata.content.substring(0, 700)}...`} <a className='readmore' onClick={toggleBtn}>
              
                {isExpanded ? 'Show less' : 'Read more'}
              </a>
              <p><a href="/terms&conditions">See Terms and Conditions</a></p>
              </p>
              
}
            
    </p>
    <h1 className='space mke'>Our <span className='partHeader'>Leaders</span></h1>


    <div className="leaders">
      <AboutLeaderCarousel data={Aboutdata.leaders} intervals={4000}/>

      
    </div>
    <div className="leaderContent">
    <p>
    Our leadership team, comprised of experienced professionals, is dedicated to ensuring the development and success of our players on and off the pitch.</p>
    
    </div>


    <h1 className='space mke'>Coaching <span className='partHeader'>Staff</span></h1>
        <div className="aboutCouches">
        <AboutLeaderCarousel data={Aboutdata.coaches} intervals={4000} />
        </div>

    <p>
    Together, they work tirelessly to train, mentor, and guide our players to achieve their fullest potential, both technically and tactically.

    </p>

    <h1 className='space mke'>Backroom <span className='partHeader'>Team</span></h1>
    We pride ourselves on having a complete and well-rounded backroom staff that provides comprehensive support to the team:
    <ul>
    <li>Medical Team: Ensures the players’ health and fitness.</li>
    <li>Social Media Manager: Handles our digital presence, keeping fans and followers engaged.</li>
    <li>Team Scout: Discovers and recruits promising talents to strengthen our squad.</li>
    </ul>
    At Plateau Jet SC, our goal is to raise the next generation of football stars and revolutionize the game.
    With a solid foundation and a dedicated team behind us, we are committed to making our mark in the world of football.
    </div>
        
    <Footer/>
    </div>
  )
}

export default About