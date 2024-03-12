import React from 'react';

const TotalProducts = () => {
  // Logic to get total products in cart
  const totalProducts = 4;

  return (
    <div>
      <span className="cart-icon">Cart Icon</span>
      <span className="cart-count">{totalProducts}</span>
    </div>
  );
};

export default TotalProducts;
