import React from 'react';
import ProductContainer from './ProductContainer';

const MainContainer = ({ products, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  
  return (
    <div className="main-container">
      {products.map((product) => (
        <ProductContainer
          key={product.id}
          product={product}
          
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      ))}
    </div>
  );
};

export default MainContainer;
