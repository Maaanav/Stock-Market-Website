import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import './NavbarStyles.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const[color,setColor]  = useState(false)
    const changeColor = () => {
      if(window.scrollY>=100){
        setColor(true)
      }
      else{
        setColor(false)
      }
    }

    window.addEventListener('scroll',changeColor)

  return (
    <div className={color ? 'header header-bg': 'header'}>
      <Link to='/'>
        <h1>ProfitPeak Institute</h1>
      </Link>
      <div className={`hamburger ${click ? 'active' : ''}`} onClick={handleClick}>
        {click ? <FaTimes size={20} style={{ color: '#fff' }} /> : <FaBars size={20} style={{ color: '#fff' }} />}
      </div>
      <ul className={`nav-menu ${click ? 'active' : ''}`}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/training'>Training</Link>
        </li>
        <li>
          <Link to='/courses'>Courses</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/chat'>Chat</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
