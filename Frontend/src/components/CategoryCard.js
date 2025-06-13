import React from 'react';
import '../styles/CategoryCard.css';

function CategoryCard({ image, title, description }) {
  return (
    <div className="category-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default CategoryCard; 