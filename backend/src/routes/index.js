const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article_controller');
const categoryController = require('../controllers/category_controller');
const userController = require('../controllers/user_controller');

router.get('/items', articleController.getAllArticles);
router.get('/items/category/:categoryId', articleController.getArticlesByCategory);
router.get('/categories', categoryController.getAllCategories);
router.get('/category/:id', categoryController.isExistingCategory);
router.post('/user', userController.addUser);

module.exports = router;