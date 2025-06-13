import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import LatestArticles from '../components/LatestArticles';
import Newsletter from '../components/Newsletter';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Hero />
      <Categories />
      <LatestArticles />
      <Newsletter />
    </div>
  );
}

export default Home; 