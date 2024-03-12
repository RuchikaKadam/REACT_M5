import React from 'react';

const ProductContainer = ({ product, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="product-container">
      <img src={`path_to_image/${product.id}.jpg`} alt={product.name} />
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <button onClick={() => removeFromCart(product.id)}>Remove</button>
        <div>
          <button onClick={() => decreaseQuantity(product.id)}>-</button>
          <span>{product.quantity || 1}</span>
          <button onClick={() => increaseQuantity(product.id)}>+</button>
        </div>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductContainer;
