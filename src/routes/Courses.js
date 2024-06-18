import React from 'react'
import Navbar from '../components/Navbar'
import Heroimage from '../components/Heroimage'
import Footer from '../components/Footer'
import CoursesSection from '../components/Courses'

const Courses = () => {
  return (
    <div>
        <Navbar />
        <Heroimage heading='Courses' text ='abc' />
        <CoursesSection />
        <Footer />
      
    </div>
  )
}

export default Courses;
