import React from 'react'
import Navbar from '../components/Navbar'
import Heroimage from '../components/Heroimage'
import Footer from '../components/Footer'
import Form from '../components/Form'


const Contact = () => {
  return (
    <div>
        <Navbar />
        <Heroimage heading ='Contact' text='Contact ProfitPeak Institute'/>
        <Form />
        <Footer />

      
    </div>
  )
}

export default Contact
