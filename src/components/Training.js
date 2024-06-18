import React from 'react';
import './TrainingStyles.css';

const Training = () => {
  return (
    <div className='training'>
      <div className='card-container'>
        <div className='card'>
          <h3>BASIC</h3>
          <p>This is the basic course description.</p>
        </div>
        <div className='card'>
          <h3>ADVANCE</h3>
          <p>This is the advanced course description.</p>
        </div>
        <div className='card'>
          <h3>EXPERT</h3>
          <p>This is the expert course description.</p>
        </div>
      </div>
    </div>
  );
};

export default Training;
