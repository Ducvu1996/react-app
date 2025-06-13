const articles = require('../models/Article');

// Get all articles
const getAllArticles = (req, res) => {
  res.json(articles);
};

// Get article by id
const getArticleById = (req, res) => {
  const article = articles.find(a => a.id === parseInt(req.params.id));
  if (!article) {
    return res.status(404).json({ message: 'Article not found' });
  }
  res.json(article);
};

// Get articles by category
const getArticlesByCategory = (req, res) => {
  const categoryArticles = articles.filter(a => a.category === req.params.category);
  res.json(categoryArticles);
};

// Create new article
const createArticle = (req, res) => {
  const newArticle = {
    id: articles.length + 1,
    ...req.body,
    createdAt: new Date().toISOString().split('T')[0]
  };
  articles.push(newArticle);
  res.status(201).json(newArticle);
};

// Update article
const updateArticle = (req, res) => {
  const article = articles.find(a => a.id === parseInt(req.params.id));
  if (!article) {
    return res.status(404).json({ message: 'Article not found' });
  }
  
  Object.assign(article, req.body);
  res.json(article);
};

// Delete article
const deleteArticle = (req, res) => {
  const index = articles.findIndex(a => a.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: 'Article not found' });
  }
  
  articles.splice(index, 1);
  res.status(204).send();
};

module.exports = {
  getAllArticles,
  getArticleById,
  getArticlesByCategory,
  createArticle,
  updateArticle,
  deleteArticle
}; 