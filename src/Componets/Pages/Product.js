import React from 'react';
import '../styles/Product.css'; // Import your CSS file for styling

function Product({ name, price, image }) {
  return (
    <div className="container product">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p className="product-price">${price}</p>
    </div>
  );
}

export default Product;
