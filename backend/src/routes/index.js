const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article_controller');
const categoryController = require('../controllers/category_controller');

router.get('/items', articleController.getAllArticles);
router.get('items/category/:id', articleController.getArticlesByCategory);
router.get('/categories', categoryController.getAllCategories);
router.get('/category/:id', categoryController.isExistingCategory);

module.exports = router;