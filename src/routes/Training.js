import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimage from '../components/Heroimage';
import Training from '../components/Training'; // Import the Training component

const TrainingPage = () => {
  return (
    <div>
      <Navbar />
      <Heroimage heading='Training Cost' text="Choose your Course." />
      <Training /> {/* Use the Training component */}
      <Footer />
    </div>
  );
}

export default TrainingPage;
