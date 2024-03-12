// import React from 'react';
// import './Navbar.css'



import React from 'react';
import {faCartArrowDown} from 'react-icons/fa';

const Navbar = ({ cart, clearCart }) => {
  const totalProducts = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav style={{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      color:'white',
      backgroundColor:'black',
      padding:'1%'
    }}>
      <h1>UseReducer</h1>
      <div className="cart">
        <span className="cart-icon">  <faCartArrowDown className='cart-icon'/> </span>
        <span className="cart-count">{totalProducts}</span>
      </div>
    </nav>
  );
};

export default Navbar;
