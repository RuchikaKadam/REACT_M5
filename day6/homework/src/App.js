import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer';
import productsData from './data/products.json';

const App = () => {
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
    <div>
      <Navbar cart={cart}  />
      <MainContainer
        products={productsData.categories[0].products}
        // addToCart={addToCart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <button onClick={clearCart} clearCart={clearCart}>Clear Cart</button>
    </div>
  );
};

export default App;
