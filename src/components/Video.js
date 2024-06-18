import React from "react"
import { Link } from "react-router-dom" 
import './VideoStyles.css'

import stkmkt from '../assets/stockmarket.mp4';

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id='video'>
        <source src={stkmkt} type='video/mp4' />
      </video>
      <div className="content">
        <h1>ProfitPeak Institute</h1>
        <p>Join us on this Journey</p>
        <div>
          <Link to='/courses' className="btn">Courses</Link>
          <Link to='/contact' className="btn">Contact</Link>
          <Link to='/your_chatBot' className="btn">Your ChatBot</Link>
        </div>
      </div>
    </div>
  );
}

export default Video;
