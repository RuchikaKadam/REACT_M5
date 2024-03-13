import React from 'react'
import '../App.css'
import {FaCartArrowDown} from 'react-icons/fa'

const Navbar = ({quantity}) => {
  return (
    <div>
        <ul className='nav'>
            <li>Your Cart</li>
            <li>
                <FaCartArrowDown className='cart-icon'/>
                <span className='cart-quantity'>{quantity}</span>
            </li>
        </ul>
    </div>
  )
}

export default Navbar