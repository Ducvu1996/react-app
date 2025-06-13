import React from 'react';
import '../styles/ArticleCard.css';

function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <img src={article.image} alt={article.title} />
      <div className="article-content">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <a href={`/article/${article.id}`} className="read-more">Đọc thêm</a>
      </div>
    </article>
  );
}

export default ArticleCard; 