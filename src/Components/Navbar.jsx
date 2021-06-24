import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
// import { Button } from './Button.jsx';
import '../Components/Stylesheet/Navbar.css';
const Navbar = () => {
  const [click, setClick] = useState(false);
  // const [button, setButton]= useState(true)

  const toggleChange = () => setClick(!click);
  


  return (
    <>
      <div className='navbar'>
        <div className='nav-container'>
          <Link to='/' className='logo'>
            Ralph 
          </Link>

          <div className='menu-icons' onClick={toggleChange}>
            {click ? <FaBars className='icons'/> : <FaTimes className='icons'/>}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
