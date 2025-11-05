// src/FeaturedProducts.jsx
import React from 'react';
import './FeaturedProducts.css';
import img1 from './assets/sa11.jpg';
import img2 from './assets/r5.jpg';
import img3 from './assets/y7.jpg';
import img4 from './assets/j9.jpg';

function FeaturedProducts() {
  const products = [
  {
    id: 1,
    name: 'Sarees',
    price: '₹1,299',
    image: img1,
  },
  {
    id: 2,
    name: 'Bags',
    price: '₹899',
    image: img2,
  },
  {
    id: 3,
    name: 'Heels',
    price: '₹1,499',
    image: img3,
  },
  {
    id: 4,
    name: 'Stylish jewellery',
    price: '₹599',
    image: img4,
  },
];

  return (
    <section className="featured-section">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;