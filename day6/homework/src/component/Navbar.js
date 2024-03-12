import React from 'react';
import './Navbar.css'
// import {faCartArrowDown} from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
        <div className='nav-container'>
            <div className='logo'></div>
            <div className='icon-container'>
                <faCartArrowDown className='cart-icon'/>
            </div>
        </div>
    </>
  )
}

export default Navbar