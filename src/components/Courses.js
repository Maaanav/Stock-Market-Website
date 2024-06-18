import React from 'react';
import './CoursesStyles.css';
import { Link } from 'react-router-dom';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';

const Courses = () => {
  const handleParagraphClick = () => {
    // Handle click action here (e.g., display more information)
  };

  return (
    <div>
      <div className='courses'>
        <div className='left'>
          <h1>Courses</h1>
          <div onClick={handleParagraphClick} style={{ paddingLeft: '20px', cursor: 'pointer' }}>
            <p>Smart Index Trader Programme.</p>
          </div>
          <div onClick={handleParagraphClick} style={{ paddingLeft: '20px', cursor: 'pointer' }}>
            <p>Live Trading Strategies.</p>
          </div>
          <div onClick={handleParagraphClick} style={{ paddingLeft: '20px', cursor: 'pointer' }}>
            <p>Algorithmic Trading & Computational Finance using Python & R.</p>
          </div>
          <div onClick={handleParagraphClick} style={{ paddingLeft: '20px', cursor: 'pointer' }}>
            <p>Intraday Trading Strategies.</p>
          </div>
          <div onClick={handleParagraphClick} style={{ paddingLeft: '20px', cursor: 'pointer' }}>
            <p>Capital Market Analytics.</p>
          </div>
          <div onClick={handleParagraphClick} style={{ paddingLeft: '20px', cursor: 'pointer' }}>
            <p>Executive MBA- Financial Markets.</p>
          </div>
          <div onClick={handleParagraphClick} style={{ paddingLeft: '20px', cursor: 'pointer' }}>
            <p>Intraday Trading Strategies: Forex Market.</p>
          </div>
          <div onClick={handleParagraphClick} style={{ paddingLeft: '20px', cursor: 'pointer' }}>
            <p>Intraday Trading Strategies: Commodities Market.</p>
          </div>
          <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
          <div className='image-container'>
            <div className='image-stack top'>
              <img src={img2} className='img' alt='' />
            </div>
            <div className='image-stack bottom'>
              <img src={img1} className='img' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
