const express = require('express');
const router = express.Router();
const {
  getAllArticles,
  getArticleById,
  getArticlesByCategory,
  createArticle,
  updateArticle,
  deleteArticle
} = require('../controllers/articleController');

// GET all articles
router.get('/', getAllArticles);

// GET article by id
router.get('/:id', getArticleById);

// GET articles by category
router.get('/category/:category', getArticlesByCategory);

// POST new article
router.post('/', createArticle);

// PUT update article
router.put('/:id', updateArticle);

// DELETE article
router.delete('/:id', deleteArticle);

module.exports = router; 