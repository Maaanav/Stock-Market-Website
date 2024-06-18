import React from 'react'
import './FooterStyles.css'
import {FaFacebook,FaLinkedin,FaMailBulk,FaPhone,FaSearchLocation,FaTwitter} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <FaSearchLocation size={20} style={{color:'#ffffff',marginRight:'2rem'}} />
            
            <div>
                <p>Mumbai</p>
                <h4>Bandra 400501</h4>
            </div>
        </div>

    <div className='phone'>
        <h4><FaPhone size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>7900004870</h4>
    </div>
    <div className='email'>
        <h4><FaMailBulk size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>stkmarkt@gmail</h4>
    </div>


        </div>

        <div className='right'>
            <h4>About our institute</h4>
            <p>At ProfitPeak Institute, we are dedicated to empowering individuals to master the art and science of stock trading. With a passion for financial markets and a commitment to excellence, we provide a dynamic and immersive learning experience that equips our students with the knowledge and skills they need to thrive in the world of stock trading.</p>

            <div className='social'>
                <FaFacebook size={30} style={{color:'#ffffff',marginRight:'1rem'}} />
                <FaLinkedin size={30} style={{color:'#ffffff',marginRight:'1rem'}}/>
                <FaTwitter size={30} style={{color:'#ffffff',marginRight:'1rem'}} />
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Footer
