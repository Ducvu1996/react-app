import React, { useState, useEffect } from 'react';
import CategoryCard from './CategoryCard';
import '../styles/Categories.css';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/categories');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="categories">
      <h2>Danh Mục</h2>
      <div className="category-grid">
        {categories.map(category => (
          <CategoryCard
            key={category.id}
            image={category.image}
            title={category.title}
            description={category.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Categories; 