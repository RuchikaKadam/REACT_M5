import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer';
import productsData from './data/products.json';
import './App.css'

const App = () => {

  const TotalAmount = 200;


  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className='container'>
      <Navbar cart={cart}  />
      <MainContainer
        products={productsData.categories[0].products}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <div style={{display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
    margin:'80px 20px',
    width:'60%'}}>
          <h3>Total:</h3>
          <button onClick={clearCart} clearCart={clearCart} style={{transform:'translateY(80px)', backgroundColor:'black', color:'rgb(188, 241, 223)', padding:'16px', fontSize:'16px', borderRadius:'5px'}}>Clear Cart</button>
          <p>{TotalAmount}</p>
      </div>
      <p style={{padding:'10px 20%', width:'400px', fontSize:'30px'}}>its really challenging to complete all the assignments. I am a Master's student and I barely get time to attend classes. I apologize for the bad and incomplete projects. Thank you for your patience.</p>
      
    </div>
  );
};

export default App;
